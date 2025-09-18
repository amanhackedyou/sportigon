'use client'

import OverlayWindowTemplate from '@/components/OverlayWindowTemplate';
import SeconderyNavBar from '@/components/UI/SeconderyNavBar'
import CountriesData from '@/utils/countries';
// import { useImageCropperContext } from '@/context/ImageCropperContext';
import Countries from '@/utils/countries';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { FaCameraRetro, FaCheck, FaPlus } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go'
import { IoIosArrowDown, IoMdArrowRoundBack } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import BigButton from '../BigButton';

const SettingsPage = () => {
    const [tab, setTab] = useState("profile");

    const [description, setDescription] = useState("");
    const [profilePictureSrc, setProfilePictureSrc] = useState("https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2158797838.jpg?c=16x9&q=h_833,w_1480,c_fill")
    const [coverPhoto, setCoverPhoto] = useState("https://tmssl.akamaized.net//images/foto/galerie/cristiano-ronaldo-al-nassr-2023-1692731063-114594.jpg?lm=1692731118")
    const [coverPhotoEditFile, setCoverPhotoEditFile] = useState<File | null>(null);
    const DESCRIPTION_MAX_LENGTH = 90;


    // Favorite Player Data
    const [favoritePlayer, setFavoritePlayer] = useState<(any)[]>([]);
    const [
        isSelectFavoritePlayerWindowOpened,
        setIsSelectFavoritePlayerWindowOpened,
    ] = useState(false);

    // Favorite CLub Data
    const [favoriteClubs, setFavoriteClubs] = useState<(any)[]>([]);
    const [
        isSelectFavoriteClubsWindowOpened,
        setIsSelectFavoriteClubsWindowOpened,
    ] = useState(false);

    // Countries Data
    const [selectedCountries, setSelectedCountries] = useState<(any)[]>([]);
    const [isSelectCountriesWindowOpened, setIsSelectCountriesWindowOpened] =
        useState(false);





    // Edit account
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    // ~ Password Window Login
    const [isChangePasswordWindowOpened, setIsChangePasswordWindowOpened] =
        useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const closePasswordWindow = () => {
        setIsChangePasswordWindowOpened(false);
    };

    const openPasswordWindow = () => {
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setIsChangePasswordWindowOpened(true);
    };

    const isValidPasswords = () => {

        if (oldPassword.length < 4 || newPassword.length < 4 || confirmNewPassword.length < 4 || newPassword !== confirmNewPassword) {
            return false;
        }

        return true;
    }

    const countries = CountriesData;

    // Refs
    const profilePictureUploaderRef = useRef<HTMLInputElement | null>(null);
    const coverPhotoUploaderRef = useRef<HTMLInputElement | null>(null);



    return (
        <div className='w-full h-full'>
            {/* <SeconderyNavBar title="Edit your account and profile" /> */}
            {
                coverPhotoEditFile && (
                    <CoverPhotoCropingWindow file={coverPhotoEditFile} onClose={() => setCoverPhotoEditFile(null)} onCropped={url => setCoverPhoto(url)} />
                )
            }

            {isSelectFavoritePlayerWindowOpened && (
                <SelectFavoritePlayerWindow
                    onPlayerSelect={(player: any) => {
                        setFavoritePlayer(player);
                        setIsSelectFavoritePlayerWindowOpened(false);
                    }}
                    setIsSelectFavoritePlayerWindowOpened={
                        setIsSelectFavoritePlayerWindowOpened
                    }
                    alreadySelectedPlayers={favoritePlayer}
                />
            )}


            {isSelectFavoriteClubsWindowOpened && (
                <SelectFavoriteClubsWindow
                    onClubsSelect={(club: any) => {
                        setFavoriteClubs(club);
                        setIsSelectFavoriteClubsWindowOpened(false);
                    }}
                    alreadySelectedClubs={favoriteClubs}
                    setIsSelectFavoriteClubsWindowOpened={
                        setIsSelectFavoriteClubsWindowOpened
                    }
                />
            )}

            {isSelectCountriesWindowOpened && (
                <SelectFavoriteCountriesWindow
                    onCountriesSelect={(countries: any) => {
                        setSelectedCountries(countries);

                        setIsSelectCountriesWindowOpened(false);
                    }}
                    countries={countries}
                    alreadySelectedCountries={selectedCountries}
                    setIsSelectFavoriteCountriesWindowOpened={setIsSelectCountriesWindowOpened}
                />
            )}


            <input ref={profilePictureUploaderRef} className='hidden' type="file" accept='image/*' onChange={async e => {
                //@ts-ignore
                let file = e.currentTarget.files[0];
                if (!file) return;

                // console.log(file);

                let arrayBuffer = await file.arrayBuffer()

                const blob = new Blob([arrayBuffer], { type: file.type || 'image/png' })
                const blobUrl = URL.createObjectURL(blob);

                setProfilePictureSrc(blobUrl);

                // let reader = new FileReader();

                // reader.onload = (event) => {
                //     let arrayBuffer = event.target.result;
                //     // Use the imgUrl as needed, e.g., assign it to an input field:
                //     // document.getElementById('image-url-input').value = imgUrl;


                //     const blob = new Blob([arrayBuffer], { type: file.type || 'image/png' })
                //     const blobUrl = URL.createObjectURL(blob);

                //     setProfilePictureSrc(blobUrl);




                //     // imageCropperContext.startCropper({
                //     //     imgSrc: arrayBuffer,
                //     //     onCropped: (croppedSrc) => {
                //     //         setProfilePictureSrc(croppedSrc);
                //     //     }
                //     //     // imgSrc: "/imgs/payal.jpg"
                //     // })

                // };

                // reader.readAsDataURL(file);

            }} />

            <input ref={coverPhotoUploaderRef} className='hidden' type="file" accept='image/*' onChange={async e => {
                //@ts-ignore
                let file = e.currentTarget.files[0];
                if (!file) return;

                setCoverPhotoEditFile(file)

                // let arrayBuffer = await file.arrayBuffer()

                // const blob = new Blob([arrayBuffer], { type: file.type || 'image/png' })
                // const blobUrl = URL.createObjectURL(blob);

                // setCoverPhoto(blobUrl);

            }} />

            {/* <nav className='flex items-center gap-2 p-2 border-b'>
                <GoArrowLeft
                    onClick={(e) => navigator.back()}
                    className="text-2xl text-gray-600- text-black cursor-pointer"
                />
                <span className='leading-none text-base font-semibold text-gray-700- text-black'>Edit your account and profile</span>
            </nav> */}

            <SeconderyNavBar title="Edit profile" />

            <section className='px-2- mt-5 w-full'>
                <TabView currentTab={tab} setTab={setTab} />
            </section>

            {
                tab === 'profile' ?
                    <section className='flex flex-col mt-px overflow-auto h-full'>
                        <div className="w-full max-h-[20vh]- h-[20vh]- aspect-video px-2 py-px relative overflow-hidden- rounded-b-md">
                            <div className='w-full relative h-full  overflow-hidden'>
                                <img
                                    className="w-full h-full object-cover rounded-lg -border-[0.7px] border-[#c1c1c1]- -shadow-[rgba(0,0,0,0.1)_0px_0px_8px_0px,rgba(0,0,0,0.1)_0px_0px_2px_0px]  opacity-[0.1]- p-px- border-[#e5e5e5]-  object-center"
                                    // src="https://assets.goal.com/images/v3/blt2aaca933046f8b00/Cristiano%20Ronaldo%20Portugal%202024%20(4).jpg?auto=webp&format=pjpg&width=3840&quality=60"
                                    src={coverPhoto}
                                />

                                <div className='w-full h-full absolute top-0 rounded-lg left-0 bg-[#00000000] border-r-[0.1px] inner-border-[1px] inner-border-[#e4e4e479] border-[#cfcfcfad] shadow-inner- shadow-white-'></div>
                            </div>

                            <button onClick={e => coverPhotoUploaderRef.current?.click()} className='bg-[#00000071] backdrop-blur absolute p-[0.4rem] right-4 bottom-2 z-20 rounded-full text-xs text-white'><FaCameraRetro /></button>


                            <div className='absolute -bottom-10 z-50- left-0 w-full px-4'>
                                <div className=' w-20 aspect-square relative rounded-full overflow-hidden- border-[4px] border-white shadow'>
                                    <img
                                        className="w-full h-full rounded-full  p-2- object-cover rounded-b-full-"
                                        src={profilePictureSrc}
                                        alt=""
                                    />

                                    <button onClick={e => {
                                        profilePictureUploaderRef.current?.click()
                                    }} className='bg-[#00000071] backdrop-blur absolute p-[0.4rem] -right-0 -bottom-0 z-20 rounded-full text-xs text-white'><FaCameraRetro /></button>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 pt-14  px-2'>
                            {/* <EditTextField
                                name="Profile description"
                                value={description}
                                placeholder="Say something about yourself..."
                                onChange={(e) => setDescription(e.target.value)}
                            /> */}


                            <div className='flex flex-col gap-1 items-end w-full'>
                                {/* <div className='flex flex-col w-full gap-2 border-b border-[#b4b4b4]- border-gray-600- pb-1 mt-2'>
                                    <p className="leading-7- pl-3 leading-none text-base font-medium text-gray-600">Profile description</p>
                                    <ExpandableTextArea maxLength={DESCRIPTION_MAX_LENGTH} value={description}
                                        placeholder="Say something about yourself..."
                                        onChange={(e) => setDescription(e.target.value)} />
                                </div> */}

                                <textarea
                                    id="profile_desc"
                                    name="profile_desc"
                                    value={description}
                                    onBeforeInput={e => {
                                        if (description.length >= DESCRIPTION_MAX_LENGTH) e.preventDefault();
                                    }}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Say something about yourself..."
                                    className="w-full bg-[#F2F2F2] bg-white- placeholder:text-[#808080] rounded-2xl border border-gray-300 focus:border-[#8ED500] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>

                                <span className='leading-none text-xs text-gray-600'>{description.length}/{DESCRIPTION_MAX_LENGTH}</span>
                            </div>


                            <section className='flex flex-col gap-4 mt-2'>
                                <div className='flex flex-col gap-2 px-4-'>
                                    <p className="leading-7- pl-3 leading-none text-[0.98rem] font-medium- text-gray-600- text-gray-600 font-medium">Add favorite player(s)</p>
                                    <span className='text-sm pl-3 font-normal leading-none text-[#5f5f5f]'>Your favorite players will be displayed on your profile.</span>


                                    <div className='flex items-center gap-3 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffffff71] scrollbar-corner-gray-200'>
                                        <button onClick={e => setIsSelectFavoritePlayerWindowOpened(true)} className='min-w-11 text-sm  rounded-full aspect-square flex items-center justify-center bg-[#e5e5e5]'>
                                            <FaPlus />
                                        </button>
                                        {
                                            favoritePlayer.map((player, i) => {
                                                return <FavoriteCard key={i} label={player.name} src={player.photo} hasCrown={i === 0} />
                                            })
                                        }
                                    </div>
                                </div>


                                <div className='flex flex-col gap-2 px-4-'>
                                    <p className="leading-7- pl-3 leading-none text-[0.98rem] font-medium- text-gray-600- text-gray-600 font-medium">Add favorite club(s)</p>
                                    <span className='text-sm pl-3 font-normal leading-none text-[#5f5f5f]'>Your favorite club will be displayed on your profile.</span>


                                    <div className='flex items-center gap-3 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffffff71] scrollbar-corner-gray-200'>
                                        <button onClick={e => setIsSelectFavoriteClubsWindowOpened(true)} className='min-w-11 text-sm rounded-full aspect-square flex items-center justify-center bg-[#e5e5e5]'>
                                            <FaPlus />
                                        </button>
                                        {
                                            favoriteClubs.map((club, i) => {
                                                return <FavoriteCard key={i} label={club.name} hasCrown={i === 0} src={club.photo} />
                                            })
                                        }
                                    </div>

                                    <div className='flex pl-3 mt-1- items-center gap-2 bg-red-50-'>
                                        <span className='leading-none text-sm'>Supporting</span>
                                        <Image width={20} height={20} className='w-4 aspect-square object-cover mt-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/800px-Borussia_Dortmund_logo.svg.png" alt="Club icon" />
                                        <span className='leading-none text-sm'>since</span>

                                        <button className='px-2 text-black py-1 flex  text-sm rounded-md items-center gap-1 bg-[#e5e5e5]'>
                                            <span className='leading-none'>2020</span>
                                            <LuCalendarDays />
                                        </button>
                                    </div>
                                </div>


                                <div className='flex flex-col gap-2 px-4-'>
                                    <p className="leading-7- pl-3 leading-none text-[0.98rem] font-medium- text-gray-600- text-gray-600 font-medium">Add favorite countries(s)</p>
                                    <span className='text-sm pl-3 font-normal leading-none text-[#5f5f5f]'>Your favorite countries will be displayed on your profile.</span>

                                    <div className='flex items-center gap-3 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffffff71] scrollbar-corner-gray-200'>
                                        <button onClick={e => setIsSelectCountriesWindowOpened(true)} className='min-w-11 text-sm  rounded-full aspect-square flex items-center justify-center bg-[#e5e5e5]'>
                                            <FaPlus />
                                        </button>
                                        {
                                            selectedCountries.map((country, i) => {
                                                return <FavoriteCard key={i} isCountry={true} label={country.name} hasCrown={i === 0} src={country.flag_4x3} />
                                            })
                                        }
                                    </div>
                                </div>
                            </section>

                            {/* <button
                                className="text-white bg-[#4DD21D]- bg-[#007600] hover:bg-[#007600b1] border-0 py-1 font-medium px-8 my-2 focus:outline-none  rounded-md text-lg"
                            >
                                Save
                            </button> */}

                            <div className='fixed bottom-5 w-full px-2 left-0'>
                                <BigButton text='Save changes' onClick={() => { }} isActive={true} isProcessing={false} />
                            </div>
                        </div>

                    </section>

                    : <section className="flex flex-col mb-8 px-2  md:px-14 pt-10 h-full gap-1">
                        {/* <h2 className="font-bold text-base mb-2 text-[#000000ac]">
                            Edit your profile
                        </h2> */}

                        {!isChangePasswordWindowOpened ? <div className='flex flex-col gap-1'>
                            <p className=" mb-2- leading-none text-lg font-medium text-gray-600 mb-4">Edit your account details.</p>
                            <span className='leading-7- leading-[1px]- leading-none mb-1 text-sm  text-black'>Display name</span>
                            <span className='leading-7- leading-[1px]- leading-none mb-1 text-sm  text-[#5f5f5f]'>{"Changing your display name won't change your username."}</span>
                            <EditTextField
                                // name="Changing your display name won't change your username."
                                value={username}
                                placeholder={"Display name"}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <EditTextField
                                name="Email"
                                placeholder={"Email"}
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <EditTextField
                                name="Password"
                                placeholder="Password"
                                // isPassword={true}
                                // onClick={e => setIsChangePasswordWindowOpened(true)}
                                onClick={openPasswordWindow}
                                value="*******"
                                isDisabled={true}
                            // showPasswordWindow={openPasswordWindow}
                            // value="******"
                            />
                            <button
                                className="text-white bg-[#4DD21D]- bg-[#007600] hover:bg-[#007600b1] border-0 py-1 font-medium px-8 focus:outline-none  rounded-md text-lg"
                            >
                                Save
                            </button>
                        </div> :
                            <div className='flex flex-col gap-1'>
                                <p className=" mb-2 leading-none text-lg font-medium text-gray-600">Change your password.</p>

                                <span className='text-sm text-black'>Current password</span>
                                <span className='leading-7- leading-[1px]- leading-none mb-1- text-sm  text-[#5f5f5f]'>{"Please enter your current password."}</span>

                                <EditTextField
                                    // name="Please enter your current password."
                                    value={oldPassword}
                                    type="password"
                                    placeholder={"Current password"}
                                    createBottomSpace={false}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />

                                <div className='flex justify-end'>
                                    <button className='text-sm text-[#007600]'>Forgot password?</button>
                                </div>

                                <div className='h-[0.1px] w-full bg-[#00000013] my-2'></div>

                                <EditTextField
                                    name="Enter new password"
                                    value={newPassword}
                                    type="password"
                                    placeholder={"New password"}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />

                                <EditTextField
                                    name="Confirm new password"
                                    value={confirmNewPassword}
                                    type="password"
                                    placeholder={"Confirm password"}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                />

                                <div className="flex items-center gap-5">
                                    {/* <button
                                        onClick={closePasswordWindow}
                                        className="text-white w-full bg-[#007600] hover:bg-[#007600b1] border-0 py-1 px-6 flex items-center justify-center gap-1 focus:outline-none  rounded text-lg"
                                    >
                                        <IoMdArrowRoundBack className="text-xl" />
                                        <span>Back</span>
                                    </button> */}

                                    <button
                                        onClick={closePasswordWindow}
                                        className={`text-white bg-[#4DD21D]- bg-[#007600] w-full hover:bg-[#007600b1] border-0 py-1 flex items-center justify-center gap-1  font-medium focus:outline-none  rounded-md text-lg`}
                                    >
                                        <IoMdArrowRoundBack className="text-xl" />
                                        <span>Back</span>
                                    </button>



                                    <button
                                        className={` ${isValidPasswords() ? 'opacity-100 hover:bg-[#007600b1]' : 'opacity-50'} text-white bg-[#4DD21D]- bg-[#007600] w-full hover:bg-[#007600b1] border-0 py-1 font-medium focus:outline-none  rounded-md text-lg`}
                                    >
                                        Save change
                                    </button>
                                    {/* <button
                                        onClick={(e) => {
                                            // loader.show();
                                            // setTimeout(() => {
                                            //   loader.hide();
                                            // }, 1200);
                                        }}
                                        className={`text-white whitespace-nowrap w-full bg-[#007600]  border-0 py-1 px-6 focus:outline-none  rounded text-lg ${isValidPasswords() ? 'opacity-100 hover:bg-[#007600b1]' : 'opacity-50'}`}
                                    >
                                        Save change
                                    </button> */}
                                </div>
                            </div>
                        }
                    </section>
            }
        </div>

    )
}


const EditTextField = ({
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    isDisabled = false,
    createBottomSpace = true,
    onClick = () => { }
}: { name?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string; type?: string; isDisabled?: boolean; createBottomSpace?: boolean; onClick?: () => void; }) => {
    const inputFieldRef = useRef<HTMLInputElement>(null);



    return (
        <div className={`relative  ${createBottomSpace && 'mb-4'} w-full`}
        >
            <p className="leading-7- leading-[1px]- leading-none mb-1 text-sm  text-black">{name}</p>
            <div className="flex items-center justify-between" >
                <input
                    type={type}
                    onClick={e => {
                        e.preventDefault()
                        onClick()
                    }}
                    onChange={onChange}
                    ref={inputFieldRef}
                    // onBlur={onBlur}
                    // disabled={!isFocused}
                    value={value}
                    placeholder={placeholder}
                    // disabled={isDisabled}
                    className="w-full bg-white- placeholder:text-[#5f5f5f] rounded-full border bg-[#ececec] border-gray-300 focus:border-[#8ED500] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {/* <AiFillEdit
            onClick={onEditButtonClicked}
            className="text-4xl cursor-pointer text-[#4DD21D] hover:text-[#349610]"
          /> */}

                {/* <button
            onClick={onEditButtonClicked}
            className="text-xl text-[#648EFC]"
          >
            Edit
          </button> */}
            </div>
        </div>
    );
};

const TabView = ({ currentTab, setTab }: { currentTab: string; setTab: (tab: string) => void; }) => {
    const Tab = ({ tabName, isActive, onClick }: { tabName: string; isActive: boolean; onClick: () => void; }) => {
        return <button className='flex flex-col px-5- gap-1' onClick={onClick}>
            <span className={`leading-none font-medium text-base px-7 ${isActive ? 'text-[#1A1A1A]' : 'text-[#4D4D4D]'}`}>{tabName}</span>

            {
                isActive &&
                <div className='w-full h-[3px] bg-[#0CAC0B] rounded-full'></div>
            }
        </button>
    }

    return <div className='flex gap-3- w-full border-b- border-[#f0f0f0] px-2 pb-1'>
        <Tab tabName="Profile" isActive={currentTab === "profile"} onClick={() => setTab("profile")} />
        <Tab tabName="Account" isActive={currentTab === "account"} onClick={() => setTab("account")} />
    </div>
}


const FavoriteCard = ({ isCountry = false, src, label, hasCrown = false }: { isCountry?: boolean; src: string; label: string; hasCrown?: boolean; }) => {
    return <div className={`min-w-[4.8em]-    ${isCountry ? 'max-w-[5.5rem]- min-w-[4.6rem]  max-w-[4.6rem]' : 'aspect-square min-h-[4.6rem]  max-h-[4.6rem] flex'}  transition-all hover:shadow-[rgba(0,0,0,0.12)_0px_2px_8px_0px,rgba(0,0,0,0.16)_0px_0px_2px_0px] hover:scale-110- flex- items-center relative justify-center   border- overflow-hidden`}>
        <div className='w-full h-full absolute top-0 rounded left-0 bg-[#00000000] z-20 border-r-[0.1px] inner-border-[1px] inner-border-[#e4e4e479] border-[#cfcfcfad] shadow-inner- shadow-white-'></div>
        <img className={` ${isCountry ? 'w-full' : 'h-full'} rounded object-cover`} src={src} alt="" />

        {
            hasCrown && <div className="bg-[#00000071] w-5 text-sm aspect-square leading-none absolute flex items-center justify-center rounded-md top-1 left-1"><span className="leading-none">👑</span></div>
        }

        <div className="w-full py-px backdrop-blur-sm flex text-white justify-center items-center rounded-b absolute left-0 bottom-0 bg-[#00000071]">
            <span className="text-xs leading-none w-full overflow-hidden text-ellipsis text-nowrap px-1 text-center">{label}</span>
        </div>
    </div>
}


const SelectFavoritePlayerWindow = ({
    setIsSelectFavoritePlayerWindowOpened,
    onPlayerSelect,
    alreadySelectedPlayers
}: {
    setIsSelectFavoritePlayerWindowOpened: (isOpen: boolean) => void;
    onPlayerSelect: (player: { name: string; photo: string }[]) => void;
    alreadySelectedPlayers: { name: string; photo: string }[];
}) => {
    const [players, setPlayers] = useState<{
        name: string;
        photo: string;
    }[]>([
        {
            name: "Messi",
            photo:
                "https://media.cnn.com/api/v1/images/stellar/prod/230816151359-lionel-messi-inter-miami.jpg?c=16x9&q=h_720,w_1280,c_fill",
        },
        {
            name: "Ronaldo",
            photo:
                "https://media.vov.vn/sites/default/files/styles/large/public/2023-08/roo.jpg",
        },
        {
            name: "Mbappe",
            photo:
                "https://icdn.football-espana.net/wp-content/uploads/2023/06/Kylian-Mbappe-PSG-042922-169.jpg",
        },
        {
            name: "Neymar",
            photo: "https://i.eurosport.com/2023/08/08/3759267-76475269-640-480.jpg",
        },
        {
            name: "Haaland",
            photo:
                "https://i.guim.co.uk/img/media/738ce55b0210242ed89525dc7217389fcdd954f6/867_295_3097_1858/master/3097.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93c023f0b3182e74b5320381712d32d3",
        },
        {
            name: "Debruyne",
            photo:
                "https://images2.minutemediacdn.com/image/upload/c_crop,w_3946,h_2219,x_0,y_86/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01gtvkd1x49s2gddqzj2.jpg",
        },
        {
            name: "Kroos",
            photo:
                "https://i.eurosport.com/2020/05/15/2818998-58144988-2560-1440.jpg",
        },
        {
            name: "Rashford",
            photo:
                "https://staticg.sportskeeda.com/editor/2023/07/2a98b-16893358639379-1920.jpg?w=840",
        },
        {
            name: "Saka",
            photo:
                "https://talksport.com/wp-content/uploads/sites/5/2023/03/arsenals-english-midfielder-bukayo-saka-804253779.jpg",
        },
        {
            name: "R. James",
            photo:
                "https://e0.365dm.com/23/08/2048x1152/skysports-reece-james-chelsea_6250027.jpg",
        },
        {
            name: "Lewandowski",
            photo:
                "https://www.fcbarcelona.com/photo-resources/2022/11/02/85247947-27dc-488c-a6cb-d81c5e391559/09-ROBERT_LEWANDOWSKI.jpg?width=1200&height=750",
        },
        {
            name: "Gnabry",
            photo:
                "https://assets.bundesliga.com/tachyon/sites/2/2022/07/fcb_gnabry_1920.jpg?crop=0px,0px,1920px,1079px&fit=1140,1140",
        },

        {
            name: "Messi2",
            photo:
                "https://media.cnn.com/api/v1/images/stellar/prod/230816151359-lionel-messi-inter-miami.jpg?c=16x9&q=h_720,w_1280,c_fill",
        },
        {
            name: "Ronaldo2",
            photo:
                "https://media.vov.vn/sites/default/files/styles/large/public/2023-08/roo.jpg",
        },
        {
            name: "Mbappe2",
            photo:
                "https://icdn.football-espana.net/wp-content/uploads/2023/06/Kylian-Mbappe-PSG-042922-169.jpg",
        },
        {
            name: "Neymar2",
            photo: "https://i.eurosport.com/2023/08/08/3759267-76475269-640-480.jpg",
        },
        {
            name: "Haaland2",
            photo:
                "https://i.guim.co.uk/img/media/738ce55b0210242ed89525dc7217389fcdd954f6/867_295_3097_1858/master/3097.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93c023f0b3182e74b5320381712d32d3",
        },
        {
            name: "Debruyne2",
            photo:
                "https://images2.minutemediacdn.com/image/upload/c_crop,w_3946,h_2219,x_0,y_86/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01gtvkd1x49s2gddqzj2.jpg",
        },
        {
            name: "Kroos2",
            photo:
                "https://i.eurosport.com/2020/05/15/2818998-58144988-2560-1440.jpg",
        },
        {
            name: "Rashford2",
            photo:
                "https://staticg.sportskeeda.com/editor/2023/07/2a98b-16893358639379-1920.jpg?w=840",
        },
        {
            name: "Saka2",
            photo:
                "https://talksport.com/wp-content/uploads/sites/5/2023/03/arsenals-english-midfielder-bukayo-saka-804253779.jpg",
        },
        {
            name: "R. James2",
            photo:
                "https://e0.365dm.com/23/08/2048x1152/skysports-reece-james-chelsea_6250027.jpg",
        },
        {
            name: "Lewandowski2",
            photo:
                "https://www.fcbarcelona.com/photo-resources/2022/11/02/85247947-27dc-488c-a6cb-d81c5e391559/09-ROBERT_LEWANDOWSKI.jpg?width=1200&height=750",
        },
        {
            name: "Gnabry2",
            photo:
                "https://assets.bundesliga.com/tachyon/sites/2/2022/07/fcb_gnabry_1920.jpg?crop=0px,0px,1920px,1079px&fit=1140,1140",
        },
        {
            name: "Messi3",
            photo:
                "https://media.cnn.com/api/v1/images/stellar/prod/230816151359-lionel-messi-inter-miami.jpg?c=16x9&q=h_720,w_1280,c_fill",
        },
        {
            name: "Ronaldo3",
            photo:
                "https://media.vov.vn/sites/default/files/styles/large/public/2023-08/roo.jpg",
        },
        {
            name: "Mbappe3",
            photo:
                "https://icdn.football-espana.net/wp-content/uploads/2023/06/Kylian-Mbappe-PSG-042922-169.jpg",
        },
        {
            name: "Neymar3",
            photo: "https://i.eurosport.com/2023/08/08/3759267-76475269-640-480.jpg",
        },
        {
            name: "Haaland3",
            photo:
                "https://i.guim.co.uk/img/media/738ce55b0210242ed89525dc7217389fcdd954f6/867_295_3097_1858/master/3097.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93c023f0b3182e74b5320381712d32d3",
        },
        {
            name: "Debruyne3",
            photo:
                "https://images2.minutemediacdn.com/image/upload/c_crop,w_3946,h_2219,x_0,y_86/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01gtvkd1x49s2gddqzj2.jpg",
        },
        {
            name: "Kroos3",
            photo:
                "https://i.eurosport.com/2020/05/15/2818998-58144988-2560-1440.jpg",
        },
        {
            name: "Rashford3",
            photo:
                "https://staticg.sportskeeda.com/editor/2023/07/2a98b-16893358639379-1920.jpg?w=840",
        },
        {
            name: "Saka3",
            photo:
                "https://talksport.com/wp-content/uploads/sites/5/2023/03/arsenals-english-midfielder-bukayo-saka-804253779.jpg",
        },
        {
            name: "R. James3",
            photo:
                "https://e0.365dm.com/23/08/2048x1152/skysports-reece-james-chelsea_6250027.jpg",
        },
        {
            name: "Lewandowski3",
            photo:
                "https://www.fcbarcelona.com/photo-resources/2022/11/02/85247947-27dc-488c-a6cb-d81c5e391559/09-ROBERT_LEWANDOWSKI.jpg?width=1200&height=750",
        },
        {
            name: "Gnabry3",
            photo:
                "https://assets.bundesliga.com/tachyon/sites/2/2022/07/fcb_gnabry_1920.jpg?crop=0px,0px,1920px,1079px&fit=1140,1140",
        },
    ]);
    const [tempSelectedIndexs, setTempSelectedIndexs] = useState<number[]>([]);
    // console.log(tempSelectedIndexs);

    useEffect(() => {
        let alreadySelectedPlayerIndex = []

        for (let alreadySelectedPlayer of alreadySelectedPlayers) {
            for (let playerIndex in players) {
                let player = players[playerIndex];

                if (player.name === alreadySelectedPlayer.name) {
                    alreadySelectedPlayerIndex.push(parseInt(playerIndex))
                }
            }
        }

        setTempSelectedIndexs(alreadySelectedPlayerIndex);
    }, []);

    console.log(tempSelectedIndexs);




    return (
        <OverlayWindowTemplate
            onClose={() => setIsSelectFavoritePlayerWindowOpened(false)}
            isYCenter={false}
            actions={
                <>
                    <button onClick={(e) => {
                        if (tempSelectedIndexs.length > 0) {
                            let selectedPlayers = [];
                            for (let playerIndex of tempSelectedIndexs) {
                                selectedPlayers.push(players[playerIndex])
                            }

                            onPlayerSelect(selectedPlayers);
                            setTempSelectedIndexs([])
                        }
                    }} className={`flex items-center md:mt-2 text-sm gap-2 w-full ${tempSelectedIndexs.length > 0
                        ? "opacity-100 hover:bg-[#007600a4] cursor-pointer"
                        : "opacity-60 cursor-not-allowed"
                        } bg-[#007600] text-white font-medium px-3 py-2  rounded-full leading-none justify-center `}>
                        Save
                    </button>

                </>


            }
        >
            <div className=" md:px-5 w-full h-full overflow-hidden">
                <section className='px-2 flex flex-col pt-5 pb-3 gap-1 border-b'>
                    <h2 className='text-lg font-medium text-gray-600-'>Add favorites 🏆🎖</h2>
                    <p className="text-base  text-gray-600- w-full text-center- my-5-">
                        Pick up to 11 players to showcase on your profile. Select your favorite player first.
                    </p>

                    <div className="flex items-center w-full py-2 px-3 mt-3 rounded-md gap-2 bg-[#f0f0f0]">
                        <IoSearchOutline className="text-xl text-[#777]" />
                        <input
                            placeholder="Search your favorite player..."
                            className="w-full bg-transparent outline-none font-normal text-sm h-full text-[#373737] placeholder:text-[#777]"
                            type="text"
                        />
                    </div>
                </section>

                <div className="flex mt-1 px-2 flex-col overflow-hidden w-full h-full pb-5-">
                    <div className="mt-2 max-h-full- h-[62vh] h-full- scrollbar-track-white scrollbar-thumb-gray-[#ffffff71] scrollbar-corner-gray-200 scrollbar-thin h-full- md:h-[60vh] overflow-auto grid grid-cols-4 gap-2">
                        {players.map((player, i) => {
                            return (
                                <div
                                    onClick={(e) => {
                                        const isAlreadyExists = tempSelectedIndexs.includes(i);

                                        if (isAlreadyExists) {
                                            setTempSelectedIndexs(tempSelectedIndexs.filter(value => value !== i));
                                            return;
                                        }

                                        if (tempSelectedIndexs.length >= 11) return;

                                        setTempSelectedIndexs([...tempSelectedIndexs, i])
                                    }}
                                    className={`bg-[#f1f1f1] border min-h-[4.6rem] max-h-[4.6rem] hover:bg-[#e5e5e5] h-40- overflow-hidden relative justify-between transition-all flex flex-col items-center rounded gap-1 cursor-pointer ${tempSelectedIndexs.includes(i)
                                        ? "border-[3.5px] border-[#4DD21D]"
                                        : ""
                                        } ${tempSelectedIndexs.length >= 11 && !tempSelectedIndexs.includes(i) ? 'opacity-50' : ''}`}
                                    key={i}
                                >
                                    {(tempSelectedIndexs.length > 0 && tempSelectedIndexs[0] === i) && <div className="bg-[#00000071] w-5 text-sm aspect-square leading-none absolute flex items-center justify-center rounded-md top-1 left-1"><span className="leading-none">👑</span></div>}
                                    <img
                                        className="w-full h-[80%]- h-full object-cover object-center "
                                        src={player.photo}
                                        alt=""
                                    />
                                    {/* <span className="mb-1 text-xs absolute text-center px-2 w-full overflow-hidden text-nowrap text-ellipsis">
                                        {player.name}
                                    </span> */}

                                    <div className="w-full py-px backdrop-blur-sm flex text-white justify-center items-center absolute left-0 bottom-0 bg-[#00000071]">
                                        <span className="text-xs leading-none w-full overflow-hidden text-ellipsis text-nowrap px-1 text-center">{player.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* <div className="bg-white  fixed- p-1 md:p-0 left-0 bottom-0 w-full">
                        <button
                            onClick={(e) => {
                                if (tempSelectedIndexs.length > 0) {
                                    let selectedPlayers = [];
                                    for (let playerIndex of tempSelectedIndexs) {
                                        selectedPlayers.push(players[playerIndex])
                                    }

                                    onPlayerSelect(selectedPlayers);
                                    setTempSelectedIndexs([])
                                }
                            }}
                            className={`flex items-center md:mt-2 text-base gap-2 w-full ${tempSelectedIndexs.length > 0
                                ? "opacity-100 hover:bg-[#007600a4] cursor-pointer"
                                : "opacity-60 cursor-not-allowed"
                                } bg-[#007600] text-white font-medium px-4 py-1  rounded-full justify-center `}
                        >
                            Done
                        </button>
                    </div> */}
                </div>
            </div>
        </OverlayWindowTemplate>
    );
};



const SelectFavoriteClubsWindow = ({
    setIsSelectFavoriteClubsWindowOpened,
    onClubsSelect,
    alreadySelectedClubs
}: {
    setIsSelectFavoriteClubsWindowOpened: (isOpen: boolean) => void;
    onClubsSelect: (clubs: { name: string; photo: string }[]) => void;
    alreadySelectedClubs: { name: string; photo: string }[];
}) => {
    const [clubs, setclubs] = useState<{
        name: string;
        photo: string;
    }[]>([
        {
            name: "Man City",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
        },
        {
            name: "Chelsea",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
        },
        {
            name: "Man United",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
        },
        {
            name: "Liverpool",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png",
        },
        {
            name: "Tottenham",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png",
        },
        {
            name: "Barcelona",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/640px-FC_Barcelona_%28crest%29.svg.png",
        },
        {
            name: "Real Madrid",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
        },
        {
            name: "Sevilla",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/640px-Sevilla_FC_logo.svg.png",
        },
        {
            name: "Atletico Madrid",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Atletico_Madrid_Logo_2024.svg/1200px-Atletico_Madrid_Logo_2024.svg.png",
        },
        {
            name: "Bayern Munich",
            photo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg.png",
        },
        {
            name: "Borussia Dortmund",
            photo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/800px-Borussia_Dortmund_logo.svg.png",
        },
        {
            name: "Leipzig",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/1200px-RB_Leipzig_2014_logo.svg.png",
        },
        {
            name: "Shalke 04",
            photo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/1200px-FC_Schalke_04_Logo.svg.png",
        },
        {
            name: "Stuttgart",
            photo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/1200px-VfB_Stuttgart_1893_Logo.svg.png",
        },
        {
            name: "Inter Millan",
            photo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNcUnb49zp7qriWxPGn8xTAYQAFvIKLddRA&s",
        },
        {
            name: "Juventus",
            photo:
                "https://e7.pngegg.com/pngimages/177/345/png-clipart-juventus-logo-juventus-f-c-serie-a-juventus-stadium-football-uefa-champions-league-football-text-sport-thumbnail.png",
        },
        {
            name: "Napoli",
            photo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYH_vR7azQimMDmhJOMk3dTt7mqz3GN3w1w&s",
        },
        {
            name: "Atalanta",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/AtalantaBC.svg/640px-AtalantaBC.svg.png",
        },
        {
            name: "Paris Saint Germain",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
        },
        {
            name: "Monaco",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/1200px-LogoASMonacoFC2021.svg.png",
        },
        {
            name: "Marseille",
            photo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_Marseille_logo.svg/1200px-Olympique_Marseille_logo.svg.png",
        },
        {
            name: "Reims",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Stade_de_Reims_logo.svg/1200px-Stade_de_Reims_logo.svg.png",
        },
    ]);

    const [tempSelectedIndexs, setTempSelectedIndexs] = useState<number[]>([]);
    // console.log(tempSelectedIndexs);

    useEffect(() => {
        let alreadySelectedClubsIndex = []

        for (let alreadySelectedClub of alreadySelectedClubs) {
            for (let clubIndex in clubs) {
                let club = clubs[clubIndex];

                if (club.name === alreadySelectedClub.name) {
                    alreadySelectedClubsIndex.push(parseInt(clubIndex))
                }
            }
        }

        setTempSelectedIndexs(alreadySelectedClubsIndex);
    }, []);

    // console.log(tempSelectedIndexs);




    return (
        <OverlayWindowTemplate
            onClose={() => setIsSelectFavoriteClubsWindowOpened(false)}
            isYCenter={false}
            actions={
                <>
                    <button onClick={(e) => {
                        if (tempSelectedIndexs.length > 0) {
                            let selectedClubs = [];
                            for (let clubIndex of tempSelectedIndexs) {
                                selectedClubs.push(clubs[clubIndex])
                            }

                            onClubsSelect(selectedClubs);
                            setTempSelectedIndexs([]);
                        }
                    }} className={`flex items-center md:mt-2 text-sm gap-2 w-full ${tempSelectedIndexs.length > 0
                        ? "opacity-100 hover:bg-[#007600a4] cursor-pointer"
                        : "opacity-60 cursor-not-allowed"
                        } bg-[#007600] text-white font-medium px-3 py-2  rounded-full leading-none justify-center `}>
                        Save
                    </button>

                </>


            }
        >
            <div className=" md:px-5 w-full h-fulll overflow-hidden">
                {/* <p className="text-base  text-gray-600 w-full">
                    Please choose your favorite clubs. This will be displayed on your profile. You can only choose upto 4 clubs.
                </p>

                <div className="flex items-center w-full py-2 px-3 rounded-full mt-2 gap-2 bg-[#E5E5E5]">
                    <IoSearchOutline className="text-xl text-[#777]" />
                    <input
                        placeholder="Search your favorite player..."
                        className="w-full bg-transparent outline-none text-sm h-full text-[#373737] placeholder:text-[#777]"
                        type="text"
                    />
                </div> */}

                <section className='px-2 flex flex-col pt-5 pb-3 gap-1 border-b'>
                    <h2 className='text-lg font-medium text-gray-600-'>Add favorites 🏆🎖</h2>
                    <p className="text-base  text-gray-600- w-full text-center- my-5-">
                        Pick up to 3 clubs to showcase on your profile. Select your favorite club first.
                    </p>

                    <div className="flex items-center w-full py-2 px-3 mt-3 rounded-md gap-2 bg-[#f0f0f0]">
                        <IoSearchOutline className="text-xl text-[#777]" />
                        <input
                            placeholder="Search your favorite player..."
                            className="w-full bg-transparent outline-none font-normal text-sm h-full text-[#373737] placeholder:text-[#777]"
                            type="text"
                        />
                    </div>
                </section>

                <div className="px-2 flex flex-col overflow-hidden w-full h-full pb-5-">
                    <div className="mt-2 max-h-full- h-[62vh] h-full- scrollbar-track-white scrollbar-thumb-gray-[#ffffff71] scrollbar-corner-gray-200 scrollbar-thin h-full- md:h-[60vh] overflow-auto grid grid-cols-4 gap-2">
                        {clubs.map((club, i) => {
                            return (
                                <div
                                    onClick={(e) => {
                                        const isAlreadyExists = tempSelectedIndexs.includes(i);

                                        if (isAlreadyExists) {
                                            setTempSelectedIndexs(tempSelectedIndexs.filter(value => value !== i));
                                            return;
                                        }

                                        if (tempSelectedIndexs.length >= 3) return;

                                        setTempSelectedIndexs([...tempSelectedIndexs, i])
                                    }}
                                    className={`p-1 border min-h-[4.6rem] max-h-[4.6rem] overflow-hidden relative justify-between transition-all flex flex-col items-center rounded-md gap-1- cursor-pointer ${tempSelectedIndexs.includes(i)
                                        ? "border-[3.5px] border-[#4DD21D]"
                                        : ""
                                        } ${tempSelectedIndexs.length >= 3 && !tempSelectedIndexs.includes(i) ? 'opacity-50' : ''}`}
                                    key={i}
                                >
                                    {(tempSelectedIndexs.length > 0 && tempSelectedIndexs[0] === i) && <div className="bg-[#00000071] w-5 text-sm aspect-square leading-none absolute flex items-center justify-center rounded-md top-1 left-1"><span className="leading-none">👑</span></div>}
                                    <img
                                        className="w-full- h-full- h-[75%] object-cover object-center "
                                        src={club.photo}
                                        alt=""
                                    />
                                    {/* <span className="mb-1 text-center px-2 w-full overflow-hidden text-nowrap text-ellipsis">
                                        {club.name}
                                    </span> */}

                                    <span className="text-xs leading-none w-full overflow-hidden text-ellipsis text-nowrap px-1 text-center">{club.name}</span>
                                    {/* <div className="w-full py-px backdrop-blur-sm flex text-white justify-center items-center -absolute left-0 bottom-0 bg-[#00000071]"> */}
                                    {/* </div> */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </OverlayWindowTemplate>
    );
};



const SelectFavoriteCountriesWindow = ({
    setIsSelectFavoriteCountriesWindowOpened,
    onCountriesSelect,
    alreadySelectedCountries,
    countries
}: {
    setIsSelectFavoriteCountriesWindowOpened: (isOpen: boolean) => void;
    onCountriesSelect: (countries: ({
        capital: string;
        code: string;
        continent: string;
        flag_1x1: string;
        flag_4x3: string;
        iso: boolean;
        name: string;
    } | {
        code: string;
        flag_1x1: string;
        flag_4x3: string;
        iso: boolean;
        name: string;
        capital?: undefined;
        continent?: undefined;
    })[]) => void;
    alreadySelectedCountries: {
        code: string;
        flag_1x1: string;
        flag_4x3: string;
        iso: boolean;
        name: string;
        capital?: undefined;
        continent?: undefined;
    }[];
    countries: ({
        capital: string;
        code: string;
        continent: string;
        flag_1x1: string;
        flag_4x3: string;
        iso: boolean;
        name: string;
    } | {
        code: string;
        flag_1x1: string;
        flag_4x3: string;
        iso: boolean;
        name: string;
        capital?: undefined;
        continent?: undefined;
    })[];
}) => {

    // const countries = Countries();
    const [isFirstRender, setIsFirstRender] = useState(true);

    const [tempSelectedIndexs, setTempSelectedIndexs] = useState<number[]>([]);
    // console.log(tempSelectedIndexs);

    const [searchedCountries, setSearchedCountries] = useState<({
        capital: string;
        code: string;
        continent: string;
        flag_1x1: string;
        flag_4x3: string;
        iso: boolean;
        name: string;
    } | {
        code: string;
        flag_1x1: string;
        flag_4x3: string;
        iso: boolean;
        name: string;
        capital?: undefined;
        continent?: undefined;
    })[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {

        if (isFirstRender) {
            let alreadySelectedCountriesIndex = []

            for (let alreadySelectedCountry of alreadySelectedCountries) {
                for (let countryIndex in countries) {
                    let country = countries[countryIndex];

                    if (country.name === alreadySelectedCountry.name) {
                        alreadySelectedCountriesIndex.push(parseInt(countryIndex))
                    }
                }
            }

            setTempSelectedIndexs(alreadySelectedCountriesIndex);
            setIsFirstRender(false);
        }


        if (!searchQuery) return;
        const searchCountries = setTimeout((e) => {
            const result = [];
            for (let country of countries) {
                let countryName = country.name.toLowerCase();
                let searchQuery_ = searchQuery.toLowerCase();

                if (countryName.startsWith(searchQuery_)) {
                    result.push(country);
                }
            }

            setSearchedCountries(result);
            if (result.length === 0) {
                setHasMore(false)
            } else {
                setHasMore(true)
            }
        }, 1);

        return () => clearTimeout(searchCountries);
    }, [searchQuery]);

    // console.log(tempSelectedIndexs);




    return (
        <OverlayWindowTemplate
            onClose={() => setIsSelectFavoriteCountriesWindowOpened(false)}
            isYCenter={false}
            actions={
                <>
                    <button onClick={(e) => {
                        if (tempSelectedIndexs.length > 0) {
                            let selectedCountries = [];
                            for (let countryIndex of tempSelectedIndexs) {
                                selectedCountries.push(countries[countryIndex])
                            }

                            onCountriesSelect(selectedCountries);
                            setTempSelectedIndexs([]);
                        }
                    }} className={`flex items-center md:mt-2 text-sm gap-2 w-full ${tempSelectedIndexs.length > 0
                        ? "opacity-100 hover:bg-[#007600a4] cursor-pointer"
                        : "opacity-60 cursor-not-allowed"
                        } bg-[#007600] text-white font-medium px-3 py-2  rounded-full leading-none justify-center `}>
                        Save
                    </button>

                </>


            }
        >
            <div className="md:px-5 w-full h-fulll overflow-hidden">
                <section className='px-2 flex flex-col pt-5 pb-3 gap-1 border-b'>
                    <h2 className='text-lg font-medium text-gray-600-'>Add favorites 🏆🎖</h2>
                    <p className="text-base  text-gray-600- w-full text-center- my-5-">
                        Pick up to 3 countries to showcase on your profile. Select your own country first.
                    </p>

                    <div className="flex items-center w-full py-2 px-3 mt-3 rounded-md gap-2 bg-[#f0f0f0]">
                        <IoSearchOutline className="text-xl text-[#777]" />
                        <input
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search your favorite player..."
                            className="w-full bg-transparent outline-none font-normal text-sm h-full text-[#373737] placeholder:text-[#777]"
                            type="text"
                        />
                    </div>
                </section>

                <div className="px-2 flex flex-col overflow-hidden w-full h-full pb-5-">
                    <div className="mt-2 max-h-full- max-h-[62vh] h-full- scrollbar-track-white scrollbar-thumb-gray-[#ffffff71] scrollbar-corner-gray-200 scrollbar-thin h-full- md:h-[60vh] overflow-auto grid grid-cols-4 gap-2">
                        {((searchedCountries.length != 0 || hasMore) && searchQuery != "" ? searchedCountries : countries).map((country, i) => {
                            return (
                                <div
                                    onClick={(e) => {
                                        const isAlreadyExists = tempSelectedIndexs.includes(i);

                                        if (isAlreadyExists) {
                                            setTempSelectedIndexs(tempSelectedIndexs.filter(value => value !== i));
                                            return;
                                        }

                                        if (tempSelectedIndexs.length >= 3) return;

                                        setTempSelectedIndexs([...tempSelectedIndexs, i])
                                    }}
                                    className={`bg-[#f1f1f1]- hover:bg-[#e5e5e5]- overflow-hidden border min-h-28- min-h-[5.7rem] max-h-[5rem]- h-fit overflow-hidden- relative justify-between- transition-all flex flex-col items-center rounded-md gap-[2px]- cursor-pointer ${tempSelectedIndexs.includes(i)
                                        ? "border-[3.5px] border-[#4DD21D]"
                                        : ""
                                        } ${tempSelectedIndexs.length >= 3 && !tempSelectedIndexs.includes(i) ? 'opacity-50' : ''}`}
                                    key={i}
                                >
                                    {(tempSelectedIndexs.length > 0 && tempSelectedIndexs[0] === i) && <div className="bg-[#00000071] w-5 text-sm aspect-square leading-none absolute flex items-center justify-center rounded-md top-2 left-2 z-10"><span className="leading-none">👑</span></div>}

                                    <img
                                        className="rounded- w-full shadow-sm-  max-w-24 border-b object-cover object-center "
                                        src={country.flag_4x3}
                                        alt=""
                                    />

                                    <div className='w-full h-full overflow-hidden text-ellipsis text-center px-2 text-nowrap '>

                                        <span className="text-xs h-full leading-none w-full py-2- py-px absolute- bottom-[-2px]- overflow-hidden text-ellipsis text-nowrap text-center">{country.name}</span>
                                    </div>

                                    {/* <span className="text-xs leading-none">{country.name}</span> */}

                                </div>
                            );
                        })}
                    </div>

                    {/* <div className="bg-white  fixed- p-1 md:p-0 left-0 bottom-0 w-full">
                        <button
                            onClick={(e) => {
                                if (tempSelectedIndexs.length > 0) {
                                    let selectedCountries = [];
                                    for (let countryIndex of tempSelectedIndexs) {
                                        selectedCountries.push(countries[countryIndex])
                                    }

                                    onCountriesSelect(selectedCountries);
                                    setTempSelectedIndexs([]);
                                }
                            }}
                            className={`flex items-center md:mt-2 text-base gap-2 w-full ${tempSelectedIndexs.length > 0
                                ? "opacity-100 hover:bg-[#007600a4] cursor-pointer"
                                : "opacity-60 cursor-not-allowed"
                                } bg-[#007600] text-white font-medium px-4 py-1  rounded-full justify-center `}
                        >
                            Done
                        </button>
                    </div> */}
                </div>
            </div>
        </OverlayWindowTemplate>
    );
};


const CoverPhotoCropingWindow = ({ file, onCropped = () => { }, onClose = () => { } }: { file: File | null; onCropped: (url: string) => void; onClose: () => void; }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const imageContainerRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (file) {
            const blobUrl = URL.createObjectURL(file);
            setImageUrl(blobUrl);
        }
    }, [file]);

    const handleCrop = () => {
        if (!imageRef.current || !imageContainerRef.current) return;

        const container = imageContainerRef.current;
        const image = imageRef.current;

        const scale = image.naturalWidth / image.offsetWidth;

        const cropWidth = container.clientWidth;
        const cropHeight = container.clientHeight;

        const scrollY = container.scrollTop;

        const cropY = scrollY * scale;

        const canvas = document.createElement('canvas');
        canvas.width = cropWidth * scale;
        canvas.height = cropHeight * scale;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(
            image,
            0, cropY,
            cropWidth * scale, cropHeight * scale,
            0, 0,
            cropWidth * scale, cropHeight * scale
        );

        canvas.toBlob((blob) => {
            if (!blob) return;
            const croppedUrl = URL.createObjectURL(blob);
            onCropped(croppedUrl);
            onClose()
        }, file?.type || 'image/jpeg');
    };

    if (!imageUrl) return null;

    return (
        <section className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-80 z-[53] flex items-center justify-center px-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full relative p-4 flex flex-col items-center">
                <div className="w-full aspect-[16/9] overflow-y-scroll rounded-md border border-gray-300 relative" ref={imageContainerRef}>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            ref={imageRef}
                            alt="To crop"
                            className="w-full select-none pointer-events-none"
                            draggable={false}
                        />
                    )}
                </div>

                <div className="flex gap-4 mt-6">
                    <button
                        onClick={handleCrop}
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition"
                    >
                        Crop
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md font-semibold transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
};


export default SettingsPage