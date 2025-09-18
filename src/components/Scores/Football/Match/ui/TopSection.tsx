"use client";
import { useFootballMatch } from "@/context/Sports/Football/MatchContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

const TopSection = ({ tab, setTab }: { tab: string, setTab: any }) => {
    const router = useRouter();
    const matchContext = useFootballMatch();

    return (
        <div
            className=" md:shadow-[rgba(0,0,0,0.12)0px_2px_8px_0px,rgba(0,0,0,0.16)0px_0px_2px_0px] flex flex-col min-h-60 justify-between relative md:mt-2rounded-lg"
        >


            <div className="relative flex flex-col gap-2 pt-2 flex-1">
                {/* Overlay */}
                <div className="absolute overflow-hidden w-full h-full top-0 left-0 -z-10">
                    <div className="w-full h-full bg-[#00000071] absolute left-0 top-0"></div>
                    <img className="w-full h-full object-center" src="/images/matches/football_bg.jpg" alt="Football picture" />
                </div>

                <div className="flex items-center text-white justify-center md:justify-normal relative mt-1">
                    <button onClick={e => router.back()} className="bg-[#e5e5e5]- p-1 absolute left-3  rounded-full">
                        <GoArrowLeft className="text-2xl md:hidden  text-[#4A4A4A]- text-white mb-[2px]-" />
                    </button>
                    <p className="font-medium- md:font-bold md:ml-5">{matchContext.match?.league.name}</p>
                </div>

                <LiveMatchTopBar />
            </div>


            <div className="hidden mb-2 md:flex justify-between items-center mt-5- mx-10 border rounded-md">
                <button
                    onClick={() => setTab("summary")}
                    className={`${tab == "summary"
                        ? "text-[#192036] text-lg bg-gray-200"
                        : "text-[#777777] text-base"
                        } font-medium w-full px-3 py-1 leading-none  transition-all`}
                >
                    Summary
                </button>

                <button
                    onClick={() => setTab("stats")}
                    className={`${tab == "stats"
                        ? "text-[#192036] text-lg bg-gray-200"
                        : "text-[#777777] text-base"
                        } font-medium w-full px-3 py-1 leading-none  transition-all`}
                >
                    Stats
                </button>

                <button
                    onClick={() => setTab("chat")}
                    className={`${tab == "chat"
                        ? "text-[#192036] text-lg bg-gray-200"
                        : "text-[#777777] text-base"
                        } font-medium w-full px-3 py-1 leading-none  transition-all`}
                >
                    Chat
                </button>

                <button
                    onClick={() => setTab("line up")}
                    className={`${tab == "line up"
                        ? "text-[#192036] text-lg bg-gray-200"
                        : "text-[#777777] text-base"
                        } font-medium whitespace-nowrap w-full px-3 py-1 leading-none  transition-all`}
                >
                    Line up
                </button>

                <button
                    onClick={() => setTab("standings")}
                    className={`${tab == "standings"
                        ? "text-[#192036] text-lg bg-gray-200"
                        : "text-[#777777] text-base"
                        } font-medium w-full px-3 py-1 leading-none  transition-all`}
                >
                    Standings
                </button>
            </div>

            <TabView tab={tab} setTab={setTab} />
        </div>
    );
};

const LiveMatchTopBar = () => {
    const matchContext = useFootballMatch();

    const getTeamView = (name: string, img: string) => {
        return (
            <div className="flex flex-col items-center h-full w-[4rem] md:w-20">
                <div className="h-20 aspect-square border- rounded-md p-3 flex justify-center items-center">
                    <img src={img} className="h-full" />
                </div>
                <p className="md:font-medium text-sm md:text-base text-black- text-white mt-2 text-center leading-none">
                    {name}
                </p>
            </div>
        );
    };

    return (
        // <div className="w-full flex flex-col justify-between items-center- gap-2 h-full ">

        <div className="flex justify-between items-center px-10 md:px-10">
            {getTeamView(
                matchContext.match?.homeTeam.name || "Unknown",
                matchContext.match?.homeTeam.logo || "https://static.flashscore.com/res/image/data/AZHdTBf5-GEKimEim.png"
            )}

            <div className="flex flex-col items-center justify-center mt-auto- gap-1">
                <p className="font-normal text-center text-3xl text-white md:font-bold font-number">
                    {!(matchContext.match?.state.score.penalties) && matchContext.match?.state.score.current}
                    {(matchContext.match?.state.score.penalties) && <span>{matchContext.match?.state.score.penalties}<br /><span className="text-sm">After penalty</span></span>}
                </p>
                <p className="md:font-medium text-sm md:text-2xl text-white">{matchContext.match?.state.clock}&#39;</p>
            </div>

            {getTeamView(
                matchContext.match?.awayTeam.name || "Unknown",
                matchContext.match?.awayTeam.logo || "https://static.flashscore.com/res/image/data/AZHdTBf5-GEKimEim.png"
            )}
        </div>

        // {/* </div> */}
    );
};

const TabView = ({ tab, setTab }: { tab: string, setTab: any }) => {
    const TABS = ["Summary", "Stats", "Chat", "Line up", "Standings"];

    const TabItem = ({ tabName }: { tabName: string }) => {
        return <button
            onClick={() => setTab(tabName)}
            className={`font-medium w-fit py-1- ${tab == tabName ? "bg-[#e5e5e5]" : ""} leading-none flex flex-col-reverse gap-[0.20rem]-`}
        >
            <span
                className={`${tab == tabName ? "text-[#192036] scale-110" : "scale-100 text-[#777777]"
                    } transition-all duration-200 leading-none my-2 px-2 whitespace-nowrap`}
            >
                {tabName}
            </span>
            <div
                className={`h-1 bg-[#007600] w-[100%]- translate-y-[-1px] rounded-full w-full transition-all ${tab === tabName ? "opacity-100" : "opacity-0"
                    }`}
            ></div>
        </button>
    }

    return <div className="flex md:hidden overflow-y-hidden px-1 border-transparent outline-transparent my-0 overflow-x-auto justify-between scrollbar-none items-center mt-5- border-t- pt-1- px-4- rounded-md">
        {
            TABS.map(tabName => {
                return <TabItem key={tabName} tabName={tabName} />
            })
        }
    </div>
}

export default TopSection;
