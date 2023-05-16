import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ReactComponent as GridIcon } from "./assets/icons/grid.svg";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import { ReactComponent as XMarkIcon } from "./assets/icons/xmark.svg";
import TextareaAutosize from "react-textarea-autosize";
import catImage from "./assets/images/cat.webp";

function App() {
  const GOOGLEDAYMODE =
    "https://www.google.ca/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  const GOOGLENIGHTMODE =
    "https://www.google.ca/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";

  const [searchQuery, setSearchQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const divRef = useRef(null);
  const gridRef = useRef(null);
  const contactDivRef = useRef(null);
  const avatarRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contactDivRef.current &&
        !contactDivRef.current.contains(event.target) &&
        !avatarRef.current.contains(event.target)
      ) {
        setShowContact(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-screen">
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
        <button
          ref={avatarRef}
          className="p-1 rounded-full hover:bg-google-gray"
          onClick={() => setShowContact(!showContact)}
        >
          <div className="w-8 h-8 rounded-full bg-contain bg-center bg-[url('./assets/images/cat.webp')]"></div>
        </button>
      </div>
      <div className="translate-y-[calc(50%-40px)] px-4 w-full h-1/2 flex flex-col justify-start items-center gap-6">
        <img alt="Google" src={GOOGLEDAYMODE} />
        <div className="border rounded-3xl w-full max-w-xl min-h-12 px-4 py-3 flex gap-3">
          <div className="mt-1 w-5 h-5 opacity-50">
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
          <button className="p-2 hover:bg-blue-gray rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 bg-contain bg-center bg-[url('./assets/images/docs.webp')]"></div>
            <span>Resume</span>
          </button>
        </div>
      )}
      {showContact && (
        <div
          ref={contactDivRef}
          className="flex flex-col gap-3 bg-blue-gray p-2 rounded-lg w-72 shadow z-10 fixed top-16 right-4"
        >
          <div className="bg-white rounded-lg p-2 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src={catImage}
                alt="avatar"
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <div className="text-green-600">Daniel Zhang</div>
                <div className="text-gray-500 text-sm font-light">
                  dwqz365@gmail.com
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="self-center w-11/12 h-1 border-t mb-1"></div>
              <div className="flex flex-col gap-2">
                <div className="mx-6 flex items-center gap-8">
                  <div className="w-6 h-6 bg-[url('./assets/icons/linkedin.svg')] bg-contain"></div>
                  <a
                    href="https://www.linkedin.com/in/dz365/"
                    target="_blank"
                    className="text-sm text-gray-900 opacity-90"
                  >
                    /dz365
                  </a>
                </div>
                <div className="mx-6 flex items-center gap-8">
                  <div className="w-6 h-6 bg-[url('./assets/icons/github.svg')] bg-contain"></div>
                  <a
                    href="https://github.com/dz365"
                    target="_blank"
                    className="text-sm text-gray-900 opacity-90"
                  >
                    /dz365
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="mx-8 flex items-center gap-8 opacity-75">
            <div className="w-4 h-4 bg-logout bg-contain bg-center bg-no-repeat"></div>
            <span className="text-sm">Sign out</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
