"use client";

import { useNavBarContext } from "./NavBarContext";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = ({ isNavVisible }: { isNavVisible: boolean }) => {
    const { showNavBar } = useNavBarContext();


    return (
        <nav
            className={`
            w-full h-14 fixed top-0 left-0 z-40
            flex flex-col justify-center
            transition-all duration-500
            
            text-white
            ${!showNavBar ? 'hidden' : ''}
            ${!isNavVisible ? 'bg-[#41cd6d]/20 backdrop-blur-sm' : 'bg-[#41cd6d]'}
          `}
        >
            <div className="hidden md:block">
                <DesktopNav />
            </div>
            <div className="md:hidden">
                <MobileNav />
            </div>
        </nav>
    );
};

export default NavBar;
