import { useState } from "react";
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
  return (
    <>
      <div className="px-5 py-2 w-full flex justify-end items-center gap-2">
        <button className="p-2 rounded-full hover:bg-icon-hover">
          <div className="w-6">
            <GridIcon />
          </div>
        </button>
        <button className="p-1 rounded-full hover:bg-icon-hover">
          <div className="w-8 h-8 rounded-full bg-contain bg-center bg-[url('./assets/cat.png')]"></div>
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
    </>
  );
}

export default App;
