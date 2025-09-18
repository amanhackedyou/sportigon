"use client"

import React, { lazy, useEffect, useState } from 'react'
import TopSection from './ui/TopSection';
import { IFootballMatch } from '@/types/football/match';
import { useFootballMatch } from '@/context/Sports/Football/MatchContext';
import LoadingPage from '@/components/LoadingPage';
import SummaryTab from './ui/tabs/Summary/Summary';
import StatsTab from './ui/tabs/Stats';
import ChatTab from './ui/tabs/Chat';
import LineUpTab from './ui/tabs/LineUp';
import StandingsTab from './ui/tabs/Standings';



// const SummaryTab = lazy(() => import('./ui/tabs/Summary'));
// const StatsTab = lazy(() => import('./ui/tabs/Stats'));
// const ChatTab = lazy(() => import('./ui/tabs/Chat'));
// const LineUpTab = lazy(() => import('./ui/tabs/LineUp'));
// const StandingsTab = lazy(() => import('./ui/tabs/Standings'));


const MatchPage = ({ matchStr }: { matchStr: string }) => {
    const [currentTab, setCurrentTab] = useState("Summary");
    const [isLoading, setIsLoading] = useState(true);
    const matchContext = useFootballMatch();

    useEffect(() => {
        const match: IFootballMatch = JSON.parse(matchStr);
        matchContext.setMatch(match);
        setIsLoading(false);
        console.log(match);
    }, []);




    return (
        <>
            {isLoading && <LoadingPage />}

            <div
                className={`flex flex-col w-full h-[-webkit-fill-available]- h-screen md:h-[calc(100vh-4rem)] `}
            >
                <TopSection tab={currentTab} setTab={setCurrentTab} />
                {/* <div className="w-full border-t"></div> */}

                {/* {currentTab === "Summary" ? (
                    <SummaryTab />
                ) : currentTab === "Stats" ? (
                    <StatsTab />
                ) : currentTab === "Chat" ? (
                    <ChatTab />
                ) : currentTab === "Line up" ? (
                    <LineUpTab />
                ) : currentTab === "Standings" ? (
                    <StandingsTab />
                ) : (
                    ""
                )} */}

                <div className='flex-1 overflow-hidden'>
                    <SummaryTab isActive={currentTab === "Summary"} />
                    <StatsTab isActive={currentTab === "Stats"} />
                    <ChatTab isActive={currentTab === "Chat"} />
                    <LineUpTab isActive={currentTab === "Line up"} />
                    <StandingsTab isActive={currentTab === "Standings"} />
                </div>


            </div>
        </>
    );
}

export default MatchPage


