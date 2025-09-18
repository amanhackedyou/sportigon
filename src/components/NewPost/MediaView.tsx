import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { MediaFile } from "./NewPostPage";

// type MediaFile = {
//     id: string;
//     file: File;
//     filetype: "photo" | "video" | "gif";
//     url?: string;
// }

const MediaView = ({ mediaFiles, setMediaFiles }: { mediaFiles: MediaFile[], setMediaFiles: React.Dispatch<React.SetStateAction<MediaFile[]>> }) => {
    // const [currentSelected, setCurrentSelected] = useState(0);

    // console.log(mediaFiles);


    return <section className="flex flex-col mt-4 gap-2">
        {
            // mediaFiles[currentSelected].filetype === "photo" && <ImageView file={mediaFiles[currentSelected].file} />
        }

        <div className="flex gap-3 overflow-x-auto py-2">
            {
                mediaFiles.map((media, i) => {

                    if (!media) return <div key={i}></div>;

                    if (media.filetype === "photo" && media.file) {
                        // return <ImageView key={i} file={media.file} />

                        return <ImageView key={i} file={media.file} onClear={() => {
                            // if (currentSelected === i && i != 0) {
                            //     setCurrentSelected(0);
                            // }

                            let newFiles = [];

                            for (let oldFileI in mediaFiles) {
                                if (parseInt(oldFileI) == i) continue;

                                let oldFile = mediaFiles[oldFileI];
                                newFiles.push(oldFile)

                            }

                            setMediaFiles(newFiles)
                        }} />
                    }

                    if (media.filetype === "gif") {
                        console.log(i);

                        return <GifViewer key={i} url={media.url ?? ""} file={media.file ?? null} onClear={() => {
                            let newFiles = [];

                            for (let oldFileI in mediaFiles) {
                                if (parseInt(oldFileI) == i) continue;
                                // console.log('Done');


                                let oldFile = mediaFiles[oldFileI];
                                newFiles.push(oldFile)
                            }

                            setMediaFiles(newFiles)
                        }} />
                    }

                    if (media.filetype === "video" && media.file) {
                        console.log(i);

                        return <VideoView key={i} file={media.file} onClear={() => {
                            let newFiles = [];

                            for (let oldFileI in mediaFiles) {
                                if (parseInt(oldFileI) == i) continue;
                                // console.log('Done');

                                let oldFile = mediaFiles[oldFileI];
                                newFiles.push(oldFile)
                            }

                            setMediaFiles(newFiles)
                        }} />
                    }
                })
            }

        </div>
    </section>

}

export default MediaView;


// const ImageView = ({ file }) => {

//     const pictureRef = useRef();
//     const containerRef = useRef(null);


//     const [blobFileUrl, setBlobFileUrl] = useState(null);
//     let fileReader = new FileReader();
//     fileReader.addEventListener(
//         "load",
//         () => {
//             setBlobFileUrl(fileReader.result);
//         },
//         false
//     );

//     fileReader.readAsDataURL(file);


//     return (
//         <section ref={containerRef} className="w-full aspect-square rounded-md scrollbar-none overflow-auto relative scroll-smooth">
//             <img ref={pictureRef} className="w-full h-full object-cover transition-all duration-200" src={blobFileUrl} />
//         </section>
//     );
// };

const ImageView = ({ file, onClear }: { file: File; onClear: () => void; }) => {
    const [blobFileUrl, setBlobFileUrl] = useState<string | ArrayBuffer | null>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    let fileReader = new FileReader();
    fileReader.addEventListener(
        "load",
        () => {
            return setBlobFileUrl(fileReader.result);
        },
        false
    );

    fileReader.readAsDataURL(file);

    return (
        <>
            {isFullScreen && <ShowMediaInFullScreen mediatype="image" src={blobFileUrl ?? ""} onClose={() => {
                setIsFullScreen(false);
            }} />}
            <section onClick={e => {
                //@ts-ignore
                if (e.target.tagName === "SECTION" || e.target.tagName === "IMG") setIsFullScreen(true);
            }} className={`min-w-28 min-h-40 max-h-40 max-w-28 relative rounded-lg border transition-all border-[rgba(0,0,0,0.2)]`}>

                <div className="border-2 border-white rounded-full w-5 overflow-hidden aspect-square text-white  absolute -right-2 -top-2">
                    <button
                        onClick={onClear}
                        className="bg-black bg-opacity-50 w-full h-full backdrop-blur-md  text-xl flex items-center justify-center"
                    >
                        <IoClose className="text-sm" />
                    </button>
                </div>

                {typeof blobFileUrl === "string" && <img className=" rounded-md w-full h-full object-cover" src={blobFileUrl} />}
            </section>
        </>
    );
};

const VideoView = ({ file, onClear }: { file: File; onClear: () => void; }) => {
    const [blobFileUrl, setBlobFileUrl] = useState(URL.createObjectURL(file));
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const thumbnailRef = useRef<HTMLImageElement | null>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        videoRef.current?.load();

        videoRef.current?.addEventListener("loadedmetadata", function () {
            // Get a random time within the video duration
            // const randomTime = Math.random() * videoRef.current.duration;
            // videoRef.current.currentTime = randomTime;

            const duration = videoRef.current?.duration || 1;
            let predictedThumbnailTime = (duration / 100) * 20;
            //@ts-ignore
            videoRef.current.currentTime = predictedThumbnailTime;
        });

        videoRef.current?.addEventListener("seeked", function () {
            const ctx = canvasRef.current?.getContext("2d");
            // @ts-ignore
            canvasRef.current.width = videoRef.current?.videoWidth || 0;
            // @ts-ignore
            canvasRef.current.height = videoRef.current?.videoHeight || 0;
            //@ts-ignore
            ctx?.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

            // Convert canvas to image
            //@ts-ignore
            thumbnailRef.current.src = canvasRef.current.toDataURL("image/png"); // Can be "image/jpeg"
            //@ts-ignore
            thumbnailRef.current.style.display = "block";

            // Cleanup
            // URL.revokeObjectURL(url);
        });
    }, [])


    return (
        <>
            {isFullScreen && <FullScreenVideoView src={blobFileUrl} close={() => {
                setIsFullScreen(false);
            }} />}
            <section onClick={e => {
                //@ts-ignore
                if (e.target.tagName === "SECTION" || e.target.tagName === "IMG") setIsFullScreen(true);
            }} className={`min-w-28 min-h-40 max-h-40 max-w-28 relative rounded-lg border transition-all border-[rgba(0,0,0,0.2)]`}>

                <div className="border-2 border-white rounded-full w-5 overflow-hidden aspect-square text-white  absolute -right-2 -top-2">
                    <button
                        onClick={onClear}
                        className="bg-black bg-opacity-50 w-full h-full backdrop-blur-md  text-xl flex items-center justify-center"
                    >
                        <IoClose className="text-sm" />
                    </button>
                </div>


                <section className="absolute flex items-center justify-center w-full h-full z-30 bg-black bg-opacity-30 rounded-lg">
                    <button className="text-3xl pointer-events-none text-white absolute- top-[50%]- left-[50%]- translate-x-[-50%]- translate-y-[-50%]-">
                        <FaPlay />
                    </button>
                </section>

                <video ref={videoRef} className="hidden rounded-md w-full h-full object-cover" src={blobFileUrl} />
                <canvas ref={canvasRef} className="hidden"></canvas>

                <img ref={thumbnailRef} className="rounded-md w-full h-full object-cover" />
            </section>
        </>
    );
};

const GifViewer = ({ url, file, onClear }: { url: string; file: File | null; onClear: () => void; }) => {
    const [blobFileUrl, setBlobFileUrl] = useState<string | ArrayBuffer | null>(url);
    const [isFullScreen, setIsFullScreen] = useState(false);


    if (file) {
        let fileReader = new FileReader();
        fileReader.addEventListener(
            "load",
            () => {
                setBlobFileUrl(fileReader.result);
            },
            false
        );

        fileReader.readAsDataURL(file);
    }


    return (
        <>
            {isFullScreen && <ShowMediaInFullScreen mediatype="gif" src={blobFileUrl ?? ""} onClose={() => {
                setIsFullScreen(false);
            }} />}

            <section onClick={e => {
                // if (e.target.tagName === "SECTION" || e.target.tagName === "IMG") onClick();
                //@ts-ignore
                if (e.target.tagName === "SECTION" || e.target.tagName === "IMG") setIsFullScreen(true);

            }} className={`min-w-28 min-h-40 max-h-40 max-w-28 relative rounded-lg border transition-all border-[rgba(0,0,0,0.2)]`}>

                <div className="border-2 border-white rounded-full w-5 overflow-hidden aspect-square text-white  absolute -right-2 -top-2">
                    <button
                        onClick={onClear}
                        className="bg-black bg-opacity-50 w-full h-full backdrop-blur-md  text-xl flex items-center justify-center"
                    >
                        <IoClose className="text-sm" />
                    </button>
                </div>

                {/* @ts-ignore */}
                <img className=" rounded-md w-full h-full object-cover" src={blobFileUrl} />
            </section>
        </>
    );
};


const FullScreenVideoView = ({ src, close }: { src: string; close: () => void; }) => {
    const [currentVideoPosition, setCurrentVideoPosition] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isBuffering, setIsBuffering] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const getVideoDuration = (position: number) => {
        const totalSeconds = position;

        // Calculate minutes and seconds
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);

        // Format the duration as "0:00"
        let formattedDuration = `${minutes}:${seconds.toString().padStart(2, "0")}`;

        // if (minutes == NaN) {
        //     formattedDuration = "0:00";
        // }

        return formattedDuration;
    };

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            setVideoDuration(video.duration);
            video.addEventListener("waiting", () => {
                setIsBuffering(true);
            });

            video.addEventListener("playing", () => {
                setIsBuffering(false);
                setIsPlaying(true);
            });
        }
        return () => {
            if (video) {
                video.removeEventListener("waiting", () => { });
                video.removeEventListener("playing", () => { });
            }
        };
    }, [videoRef]);

    return (
        <section
            onClick={(e) => {
                //@ts-ignore
                if (e.target.tagName === "SECTION") {
                    close();
                }
            }}
            className="fixed w-full h-full bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center top-0 left-0 z-40"
        >
            <MdOutlineClose
                onClick={(e) => close()}
                className="text-white absolute text-3xl top-4 right-3 md:top-16 md:left-16 cursor-pointer"
            />

            <div className="max-w-[95%] md:max-w-[70%] relative rounded overflow-hidden ">
                <video
                    muted={isMuted}
                    autoPlay
                    onLoadedData={(e) => {
                        //@ts-ignore
                        e.target.play();
                    }}
                    onTimeUpdate={(e) => {
                        //@ts-ignore
                        setCurrentVideoPosition(e.target.currentTime);
                        //@ts-ignore
                        setVideoDuration(e.target.duration);
                    }}
                    onPlay={(e) => {
                        setIsPlaying(true);
                    }}
                    onPause={(e) => {
                        setIsPlaying(false);
                    }}
                    ref={videoRef}
                    className="max-h-[80vh] md:max-h-[90vh] rounded-md"
                    src={src}
                ></video>

                {isBuffering && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 aspect-square border-b-2 border-gray-900 rounded-full animate-spin"></div>
                    </div>
                )}

                <div className="absolute bg-gradient-to-t from-[#0000001b] to-[#0000004d] bottom-0 w-full py-2 overflow-hidden md:py-4 text-white px-2 md:px-4 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        {!isPlaying ? (
                            <FaPlay
                                onClick={(e) => {
                                    videoRef.current?.play();
                                }}
                                className="text-lg md:text-xl cursor-pointer"
                            />
                        ) : (
                            <FaPause
                                onClick={(e) => {
                                    videoRef.current?.pause();
                                }}
                                className="text-lg md:text-xl cursor-pointer"
                            />
                        )}
                        <span className="text-sm">
                            {getVideoDuration(currentVideoPosition)}/
                            {isNaN(videoDuration) ? "0:00" : getVideoDuration(videoDuration)}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <div
                            onClick={(e) => {
                                let clickX = e.nativeEvent.offsetX;
                                let width = e.currentTarget.clientWidth;

                                const percentage = (clickX / width) * 100;
                                //@ts-ignore
                                videoRef.current.currentTime =
                                    (percentage / 100) * videoDuration;
                            }}
                            className="w-full h-2 bg-[#ffffff59] rounded-full overflow-hidden cursor-pointer"
                        >
                            <div
                                style={{
                                    width:
                                        videoDuration == 0
                                            ? "0%"
                                            : (currentVideoPosition / videoDuration) * 100 + "%",
                                }}
                                className="h-full bg-[#8ED500]"
                            ></div>
                        </div>

                        {isMuted ? (
                            <HiSpeakerXMark
                                onClick={(e) => setIsMuted(false)}
                                className="text-xl md:text-2xl cursor-pointer"
                            />
                        ) : (
                            <HiSpeakerWave
                                onClick={(e) => setIsMuted(true)}
                                className="text-xl md:text-2xl cursor-pointer"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};



const ShowMediaInFullScreen = ({ mediatype, src, onClose }: { mediatype: string; src: string | ArrayBuffer; onClose: () => void; }) => {
    return <section onClick={e => {
        //@ts-ignore
        if (e.target.tagName === "SECTION") onClose()
    }} className="fixed top-0 z-40 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm flex flex-col gap-2">
        <section className="flex justify-end py-2 px-2 mt-2">
            <button onClick={onClose} className="text-3xl absolute- top-5- right-4- z-40- text-white">
                <IoClose />
            </button>
        </section>

        <section className="w-full h-full flex justify-center items-center">
            {/* @ts-ignore */}
            {(mediatype === "image" || mediatype === "gif") && <img className="w-full max-h-full object-cover object-center" src={src} />}
        </section>
    </section>
}
