"use-client";
import Link from "next/link";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
function getStageKey(stage, minute, penaltyScore) {
    switch (stage) {
        case "Not started":
        case "To be announced":
            return "NS";
        case "First half":
            return minute ? `${minute}'` : "1H";
        case "Half time":
            return "HT";
        case "Second half":
            return minute ? `${minute}'` : "2H";
        case "Finished":
            return "FT";
        case "Extra time":
            if (minute) {
                if (minute <= 105)
                    return `ET ${minute}'`; // first 15
                if (minute > 105 && minute < 120)
                    return `ET ${minute}'`; // second 15
                if (minute === 105)
                    return "ET HT"; // halftime break in ET
            }
            return "ET";
        case "Finished after extra time":
            return "AET";
        case "Penalties":
            return penaltyScore ? `PEN ${penaltyScore}` : "PEN";
        case "Finished after penalties":
            return penaltyScore ? `FT (pens ${penaltyScore})` : "FT (pens)";
        case "Suspended":
        case "Interrupted":
        case "Postponed":
        case "Cancelled":
        case "Abandoned":
        case "Awarded":
            return stage.toUpperCase();
        case "In progress":
            return minute ? `${minute}'` : "LIVE";
        case "Unknown":
        default:
            return "UNK";
    }
}
export const LeagueSeprater = ({ countryIcon, leagueName, countryName }) => {
    return <div className="flex px-2 mt-8- mt-2">
        <div className="flex items-center gap-2 leading-none">
            <img src={countryIcon} className="h-5 rounded- border-[1px]-"/>
            <div className="flex items-center gap-1">
                <p className="font-semibold text-base leading-none">{leagueName}</p>
                <p className="text-sm leading-none font-medium text-[#2c2c2c]">({countryName})</p>
            </div>
        </div>
    </div>;
};
const Score = ({ isFromFeed = false, id, homeTeam, awayTeam, stage, penaltyScore = undefined, minute }) => {
    return (<div className={`flex flex-col gap-2 w-full md:hidden ${true ? "px-2 mb-1 mt-3" : ""}`}>

            <Link href={`/football/match/${id}`} className="flex justify-between relative  bg-greyPrimary- border-[#fb4f4f]- border-[#666666] border- bg-greyThird- bg-[#676087] pl-2 py-2- rounded-xl cursor-pointer overflow-hidden- transition-all hover:bg-gray-200-">
                {isFromFeed && <div className="bg-primary-  bg-gradient-to-br- from-primary font-bold to-[#00DC00] border-[#666666] border- border-b-white- text-white- text-[#007600] drop-shadow-[0px_-2px_3px_rgba(0,0,0,0.2)]- w-12 h-6 text-sm flex items-center justify-center absolute top-[-26px] z-30 right-2 rounded-md">
                    LIVE
                </div>}

                <div className="flex justify-between rounded-r-xl text-[#444] rounded-l-sm pr-2 pl-1 py-2 bg-[#ececec] w-full">
                    <div className="flex  gap-4 items-center ">
                        <div className="flex flex-col gap-1 ">

                            <div className="flex items-center gap-2">
                                <img className="w-6" src={homeTeam.logo} alt=""/>
                                <p className="font-medium- text-[13px]- ">
                                    {homeTeam.name}
                                </p>
                            </div>



                            <div className="flex items-center gap-2">
                                <img className="w-6" src={awayTeam.logo} alt=""/>
                                <p className="font-medium- text-[13px]- ">
                                    {awayTeam.name}
                                </p>
                            </div>

                        </div>
                        <span className="font text-xs text-black- font-medium">{getStageKey(stage, minute, penaltyScore)}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <p className="font-medium ">{homeTeam.score}</p>
                            <p className="font-medium ">{awayTeam.score}</p>
                        </div>

                        <AiOutlineStar className="text-xl "/>
                    </div>
                </div>

            </Link>
        </div>);
};
export default Score;
//# sourceMappingURL=Score.jsx.map