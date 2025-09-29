// "use client";
// import { useAuth } from "@/context/AuthContext";
// const ProfilePage = ({ username }: { username: string }) => {
//     const auth = useAuth();
//     const isMyProfile = auth.user ? auth.user.username === username : false;
//     return (
//         <div>ProfilePage: {username}</div>
//     )
// }
// export default ProfilePage
"use client";
// import SinglePostCard from "@/components/Posts/SinglePostCard";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IoAdd, } from "react-icons/io5";
import { useRouter } from "next/navigation";
import InteractionButton, { InteractionButtonSeparator } from "./interaction_botton.component";
import { Badge } from "./profile.components";
import PostsTab from "./Tabs/Posts";
import CommentsTab from "./Tabs/Comments";
import VideosTab from "./Tabs/Videos";
import SavedPostsTab from "./Tabs/SavedPosts";
import { PiShareFat } from "react-icons/pi";
import { TbCameraUp } from "react-icons/tb";
import UserAvatar from "../UserAvatar";
const ProfilePage = ({ username }) => {
    const [isMyProfile, setisMyProfile] = useState(true);
    const [isFollowing, setIsFollowing] = useState(false);
    const [currentTab, setCurrentTab] = useState("posts");
    const router = useRouter();
    // Goat Deck Data
    const goatDackRef = useRef(null);
    const [goatDackFullWidth, setGoatDackFullWidth] = useState(0);
    const [goatDackCurrentScrollPosition, setGoatDackCurrentScrollPosition] = useState(0);
    /// - Development perpose
    const coverPhoto = "";
    // const [favorites, setFavorites] = useState([
    //     {
    //         name: "Ronaldo",
    //         hasCrown: true,
    //         photo:
    //             "https://media.vov.vn/sites/default/files/styles/large/public/2023-08/roo.jpg",
    //     },
    //     {
    //         name: "Messi",
    //         photo:
    //             "https://media.cnn.com/api/v1/images/stellar/prod/230816151359-lionel-messi-inter-miami.jpg?c=16x9&q=h_720,w_1280,c_fill",
    //     },
    //     {
    //         name: "Mbappe",
    //         photo:
    //             "https://icdn.football-espana.net/wp-content/uploads/2023/06/Kylian-Mbappe-PSG-042922-169.jpg",
    //     },
    //     {
    //         name: "Neymar",
    //         photo: "https://i.eurosport.com/2023/08/08/3759267-76475269-640-480.jpg",
    //     },
    //     {
    //         name: "Haaland",
    //         photo:
    //             "https://i.guim.co.uk/img/media/738ce55b0210242ed89525dc7217389fcdd954f6/867_295_3097_1858/master/3097.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93c023f0b3182e74b5320381712d32d3",
    //     },
    //     {
    //         name: "Debruyne",
    //         photo:
    //             "https://images2.minutemediacdn.com/image/upload/c_crop,w_3946,h_2219,x_0,y_86/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01gtvkd1x49s2gddqzj2.jpg",
    //     },
    //     {
    //         name: "Kroos",
    //         photo:
    //             "https://i.eurosport.com/2020/05/15/2818998-58144988-2560-1440.jpg",
    //     },
    //     {
    //         name: "Rashford",
    //         photo:
    //             "https://staticg.sportskeeda.com/editor/2023/07/2a98b-16893358639379-1920.jpg?w=840",
    //     },
    //     {
    //         name: "Saka",
    //         photo:
    //             "https://talksport.com/wp-content/uploads/sites/5/2023/03/arsenals-english-midfielder-bukayo-saka-804253779.jpg",
    //     },
    //     {
    //         name: "R. James",
    //         photo:
    //             "https://e0.365dm.com/23/08/2048x1152/skysports-reece-james-chelsea_6250027.jpg",
    //     },
    //     {
    //         name: "Lewandowski",
    //         photo:
    //             "https://www.fcbarcelona.com/photo-resources/2022/11/02/85247947-27dc-488c-a6cb-d81c5e391559/09-ROBERT_LEWANDOWSKI.jpg?width=1200&height=750",
    //     },
    //     {
    //         name: "Gnabry",
    //         photo:
    //             "https://assets.bundesliga.com/tachyon/sites/2/2022/07/fcb_gnabry_1920.jpg?crop=0px,0px,1920px,1079px&fit=1140,1140",
    //     },
    //     {
    //         name: "Man City",
    //         photo:
    //             "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
    //     },
    //     {
    //         name: "Australia",
    //         photo:
    //             "/icons/countries/australia.png",
    //     },
    // ]);
    const favorites = [];
    useEffect(() => {
        if (!goatDackRef.current)
            return;
        setGoatDackFullWidth(goatDackRef.current.scrollWidth - goatDackRef.current.clientWidth);
    }, []);
    const FavoriteCard = ({ src, label, hasCrown = false }) => {
        return <div className="min-w-[4.8em]- min-w-[21vw] w-32 transition-all hover:shadow-[rgba(0,0,0,0.12)_0px_2px_8px_0px,rgba(0,0,0,0.16)_0px_0px_2px_0px] hover:scale-110 flex items-center relative justify-center aspect-square rounded border- overflow-hidden">
            <div className='w-full h-full absolute top-0 rounded left-0 bg-[#00000000] z-20 border-r-[0.1px]- inner-border-[1px] inner-border-[#e4e4e479] border-[#cfcfcfad] shadow-inner- shadow-white-'></div>

            <img className="w-full- h-full  object-cover" src={src} alt=""/>

            {hasCrown && <div className="bg-[#00000071] w-5 text-sm aspect-square leading-none absolute flex items-center justify-center rounded-md top-1 left-1"><span className="leading-none">👑</span></div>}

            <div className="w-full py-px backdrop-blur-sm flex text-white justify-center items-center absolute left-0 bottom-0 bg-[#00000071]">
                <span className="text-xs leading-none">{label}</span>
            </div>
        </div>;
    };
    return (<>
            {/* Main Page */}
            <main className="flex flex-col pb-[10%] md:pb-[3%] w-full lg:max-w-[33.33vw] scrollbar-none md:scrollbar-thin- scrollbar-track-white scrollbar-thumb-gray-100 scrollbar-corner-gray-200 overflow-y-auto overflow-hidden h-screen">
                <section className="w-full">
                    {/* Cover */}
                    <div className="w-full max-h-[20vh] relative overflow-hidden rounded-b-md">
                        <img className="w-full h-full " src={coverPhoto && coverPhoto.length > 0 ? coverPhoto : "/images/default_cover.svg"}/>

                        {(!coverPhoto || coverPhoto.length === 0) && (<div className="absolute w-full h-full bg-black/30 top-0 left-0 flex items-center justify-center">
                                {!isMyProfile && <span className="text-sm text-white/70 font-medium">No cover photo</span>}

                                {isMyProfile && (<button onClick={(e) => router.push("/edit")} className="text-[#2C2C2C] bg-[#B9C9C6] font-semibold text-lg flex items-center w-12 aspect-square justify-center rounded-full  transition-all duration-200 shadow-lg">
                                        <TbCameraUp />
                                    </button>)}

                            </div>)}
                    </div>

                    <div className="flex md:ml-2 w-full items-center md:ml-5- px-2 md:px-0 justify-between md:pr-5 -translate-y-10">
                        <section className="flex flex-col w-full items-center">
                            <div className="w-24 aspect-square relative border-2 border-white p-1 rounded-full shadow shadow-[#FDF105] --shadow-[rgba(0,0,0,0.12)_0px_2px_8px_0px,rgba(0,0,0,0.16)_0px_0px_2px_0px]- bg-gray-400- border-[#F61732]- bg-white aspect-square-">
                                {/* <div className="w-full flex items-center rounded-full justify-center h-full">
            <img
                onClick={(e) => setisMyProfile(!isMyProfile)}
                className="w-full h-full  p-2- object-cover rounded-full rounded-b-full-"
                src="https://c4.wallpaperflare.com/wallpaper/348/390/445/cristiano-ronaldo-kiev-ukraine-uefa-wallpaper-preview.jpg"
                alt=""
            />
        </div> */}

                                <UserAvatar username={username} profilePicture="" sizeInherit/>
                            </div>


                            <div className="flex flex-col items-center gap-1 mt-2">
                                <p className="text-xl font-bold text-[#1B1B1B]">Cristiano Ronaldo</p>
                                <p className="md:text-sm leading-3 text-base font-semibold- font-medium text-[#505050]">@7Ronaldo</p>
                            </div>
                        </section>
                    </div>


                </section>

                <div className="flex md:ml-2 flex-col items-center- -translate-y-7 px-2 md:px-0 pl-3- md:pl-6- gap-4">
                    <div className="flex items-center w-full justify-center gap-2">
                        {!isMyProfile && <>
                                <button className="bg-[#FFD600] px-5- py-1- w-24 h-8 rounded-lg text-black shadow font-medium">Follow</button>
                                <Link href="/inbox/jaana" className="bg-[#B9C9C6] flex items-center justify-center font-medium px-5- py-1- w-24 h-8 rounded-lg text-[#2C2C2C] shadow">Message</Link>
                            </>}

                        {isMyProfile && <>
                                <Link href="/edit" className="bg-[#B9C9C6] underline flex items-center justify-center font-medium px-5- py-1- w-16 h-8 rounded-lg text-[#2C2C2C] shadow">Edit</Link>
                                <button className="w-9 aspect-square bg-[#B9C9C6] text-[#2C2C2C] rounded-full flex items-center justify-center text-xl">
                                    <PiShareFat />
                                </button>

                            </>}
                    </div>

                    <p className="text-[0.93rem]- leading-5 text-center pl-3- bg-[#f5f5f5]- bg-[#EDF5F2] text-[#2C2C2C] w-full- p-2 rounded-lg italic ">
                        Ronaldo Always! Living and breathing football. Ronaldo&#39;s biggest supporter.
                    </p>


                    <div className="flex items-center gap-4- w-full overflow-auto scrollbar-none justify-between-">
                        <Badge logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/800px-Borussia_Dortmund_logo.svg.png" title="Dortmund Fan" subtitle="since 2004"/>

                        <Badge icon="👑" title="Favorite" subtitle="Ronaldo" diraction="c"/>

                        <Badge icon="🛡️" title="Badge" diraction="r" subtitle="Veteran"/>
                    </div>


                </div>

                <section className="flex md:ml-2 items-center border-b- pb-3 mb-2 border-b-[#EDF5F2]  mt-6 -translate-y-8 overflow-x-auto- px-2 md:px-0 pl-3- md:pl-6- gap-2- justify-between">
                    <InteractionButton name="Followers" numbers="559K" href="/sdfsd/followers"/>
                    <InteractionButtonSeparator />
                    <InteractionButton name="Following" numbers="109" href="/sdfsd/following" diraction="c"/>
                    <InteractionButtonSeparator />
                    <InteractionButton name="Posts" numbers="245" diraction="r"/>
                </section>



                <div className="-translate-y-8 ml-3- px-2">

                    {/* <button onClick={e => router.push("/m/edit")} className="text-xs bg-gradient-to-br text-white from-[#FCB300] to-[#F61732] font-medium w-fit px-2 py-1 rounded-md">Join GOAT Squad <span className="text-sm">🏆🎖</span></button> */}
                    <div className="h-px w-full bg-black- shadow- bg-black/10- border-b border-[#D4E2DF]"></div>

                </div>

                <div className="md:-translate-y-7 md:ml-2 -translate-y-3">
                    <div className="flex flex-col border-x- px-2">
                        {/* <span className="px-2- uppercase font-bold text-[#007600] mb-1">Goat Deck</span> */}
                        {/* <button onClick={e => router.push("/m/edit")} className="text-xs bg-gradient-to-br text-white from-[#FCB300] to-[#F61732] font-medium w-fit px-2 py-1 mb-1 rounded-md">Join GOAT Squad <span className="text-sm">🏆🎖</span></button> */}
                        <div className={`flex items-center gap-1 text-[#1F1F1F] ${!isMyProfile && favorites.length == 0 ? "" : "mb-2"}`}>
                            {isMyProfile && <button className="w-8 aspect-square bg-[#D0D0D0] rounded-full flex items-center justify-center mr-1">
                                <IoAdd className="text-[#1F1F1F] text-2xl"/>
                            </button>}

                            <span className="font-medium text-lg text-[#2C2C2C]">Favorites</span>
                        </div>


                        <div className="w-full flex items-center relative">
                            <div className={`w-px shadow-prev transition-all duration-150 ${goatDackCurrentScrollPosition == 0 ? "opacity-0" : "opacity-100"} shadow-white top-0 shadow-black- left-0 h-12- h-full -translate-x-1 aspect-square- bg-white absolute z-30`}></div>
                            <div className={`w-px shadow-prev transition-all duration-150 ${goatDackCurrentScrollPosition == goatDackFullWidth ? "opacity-0" : "opacity-100"}  shadow-white top-0 shadow-black- right-0 h-12- h-full translate-x-1 aspect-square- bg-white absolute z-30`}></div>

                            <div ref={goatDackRef} onScroll={e => {
            // console.log(e.target.scrollLeft);
            // @ts-ignore
            setGoatDackCurrentScrollPosition(Math.floor(e.target.scrollLeft));
            // @ts-ignore
            setGoatDackFullWidth(Math.floor(e.target.scrollWidth - e.target.clientWidth));
        }} className="flex px-3- pb-3 overflow-x-auto overflow-y-visible max-w-full md:px-0 md:pr-2 mt-1- gap-3 md:gap-16- justify-between- scrollbar-thin md:scrollbar-none  scrollbar-track-[#ffffff71] scrollbar-thumb-[#ffffff71] scrollbar-corner-gray-200">

                                {favorites.map((player, i) => {
            return <FavoriteCard key={i} hasCrown={player.hasCrown} label={player.name} src={player.photo}/>;
        })}

                                <p className={`leading-5 ${!isMyProfile ? "italic text-[#7D9491]" : ""}`}>{isMyProfile ? "Add your favorite players and teams. They will be displayed on your profile." : `@${username} hasn't added any favorites.`}</p>


                            </div>
                        </div>
                    </div>

                    {/* TAB Navigation Bar */}
                    {/* <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} /> */}
                    <TabsView isMyProfile={isMyProfile} currentTab={currentTab} setTab={setCurrentTab}/>

                    {/* Tabs Content */}
                    <div className="flex flex-col w-full min-h-[40vh]- h-full mt-3 px-2">
                        {currentTab === "posts" && <PostsTab username={username} isMyProfile={isMyProfile}/>}
                        {currentTab === "comments" && <CommentsTab username={username} isMyProfile={isMyProfile}/>}
                        {currentTab === "videos" && <VideosTab username={username} isMyProfile={isMyProfile}/>}
                        {currentTab === "saved posts" && <SavedPostsTab username={username} isMyProfile={isMyProfile}/>}
                    </div>
                </div>
            </main>
        </>);
};
const TabsView = ({ isMyProfile, currentTab, setTab }) => {
    const TabItem = ({ name, icon, onClick, isActive }) => {
        return <button onClick={onClick} className={`flex items-center font-medium rounded-xl px-3 py-1 justify-center gap-1 ${isActive ? 'bg-[#0CAC0B] text-white' : 'text-[#3D5553] bg-[#D4E2DF]'}`}>
            <span className="text-base whitespace-nowrap text-nowrap">{name}</span>
        </button>;
    };
    return <div className={`flex pt-3 px-2  ${isMyProfile ? "justify-between gap-3" : "gap-5"}  border-[rgba(0,0,0,0.2)] scrollbar-none w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-[#ffffff00] scrollbar-corner-gray-200`}>
        <TabItem name="Posts" onClick={e => setTab("posts")} isActive={currentTab === "posts"}/>
        <TabItem name="Comments" isActive={currentTab === "comments"} onClick={e => setTab("comments")}/>
        <TabItem name="Videos" isActive={currentTab === "videos"} onClick={e => setTab("videos")}/>
        {isMyProfile && <TabItem name="Saved Posts" isActive={currentTab === "saved posts"} onClick={e => setTab("saved posts")}/>}
    </div>;
};
export default ProfilePage;
//# sourceMappingURL=ProfilePage.jsx.map