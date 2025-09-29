"use client";
import React, { createContext, useContext, useEffect, useRef, useState, } from "react";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import { TabsView } from "./TabView";
// 2. Create the context with `undefined` and use runtime check in hook
const NavBarContext = createContext(undefined);
// 3. Hook to use context safely
export const useNavBarContext = () => {
    const context = useContext(NavBarContext);
    if (!context) {
        throw new Error("useNavBarContext must be used within a NavBarProvider");
    }
    return context;
};
export const NAVBAR_WHITELIST_PAGES = ["", "/", "/notifications", "/new"];
// 5. Provider component
export const NavBarProvider = ({ children }) => {
    const pathname = usePathname();
    const allowedPaths = NAVBAR_WHITELIST_PAGES;
    const isFeedPage = pathname === "" || pathname === "/";
    const [scrollDir, setScrollDir] = useState(null);
    const showNavBar = allowedPaths.includes(pathname);
    const mainRef = useRef(null);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isTabVisible, setIsTabVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const handleScroll = () => {
        const currentScrollY = mainRef.current?.scrollTop || 0;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsTabVisible(false); // Scroll down
        }
        else {
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
    return (<NavBarContext.Provider value={{ scrollDir, showNavBar, isNavVisible, isTabVisible }}>
            {showNavBar && <NavBar isNavVisible={isNavVisible}/>}
            {showNavBar && isNavVisible ? <div ref={mainRef} className={`h-full w-full overflow-auto ${showNavBar ? "pt-14 md:pt-16" : ""}`}>
                {isFeedPage && <TabsView />}
                <div className={`w-full h-full ${showNavBar && isFeedPage ? "pt-8" : ""}`}>
                    {children}
                </div>
            </div> : children}
        </NavBarContext.Provider>);
};
//# sourceMappingURL=NavBarContext.jsx.map