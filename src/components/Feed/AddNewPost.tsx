"use client";
import { useRef, useState } from "react";
import { HiOutlineEmojiHappy, HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineGifBox } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const AddNewPost = ({ forceShow = false }) => {
    // ~ Consts
    const COLOR_CARD_WIDTH = 32;

    // ~ States
    const categories = ["All", "Football", "Cricket", "Basketball", "Tennis"];
    const [currentSelectedCategory, setCurrentSelectedCategory] = useState("All");
    const [isCategoryDropdownOpened, setIsCategoryDropdownOpened] =
        useState(false);

    const [isActive, setIsActive] = useState(false);
    const [caption, setCaption] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [canActiveChangable, setCanActiveChangable] = useState(true);
    const [currentBackgroundChoosen, setCurrentBackgroundChoosen] =
        useState<any>(null);
    const [backgroundThemes, setBackgroundThemes] = useState([
        {
            color: "#FF0000",
            text: "#fff",
        },

        {
            color: "#0000FF",
            text: "#fff",
        },

        {
            color: "#000000",
            text: "#fff",
        },

        {
            color: "#FFA500",
            text: "#fff",
        },

        {
            color: "#000080",
            text: "#fff",
        },

        {
            color: "#0C2340",
            text: "#fff",
        },

        {
            color: "#617178",
            text: "#fff",
        },

        {
            color: "#00563b",
            text: "#fff",
        },

        {
            color: "#451425",
            text: "#fff",
        },
    ]);

    // ~ References
    const colorCardContainerRef = useRef<HTMLDivElement>(null);
    const inputFieldRef = useRef<HTMLDivElement>(null);

    // ~ Functions
    const scroll = (position: number) => {
        console.log(colorCardContainerRef.current?.offsetWidth);
        console.log(scrollPosition);
        if (scrollPosition < 0) {
            setScrollPosition(0);
            //@ts-ignore
            colorCardContainerRef.current.scrollLeft = 0;
            return;
        }

        const newPosition = scrollPosition + position;
        if (newPosition > (colorCardContainerRef.current?.offsetWidth || 0)) {
            setScrollPosition((colorCardContainerRef.current?.offsetWidth || 0) + 2);
        } else {
            setScrollPosition(newPosition);
        }

        //@ts-ignore
        colorCardContainerRef.current.scrollLeft = newPosition;
    };

    const onInput = (text: string) => {
        console.log(`"${text}"`);
        if (text === "\n") {
            setCaption("");
            return;
        }

        setCaption(text);
        // console.log(findNewLines(text));
    };

    const isValidBackgroundPost = () => {
        if (!currentBackgroundChoosen) {
            return false;
        }

        if (caption.length > 165) {
            return false;
        }

        function findNewLines(str: string) {
            const lines = str.split(/\r?\n/g);
            return lines.length - 1; // Number of lines is one more than newlines
        }

        const newLineChars = findNewLines(caption);

        if (newLineChars > 7) {
            return false;
        }

        if (caption.length > 50 && newLineChars >= 4) {
            return false;
        }

        return true;
    };

    const setActivity = (active: boolean, isForce?: boolean) => {
        if (!canActiveChangable) {
            return;
        }

        if (active) {
            setIsActive(true);
            setTimeout(() => {
                inputFieldRef.current?.focus();
            }, 50);
        } else {
            if (!currentBackgroundChoosen) {
                // setCaption("");
                setIsActive(false);
            }

            if (isForce) {
                setCaption("");
                //@ts-ignore
                inputFieldRef.current.innerText = "";
                setIsActive(false);
                setCurrentBackgroundChoosen(null);
            }
        }
    };

    return (
        <>
            <div
                style={{
                    boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 2px 8px 0px, rgba(0, 0, 0, 0.16) 0px 0px 2px 0px",
                }}
                className={`${forceShow ? "flex" : "hidden md:flex"
                    }  flex-col w-full items-start gap-4 mt-3 py-2 rounded-xl  `}
            >
                <div
                    className={`w-full flex gap-4 px-4- items-center px-4 ${isActive ? "justify-between" : ""
                        }`}
                >
                    <img
                        className="w-9 aspect-square object-cover object-center rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW32Rrz3qcEezEab0N6p6fCHO1HeHDDNXXA&usqp=CAU"
                    />
                    {/* <input type="text" className='outline-none w-[83%] font-semibold placeholder:text-[#777777] text-[1.1rem]' placeholder="What's on your mind?" /> */}
                    {/* <div type="text" onClick={e => setIsNewPostWindowOpened(true)} className='outline-none w-[83%] font-semibold text-[#777777] text-[1.1rem]'>What's on your mind?</div> */}
                    {!isActive && (
                        <div
                            className="outline-none w-full font-semibold text-[#777777] text-[1.1rem]"
                            onClick={(e) => setActivity(true)}
                        >
                            What&#39;s on your mind?
                        </div>
                    )}
                    {isActive ? (
                        <button
                            className="text-[#575757] hover:text-black"
                            onClick={(e) => setActivity(false, true)}
                        >
                            <IoClose className="text-3xl" />
                        </button>
                    ) : (
                        ""
                    )}
                </div>

                <section
                    className={` w-full flex-col min-h-[2rem] relative ${!isValidBackgroundPost() ? "px-4" : "px-0"
                        } ${isActive ? "flex" : "hidden"}`}
                >
                    {/* <textarea className='resize-none w-full h-full font-semibold placeholder:text-[#777777] text-[1.1rem] outline-none' rows={2} placeholder="What's on your mind?"></textarea> */}
                    {!caption && (
                        <p
                            className={` absolute pointer-events-none w-full ${isValidBackgroundPost()
                                ? "text-[#d9d9d9] text-center text-2xl font-bold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                                : "text-[#777777] text-[1.1rem] font-semibold"
                                }`}
                        >
                            What&#39;s on your mind?
                        </p>
                    )}
                    <div
                        onClick={(e) => inputFieldRef.current?.focus()}
                        style={{
                            background: isValidBackgroundPost()
                                //@ts-ignore
                                ? currentBackgroundChoosen?.color
                                : "white",
                            color: isValidBackgroundPost()
                                //@ts-ignore
                                ? currentBackgroundChoosen?.text
                                : "black",
                        }}
                        className={`w-full text-[1.1rem] outline-none ${isValidBackgroundPost()
                            ? `h-64 flex justify-center font-semibold items-center text-center px-20`
                            : "h-full font-normal"
                            }`}
                    >
                        <div
                            ref={inputFieldRef}
                            onBlur={(e) => {
                                if (!caption) {
                                    setActivity(false);
                                }
                            }}
                            className={`outline-none w-full ${isValidBackgroundPost() ? "text-2xl" : ""
                                }`}
                            //@ts-ignore
                            onInput={(e) => onInput(e.target.innerText)}
                            contentEditable
                        ></div>
                    </div>
                </section>

                <div className="flex w-full flex-col gap-1 pl-4">
                    {isActive && (
                        <div className="flex gap-6 justify-start pml-[3.750rem] w-full text-[1.37rem] text-secondary">
                            <div className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#ffe26f3a]">
                                <HiOutlinePhotograph className="text-[#eb892e]" />
                            </div>
                            <div className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#6fc5ff3a]">
                                <MdOutlineGifBox />
                            </div>
                            <div className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#c2ff9c28]">
                                <HiOutlineEmojiHappy className="text-[#ff4500]" />
                            </div>
                        </div>
                    )}

                    <div className=" w-full flex justify-between  items-center pr-2">
                        {isActive ? (
                            <div
                                onMouseEnter={(e) => setCanActiveChangable(false)}
                                onMouseLeave={(e) => setCanActiveChangable(true)}
                                className="flex items-center  gap-1 max-w-[50%]"
                            >
                                <button onClick={(e) => scroll(-COLOR_CARD_WIDTH * 2)}>
                                    <GrFormPrevious className="text-3xl cursor-pointer hover:text-black text-gray-100" />
                                </button>

                                <div
                                    ref={colorCardContainerRef}
                                    className="flex py-2  items-center--- scroll-smooth overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 justify-start w-full gap-2"
                                >
                                    <div
                                        style={{
                                            background: "white",
                                        }}
                                        onClick={(e) => {
                                            setCurrentBackgroundChoosen(null);
                                        }}
                                        className={`${currentBackgroundChoosen === null ? "border-2" : ""
                                            }  aspect-square border-[#585858] shadow-md min-w-[32px] cursor-pointer flex items-center justify-center rounded-lg`}
                                    ></div>

                                    {backgroundThemes.map((theme, i) => {
                                        return (
                                            <div
                                                key={i}
                                                style={{
                                                    background: theme.color,
                                                }}
                                                onClick={(e) => {
                                                    setCurrentBackgroundChoosen(theme);
                                                }}
                                                className={`${currentBackgroundChoosen === theme ? "border-2" : ""
                                                    }  aspect-square border-[#585858] shadow-md min-w-[32px] cursor-pointer flex items-center justify-center rounded-lg`}
                                            ></div>
                                        );
                                    })}
                                </div>

                                <button onClick={(e) => scroll(COLOR_CARD_WIDTH * 2)}>
                                    <GrFormNext className="text-3xl cursor-pointer hover:text-black text-gray-100" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-6  justify-start pml-[3.750rem] w-full text-[1.37rem] text-secondary">
                                <div className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#ffe26f3a]">
                                    <HiOutlinePhotograph className="text-[#eb892e]" />
                                </div>
                                <div className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#6fc5ff3a]">
                                    <MdOutlineGifBox />
                                </div>
                                <div className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#c2ff9c28]">
                                    <HiOutlineEmojiHappy className="text-[#ff4500]" />
                                </div>
                            </div>
                        )}

                        <div className="flex gap-3 pr-2">
                            <div
                                className="relative min-w-[7rem]"
                                onMouseEnter={(e) => setIsCategoryDropdownOpened(true)}
                                onMouseLeave={(e) => setIsCategoryDropdownOpened(false)}
                            >
                                <div className="border w-full py-1 px-3 rounded-md cursor-pointer flex items-center justify-center gap-3">
                                    <p className="font-semibold">{currentSelectedCategory}</p>
                                    <IoIosArrowDown />
                                </div>

                                <div
                                    className={`absolute bg-white rounded-md overflow-hidden w-full items-center z-50 ${isCategoryDropdownOpened ? "flex" : "hidden"
                                        } flex-col`}
                                >
                                    {categories.map((category) => {
                                        return (
                                            <p
                                                key={category}
                                                onClick={(e) => {
                                                    setCurrentSelectedCategory(category);
                                                    setIsCategoryDropdownOpened(false);
                                                }}
                                                className="px-3 w-full text-center cursor-pointer py-[0.20rem] hover:bg-gray-200 font-medium "
                                            >
                                                {category}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>

                            <button className="bg-secondary py-1 px-6 text-white rounded-full font-semibold text-base">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <Link
                href="/new"
                className={`${forceShow ? "hidden" : "flex md:hidden"
                    } items-center w-full bg-red-100- border-[rgba(0,0,0,0.1)] border-b py-4 gap-2 mx-2- px-4 mt-3- justify-between- border- bg-greyThird-`}
            >

                <img
                    className="w-9 h-9 object-cover object-center rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW32Rrz3qcEezEab0N6p6fCHO1HeHDDNXXA&usqp=CAU"
                />

                <div className="flex items-center mx-2- gap-2 pl-2 pr-3 w-full justify-between border- rounded-full bg-[#ececec]">
                    <div
                        className="flex px-1   py-2 items-center gap-2 rounded-md  w-full"
                    >

                        <span className="text-[15px]- text-sm select-none text-[#777777]">
                            What&#39;s on your mind?
                        </span>

                        {/* <img
              className="w-7 aspect-square object-cover object-center rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW32Rrz3qcEezEab0N6p6fCHO1HeHDDNXXA&usqp=CAU"
            /> */}
                    </div>

                </div>
                <div className="w-[40%]-  flex justify-between items-center text-secondary text-2xl  h-full">
                    <div className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#ffe26f3a]">
                        <HiOutlinePhotograph className="text-[#eb892e]" />
                    </div>
                    {/* <div className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#6fc5ff3a]">
            <MdOutlineGifBox />
          </div> */}
                    <div className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#c2ff9c28]">
                        <HiOutlineEmojiHappy className="text-[#ff4500]" />
                    </div>
                </div>
            </Link>
        </>
    );
};

export default AddNewPost;
