import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { GrLogin } from "react-icons/gr";
import { MdNotificationsNone } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
const DesktopNav = () => {
    const isLoggedIn = true;
    return (<div className="flex justify-between items-center px-5 h-14 bg-[#1E3A8A] text-white">
            <Link href="/" className="text-2xl font-bold">
                Sportigon
            </Link>

            <div className="flex items-center gap-4">
                <div className="relative flex items-center bg-white rounded-full px-4 py-1 text-black">
                    <IoMdSearch className="text-xl"/>
                    <input className="bg-transparent outline-none ml-2" placeholder="Search"/>
                </div>

                {isLoggedIn ? (<>
                        <button>
                            <MdNotificationsNone className="text-2xl"/>
                        </button>
                        <button>
                            <RiLogoutCircleLine className="text-2xl"/>
                        </button>
                        <img src="https://i.pravatar.cc/32" className="w-8 h-8 rounded-full" alt="Profile"/>
                    </>) : (<>
                        <button className="flex items-center gap-2">
                            <AiOutlineLogin />
                            Login
                        </button>
                        <button className="flex items-center gap-2">
                            <GrLogin />
                            Sign Up
                        </button>
                    </>)}
            </div>
        </div>);
};
export default DesktopNav;
//# sourceMappingURL=DesktopNav.jsx.map