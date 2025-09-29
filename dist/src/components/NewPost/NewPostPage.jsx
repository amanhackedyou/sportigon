"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoIosArrowDown, IoMdAlert } from "react-icons/io";
import { MdOutlineGifBox } from "react-icons/md";
import MediaView from "./MediaView";
import { Toaster } from "react-hot-toast";
import { IoFootball, IoVideocamOutline } from "react-icons/io5";
import { TbBorderAll } from "react-icons/tb";
import { PiCricket } from "react-icons/pi";
import { CiBasketball } from "react-icons/ci";
import { LiaTableTennisSolid } from "react-icons/lia";
import GifSelectorWindow from "@/components/GifSelectorWindow";
import { useModal } from "@/context/ModalContext";
import { createBackgroundPost } from "./NewPostController";
const NewPostPage = () => {
    // ~ Consts
    const COLOR_CARD_WIDTH = 32;
    const CHAR_LIMIT_WITHOUT_BG = 200;
    const CHAR_LIMIT_WITH_BG = 130;
    const CHAR_LIMIT_WITH_MEDIA = 200;
    const MAX_MEDIA_FILES_LIMIT = 4;
    // ~ States
    // const categories = ["⚽ Football", "All", "🏏 Cricket", "🏀 Basketball", "🎾 Tennis"];
    const categories = [
        {
            icon: <IoFootball />,
            text: "Football"
        },
        {
            icon: <TbBorderAll />,
            text: "All"
        },
        {
            icon: <PiCricket />,
            text: "Cricket"
        },
        {
            icon: <CiBasketball />,
            text: "Basketball"
        },
        {
            icon: <LiaTableTennisSolid />,
            text: "Tennis"
        },
    ];
    const [currentSelectedCategoryIndex, setCurrentSelectedCategoryIndex] = useState(0);
    const [isCategoryDropdownOpened, setIsCategoryDropdownOpened] = useState(false);
    const [colorCardContainerScrollPosition, setColorCardContainerScrollPosition] = useState(0);
    const [colorCardContainerTotalScrollPosition, setColorCardContainerTotalScrollPosition] = useState(1);
    const [isCantSwitchToBackgroundShowing, setIsCantSwitchToBackgroundShowing] = useState(false);
    const [mediaFiles, setMediaFiles] = useState([]);
    const [isGifSelectorShowing, setIsGifSelectorShowing] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [caption, setCaption] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [canActiveChangable, setCanActiveChangable] = useState(true);
    const [currentBackgroundChoosen, setCurrentBackgroundChoosen] = useState(null);
    const [backgroundThemes, setBackgroundThemes] = useState([
        [
            {
                color: null,
                text: null
            },
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
            {
                img: "/images/post_themes/1.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/2.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/3.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/4.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/5.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/6.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/7.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/8.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/9.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/10.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/11.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/12.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/13.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/14.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/15.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/16.jpg",
                text: "#fff",
            },
            // {
            //   img: "/images/post_themes/17.jpg",
            //   text: "#fff",
            // },
        ], [
            {
                img: "/images/post_themes/18.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/19.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/20.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/21.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/22.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/23.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/24.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/25.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/26.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/27.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/28.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/29.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/30.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/31.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/32.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/33.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/34.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/35.jpg",
                text: "#fff",
            },
            {
                img: "/images/post_themes/36.jpg",
                text: "#fff",
            },
        ]
    ]);
    // ~ References
    const mainPageRef = useRef(null);
    const inputFieldRef = useRef(null);
    const pictureInputRef = useRef(null);
    const videoInputRef = useRef(null);
    const characterCountRef = useRef(null);
    // ~ Functions
    const onInput = (event) => {
        const text = event.currentTarget.innerText;
        if (text === "\n") {
            setCaption("");
            return;
        }
        setCaption(text);
        // console.log(findNewLines(text));
    };
    const isValidBackgroundPost = () => {
        if (caption.length > CHAR_LIMIT_WITH_BG)
            return false;
        if (!currentBackgroundChoosen) {
            return false;
        }
        if (caption.length > 165) {
            return false;
        }
        function findNewLines(str) {
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
    const setActivity = (active, isForce) => {
        if (!canActiveChangable) {
            return;
        }
        if (active) {
            setIsActive(true);
            setTimeout(() => {
                inputFieldRef.current?.focus();
            }, 50);
        }
        else {
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
    const canWriteMore = () => {
        if (isValidBackgroundPost()) {
            // if (caption.length >= CHAR_LIMIT_WITH_BG) {
            //   return false;
            // }
        }
        else {
            if (caption.length >= CHAR_LIMIT_WITHOUT_BG) {
                return false;
            }
        }
        if (MediaFilesUtils.isMediaMode()) {
            if (caption.length >= CHAR_LIMIT_WITH_MEDIA) {
                return false;
            }
        }
        return true;
    };
    const focusOnEndInTextFeild = () => {
        const el = inputFieldRef.current;
        if (el) {
            el.focus(); // Focus the element
            if (document.createRange && window.getSelection) {
                const range = document.createRange();
                const selection = window.getSelection();
                range.selectNodeContents(el);
                range.collapse(false);
                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        }
    };
    const MediaFilesUtils = {
        configForMedia: () => {
            if (isValidBackgroundPost()) {
                setCurrentBackgroundChoosen(null);
            }
        },
        addActualFile: (filestype, newFiles) => {
            const oldFiles = mediaFiles;
            const newFiles_ = [];
            for (const file of newFiles) {
                newFiles_.push({
                    filetype: filestype, file
                });
            }
            MediaFilesUtils.configForMedia();
            setMediaFiles([...oldFiles, ...newFiles_]);
        },
        addUrlFile: (filetype, url) => {
            const updatedFiles = mediaFiles;
            updatedFiles.push({
                filetype, url
            });
            MediaFilesUtils.configForMedia();
            setMediaFiles(updatedFiles);
        },
        isMediaMode: () => {
            return mediaFiles.length > 0;
        }
    };
    useEffect(() => {
        if (isCantSwitchToBackgroundShowing) {
            const screenHeight = mainPageRef.current?.scrollHeight;
            const screenScrollHeight = mainPageRef.current?.clientHeight;
            mainPageRef.current?.scroll({
                //@ts-ignore
                top: screenHeight - screenScrollHeight
            });
            setTimeout(() => {
                setIsCantSwitchToBackgroundShowing(false);
            }, 10000);
        }
    }, [isCantSwitchToBackgroundShowing]);
    const { showModal } = useModal();
    return (<>
            <input className="hidden" ref={pictureInputRef} multiple type="file" accept="image/*" onChange={e => {
            const files = e.target.files;
            if (!files)
                return; // If files is null, do nothing
            //@ts-ignore
            if (files.length + mediaFiles.length > MAX_MEDIA_FILES_LIMIT) {
                // alert("Sorry, more then 4 media files are not allowed.");
                showModal({
                    type: 'error',
                    title: 'Media Limit Exceeded',
                    description: `Too many files! You can upload a maximum of ${MAX_MEDIA_FILES_LIMIT} media items.`,
                });
                //@ts-ignore
                pictureInputRef.current.value = "";
                return;
            }
            MediaFilesUtils.addActualFile("photo", files);
            e.target.value = "";
        }}/>

            <input className="hidden" ref={videoInputRef} multiple type="file" accept="video/*" onChange={e => {
            const files = e.target.files;
            if (!files)
                return; // If files is null, do nothing
            if (files.length + mediaFiles.length > MAX_MEDIA_FILES_LIMIT) {
                showModal({
                    type: 'error',
                    title: 'Media Limit Exceeded',
                    description: `Too many files! You can upload a maximum of ${MAX_MEDIA_FILES_LIMIT} media items.`,
                });
                //@ts-ignore
                pictureInputRef.current.value = "";
                return;
            }
            MediaFilesUtils.addActualFile("video", files);
            e.target.value = "";
        }}/>

            <Toaster position="top-center" reverseOrder={false}/>


            {isGifSelectorShowing && <GifSelectorWindow onGifClick={src => {
                MediaFilesUtils.addUrlFile("gif", src);
            }} close={() => setIsGifSelectorShowing(false)}/>}

            <main ref={mainPageRef} onClick={(e) => {
            //@ts-ignore
            if (!Array.from(e.target.classList).includes("CATAGORY_ELEMENT")) {
                setIsCategoryDropdownOpened(false);
            }
        }} className="flex scroll-smooth flex-col w-full relative lg:max-w-[33.33vw] p-2 scrollbar-none scrollbar-track-white scrollbar-thumb-gray-100 scrollbar-corner-gray-200 overflow-y-auto overflow-hidden h-full">
                <section className="flex flex-col w-full py-2 h-full  rounded-xl">
                    <h1 className="px-2 font-bold text-xl mb-2 text-[#454545]">Create post</h1>
                    <div className="flex items-center px-2 justify-between">
                        <img className="w-9 aspect-square object-cover object-center rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW32Rrz3qcEezEab0N6p6fCHO1HeHDDNXXA&usqp=CAU"/>

                        <div className="flex gap-3 CATAGORY_ELEMENT">
                            <div className="relative CATAGORY_ELEMENT min-w-32" onClick={(e) => {
            // setIsCategoryDropdownOpened(true);
        }}>
                                <div className="w-full pointer-events-none text-[#777]- bg-[#ececec] py-1 px-3 rounded-md cursor-pointer flex items-center justify-center gap-1">
                                    <span className="text-[1.30rem] p-1 bg-[#f9f9f9] rounded-full ">{categories[currentSelectedCategoryIndex]["icon"]}</span>
                                    <p className="font-semibold">{categories[currentSelectedCategoryIndex]["text"]}</p>
                                    <IoIosArrowDown />
                                </div>

                                <div className={`absolute  bg-white rounded-md overflow-hidden w-full items-center z-50 ${isCategoryDropdownOpened ? "flex" : "hidden"} flex-col`}>
                                    {categories.map((category, i) => {
            return (<p key={i} onClick={(e) => {
                    setCurrentSelectedCategoryIndex(i);
                    setIsCategoryDropdownOpened(false);
                }} className="px-3 w-full text-[#777]- text-center cursor-pointer flex items-center gap-2 justify-center- py-[0.20rem] hover:bg-gray-200 font-medium ">
                                                <span className="text-xl">{category["icon"]}</span>
                                                <span>{category["text"]}</span>
                                            </p>);
        })}
                                </div>
                            </div>

                        </div>
                    </div>

                    <section className={` w-full flex-col  ${MediaFilesUtils.isMediaMode() && !isValidBackgroundPost() ? 'min-h-[80%]' : 'h-[100%]'} min-h-[2rem]- relative flex mt-3 ${!isValidBackgroundPost() ? "px-2-" : "px-0"}`}>


                        <div className={`bg-purple-600- relative- ${MediaFilesUtils.isMediaMode() && !isValidBackgroundPost() ? 'h-full- h-fit' : 'h-full-'}`}>


                            <div onClick={(e) => {
        }} style={{
            background: isValidBackgroundPost()
                //@ts-ignore
                ? currentBackgroundChoosen.img ? `rgba(0, 0, 0, 0.4)` : currentBackgroundChoosen.color
                : "white",
            color: isValidBackgroundPost()
                //@ts-ignore
                ? currentBackgroundChoosen.text
                : "black",
        }} className={`w-full relative INPUT_BOX text-[1.1rem] outline-none ${isValidBackgroundPost()
            ? `h-64 bg-center bg-cover rounded-2xl flex justify-center font-semibold items-center text-center px-10`
            : `max-h-[50vh]-  max-h-full overflow-auto- font-normal !bg-pink-500-`}`}>
                                {!caption && (<p className={` absolute pointer-events-none INPUT_BOX w-full ${isValidBackgroundPost()
                ? "text-[#d9d9d9] text-center text-2xl font-bold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                : `text-[#5f5f5f] text-[1.1rem] font-medium- py-2 px-3 ${MediaFilesUtils.isMediaMode() ? '' : ''}`}`}>
                                        What&#39;s on your mind....?
                                    </p>)}

                                <div ref={inputFieldRef} onClick={() => {
            //@ts-ignore
            inputFieldRef.current.focus();
        }} onBlur={(e) => {
            if (!caption) {
                setActivity(false);
            }
        }} 
    // className={`outline-none bg-[#ececec] max-h-16- ${MediaFilesUtils.isMediaMode() ? ' p-2 overflow-x-auto whitespace-nowrap- text-nowrap-' : ''}  scrollbar-none w-full ${isValidBackgroundPost() ? "text-2xl" : MediaFilesUtils.isMediaMode() ? "min-h-0-" : "min-h-64"}`}
    className={`outline-none  max-h-16- ${MediaFilesUtils.isMediaMode() ? ' p-2 overflow-x-auto whitespace-nowrap- text-nowrap-' : ''}  scrollbar-none w-full ${isValidBackgroundPost() ? "text-2xl rounded-3xl" : "min-h-28  bg-[#ececec] rounded-xl py-2 px-3 max-h-64 overflow-auto"}`} onInput={(e) => {
            onInput(e);
        }} onPaste={e => {
            if (!e.clipboardData.types.includes("text/plain")) {
                return e.preventDefault();
            }
            setTimeout(() => {
                //@ts-ignore
                inputFieldRef.current.innerText = inputFieldRef.current.innerText;
                //@ts-ignore
                setCaption(inputFieldRef.current.innerText);
                focusOnEndInTextFeild();
            }, 0);
            // e.preventDefault();
            // const text = e.clipboardData.getData("text");
            // console.log(text);
            // e.target.insertAdjacentText("beforeEnd", text);
            // e.target.innerText += text;
            // e.target.inp
            // document.execCommand("insertText", false, text);
            // document.getSelection().getRangeAt(0).insertNode(document.createTextNode(text));
            // setCaption(caption + text);
            // e.target.innerText += text;
        }} onBeforeInput={(e) => {
            //@ts-ignore
            const mainTextLength = e.target.innerText.length;
            // if (isValidBackgroundPost() && mainTextLength > CHAR_LIMIT_WITH_BG) {
            //   e.preventDefault();
            //   return;
            // }
            if (MediaFilesUtils.isMediaMode() && mainTextLength > CHAR_LIMIT_WITH_MEDIA) {
                e.preventDefault();
                return;
            }
            else {
                if (mainTextLength > CHAR_LIMIT_WITHOUT_BG) {
                    e.preventDefault();
                    return;
                }
            }
            // if ((MediaFilesUtils.isMediaMode() || isValidBackgroundPost()) && e.data === "\n") {
            //@ts-ignore
            if (e.data === "\n" && caption.includes("\n")) {
                e.preventDefault();
                return;
            }
            if (!canWriteMore()) {
                e.preventDefault();
            }
        }} contentEditable></div>


                                {(MediaFilesUtils.isMediaMode() && !isValidBackgroundPost()) && <MediaView mediaFiles={mediaFiles} setMediaFiles={setMediaFiles}/>}

                                {
        //@ts-ignore
        isValidBackgroundPost() && currentBackgroundChoosen.img && <img src={currentBackgroundChoosen.img} className="w-full h-full object-cover object-center absolute rounded-xl top-0 left-0 -z-10"/>}
                            </div>
                        </div>

                        <section className="flex flex-col absolute- border-t border-[rgba(0,0,0,0.1)] mt-4 bottom-1- w-full left-0- bg-white- bg-yellow-600- px-2- py-2">
                            <div onMouseEnter={(e) => setCanActiveChangable(false)} onMouseLeave={(e) => setCanActiveChangable(true)} className="flex relative items-center px-2- gap-1 w-full">

                                <div className={`${colorCardContainerScrollPosition === 0 ? 'opacity-0' : 'opacity-100'} absolute top-0 duration-100 transition-all left-0 w-12 h-full bg-gradient-to-r pointer-events-none from-[#ffffff] to-[#ffffff00]`}></div>
                                <div className={`${colorCardContainerScrollPosition === colorCardContainerTotalScrollPosition ? 'opacity-0' : 'opacity-100'} absolute top-0 duration-100 transition-all right-0 w-12 h-full bg-gradient-to-l pointer-events-none from-[#ffffff] to-[#ffffff00]`}></div>




                                <div className="flex flex-col w-full">
                                    {backgroundThemes.map((bg, i) => {
            return <div 
            // ref={colorCardContainerRef}
            key={i} onScroll={e => {
                    //@ts-ignore
                    const totalScrollWidth = e.target.scrollWidth - e.target.clientWidth;
                    //@ts-ignore
                    const currentScrollPosition = e.target.scrollLeft;
                    if (colorCardContainerTotalScrollPosition != totalScrollWidth)
                        setColorCardContainerTotalScrollPosition(totalScrollWidth);
                    setColorCardContainerScrollPosition(currentScrollPosition);
                }} className="flex py-2 items-center--- scroll-smooth overflow-auto scrollbar-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 justify-start w-full gap-2">

                                            {bg.map((theme, i2) => {
                    return (<div key={i2} style={{
                            background: (theme.img ? `transparent` : theme.color) ?? "transparent",
                        }} onClick={(e) => {
                            if (!theme.color && !theme.text && !theme.img) {
                                setIsCantSwitchToBackgroundShowing(false);
                                setCurrentBackgroundChoosen(null);
                                return;
                            }
                            if (caption.length > CHAR_LIMIT_WITH_BG) {
                                // return toast(`Thats too many characters for a background.\ ${caption.length}/130`, {
                                //   // icon: '🥴',
                                //   duration: 3000,
                                // });
                                setIsCantSwitchToBackgroundShowing(true);
                                return;
                            }
                            //@ts-ignore
                            setCurrentBackgroundChoosen(theme);
                        }} className={`${currentBackgroundChoosen === theme ? "border-2" : ""}  aspect-square border-[#585858] overflow-hidden shadow-md min-w-[32px] cursor-pointer flex items-center justify-center rounded-lg`}>
                                                            {theme.img && <img className="w-full h-full object-cover" src={theme.img}/>}
                                                        </div>);
                })}

                                        </div>;
        })}
                                </div>

                            </div>

                            {/* <button onClick={(e) => scroll(COLOR_CARD_WIDTH * 2)}>
<GrFormNext className="text-xl scale-150 cursor-pointer hover:text-gray-500 text-gray-400" />
</button> */}

                            <div className="flex items-center w-full justify-between px-2- mt-3">
                                <div className="flex gap-2 justify-start w-full text-2xl text-[#0D98BA]">
                                    <button onClick={e => {
            pictureInputRef.current?.click();
        }} className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#ffe26f3a]- active:bg-[#e5e5e5]">
                                        <HiOutlinePhotograph className="text-[#eb892e]"/>
                                    </button>
                                    <button onClick={e => setTimeout(() => setIsGifSelectorShowing(true), 100)} className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#6fc5ff3a]- active:bg-[#e5e5e5]">
                                        <MdOutlineGifBox />
                                    </button>
                                    <div onClick={e => {
            videoInputRef.current?.click();
        }} className="cursor-pointer transition-all p-1 rounded-full hover:bg-[#c2ff9c28]- active:bg-[#e5e5e5]">
                                        <IoVideocamOutline className="text-[#007600]"/>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <span ref={characterCountRef} className={`text-sm font-medium ${(isValidBackgroundPost() && CHAR_LIMIT_WITH_BG < caption.length) || (MediaFilesUtils.isMediaMode() && CHAR_LIMIT_WITH_MEDIA < caption.length) || (CHAR_LIMIT_WITHOUT_BG < caption.length) ? "text-red-600 font-bold" : ""}`}>{caption.length}/{isValidBackgroundPost() ? CHAR_LIMIT_WITH_BG : MediaFilesUtils.isMediaMode() ? CHAR_LIMIT_WITH_MEDIA : CHAR_LIMIT_WITHOUT_BG}</span>
                                </div>

                                <button onClick={e => {
            if (!canWriteMore()) {
                return;
            }
            if (caption.length < 1) {
                showModal({
                    type: 'error',
                    title: 'Empty Post',
                    description: 'Please write something before posting.',
                });
                return;
            }
            if (isValidBackgroundPost() && !currentBackgroundChoosen) {
                showModal({
                    type: 'error',
                    title: 'Background Required',
                    description: 'Please select a background for your post.',
                });
                return;
            }
            // Main logic
            if (isValidBackgroundPost() && currentBackgroundChoosen) {
                createBackgroundPost(caption, currentBackgroundChoosen["text"] ?? "#fff", currentBackgroundChoosen["img"] ? currentBackgroundChoosen["color"] : "", currentBackgroundChoosen["img"]);
            }
        }} className={`bg-[#007600] py-1 px-4 text-white rounded-xl font-semibold text-base`}>
                                    Post
                                </button>
                            </div>

                            {/* <div>hiu</div> */}

                            <div className="pt-5 flex flex-col gap-2">
                                {<div onTransitionEnd={e => {
                //@ts-ignore
                if (Array.from(e.target.classList).includes("opacity-0")) {
                    //@ts-ignore
                    e.target.style.display = "none";
                }
            }} style={{
                display: `${(MediaFilesUtils.isMediaMode() ? CHAR_LIMIT_WITH_MEDIA : isValidBackgroundPost() ? CHAR_LIMIT_WITH_BG : CHAR_LIMIT_WITHOUT_BG) < caption.length ? 'block' : ''}`
            }} className={`transition-all duration-200 ${(MediaFilesUtils.isMediaMode() ? CHAR_LIMIT_WITH_MEDIA : isValidBackgroundPost() ? CHAR_LIMIT_WITH_BG : CHAR_LIMIT_WITHOUT_BG) < caption.length ? 'opacity-100' : 'opacity-0'}`}>
                                        <Caution text={isValidBackgroundPost() ? `To use a background, your post must be ${CHAR_LIMIT_WITH_BG} characters or fewer(Your current post has ${caption.length} characters)` : `Posts can't exceed ${MediaFilesUtils.isMediaMode() ? CHAR_LIMIT_WITH_MEDIA : CHAR_LIMIT_WITHOUT_BG} characters (Your current character count is ${caption.length})`}/>
                                    </div>}

                                {<div className={`transition-all duration-500 ${isCantSwitchToBackgroundShowing ? 'opacity-100' : 'opacity-0'}`}>
                                        <Caution text={`To use a background, your post must be ${CHAR_LIMIT_WITH_BG} characters or fewer(Your current post has ${caption.length} characters)`}/>
                                    </div>}
                            </div>
                        </section>
                    </section>


                </section>
            </main>
        </>);
};
const Caution = ({ text }) => {
    return <section className="w-full flex items-center justify-center-">
        <div className="w-[95%] py-3- px-2- rounded-md bg-red-200- flex items-center gap-3 justify-center bg-[#cb17173d]- border- border-red-700-">
            <IoMdAlert className="text-red-600 text-xl"/>
            <p className="text-sm leading-none- max-w-[80%]">{text}</p>
        </div>
    </section>;
};
export default NewPostPage;
//# sourceMappingURL=NewPostPage.jsx.map