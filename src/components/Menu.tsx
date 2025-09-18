// import Link from "next/link";
// import { GoArrowLeft, GoHome, GoHomeFill } from "react-icons/go";
// import { CiLogout } from "react-icons/ci";
// import { MdBusinessCenter, MdFeedback, MdOutlineBusinessCenter, MdOutlineFeedback, MdOutlineScoreboard, MdOutlineSportsScore, MdScoreboard } from "react-icons/md";
// import { IoChatbubbleEllipses, IoLogOut, IoLogOutOutline } from "react-icons/io5";
// import { FaNewspaper } from "react-icons/fa";
// import { usePathname, useRouter } from "next/navigation";
// import { RiFeedbackLine, RiMessage3Fill, RiMessage3Line, RiP2pLine } from "react-icons/ri";
// import { TbLogout } from "react-icons/tb";
// import { JSX, ReactNode, useEffect, useRef, useState } from "react";
// import { FeedbackIcon, HomeIcon, LogoutIcon, MessageIcon, PartnerWUIcon, ScoreIcon } from "@/components/ICONS";

// const Menu = ({ isMenuOpened, setIsMenuOpened, isLoggedIn }: { isMenuOpened: boolean; setIsMenuOpened: (open: boolean) => void; isLoggedIn: boolean; }) => {
//     const LinkItemWithIcon = ({ href, icon, activeIcon, bedge = null, children }: { href: string, icon: JSX.Element, activeIcon: JSX.Element, bedge?: number | null, children: ReactNode }) => {
//         const [isHovering, setIsHovering] = useState(false);
//         const [isBackgroundActive, setIsBackgroundActive] = useState(false);
//         const pathname = usePathname();

//         let isActive = false;

//         if (pathname == href) {
//             isActive = true;
//         }

//         const router = useRouter();

//         return (
//             <button
//                 onClick={(e) => {
//                     setIsBackgroundActive(true)
//                     setTimeout(() => {
//                         router.push(href)
//                         setIsMenuOpened(false);
//                         setTimeout(() => {
//                             setIsBackgroundActive(false)
//                         }, 200);
//                     }, 350);
//                 }}
//                 className={`flex items-center active:bg-[#edf0f3] gap-2 px-2 py-3 mr-3 text-lg leading-none tracking-wider ${isBackgroundActive ? "bg-[#0D98BA]/20" : isActive && "bg-[#edf0f3] "}`}
//                 onTouchStart={e => {
//                     setIsHovering(true);
//                     // button.classList.add("bg-[#007600]/30")
//                     setTimeout(() => {
//                         setIsHovering(false);
//                         // button.classList.remove("bg-[#007600]/30")

//                     }, 300);

//                 }}
//             >
//                 {/* <div className="text-2xl text-black">{isActive ? activeIcon : icon}</div> */}
//                 <div className="text-2xl text-black">{icon}</div>
//                 <span className="text-black text-base font-rubik">{children}</span>

//                 {bedge &&
//                     <span className="w-5 h-5 flex items-center text-xs justify-center text-white bg-[#007600] rounded-full leading-none ">{bedge}</span>}
//             </button>
//         );
//     };

//     const mainView = useRef(null);
//     const menuWrapper = useRef(null);

//     useEffect(() => {
//         // if (mainView) {
//         //     if (!isMenuOpened) {
//         //         setTimeout(() => {
//         //             //@ts-ignore
//         //             mainView.current.style.display = "none"
//         //         }, 1000)
//         //     }
//         //     else {
//         //         //@ts-ignore
//         //         mainView.current.style.display = "flex"
//         //     }
//         // }


//         if (mainView) {
//             if (isMenuOpened) {
//                 // @ts-ignore
//                 mainView.current?.classList.remove("hidden")
//                 // @ts-ignore
//                 mainView.current?.classList.add("flex")
//             } else {
//                 setTimeout(() => {
//                     // @ts-ignore
//                     mainView.current?.classList.add("hidden")
//                     // @ts-ignore
//                     mainView.current?.classList.remove("flex")
//                 }, 1000);
//             }

//             setTimeout(() => {
//                 if (isMenuOpened) {
//                     // @ts-ignore
//                     mainView.current?.classList.remove("opacity-0")
//                     setTimeout(() => {
//                         // @ts-ignore
//                         menuWrapper.current?.classList.remove("-translate-x-full")
//                     }, 200);
//                 } else {
//                     setTimeout(() => {
//                         // @ts-ignore
//                         mainView.current?.classList.add("opacity-0")
//                     }, 100);
//                     // @ts-ignore
//                     menuWrapper.current?.classList.add("-translate-x-full")
//                 }

//             }, 50);
//         }

//     }, [isMenuOpened])


//     return (
//         <section
//             ref={mainView}
//             onClick={(e) => {
//                 //@ts-ignore
//                 if (e.target.tagName === "SECTION") {
//                     setIsMenuOpened(false);
//                 }
//             }}
//             className={`w-full h-[calc(100%-3.5rem)] fixed left-0 bottom-0 bg-black/60 z-[60] duration-500 opacity-0 transition-all`}
//         >
//             <div ref={menuWrapper}
//                 className={`ease-in-out transition-all w-[70%] h-full flex  flex-col bg-white py-3`}
//             >
//                 <div className="pl-3 ">

//                     {/* Divider */}

//                     <div className="flex flex-col gap-[2px]">
//                         <LinkItemWithIcon href="/" icon={<HomeIcon />} activeIcon={<GoHomeFill />}>
//                             Home
//                         </LinkItemWithIcon>

//                         <LinkItemWithIcon href="/scores" icon={<ScoreIcon />} activeIcon={<MdScoreboard />}>
//                             Scores
//                         </LinkItemWithIcon>
//                         {isLoggedIn && (
//                             <LinkItemWithIcon
//                                 href="/inbox"
//                                 bedge={6}
//                                 icon={

//                                     <MessageIcon />
//                                 }

//                                 activeIcon={<RiMessage3Fill />}
//                             >
//                                 Messages
//                             </LinkItemWithIcon>
//                         )}

//                         <Seprator />

//                         <LinkItemWithIcon href="/partner_with_us" icon={<PartnerWUIcon />} activeIcon={<MdBusinessCenter />}>
//                             Partner with Us
//                         </LinkItemWithIcon>

//                         <LinkItemWithIcon href="/feedback" icon={<FeedbackIcon />} activeIcon={<MdFeedback />}>
//                             Feedback
//                         </LinkItemWithIcon>

//                         <LinkItemWithIcon href="/logout" icon={<LogoutIcon />} activeIcon={<TbLogout />}>
//                             Logout
//                         </LinkItemWithIcon>
//                     </div>
//                 </div>

//                 <div className="h-full bg-[#edf0f3]"></div>

//                 <p className="text-black text-xs mt-3 px-4">
//                     By using our services, you agree to our{" "}

//                     <Link onClick={e => setIsMenuOpened(false)} href="/about/legal/policies#terms"><span className="text-[#0D98BA]">User Terms</span></Link> and{" "}
//                     <Link onClick={e => setIsMenuOpened(false)} href="/about/legal/policies#privacy"><span className="text-[#0D98BA]">Privacy Policy</span></Link>, including{" "}
//                     <Link onClick={e => setIsMenuOpened(false)} href="/about/legal/policies#cookies"><span className="text-[#0D98BA]">Cookie Use</span></Link>.
//                 </p>

//             </div>


//         </section>
//     );
// };

// const Seprator = () => {
//     return <div className="w-full border-b my-2" />;
// };

// export default Menu;



import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { JSX, useEffect, useRef, useState } from "react";

import {
    FeedbackIcon,
    HomeIcon,
    LogoutIcon,
    MessageIcon,
    PartnerWUIcon,
    ScoreIcon,
} from "@/components/ICONS";

import { GoHomeFill } from "react-icons/go";
import { MdBusinessCenter, MdFeedback, MdScoreboard } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

const Menu = ({
    isMenuOpened,
    setIsMenuOpened,
    isLoggedIn,
}: {
    isMenuOpened: boolean;
    setIsMenuOpened: (open: boolean) => void;
    isLoggedIn: boolean;
}) => {
    const pathname = usePathname();
    const router = useRouter();

    console.log(isLoggedIn);


    const LinkItemWithIcon = ({
        href,
        icon,
        activeIcon,
        bedge = null,
        children,
    }: {
        href: string;
        icon: JSX.Element;
        activeIcon: JSX.Element;
        bedge?: number | null;
        children: React.ReactNode;
    }) => {
        const isActive = pathname === href;

        return (
            <button
                onClick={() => {
                    router.push(href);
                    setIsMenuOpened(false);
                }}
                className={`flex items-center gap-2 px-2 py-3 mr-3 text-lg transition-colors rounded-md ${isActive ? "bg-[#edf0f3]" : "hover:bg-[#edf0f3]"
                    }`}
            >
                <div className="text-2xl text-black">{icon}</div>
                <span className="text-black text-base font-rubik">{children}</span>
                {bedge && (
                    <span className="ml-auto w-5 h-5 flex items-center justify-center text-xs text-white bg-[#007600] rounded-full">
                        {bedge}
                    </span>
                )}
            </button>
        );
    };

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isMenuOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpened]);

    return (
        <div
            className={`fixed  inset-0- z-[60] h-[calc(100%-3.5rem)] left-0 bottom-0 w-full transition-all duration-300 ${isMenuOpened ? "visible opacity-100" : "invisible opacity-0"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60"
                onClick={() => setIsMenuOpened(false)}
            />

            {/* Sidebar */}
            <div
                ref={menuRef}
                className={`absolute left-0 top-0 bottom-0 w-[70%] bg-white flex flex-col justify-between transition-transform duration-300 ease-in-out ${isMenuOpened ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-3 flex flex-col gap-[2px]">
                    <LinkItemWithIcon href="/" icon={<HomeIcon />} activeIcon={<GoHomeFill />}>
                        Home
                    </LinkItemWithIcon>

                    <LinkItemWithIcon href="/scores/football" icon={<ScoreIcon />} activeIcon={<MdScoreboard />}>
                        Scores
                    </LinkItemWithIcon>

                    {isLoggedIn && (
                        <LinkItemWithIcon
                            href="/inbox"
                            bedge={6}
                            icon={<MessageIcon />}
                            activeIcon={<RiMessage3Fill />}
                        >
                            Messages
                        </LinkItemWithIcon>
                    )}

                    <Seprator />

                    <LinkItemWithIcon href="/partner_with_us" icon={<PartnerWUIcon />} activeIcon={<MdBusinessCenter />}>
                        Partner with Us
                    </LinkItemWithIcon>

                    <LinkItemWithIcon href="/feedback" icon={<FeedbackIcon />} activeIcon={<MdFeedback />}>
                        Feedback
                    </LinkItemWithIcon>

                    {isLoggedIn && <LinkItemWithIcon href="/logout" icon={<LogoutIcon />} activeIcon={<TbLogout />}>
                        Logout
                    </LinkItemWithIcon>}
                </div>

                <div className="px-4 py-2 text-xs text-black bg-[#edf0f3]">
                    By using our services, you agree to our{" "}
                    <Link onClick={() => setIsMenuOpened(false)} href="/about/legal/policies#terms" className="text-[#0D98BA]">
                        User Terms
                    </Link>{" "}
                    and{" "}
                    <Link onClick={() => setIsMenuOpened(false)} href="/about/legal/policies#privacy" className="text-[#0D98BA]">
                        Privacy Policy
                    </Link>
                    , including{" "}
                    <Link onClick={() => setIsMenuOpened(false)} href="/about/legal/policies#cookies" className="text-[#0D98BA]">
                        Cookie Use
                    </Link>
                    .
                </div>
            </div>
        </div>
    );
};

const Seprator = () => <hr className="light" />;

export default Menu;