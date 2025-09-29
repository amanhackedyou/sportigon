import { useNavBarContext } from "./NavBarContext";
import { TbBorderAll } from "react-icons/tb";
import { IoFootball } from "react-icons/io5";
import { CiBasketball } from "react-icons/ci";
import { PiCricket } from "react-icons/pi";
import { LiaTableTennisSolid } from "react-icons/lia";
import { useFeed } from "@/context/FeedContext";
export const TabsView = () => {
    const { isTabVisible } = useNavBarContext();
    const feed = useFeed();
    // -------------------------------------------------------------------
    const currentTab = feed.currentTab;
    const setTab = (tab) => {
        feed.setCurrentTab(tab);
    };
    const TabItem = ({ name, icon, onClick, isActive }) => {
        return <button onClick={onClick} className="flex flex-col gap-1- overflow-hidden- w-fit- px-3-">
            <div className={`flex items-center font-medium py-1- rounded- select-none px-3 justify-center gap-1 ${isActive ? 'text-[#ff4500]' : 'text-[#475569]'}`}>
                <span className="text-base">{name}</span>
                <span className="text-xl">{icon}</span>
            </div>

            <div className={`h-1 bg-[#ff4500] transition-all rounded-full translate-y-[40%] ${isActive ? 'w-full' : 'w-0 '}`}></div>
        </button>;
    };
    return <div className={`${isTabVisible ? 'opacity-100 scale-100- translate-y-0' : 'opacity-0 scale-10- translate-y-[-30px]'} transition-all duration-500- flex items-center fixed bg-white z-10  pt-3- pt-px px-2 border-[rgba(0,0,0,0.1)] border-b w-full overflow-x-auto overflow-y-hidden py-2- scrollbar-none scrollbar-thin scrollbar-track-white scrollbar-thumb-[#ffffff40] scrollbar-corner-gray-200`}>
        <TabItem name="All" icon={<TbBorderAll />} onClick={e => setTab("all")} isActive={currentTab === "all"}/>
        <TabItem name="Football" icon={<IoFootball />} isActive={currentTab === "football"} onClick={e => setTab("football")}/>
        <TabItem name="Cricket" icon={<PiCricket />} isActive={currentTab === "cricket"} onClick={e => setTab("cricket")}/>
        <TabItem name="Basketball" icon={<CiBasketball />} isActive={currentTab === "basketball"} onClick={e => setTab("basketball")}/>
        <TabItem name="Tennis" icon={<LiaTableTennisSolid />} isActive={currentTab === "tennis"} onClick={e => setTab("tennis")}/>
    </div>;
};
//# sourceMappingURL=TabView.jsx.map