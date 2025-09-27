import { getWeekRange, parseAsLocalMidnight } from "@/utils/datetime_utills";
// import { useState } from "react";
// import { BsFillCalendarDayFill } from "react-icons/bs";
// import { MdKeyboardArrowDown } from "react-icons/md";

// export const ScheduleSection = ({ currentDate }: { currentDate: string }) => {
//     console.log(currentDate);


//     const allDates = getWeekRange();
//     const [selectedDate, setSelectedDate] = useState<Date | undefined>(parseAsLocalMidnight(currentDate));
//     const [isDateChooserOpened, setIsDateChooserOpened] = useState(false);


//     const TimeComponent = ({ isActive = false, day, date }: { date: string, day: string, isActive?: boolean }) => {
//         return (
//             <div
//                 className={`flex flex-col items-center cursor-pointer ${isActive && "scale-125"
//                     }`}
//             >
//                 <span
//                     className={`${isActive ? "text-[#0D98BA]" : "text-[#777777]"
//                         } font-medium text-[14px] leading-none`}
//                 >
//                     {day}
//                 </span>

//                 <span
//                     className={`${isActive ? "text-[#0D98BA]" : "text-[#777777]"
//                         } text-[8px] whitespace-nowrap leading-none`}
//                 >
//                     {date}
//                 </span>
//             </div>
//         );
//     };

//     return (
//         <div className="flex flex-col px-2 w-full mt-3-">
//             <div className="flex justify-between relative gap-2 h-fit items-center w-full">
//                 <p className="font-bold bg-gray-700- bg-[#007600] text-white px-2 py-[0.18rem] text-xs rounded cursor-pointer transition-all hover:bg-gray-900">
//                     LIVE
//                 </p>

//                 <div className="w-full flex gap-8 py-4 overflow-x-auto scrollbar-none">
//                     {
//                         allDates.map((date, i) => {
//                             const isActive = selectedDate ? (date.toDateString() === selectedDate.toDateString()) : false;
//                             return <div key={i} onClick={e => {
//                                 setSelectedDate(date);
//                             }}>
//                                 <TimeComponent isActive={isActive} day={date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()} date={`${date.toLocaleDateString("en-US", { month: "short" })} ${date.getDate().toString()}`} />
//                             </div>
//                         })
//                     }
//                 </div>


//                 <button onClick={e => {
//                     setTimeout(() => {
//                         setIsDateChooserOpened(!isDateChooserOpened)
//                     }, 150);
//                 }} className="flex transition-all p-3 rounded-xl focus:bg-[#e5e5e5] cursor-pointer ">
//                     <BsFillCalendarDayFill className="text-[#007600] text-xl" />
//                     <MdKeyboardArrowDown className="text-[#007600] text-xl" />
//                 </button>

//                 {isDateChooserOpened && <DateSelectorWindow alreadySelectedDate={selectedDate} onClose={selectedDate => {
//                     setSelectedDate(selectedDate);
//                     setIsDateChooserOpened(false);
//                 }} />}
//             </div>
//         </div>
//     );
// };


import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

export const ScheduleSection = ({ currentDate }: { currentDate: string }) => {
    const allDates = getWeekRange();
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
        parseAsLocalMidnight(currentDate)
    );
    const [isDateChooserOpened, setIsDateChooserOpened] = useState(false);

    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

    const findIndexForDate = (d?: Date) => {
        if (!d) return -1;
        return allDates.findIndex((ad) => ad.toDateString() === d.toDateString());
    };

    /**
     * CENTERING using getBoundingClientRect (accounts for transforms like scale)
     */
    const centerItemAtIndex = (index: number, smooth = true) => {
        const container = scrollerRef.current;
        const el = itemRefs.current[index];
        if (!container || !el) return;

        // bounding rects reflect transforms (scale) and visual size
        const containerRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();

        // element center relative to container's left edge (in viewport coords)
        const elCenterRelativeToContainerLeft = elRect.left + elRect.width / 2 - containerRect.left;

        // target scrollLeft so that element center aligns with container center
        const targetScrollLeft =
            Math.round(container.scrollLeft + elCenterRelativeToContainerLeft - container.clientWidth / 2);

        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const finalLeft = Math.max(0, Math.min(maxScrollLeft, targetScrollLeft));

        container.scrollTo({
            left: finalLeft,
            behavior: smooth ? "smooth" : "auto",
        });
    };

    // initial centering: run in useLayoutEffect but defer one rAF to ensure transforms/styles applied
    useLayoutEffect(() => {
        const idx = findIndexForDate(selectedDate);
        const run = () => {
            if (idx >= 0) centerItemAtIndex(idx, false);
            else centerItemAtIndex(Math.floor(allDates.length / 2), false);
        };

        // two rAFs are a robust way to wait for layout + paint + CSS transforms to be applied
        // keeps flicker from happening.
        let raf1: number | null = null;
        let raf2: number | null = null;
        raf1 = window.requestAnimationFrame(() => {
            raf2 = window.requestAnimationFrame(() => run());
        });

        return () => {
            if (raf1) window.cancelAnimationFrame(raf1);
            if (raf2) window.cancelAnimationFrame(raf2);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // run once on mount

    // center on selection change (smooth)
    useEffect(() => {
        const idx = findIndexForDate(selectedDate);
        if (idx >= 0) {
            // small timeout/rAF to ensure DOM update (transform class applied) before measuring
            const id = window.setTimeout(() => centerItemAtIndex(idx, true), 0);
            return () => window.clearTimeout(id);
        }
    }, [selectedDate]);

    const TimeComponent = ({
        isActive = false,
        day,
        date,
    }: {
        date: string;
        day: string;
        isActive?: boolean;
    }) => {
        return (
            <div
                className={`flex flex-col items-center cursor-pointer transform ${isActive ? "scale-125" : "scale-100"} transition-transform`}
                style={{ transformOrigin: "center center" }} // ensure scaling from center
            >
                <span className={`${isActive ? "text-[#0D98BA]" : "text-[#777777]"} font-medium text-[14px] leading-none`}>
                    {day}
                </span>

                <span className={`${isActive ? "text-[#0D98BA]" : "text-[#777777]"} text-[8px] whitespace-nowrap leading-none`}>
                    {date}
                </span>
            </div>
        );
    };

    return (
        <div className="flex flex-col px-2 w-full mt-3-">
            <div className="flex justify-between relative gap-2 h-fit items-center w-full">
                <p className="font-bold bg-gray-700- bg-[#007600] text-white px-2 py-[0.18rem] text-xs rounded cursor-pointer transition-all hover:bg-gray-900">
                    LIVE
                </p>

                <div
                    ref={scrollerRef}
                    className="w-full flex gap-8 p-4 overflow-x-auto scrollbar-none"
                // keep scroll-smooth only as visual nicety; we control behavior via JS
                >
                    {allDates.map((date, i) => {
                        const isActive = selectedDate ? date.toDateString() === selectedDate.toDateString() : false;

                        return (
                            <div
                                key={i}
                                //@ts-ignore
                                ref={(el) => (itemRefs.current[i] = el)}
                                onClick={() => setSelectedDate(date)}
                                className="flex-shrink-0"
                            >
                                <TimeComponent
                                    isActive={isActive}
                                    day={date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()}
                                    date={`${date.toLocaleDateString("en-US", { month: "short" })} ${date.getDate().toString()}`}
                                />
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={() => {
                        setTimeout(() => {
                            setIsDateChooserOpened(!isDateChooserOpened);
                        }, 150);
                    }}
                    className="flex transition-all p-3- rounded-xl focus:bg-[#e5e5e5] cursor-pointer "
                >
                    <BsFillCalendarDayFill className="text-[#007600] text-xl" />
                    <MdKeyboardArrowDown className="text-[#007600] text-xl" />
                </button>

                {isDateChooserOpened && (
                    <DateSelectorWindow
                        alreadySelectedDate={selectedDate}
                        onClose={(selected) => {
                            setSelectedDate(selected);
                            setIsDateChooserOpened(false);
                        }}
                    />
                )}
            </div>
        </div>
    );
};



const DateSelectorWindow = ({ alreadySelectedDate, onClose }: { alreadySelectedDate: Date | undefined; onClose: (date: Date) => void }) => {
    const today = new Date()
    const [selectedDate, setSelectedDate] = useState(alreadySelectedDate ?? today);



    const formatDate = (dateInput: Date) => {
        const date = new Date(dateInput);

        // Extract day, month, and weekday
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

        return `${day}.${month}. ${weekday}`;
    };

    const allDates = getWeekRange();
    // console.log(formatDate(today));

    const DateItem = ({ date }: { date: Date }) => {
        const formatedDate = formatDate(date);
        const isSelected = formatedDate === formatDate(selectedDate);

        return <button onClick={e => {
            setSelectedDate(date);
            setTimeout(() => {
                onClose(date);
            }, 200);
        }} className={`w-full ${isSelected ? "bg-[#0076001b]" : "active:bg-[#e5e5e5]"} py-2 text-left px-5- gap-3 flex items-center border-b transition-all `}>
            <div className={`w-1 h-8 bg-[#007600] rounded-r-md ${isSelected ? 'opacity-100' : 'opacity-0'}`}></div>
            <span className="font-medium-">{formatedDate === formatDate(today) ? "TODAY" : formatedDate}</span>
        </button>
    }

    return <section onClick={e => {
        // @ts-ignore
        if (e.target.tagName === "SECTION") {
            onClose(selectedDate);
        }
    }} className="w-full z-50 h-full fixed left-0 top-0 flex items-center justify-center bg-[#00000072]">
        <div className="w-[90%] pt-4 pb-12 h-fit max-h-[80%] flex flex-col items-start  bg-white rounded-xl">
            <p className="leading-none px-4 pb-4 font-medium text-lg">Match calendar</p>
            <div className="w-full h-fit flex flex-col items-start border-b border-t overflow-auto">
                {
                    allDates.map((date, i) => {
                        return <DateItem key={i} date={date} />
                    })
                }
            </div>
        </div>
    </section>
}