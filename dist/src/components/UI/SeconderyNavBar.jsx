"use client";
import { BackArrowIcon } from "@/components/ICONS";
import { useRouter } from "next/navigation";
const SeconderyNavBar = ({ title, hasBottomLine = true, actions = [] }) => {
    const navigator = useRouter();
    return (<section className={`flex items-center w-full sticky z-50 justify-between left-0 bg-white py-1 top-0 px-3 ${hasBottomLine ? "border-b border-[#D4E2DF]" : ""} `}>
            <div className="flex items-center gap-1 md:gap-5">
                {/* <GoArrowLeft
  onClick={(e) => navigator.back()}
  className="text-3xl text-gray-700- bg-red-300 text-black cursor-pointer"
/> */}

                <BackArrowIcon onClick={() => navigator.back()}/>
                <h1 className="text-[20px] font-bold text-black text-[#4A4A4A]-">{title}</h1>
            </div>

            <div className="flex items-center gap-2">
                {actions.map((actionWidget, i) => {
            return <div key={i}>{actionWidget}</div>;
        })}
            </div>
        </section>);
};
export default SeconderyNavBar;
//# sourceMappingURL=SeconderyNavBar.jsx.map