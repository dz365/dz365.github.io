import googleLight from "../assets/images/google-light.webp";
import googleColor from "../assets/images/google-color.webp";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as XMarkIcon } from "../assets/icons/xmark.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const TopBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`sticky top-0 z-10 left-0 border-b px-5 py-3 w-full flex items-center ${
        theme === "dark" ? "bg-google-dark" : "bg-white"
      }`}
    >
      <div className="w-full flex lg:flex-row flex-col items-center gap-2 lg:gap-8">
        <img
          alt="Google"
          src={theme === "dark" ? googleLight : googleColor}
          className="w-24"
        />
        <div className="w-full max-w-lg border shadow-md rounded-3xl px-4 py-2.5 flex justify-between gap-3">
          <span
            className={`pr-2 ${
              theme === "dark" ? "text-gray-100" : "text-gray-700"
            }`}
          >
            daniel zhang website
          </span>
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
    </div>
  );
};

export default TopBar;
