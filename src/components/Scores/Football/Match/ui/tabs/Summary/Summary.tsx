import { useFootballMatch } from '@/context/Sports/Football/MatchContext';
import { EventItem } from '@/types/football/match';
import React, { useEffect } from 'react'
import EventRow from './Goal';

// const SummaryTab = ({ isActive }: { isActive: boolean }) => {

//     if (!isActive) return <></>;

//     const matchContext = useFootballMatch();



//     useEffect(() => {
//         const events = matchContext.match?.events || [];
//         const homeTeamId = matchContext.match?.homeTeam.id;
//         const awayTeamId = matchContext.match?.awayTeam.id;

//         // copy and normalize events
//         const normalized = React.useMemo(() => {
//             return events
//                 .map((e) => ({ ...e, timeNum: parseTimeToNumber(e.time) }))
//                 .sort((a, b) => a.timeNum - b.timeNum);
//         }, [matchContext.match?.events]);


//         // group by half
//         const groups = React.useMemo(() => {
//             const map = new Map<string, { title: string; order: number; items: EventItem[] & { timeNum?: number }[] }>();
//             for (const e of normalized) {
//                 const label = getHalfLabel((e as any).timeNum);
//                 const key = label.key;
//                 if (!map.has(key)) map.set(key, { title: label.title, order: label.order, items: [] });
//                 (map.get(key)!.items as any).push(e as any);
//             }
//             // turn into sorted array
//             return [...map.values()].sort((a, b) => a.order - b.order);
//         }, [normalized]);
//     }, [])



//     return (
//         <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
//             <div className="px-4 py-3 border-b">
//                 <h3 className="text-lg font-semibold">Summary</h3>
//             </div>


//             <div className="divide-y">
//                 {groups.length === 0 && (
//                     <div className="p-6 text-center text-sm text-gray-500">No events yet</div>
//                 )}


//                 {groups.map((g) => (
//                     <div key={g.title} className="p-3">
//                         <div className="flex items-center justify-between mb-2">
//                             <div className="text-xs font-semibold uppercase text-gray-600">{g.title}</div>
//                             <div className="text-xs text-gray-500">{g.items.length} events</div>
//                         </div>


//                         <div className="space-y-2">
//                             {g.items.map((ev, idx) => (
//                                 <EventRow key={`${g.title}-${idx}-${ev.time}`} event={ev} homeTeamId={homeTeamId} awayTeamId={awayTeamId} />
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


// Event row component



const SummaryTab: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    if (!isActive) return null;

    // Hook must be at top level
    const matchContext = useFootballMatch();

    // pull events (defensive)
    const events = React.useMemo(() => matchContext?.match?.events ?? [], [matchContext?.match?.events]);

    // team ids for EventRow
    const homeTeamId = matchContext?.match?.homeTeam?.id;
    const awayTeamId = matchContext?.match?.awayTeam?.id;

    // normalize & sort
    const normalized = React.useMemo(() => {
        return (events ?? [])
            .map((e) => ({ ...e, timeNum: parseTimeToNumber(e.time) }))
            .sort((a, b) => (a.timeNum ?? 0) - (b.timeNum ?? 0));
    }, [events]);

    // group into halves
    const groups = React.useMemo(() => {
        const map = new Map<string, { title: string; order: number; items: (typeof normalized)[number][] }>();

        for (const e of normalized) {
            const label = getHalfLabel(e.timeNum ?? 0);
            const key = label.key;
            if (!map.has(key)) {
                map.set(key, { title: label.title, order: label.order, items: [] });
            }
            map.get(key)!.items.push(e);
        }

        // Keep order consistent
        return Array.from(map.values()).sort((a, b) => a.order - b.order);
    }, [normalized]);

    return (
        <div className="w-full max-w-3xl- mx-auto bg-white rounded-2xl shadow-sm overflow-y-auto h-full">
            <div className="px-4 py-3 border-b">
                <h3 className="text-lg font-semibold">Summary</h3>
            </div>

            <div className="divide-y-">
                {groups.length === 0 && <div className="p-6 text-center text-sm text-gray-500">No events yet</div>}

                {groups.map((g) => (
                    <div key={g.title} className="p-3">
                        {/* <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold uppercase text-gray-600">{g.title}</div>
                            <div className="text-xs text-gray-500">{g.items.length} events</div>
                        </div> */}

                        <Divider status={g.title} ltext={`${g.items.length} events`} />

                        <div className="space-y-2">
                            {/* {g.items.map((ev, idx) => (
                                <EventRow key={`${g.title}-${idx}-${ev.time ?? idx}`} event={ev} homeTeamId={homeTeamId} awayTeamId={awayTeamId} />
                            ))} */}

                            {g.items.map((ev, idx) => (
                                <EventRow key={idx} event={ev} awayTeamId={awayTeamId || 0} homeTeamId={awayTeamId || 1} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const Divider = ({ status, ltext, isRounded = true }: { status: string, ltext: string, isRounded?: boolean }) => {
    return (
        <div className={`flex py-1 justify-between px-3 bg-[#e5e5e5] ${isRounded ? 'rounded' : ''} `}>
            <p className="text-xs uppercase font-medium">{status}</p>
            <p className="text-xs uppercase font-medium">{ltext}</p>
        </div>
    );
};


export default SummaryTab;


// Helpers ------------------------------------------------
function parseTimeToNumber(t: string): number {
    // parse "45+2" => 47, "90+3" => 93, "31" => 31
    if (!t) return 0;
    const plusIndex = t.indexOf("+");
    if (plusIndex === -1) return Number(t) || 0;
    const base = Number(t.slice(0, plusIndex)) || 0;
    const extra = Number(t.slice(plusIndex + 1)) || 0;
    return base + extra;
}


function getHalfLabel(timeNum: number) {
    // returns a string label and ordering index
    // normal halves: 0-45 -> 1st Half, 46-90 -> 2nd Half
    // extra: 91-105 -> 1st Half Extra, 106-120 -> 2nd Half Extra
    if (timeNum <= 45) return { key: "first", title: "1st Half", order: 1 };
    if (timeNum <= 90) return { key: "second", title: "2nd Half", order: 2 };
    if (timeNum <= 105) return { key: "extra1", title: "1st Half (Extra)", order: 3 };
    return { key: "extra2", title: "2nd Half (Extra)", order: 4 };
}


function iconForEvent(type: string) {
    const t = type.toLowerCase();
    if (t.includes("goal")) return "⚽";
    if (t.includes("yellow")) return "🟨";
    if (t.includes("red")) return "🟥";
    if (t.includes("substitution")) return "🔁";
    if (t.includes("penalty")) return "🎯";
    if (t.includes("own")) return "⭕";
    return "•";
}


function formatTimeLabel(raw: string) {
    // keep the original string if it contains +, else append '"' optionally
    return raw.includes("+") ? raw + '"' : raw + '"';
}