import React from 'react';
import { IoMdFootball } from 'react-icons/io';
const EventRow = ({ event, homeTeamId, awayTeamId }) => {
    return (<div>Goal</div>);
};
const Goal = ({ team, isSelfGloal = false, time = "", playerName, teamMateName = "" }) => {
    if (isSelfGloal) {
        team = team === "a" ? "b" : "a";
    }
    return <div className={`flex gap-3 px-3 mt-2- mb-5 items-center ${team === "b" || isSelfGloal ? "flex-row-reverse" : ""}`}>
        <span className="text-xs uppercase font-medium text-[#777]">{time}&#39;</span>

        {/* <div className="flex gap-3 px-3 items-center"> */}
        <div className="flex gap-1 items-center border py-1 rounded-md pr-1 pl-[0.10rem] py-[0.15rem]- md:py-1">
            <IoMdFootball className={`text-sm md:text-lg ${isSelfGloal ? "text-red-600" : "text-black"}`}/>
            <p className="text-sm md:text-sm font-medium leading-none md:font-semibold">
                {/* 1 - 0 */}
                1 - {!isSelfGloal ? "0" : "1"}
            </p>
        </div>

        <div className={`flex gap-1 items-center ${team === "b" || isSelfGloal ? "flex-row-reverse" : ""}`}>
            <p className="text-sm md:text-sm leading-none font-medium md:font-semibold">
                {playerName}
            </p>
            <p className="text-sm md:text-sm leading-none md:font-medium text-[#777]">
                {/* (Raphinha) */}
                ({isSelfGloal ? "Own goal" : <span className="inline-flex items-center gap-1">{teamMateName}<img className="w-5 aspect-square" src="/icons/basic/assist.png"/></span>})
            </p>
            {/* </div> */}
        </div>

    </div>;
};
export default EventRow;
//# sourceMappingURL=Goal.jsx.map