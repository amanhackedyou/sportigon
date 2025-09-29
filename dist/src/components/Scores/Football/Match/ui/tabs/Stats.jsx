"use client";
import { useFootballMatch } from '@/context/Sports/Football/MatchContext';
import React, { useState } from 'react';
const StatsTab = ({ isActive }) => {
    const [currrentTab, setCurrrentTab] = useState("MATCH");
    const matchContext = useFootballMatch();
    if (!isActive)
        return <></>;
    return (<div className="w-full pb-2 h-full flex flex-col gap-3  overflow-y-auto py-2- mt-1- px-1- scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-100 scrollbar-corner-gray-200">
            <div className="flex items-center gap-5- justify-between bg-[#e5e5e5] px-3 py-2 rounded-">
                <button onClick={(e) => setCurrrentTab("MATCH")} className={`text-sm font-medium  px-2 py-1 rounded-md ${currrentTab === "MATCH" ? "bg-white" : ""}`}>
                    MATCH
                </button>
                <button onClick={(e) => setCurrrentTab("1ST HALF")} className={`text-sm font-medium  px-2 py-1 rounded-md ${currrentTab === "1ST HALF" ? "bg-white" : ""}`}>
                    1ST HALF
                </button>
                <button onClick={(e) => setCurrrentTab("2ST HALF")} className={`text-sm font-medium  px-2 py-1 rounded-md ${currrentTab === "2ST HALF" ? "bg-white" : ""}`}>
                    2ND HALF
                </button>
            </div>

            {matchContext.match?.statistics && matchContext.match.statistics.length > 0 ? matchContext.match.statistics[0].statistics.map((homeTeam, index) => {
            //@ts-ignore
            const awayTeam = matchContext.match.statistics[1].statistics[index];
            const homeTeamValue = typeof homeTeam.value === "string" ? parseInt(homeTeam.value) : homeTeam.value;
            const awayTeamValue = typeof awayTeam?.value === "string" ? parseInt(awayTeam.value) : awayTeam?.value;
            return <Line key={index} title={homeTeam.displayName} leftStatePerc={homeTeamValue && awayTeamValue ? Math.round((homeTeamValue / (homeTeamValue + awayTeamValue)) * 100) : 0} rightStatePerc={homeTeamValue && awayTeamValue ? Math.round((awayTeamValue / (homeTeamValue + awayTeamValue)) * 100) : 0} leftText={homeTeam.value.toString() || "0"} rightText={awayTeam?.value.toString() || "0"}/>;
        }) : <div className='text-center text-gray-500'>No statistics available for this match.</div>}

            {/* <Line
            title="Ball Possession"
            leftStatePerc="61"
            rightStatePerc="39"
            leftText="61%"
            rightText="39%"
        />
        <Line
            title="Goal Attempts"
            leftStatePerc="70"
            rightStatePerc="30"
            leftText="30"
            rightText="12"
        />
        <Line
            title="Shots on Goal"
            leftStatePerc="70"
            rightStatePerc="30"
            leftText="30"
            rightText="12"
        />
        <Line
            title="Shots off Goal"
            leftStatePerc="71"
            rightStatePerc="29"
            leftText="8"
            rightText="1"
        />
        <Line
            title="Blocked Shots"
            leftStatePerc="50"
            rightStatePerc="50"
            leftText="6"
            rightText="6"
        />
        <Line
            title="Free Kicks"
            leftStatePerc="66"
            rightStatePerc="34"
            leftText="10"
            rightText="5"
        />
        <Line
            title="Corner Kicks"
            leftStatePerc="84"
            rightStatePerc="16"
            leftText="11"
            rightText="2"
        />
        <Line
            title="Offsides"
            leftStatePerc="0"
            rightStatePerc="100"
            leftText="0"
            rightText="1"
        />
        <Line
            title="Throw-ins"
            leftStatePerc="78"
            rightStatePerc="22"
            leftText="18"
            rightText="5"
        />
        <Line
            title="Goalkeeper Saves"
            leftStatePerc="14"
            rightStatePerc="86"
            leftText="1"
            rightText="6"
        />
        <Line
            title="Fouls"
            leftStatePerc="14"
            rightStatePerc="86"
            leftText="1"
            rightText="6"
        />
        <Line
            title="Yellow Cards"
            leftStatePerc="66"
            rightStatePerc="34"
            leftText="2"
            rightText="1"
        />
        <Line
            title="Total Passes"
            leftStatePerc="60"
            rightStatePerc="40"
            leftText="582"
            rightText="378"
        />
        <Line
            title="Completed Passes"
            leftStatePerc="62"
            rightStatePerc="38"
            leftText="500"
            rightText="298"
        />
        <Line
            title="Tackles"
            leftStatePerc="54"
            rightStatePerc="46"
            leftText="20"
            rightText="17"
        />
        <Line
            title="Attacks"
            leftStatePerc="55"
            rightStatePerc="45"
            leftText="122"
            rightText="97"
        />
        <Line
            title="Dangerous Attacks"
            leftStatePerc="62"
            rightStatePerc="38"
            leftText="77"
            rightText="46"
        />
        <Line
            title="Clearances Completed"
            leftStatePerc="44"
            rightStatePerc="56"
            leftText="15"
            rightText="19"
        /> */}
        </div>);
};
const Line = ({ title, rightStatePerc, leftStatePerc, rightText, leftText, }) => {
    // const GREEN_COLOR = "bg-[#007600]";
    // const RED_COLOR = "bg-[#ff4500]";
    const GREEN_COLOR = "bg-[#00C49A]";
    const RED_COLOR = "bg-[#FF6E6E]";
    return (<div className="flex flex-col px-2 gap-[0.15rem]">
            <div className="flex justify-between items-center">
                <span className="text-black md:text-gray-800 font-medium text-xs">
                    {leftText}
                </span>
                <span className="text-black md:text-gray-800 font-medium text-xs">
                    {title}
                </span>
                <span className="text-black md:text-gray-800 font-medium text-xs">
                    {rightText}
                </span>
            </div>

            <div className="flex items-center justify-between gap-[0.10rem]">
                <div className="w-full h-2 bg-[#e5e5e5] rounded flex justify-end">
                    <div style={{ width: leftStatePerc + "%" }} className={`h-full ${leftStatePerc > rightStatePerc ? RED_COLOR : GREEN_COLOR} rounded-sm`}></div>
                </div>
                <div className="w-full h-2 bg-[#e5e5e5] rounded-sm">
                    <div style={{ width: rightStatePerc + "%" }} className={`h-full ${leftStatePerc < rightStatePerc ? RED_COLOR : GREEN_COLOR} rounded-sm`}></div>
                </div>
            </div>
        </div>);
};
export default StatsTab;
//# sourceMappingURL=Stats.jsx.map