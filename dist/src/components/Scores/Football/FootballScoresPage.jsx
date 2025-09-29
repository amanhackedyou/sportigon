"use client";
import SeconderyNavBar from '@/components/UI/SeconderyNavBar';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScheduleSection } from './ScheduleSection';
import Score, { LeagueSeprater } from './Score';
import { HttpManager } from '@/libs/http_manager';
import { useModal } from '@/context/ModalContext';
import { useRouter } from 'next/navigation';
import LoadingIndicator from '@/components/UI/LoadingIndicator';
const fetchMatches = async (date, timezone, page, limit = 50) => {
    return HttpManager.get(`/api/sports/football/matches/${date}?timezone=${timezone}&page=${page}&limit=${limit}`);
};
function parseScore(score) {
    if (!score) {
        return { homeTeamScore: "-", awayTeamScore: "-" };
    }
    const parts = score.split("-").map(s => s.trim());
    if (parts.length !== 2) {
        return { homeTeamScore: "-", awayTeamScore: "-" };
    }
    return {
        homeTeamScore: parts[0] || "-",
        awayTeamScore: parts[1] || "-"
    };
}
const FootballScoresPage = () => {
    const [matches, setMatches] = useState({});
    const [initialLoading, setInitialLoading] = useState(true); // first page
    const [pageLoading, setPageLoading] = useState(false); // subsequent pages
    const [currentSelectedDate, setCurrentSelectedDate] = useState(new Intl.DateTimeFormat("en-CA").format(new Date()));
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const { showModal } = useModal();
    const router = useRouter();
    // keep a ref to AbortController for cancellation
    const abortRef = useRef(null);
    // helper to merge incoming matches structure into existing
    const mergeMatches = useCallback((prev, incoming) => {
        // deep-merge countries -> leagues -> matches; avoid duplicate match ids
        const out = { ...prev };
        for (const countryCode of Object.keys(incoming)) {
            const incomingCountry = incoming[countryCode];
            if (!out[countryCode]) {
                // shallow clone to avoid references
                out[countryCode] = {
                    countryName: incomingCountry.countryName,
                    countryCode: incomingCountry.countryCode,
                    countryLogo: incomingCountry.countryLogo,
                    leagues: incomingCountry.leagues.map((l) => ({
                        leagueId: l.leagueId,
                        leagueName: l.leagueName,
                        leagueLogo: l.leagueLogo,
                        matches: [...l.matches],
                    })),
                };
                continue;
            }
            // country exists -> merge leagues
            const existingCountry = out[countryCode];
            const leaguesMap = {};
            for (const l of existingCountry.leagues) {
                leaguesMap[String(l.leagueId)] = {
                    leagueId: l.leagueId,
                    leagueName: l.leagueName,
                    leagueLogo: l.leagueLogo,
                    matches: [...l.matches],
                };
            }
            for (const incomingLeague of incomingCountry.leagues) {
                const lid = String(incomingLeague.leagueId);
                if (!leaguesMap[lid]) {
                    leaguesMap[lid] = {
                        leagueId: incomingLeague.leagueId,
                        leagueName: incomingLeague.leagueName,
                        leagueLogo: incomingLeague.leagueLogo,
                        matches: [...incomingLeague.matches],
                    };
                }
                else {
                    // merge matches while avoiding duplicates
                    const existingMatches = leaguesMap[lid].matches;
                    const existingIds = new Set(existingMatches.map((m) => m.id));
                    for (const m of incomingLeague.matches) {
                        if (!existingIds.has(m.id)) {
                            existingMatches.push(m);
                            existingIds.add(m.id);
                        }
                    }
                    // optional sort by kickoff date so newest/earliest consistent:
                    existingMatches.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                }
            }
            // convert leaguesMap back to array and preserve priority ordering if needed
            existingCountry.leagues = Object.values(leaguesMap);
            out[countryCode] = {
                ...existingCountry,
                leagues: existingCountry.leagues,
            };
        }
        return out;
    }, []);
    // central loader – accepts page override
    const loadMatches = useCallback(async (pageOverride) => {
        const page = pageOverride ?? currentPage;
        // Cancel previous in-flight
        if (abortRef.current) {
            abortRef.current.abort();
        }
        const controller = new AbortController();
        abortRef.current = controller;
        // determine whether this is initial page load or paginated
        const isInitial = page === 1;
        try {
            if (isInitial) {
                setInitialLoading(true);
            }
            else {
                setPageLoading(true);
            }
            const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Etc/UTC";
            // const response = await fetchMatches(currentSelectedDate, userTimezone, page, {
            //     signal: controller.signal,
            // });
            const response = await fetchMatches(currentSelectedDate, userTimezone, page);
            if (!response || response.status !== "ok") {
                showModal({
                    title: "Error",
                    description: response?.msg || "Failed to load matches, please try again.",
                    type: "error",
                });
                return;
            }
            // response.matches expected in the grouped country->leagues[] shape
            const incoming = response.matches;
            setMatches((prev) => (page === 1 ? incoming : mergeMatches(prev, incoming)));
            setHasMore(response.pagination.page < response.pagination.totalPages);
        }
        catch (err) {
            if (err?.name === "AbortError") {
                // ignore aborted
            }
            else {
                console.error("Failed to load matches:", err);
                showModal({
                    title: "Error",
                    description: "Failed to load matches, please try again.",
                    type: "error",
                });
            }
        }
        finally {
            if (isInitial) {
                setInitialLoading(false);
            }
            else {
                setPageLoading(false);
            }
        }
    }, [currentPage, currentSelectedDate, mergeMatches, showModal]);
    // when selected date changes -> reset page and load page 1
    useEffect(() => {
        setCurrentPage(1);
        setMatches({});
        setHasMore(true);
        loadMatches(1);
        // cleanup on unmount
        return () => {
            abortRef.current?.abort();
        };
    }, [currentSelectedDate]); // eslint-disable-line react-hooks/exhaustive-deps
    // when currentPage changes (user scrolled) -> load that page
    useEffect(() => {
        if (currentPage === 1)
            return;
        loadMatches(currentPage);
    }, [currentPage, loadMatches]);
    // IntersectionObserver sentinel for infinite scroll
    const sentinelRef = useRef(null);
    useEffect(() => {
        if (!sentinelRef.current)
            return;
        const sentinel = sentinelRef.current;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !pageLoading && !initialLoading && hasMore) {
                    // safe functional update
                    setCurrentPage((p) => p + 1);
                }
            });
        }, {
            root: null,
            rootMargin: "200px", // prefetch a bit earlier
            threshold: 0.1,
        });
        io.observe(sentinel);
        return () => {
            io.disconnect();
        };
    }, [pageLoading, initialLoading, hasMore]);
    // render helpers
    const renderCountries = () => {
        if (!matches || Object.keys(matches).length === 0) {
            if (initialLoading) {
                return <div className="py-6"><LoadingIndicator /></div>;
            }
            return <div className="py-6 text-center text-muted">No matches for this date.</div>;
        }
        return Object.keys(matches).map((countryCode) => {
            const country = matches[countryCode];
            return (<div key={countryCode} className="mb-6">
                    {country.leagues.map((league) => (<div key={String(league.leagueId)} className="mb-4">
                            <LeagueSeprater countryIcon={league.leagueLogo || country.countryLogo || ""} leagueName={league.leagueName} countryName={country.countryName}/>

                            {league.matches.map((match) => {
                        const score = parseScore(match.score?.current);
                        return (<div key={match.id} className="mb-2">
                                        <Score id={match.id} stage={match.state || match.round} minute={match.clock} penaltyScore={match.score?.penalties} homeTeam={{
                                name: match.homeTeam.name,
                                logo: match.homeTeam.logo,
                                score: score.homeTeamScore,
                            }} awayTeam={{
                                name: match.awayTeam.name,
                                logo: match.awayTeam.logo,
                                score: score.awayTeamScore,
                            }}/>
                                    </div>);
                    })}
                        </div>))}
                </div>);
        });
    };
    return (<div className="hFull overflow-hidden flex flex-col">
            <SeconderyNavBar title="Scores"/>
            <ScheduleSection currentDate={currentSelectedDate}/>

            {/* content area: scrollable */}
            <section className="w-full flex-1 h-full overflow-auto px-2">
                {/* top-level initial loader overlay */}
                {/* {initialLoading && (
            <div className="absolute inset-0 z-20 flex items-start justify-center pointer-events-none mt-20">
                <LoadingIndicator />
            </div>
        )} */}

                <div className="pt-4">
                    {renderCountries()}
                </div>

                {/* page loader / bottom sentinel */}
                <div className="flex justify-center py-4">
                    {(pageLoading && !initialLoading) && <LoadingIndicator />}
                </div>

                {/* sentinel element for IntersectionObserver */}
                <div ref={sentinelRef} style={{ height: 1 }}/>

                {/* If there is still more, keep showing a small spacer */}
                {/* {hasMore && !pageLoading && !initialLoading && (
            <div className="py-6 text-center text-muted">Scroll to load more</div>
        )} */}
            </section>
        </div>);
};
export default FootballScoresPage;
//# sourceMappingURL=FootballScoresPage.jsx.map