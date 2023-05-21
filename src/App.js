import { useEffect, useRef, useState } from "react";
import { ReactComponent as GridIcon } from "./assets/icons/grid.svg";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import { ReactComponent as XMarkIcon } from "./assets/icons/xmark.svg";
import googleLight from "./assets/images/google-light.png";
import WorkExperienceHits from "./components/WorkExperienceHits";
import ProjectHits from "./components/ProjectHits";
import AboutMeCard from "./components/AboutMeCard";
function App() {
  const [showOptions, setShowOptions] = useState(false);

  const divRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        divRef.current &&
        !divRef.current.contains(event.target) &&
        !gridRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-fit">
      <div className="sticky top-0 z-10 left-0 bg-white border-b px-5 py-3 w-full flex items-center">
        <div className="w-full flex lg:flex-row flex-col items-center gap-2 lg:gap-8">
          <img alt="Google" src={googleLight} className="w-24" />
          <div className="w-full max-w-lg border shadow-md rounded-3xl px-4 py-2.5 flex justify-between gap-3">
            <span className="text-gray-700 pr-2">daniel zhang website</span>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 opacity-50">
                <XMarkIcon />
              </div>
              <div className="w-1 h-6 border-l"></div>
              <div className="w-6 h-6">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
        <button
          ref={gridRef}
          className="fixed top-3.5 right-4 z-10 p-2 rounded-full hover:bg-google-gray"
          onClick={() => setShowOptions(!showOptions)}
        >
          <div className="w-6">
            <GridIcon />
          </div>
        </button>
      </div>
      <div className="2xl:ml-52 2xl:w-8/12 xl:ml-40 xl:w-10/12 px-2 py-4 w-10/12 m-auto lg:ml-32 lg:w-10/12 flex flex-col-reverse lg:flex-row lg:items-start gap-16">
        <div className="lg:w-5/12 flex flex-col lg:basis-4/6">
          <span className="text-sm text-gray-700">
            5 results (0.01 seconds)
          </span>
          <span className="text-2xl text-blue-900 my-4">Work Experience</span>
          <div className="flex flex-col gap-10">
            <WorkExperienceHits />
          </div>
          <span className="text-2xl text-blue-900 my-4">Projects</span>
          <div className="flex flex-col gap-10">
            <ProjectHits />
          </div>
        </div>
        <div className="border rounded-lg p-4 lg:basis-2/6">
          <AboutMeCard />
        </div>
      </div>
      {showOptions && (
        <div
          ref={divRef}
          className="z-10 fixed top-16 right-4 w-80 bg-white rounded-lg border shadow-md p-4 grid grid-cols-2 gap-2"
        >
          <button className="p-2 hover:bg-blue-gray rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 bg-contain bg-center  bg-[url('./assets/images/cat.webp')]"></div>
            <span>About Me</span>
          </button>
          <button className="p-2 flex flex-col items-center hover:bg-blue-gray rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 bg-contain bg-center bg-no-repeat bg-[url('./assets/images/briefcase.webp')]"></div>
            <span>Work Experience</span>
          </button>

          <button className="p-2 hover:bg-blue-gray rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 bg-contain bg-center bg-[url('./assets/images/programing.webp')]"></div>
            <span>Projects</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
