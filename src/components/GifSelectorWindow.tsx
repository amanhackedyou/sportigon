import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useRef, useState } from "react";
import OverlayWindowTemplate from "./OverlayWindowTemplate";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

const GifSelectorWindow = ({ close, onGifClick }: { close: () => void; onGifClick: (gif: string) => void }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  // const [ref, inView] = useInView();
  const [searchQuery, setSearchQuery] = useState("");
  const [trendingGifs, setTrendingGifs] = useState<string[]>([]);
  const [searchedGifs, setSearchedGifs] = useState<string[]>([]);
  const [isSearchNotFound, setIsSearchNotFound] = useState(false);


  const selectGifFromGalaryRef = useRef<HTMLInputElement>(null);


  const gf = new GiphyFetch("fWm9VaWWqicDKoMzCKUmiTKINZAoAUIT");

  const getGifs = async (query?: string | null, limit = 50) => {
    setIsLoading(true);
    const { data: gifs } = !query
      ? await gf.trending({ limit })
      : await gf.search(query, { limit });

    // const { data: gifs } = await gf.trending({ limit });
    const gifsUrls = [];

    for (const gif of gifs) {
      const id = gif.id;
      gifsUrls.push(`https://i.giphy.com/${id}.webp`);
    }

    setIsLoading(false);

    return gifsUrls;
  };

  // const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });

  // console.log(await fetchGifs());

  useEffect(() => {
    if (isFirstRender) {
      getGifs().then((gifs) => {
        setTrendingGifs([...trendingGifs, ...gifs]);
      });

      setIsFirstRender(false);
      return;
    }

    setSearchedGifs([]);
    if (searchQuery !== "") {
      setIsLoading(true);
      const search = setTimeout(() => {
        getGifs(searchQuery).then((gifs) => {
          if (gifs.length === 0) {
            setIsSearchNotFound(true);
            return;
          }
          setSearchedGifs(gifs);
          setIsSearchNotFound(false);
        });
      }, 1000);

      return () => clearTimeout(search);
    }
  }, [searchQuery]);

  const GifView = ({ src }: { src: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div className="rounded-md relative">
        <img
          onClick={(e) => {
            onGifClick(src);
            close();
          }}
          alt="GIF image"
          onLoad={(e) => setIsLoaded(true)}
          className={`${!isLoaded ? "hidden" : "inline-block"
            } rounded-md cursor-pointer`}
          src={src}
        />

        <div
          className={`${isLoaded ? "hidden" : "block"
            } bg-[#e5e5e5] aspect-square h-full`}
        ></div>
      </div>
    );
  };

  return (
    <>
      {<input ref={selectGifFromGalaryRef} onChange={e => {
        //@ts-ignore
        const file = e.target.files[0];

        if (!file) return;

        const fileReader = new FileReader();
        fileReader.addEventListener(
          "load",
          () => {
            if (typeof fileReader.result === "string") {
              onGifClick(fileReader.result);
              close();
            }
          },
          false
        );

        fileReader.readAsDataURL(file);
      }} className="hidden INBUILT-GIF-SELECTOR" accept="image/gif" type="file" />}
      <OverlayWindowTemplate isYCenter={false} onClose={close}>
        <div className="flex flex-col w-full h-full px-3 overflow-hidden gap-2">
          <div className="flex items-center gap-2 w-full py-2 px-3 rounded-full mt-2 bg-[#E5E5E5]">
            <IoSearchOutline className="text-xl text-[#777]" />
            <input
              placeholder="Search all the GIFs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-sm h-full text-[#373737] placeholder:text-[#777]"
              type="text"
            />
          </div>
          {isLoading && (
            <div className="w-full flex justify-center items-center mt-3">
              <div className="w-10 aspect-square border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
          )}

          <div className="py-2 max-h-full">
            <div
              className={` ${searchQuery !== "" ? "hidden" : "grid"
                } grid-cols-2 pb-5 md:grid-cols-3 gap-2 w-full  max-h-full overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-100 scrollbar-corner-gray-200`}
            >
              <button
                onClick={(e) => {
                  try {
                    selectGifFromGalaryRef.current?.click();
                  } catch (e) { }
                  // close();
                }}
                className={`bg-[#e5e5e5] max-h-32 rounded-md gap-3 hover:bg-[#cccccc] min-h-32 ${!isLoading ? "flex" : "hidden"
                  } flex-col items-center justify-center`}
              >
                <MdOutlinePhotoSizeSelectActual className="text-3xl" />
                <span className="text-sm">Choose from gallary</span>
              </button>

              {trendingGifs.map((gifUrl, i) => {
                return <GifView src={gifUrl} key={i} />;
              })}
            </div>

            <div
              className={` ${searchQuery !== "" ? "grid" : "hidden"
                } grid-cols-2 pb-5 md:grid-cols-3 gap-2 w-full  max-h-full overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-100 scrollbar-corner-gray-200`}
            >
              {searchedGifs.map((gifUrl, i) => {
                return <GifView src={gifUrl} key={i} />;
              })}
            </div>
            {isSearchNotFound && !isLoading && (
              <p className="text-center text-sm md:text-base">
                Sorry we couldn&#39;t find any GIFs on query{" "}
                <b>{`"${searchQuery}"`}.</b>
              </p>
            )}
            {/* <div
            ref={ref}
            className="w-full flex justify-center items-center mt-3"
          >
            <div className="w-10 aspect-square border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div> */}
          </div>
        </div>
      </OverlayWindowTemplate>
    </>
  );
};

export default GifSelectorWindow;
