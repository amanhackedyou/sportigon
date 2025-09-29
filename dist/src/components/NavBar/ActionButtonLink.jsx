"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
const ActionButtonLink = ({ href, children, badge = null }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(false);
    }, [pathname]);
    const handleClick = () => {
        if (pathname === href) {
            setIsActive(true);
            setTimeout(() => setIsActive(false), 400);
        }
        setTimeout(() => router.push(href), 300);
    };
    return (<button onClick={handleClick} className={`relative w-10 h-10 rounded-full flex items-center justify-center ${isActive ? "bg-[#ff4500]/20" : ""}`}>
            {badge && (<span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {badge}
                </span>)}
            <span className="text-white text-2xl">{children}</span>
        </button>);
};
export default ActionButtonLink;
//# sourceMappingURL=ActionButtonLink.jsx.map