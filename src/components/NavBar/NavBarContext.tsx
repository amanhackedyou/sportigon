"use client"

import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import { TabsView } from "./TabView";

// 1. Define the context type
interface NavBarContextType {
    showNavBar: boolean;
    isNavVisible: boolean;
    isTabVisible: boolean;
    scrollDir: "up" | "down" | null;
}

// 2. Create the context with `undefined` and use runtime check in hook
const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

// 3. Hook to use context safely
export const useNavBarContext = (): NavBarContextType => {
    const context = useContext(NavBarContext);
    if (!context) {
        throw new Error("useNavBarContext must be used within a NavBarProvider");
    }
    return context;
};

// 4. Props type
interface NavBarProviderProps {
    children: ReactNode;
}

export const NAVBAR_WHITELIST_PAGES = ["", "/", "/notifications", "/new"];

// 5. Provider component
export const NavBarProvider = ({ children }: NavBarProviderProps) => {
    const pathname = usePathname();
    const allowedPaths = NAVBAR_WHITELIST_PAGES;
    const isFeedPage = pathname === "" || pathname === "/";
    const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);

    const showNavBar = allowedPaths.includes(pathname);

    const mainRef = useRef<HTMLDivElement>(null);


    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isTabVisible, setIsTabVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = mainRef.current?.scrollTop || 0;


        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsTabVisible(false); // Scroll down
        } else {
            setIsTabVisible(true); // Scroll up
        }

        setIsNavVisible(false);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.addEventListener('scroll', handleScroll);

            const resetHandle = setTimeout(() => {
                setIsNavVisible(true); // Reset visibility after scroll ends
            }, 100);

            return () => {
                mainRef.current?.removeEventListener('scroll', handleScroll);
                clearTimeout(resetHandle);

            };
        }
    }, [lastScrollY, mainRef]);



    return (
        <NavBarContext.Provider value={{ scrollDir, showNavBar, isNavVisible, isTabVisible }}>
            {showNavBar && <NavBar isNavVisible={isNavVisible} />}
            {showNavBar && isNavVisible ? <div
                ref={mainRef}
                className={`h-full w-full overflow-auto ${showNavBar ? "pt-14 md:pt-16" : ""}`}
            >
                {
                    isFeedPage && <TabsView />
                }
                <div className={`w-full h-full ${showNavBar && isFeedPage ? "pt-8" : ""}`}>
                    {children}
                </div>
            </div> : children}
        </NavBarContext.Provider>
    );
};
