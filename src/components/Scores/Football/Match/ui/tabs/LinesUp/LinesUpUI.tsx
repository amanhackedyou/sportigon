
import LoadingIndicator from '@/components/UI/LoadingIndicator';
import { IFootballLineup, IFootballPlayer, IFootballTeam } from '@/types/football/linesup'
import React from 'react'

const LinesUpUI = ({ linesup, error, isLoading }: { linesup: IFootballLineup | undefined, error: string | null, isLoading: boolean }) => {
    if (isLoading) return <LoadingIndicator />;
    if (error) return <div>Error: {error}</div>;
    if (!linesup) return <div>No lineup data available.</div>;

    return (
        <div className="w-full h-full overflow-y-auto">
            <Pitch svgSrc="/images/football/pitch_mobile.svg" sizeMode="cover" className="bg-emerald-900/50">
                <TeamOnPitch team={linesup?.homeTeam} side="top" />
                <TeamOnPitch team={linesup?.awayTeam} side="bottom" />
            </Pitch>

            {/* Benches */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <Bench team={linesup?.homeTeam} title="Home Bench" />
                <Bench team={linesup?.awayTeam} title="Away Bench" /> */}
            </div>
        </div>
    )
}


/* ---------- Pitch & Lines ---------- */
// function Pitch({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="relative aspect-[7/10] rounded-2xl border border-emerald-700 bg-emerald-900/50 overflow-hidden">
//             {/* Grass stripes */}
//             {[...Array(10)].map((_, i) => (
//                 <div
//                     key={i}
//                     className="absolute left-0 right-0"
//                     style={{
//                         top: `${i * 10}%`,
//                         height: "10%",
//                         background: i % 2 ? "rgba(255,255,255,0.03)" : "transparent",
//                     }}
//                 />
//             ))}

//             {/* Halfway line */}
//             <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-white/50" />

//             {/* Center circle */}
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 w-40 h-40" />
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 w-1.5 h-1.5" />

//             {/* Penalty boxes & goals (top) */}
//             <Box yPct={0} />
//             {/* (bottom) */}
//             <Box yPct={100} flip />

//             {children}
//         </div>
//     );
// }

type PitchProps = {
    children?: React.ReactNode;
    /** Either a URL to an SVG image or a React component (imported SVG as ReactComponent) */
    svgSrc?: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
    /** 'cover' will make svg cover entire pitch area (cropped if needed). 'contain' keeps full svg visible */
    sizeMode?: "cover" | "contain";
    className?: string;
};

function Pitch({
    children,
    svgSrc,
    sizeMode = "cover",
    className = "",
}: PitchProps) {
    // If svgSrc is a React component, render it inline (keeps crisp vector).
    const SvgComp = typeof svgSrc === "function" ? svgSrc : null;
    const isUrl = typeof svgSrc === "string";

    return (
        <section className="p-2 h-full">
            <div
                className={`relative aspect-[7/10]- aspect-[7/11.5] bg-transparent overflow-hidden ${className}`}
            >
                {/* Background SVG as <img> for URL or inline SVG component if provided */}
                {SvgComp ? (
                    // Inline SVG component - scales to fill container
                    <div className="absolute inset-0 pointer-events-none">
                        <SvgComp
                            width="100%"
                            height="100%"
                            preserveAspectRatio={sizeMode === "cover" ? "xMidYMid slice" : "xMidYMid meet"}
                            className="w-full h-full"
                        />
                    </div>
                ) : svgSrc ? (
                    // External svg/png/jpg image URL
                    // Using object-fit via CSS to mimic cover/contain
                    <img
                        src={svgSrc as string}
                        alt="pitch"
                        className={`absolute inset-0 w-full h-full object-${sizeMode}`}
                        // objectFit handled by Tailwind's object- utilities: object-cover / object-contain
                        style={{ pointerEvents: "none" }}
                    />
                ) : (
                    // Fallback: subtle green pitch if no svg provided
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(4,120,87,0.08) 0%, rgba(4,120,87,0.04) 100%)",
                        }}
                    />
                )}

                {/* Overlay: children (player badges, labels, etc.) */}
                <div className="absolute inset-0 pointer-events-none">
                    {/*
          Note: children may need pointer events (click handlers) — so we render them
          inside a wrapper that allows events. PlayerBadge already uses absolute positioning.
        */}
                    <div className="relative w-full h-full pointer-events-auto">{children}</div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Team render ---------- */
function TeamOnPitch({ team, side }: { team: IFootballTeam; side: "top" | "bottom" }) {
    // initialLineup: [ [GK], [line1], [line2], ... ]
    // We'll spread rows vertically within the top/bottom half.
    const rows = team.initialLineup;
    const totalRows = rows.length; // includes GK
    // vertical range for side
    const yStart = side === "top" ? 4 : 54;   // keep margins & avoid midline
    const yEnd = side === "top" ? 46 : 96;

    // compute y for each lineup row (0..totalRows-1)
    const yFor = (rowIdx: number) =>
        lerp(yStart, yEnd, totalRows === 1 ? 0.5 : rowIdx / (totalRows - 1));

    return (
        <>
            {/* Team badge & name */}
            {/* <div
                className="absolute left-2 flex items-center gap-2 px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm text-white"
                style={{ top: side === "top" ? "6px" : "calc(100% - 34px)" }}
            >
                <img src={team.logo} alt="" className="w-5 h-5 object-contain" />
                <span className="text-xs font-medium">{team.name} · {team.formation}</span>
            </div> */}

            {rows.map((line: any[], rowIdx: number) => {
                const y = yFor(rowIdx);
                const count = line.length || 1;
                return line.map((p: any, i: number) => {
                    const x = pctX(i, count);
                    return (
                        <PlayerBadge
                            key={`${team.id}-${rowIdx}-${p.name}-${p.number}-${i}`}
                            player={p}
                            xPct={x}
                            yPct={y}
                            flipLabel={side === "bottom"}
                        />
                    );
                });
            })}
        </>
    );
}

// function PlayerBadge({
//     player,
//     xPct,
//     yPct,
//     flipLabel = false,
// }: {
//     player: IFootballPlayer;
//     xPct: number;
//     yPct: number;
//     flipLabel?: boolean;
// }) {
//     return (
//         <div
//             className="absolute flex flex-col items-center"
//             style={{ left: `${xPct}%`, top: `${yPct}%`, transform: "translate(-50%, -50%)" }}
//             title={`${player.number} ${player.name}`}
//         >
//             <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow">
//                 <span className="text-sm font-semibold">{player.number}</span>
//             </div>
//             <div
//                 className={`mt-1 px-2 py-0.5 rounded bg-white text-[10px] leading-tight shadow ${flipLabel ? "-scale-y-100" : ""
//                     }`}
//                 style={flipLabel ? { transform: "scaleY(-1)" } : undefined}
//             >
//                 {player.name.length > 18 ? player.name.slice(0, 16) + "…" : player.name}
//             </div>
//         </div>
//     );
// }

function PlayerBadge({
    player,
    xPct,
    yPct,
    flipLabel = false,
}: {
    player: IFootballPlayer;
    xPct: number;
    yPct: number;
    flipLabel?: boolean;
}) {
    return (
        <div
            className="absolute flex flex-col items-center"
            style={{ left: `${xPct}%`, top: `${yPct}%`, transform: "translate(-50%, -50%)" }}
            title={`${player.number} ${player.name}`}
        >
            <div className="flex flex-col items-center relative scale-90">
                <div className="flex items-center bg-white- rounded-full aspect-square justify-center">
                    <img className="w-full- w-10 aspect-square" src={"https://static.flashscore.com/res/image/data/UwxifRpQ-0v4hnlRq.png"} />
                </div>

                <div className="flex shadow gap-[0.10rem] max-w-12- md:min-w-[3.5rem]- px-2 leading-none py-[0.15rem] bg-transparent md:bg-gray-950 text-black md:text-white text-wrap whitespace-nowrap overflow-hidden text-ellipsis items-center rounded-md-">
                    <span className="text-[10px]- text-xs md:text-[0.60rem]- leading-none md:text-gray-400 md:font-semibold">
                        {player.number}
                    </span>
                    <span className="text-[10px]- text-xs text-nowrap overflow-hidden leading-none text-ellipsis md:text-[0.60rem]- font-medium md:font-semibold">
                        {player.name}
                    </span>
                </div>
            </div>
        </div>
    );
}

/* ---------- Helpers ---------- */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// spread players evenly across width with side margins
const pctX = (i: number, n: number) => {
    if (n === 1) return 50;
    const left = 12, right = 88;
    return left + (i * (right - left)) / (n - 1);
};

export default LinesUpUI;