import { getRedisClient } from "@/libs/redis";
import { updateMatchesCache } from "@/services/redis/updateMatches";
import { convertToUTC } from "@/utils/datetime_utills";
import { NextResponse } from "next/server";
// const getMatches = async (date: string, page: number = 1, limit: number = 20) => {
//     const redis = getRedisClient();
//     const key = `matches:${date}`;
//     const cachedMatches = await redis.get(key);
//     if (cachedMatches) {
//         const matches = JSON.parse(cachedMatches);
//         const start = (page - 1) * limit;
//         const end = start + limit;
//         return {
//             matches: matches.slice(start, end),
//             pagination: {
//                 total: matches.length,
//                 page,
//                 limit,
//                 totalPages: Math.ceil(matches.length / limit),
//             }
//         };
//     }
//     return null;
// };
// export const getMatches = async (date: string, page: number = 1, limit: number = 20) => {
//     const redis = getRedisClient();
//     const key = `matches:${date}`;
//     const cachedMatches = await redis.get(key);
//     if (!cachedMatches) return null;
//     const organizedMatches = JSON.parse(cachedMatches);
//     // Flatten all matches but keep a pointer to their country
//     const allMatches: { countryCode: string; match: any }[] = [];
//     for (const countryCode in organizedMatches) {
//         const country = organizedMatches[countryCode];
//         for (const match of country.matches) {
//             allMatches.push({ countryCode, match });
//         }
//     }
//     const total = allMatches.length;
//     const start = (page - 1) * limit;
//     const end = start + limit;
//     // Slice the flat matches
//     const paginated = allMatches.slice(start, end);
//     // Rebuild the grouped structure but only with paginated matches
//     const result: { [key: string]: any } = {};
//     for (const { countryCode, match } of paginated) {
//         if (!result[countryCode]) {
//             result[countryCode] = {
//                 countryName: organizedMatches[countryCode].countryName,
//                 countryCode: organizedMatches[countryCode].countryCode,
//                 countryLogo: organizedMatches[countryCode].countryLogo,
//                 matches: [],
//             };
//         }
//         result[countryCode].matches.push(match);
//     }
//     return {
//         matches: result,
//         pagination: {
//             total,
//             page,
//             limit,
//             totalPages: Math.ceil(total / limit),
//         },
//     };
// };
const PRIORITY_LEAGUES = [8, 302, 384, 567]; // customize as needed
export const getMatches = async (date, page = 1, limit = 20) => {
    const redis = getRedisClient();
    const key = `matches:${date}`;
    const cachedMatches = await redis.get(key);
    if (!cachedMatches)
        return null;
    // cachedMatches structure expected:
    // {
    //   [countryCode]: {
    //     countryName, countryCode, countryLogo,
    //     leagues: [ { leagueId, leagueName, leagueLogo, season, matches: [...] }, ... ]
    //   },
    //   ...
    // }
    const organizedMatches = JSON.parse(cachedMatches);
    const flat = [];
    for (const countryCode of Object.keys(organizedMatches)) {
        const country = organizedMatches[countryCode];
        const leagues = country.leagues || [];
        for (const league of leagues) {
            const leagueId = league.leagueId ?? league.id ?? league.id;
            const isPriority = PRIORITY_LEAGUES.includes(Number(leagueId));
            // league.matches is expected array
            for (const match of league.matches || []) {
                flat.push({
                    countryCode: country.countryCode ?? countryCode,
                    countryName: country.countryName ?? country.name ?? '',
                    countryLogo: country.countryLogo ?? country.logo ?? null,
                    leagueId,
                    leagueName: league.leagueName ?? league.name ?? '',
                    leagueLogo: league.leagueLogo ?? league.logo ?? null,
                    match,
                    leaguePriority: isPriority,
                });
            }
        }
    }
    // 2) Sort flat list: priority leagues first, then by date ascending (customize if needed)
    flat.sort((a, b) => {
        if (a.leaguePriority && !b.leaguePriority)
            return -1;
        if (!a.leaguePriority && b.leaguePriority)
            return 1;
        // fallback: sort by date (older -> earlier)
        const da = new Date(a.match.date).getTime() || 0;
        const db = new Date(b.match.date).getTime() || 0;
        return da - db;
    });
    // 3) Pagination
    const total = flat.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const currentPage = Math.min(Math.max(1, page), totalPages);
    const start = (currentPage - 1) * limit;
    const end = start + limit;
    const pageSlice = flat.slice(start, end);
    // 4) Rebuild grouped structure: country -> leagues[] -> matches[]
    // We'll build a map countryCode -> { countryName, countryCode, countryLogo, leagues: { [leagueId]: { ... } } }
    const grouped = {};
    for (const entry of pageSlice) {
        const cc = entry.countryCode;
        const lid = String(entry.leagueId);
        if (!grouped[cc]) {
            grouped[cc] = {
                countryName: entry.countryName,
                countryCode: entry.countryCode,
                countryLogo: entry.countryLogo,
                leagues: {},
            };
        }
        if (!grouped[cc].leagues[lid]) {
            grouped[cc].leagues[lid] = {
                leagueId: entry.leagueId,
                leagueName: entry.leagueName,
                leagueLogo: entry.leagueLogo,
                matches: [],
            };
        }
        // Push match into its league
        grouped[cc].leagues[lid].matches.push(entry.match);
    }
    // Convert leagues map -> array and keep priority leagues first per country
    const result = {};
    for (const countryCode of Object.keys(grouped)) {
        const country = grouped[countryCode];
        const leaguesArray = Object.values(country.leagues);
        leaguesArray.sort((a, b) => {
            const aPriority = PRIORITY_LEAGUES.includes(Number(a.leagueId));
            const bPriority = PRIORITY_LEAGUES.includes(Number(b.leagueId));
            if (aPriority && !bPriority)
                return -1;
            if (!aPriority && bPriority)
                return 1;
            return a.leagueName.localeCompare(b.leagueName);
        });
        result[countryCode] = {
            countryName: country.countryName,
            countryCode: country.countryCode,
            countryLogo: country.countryLogo,
            leagues: leaguesArray,
        };
    }
    return {
        matches: result,
        pagination: {
            total,
            page: currentPage,
            limit,
            totalPages,
        },
    };
};
export const GET = async (req, { params }) => {
    const { date } = await params;
    const userTimezone = req.nextUrl.searchParams.get("timezone");
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "20");
    const parsedDate = convertToUTC(date, userTimezone ?? "");
    if (!parsedDate) {
        return NextResponse.json({
            status: "error",
            msg: "Invalid date/timezone format"
        }, { status: 400 });
    }
    let cachedMatches = await getMatches(parsedDate, page, limit);
    if (!cachedMatches) {
        await updateMatchesCache(parsedDate);
        cachedMatches = await getMatches(parsedDate, page, limit);
    }
    await new Promise((resolve) => setTimeout(resolve, 3000));
    if (cachedMatches) {
        return NextResponse.json({
            status: "ok",
            ...cachedMatches
        });
    }
    return NextResponse.json({
        status: "ok",
        matches: []
    });
};
//# sourceMappingURL=route.js.map