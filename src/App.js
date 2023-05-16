import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ReactComponent as GridIcon } from "./assets/icons/grid.svg";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import { ReactComponent as XMarkIcon } from "./assets/icons/xmark.svg";
import TextareaAutosize from "react-textarea-autosize";

function App() {
  const GOOGLEDAYMODE =
    "https://www.google.ca/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  const GOOGLENIGHTMODE =
    "https://www.google.ca/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";

  const [searchQuery, setSearchQuery] = useState("");
  const [showOptions, setShowOptions] = useState(true);
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
    <div className="w-full h-full">
      <div className="px-5 py-2 w-full flex justify-end items-center gap-2">
        <button
          ref={gridRef}
          className="z-10 p-2 rounded-full hover:bg-google-gray"
          onClick={() => setShowOptions(!showOptions)}
        >
          <div className="w-6">
            <GridIcon />
          </div>
        </button>
        <button className="p-1 rounded-full hover:bg-google-gray">
          <div className="w-8 h-8 rounded-full bg-contain bg-center bg-[url('./assets/images/cat.webp')]"></div>
        </button>
      </div>
      <div className="w-full flex flex-col items-center">
        <img alt="Google" src={GOOGLEDAYMODE} />
        <div className="border rounded-3xl w-full max-w-xl min-h-12 px-4 py-2 flex gap-3">
          <div className="mt-0.5 w-5 h-5 opacity-50">
            <SearchIcon />
          </div>
          <TextareaAutosize
            minRows={1}
            maxRows={10}
            className="outline-none w-full resize-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery !== "" && (
            <button
              className="mt-0.5 w-5 h-5 opacity-50"
              onClick={() => setSearchQuery("")}
            >
              <XMarkIcon />
            </button>
          )}
        </div>
      </div>
      {showOptions && (
        <div
          ref={divRef}
          className="z-10 fixed top-16 right-4 w-80 bg-white rounded-lg border shadow-md p-4 grid grid-cols-2 gap-2"
        >
          <button className="p-2 hover:bg-google-gray rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 bg-contain bg-center  bg-[url('./assets/images/cat.webp')]"></div>
            <span>About Me</span>
          </button>
          <button className="p-2 flex flex-col items-center hover:bg-google-gray rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 bg-contain bg-center bg-no-repeat bg-[url('./assets/images/briefcase.webp')]"></div>
            <span>Work Experience</span>
          </button>

          <button className="p-2 hover:bg-google-gray rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 bg-contain bg-center bg-[url('./assets/images/programing.webp')]"></div>
            <span>Projects</span>
          </button>
          <button className="p-2 hover:bg-google-gray rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 bg-contain bg-center bg-[url('./assets/images/docs.webp')]"></div>
            <span>Resume</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
