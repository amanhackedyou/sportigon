"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";

import { SearchIcons, MessageIcons, NotificationIcons } from "@/components/ICONS"; // Update with your icons path
import { NAVBAR_WHITELIST_PAGES } from "./NavBarContext";
import { useAuth } from "@/context/AuthContext";
import Menu from "../Menu";
import UserAvatar from "../UserAvatar";

interface MobileNavProps {
    hasBackButton?: boolean;
    hasActionButtons?: boolean;
    hasSearchIcon?: boolean;
    hasProfile?: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
    hasBackButton = false,
    hasActionButtons = true,
    hasSearchIcon = true,
    hasProfile = true,
}) => {
    const router = useRouter();
    const pathname = usePathname();

    // Contexts
    const auth = useAuth();

    //States
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const isLoggedIn = auth.user ? true : false;

    const showNavBar = NAVBAR_WHITELIST_PAGES.includes(pathname);

    if (!showNavBar) return null;

    return (
        <>
            <Menu
                isLoggedIn={isLoggedIn}
                isMenuOpened={isMenuOpened}
                setIsMenuOpened={setIsMenuOpened}
            />
            <div className="flex md:hidden items-center justify-between py-1 pr-4 pl-1">
                {/* Left Section */}
                <div className="flex items-center gap-1">
                    {hasBackButton ? (
                        <GoArrowLeft
                            onClick={() => router.back()}
                            className="text-2xl text-[#4A4A4A] mb-[2.8px] cursor-pointer"
                        />
                    ) : (
                        <button
                            onClick={() => setIsMenuOpened(!isMenuOpened)}
                            className="aspect-square w-9 rounded-full flex justify-center items-center"
                        >
                            <RxHamburgerMenu className="text-2xl" />
                        </button>
                    )}

                    <img
                        className="h-7 w-full cursor-pointer"
                        src="/icons/logo.svg"
                        alt="Logo"
                    />
                </div>

                {/* Right Section */}
                {hasActionButtons && (
                    <div
                        className={`flex items-center ${isLoggedIn ? "" : "gap-3"} text-[#475569]`}
                    >
                        {hasSearchIcon && (
                            <COMPONENTS.PHONE.ActionButtonLink href="/search">
                                <SearchIcons />
                            </COMPONENTS.PHONE.ActionButtonLink>
                        )}

                        {!isLoggedIn ? (
                            <Link
                                href="/auth/login"
                                className="bg-[#ff4500] py-1 px-2 rounded-full text-white font-semibold"
                            >
                                Login
                            </Link>
                        ) : (
                            <>
                                <COMPONENTS.PHONE.ActionButtonLink badge={3} href="/inbox">
                                    <MessageIcons />
                                </COMPONENTS.PHONE.ActionButtonLink>

                                <COMPONENTS.PHONE.ActionButtonLink badge={8} href="/notifications">
                                    <NotificationIcons />
                                </COMPONENTS.PHONE.ActionButtonLink>

                                {hasProfile && (
                                    <Link className="ml-1" href={`/@${auth.user?.username}`}>
                                        {/* <Image
                                            width={60}
                                            height={60}
                                            className="w-8 aspect-square border rounded-full object-cover object-center"
                                            src={auth.user?.profilePicture || ""}
                                            alt="Profile picture"
                                        /> */}

                                        <UserAvatar
                                            username={auth.user?.username || ""}
                                            profilePicture={auth.user?.profilePicture}
                                            size={32} />
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};



const COMPONENTS = {
    PHONE: {
        ActionButtonLink: ({ href, children, badge = null }: { href: string; children: ReactNode; badge?: number | null; }) => {
            let router = useRouter();

            const [isActive, setIsActive] = useState(false);

            const pathname = usePathname();
            const [prevPath, setPrevPath] = useState(pathname);

            useEffect(() => {

                if (prevPath !== pathname) {
                    console.log("Page changed to:", pathname);
                    setIsActive(false);
                    // Run your callback function here
                    setPrevPath(pathname);
                }

                const handleReload = () => {
                    // console.log("Hiii");

                    setIsActive(false)
                }

                window.addEventListener("beforeunload", handleReload);

                return () => {
                    window.removeEventListener("beforeunload", handleReload);
                };

            }, [pathname, prevPath]);


            return (
                <button
                    onClick={e => {
                        setIsActive(true);
                        if (pathname === href) {
                            setTimeout(() => {
                                setIsActive(false);
                            }, 400);
                        }



                        setTimeout(() => {
                            router.push(href);
                        }, 500);
                    }}
                    className={`bg-[#f9f9f9]- text-white transition-all active:bg-[#c4c4c4] duration-200- ${isActive ? "bg-[#FF4500]/30" : "bg-transparent-"}  relative aspect-square w-10 flex items-center justify-center rounded-full`}

                >
                    {badge && (
                        <span className="bg-[#FF4500] text-white font-medium leading-none border-2 border-white absolute top-[2px] right-[2px] text-[10px] h-[16px] w-[22px] aspect-square- flex items-center justify-center rounded-full">
                            {badge}
                        </span>
                    )}
                    <div className="text-2xl text-white">{children}</div>
                </button>
            );
        },
    },
};



export default MobileNav;
