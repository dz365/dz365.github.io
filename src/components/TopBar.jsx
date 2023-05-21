import googleLight from "../assets/images/google-light.webp";
import googleColor from "../assets/images/google-color.webp";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const TopBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`sticky top-0 z-10 left-0 border-b px-5 py-3 w-full flex items-center ${
        theme === "dark" ? "bg-google-dark border-gray-500" : "bg-white"
      }`}
    >
      <div className="w-full flex lg:flex-row flex-col items-center gap-2 lg:gap-8">
        <img
          alt="Google"
          src={theme === "dark" ? googleLight : googleColor}
          className="w-24"
        />
        <div
          className={`w-full max-w-lg border shadow-md rounded-3xl px-4 py-2.5 flex justify-between gap-3 ${
            theme === "dark" && "border-gray-500"
          }`}
        >
          <span
            className={`pr-2 ${
              theme === "dark" ? "text-gray-100" : "text-gray-700"
            }`}
          >
            daniel zhang website
          </span>
          <div className="flex items-center gap-3">
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 ${
                theme === "dark" ? "fill-gray-300" : "fill-gray-500"
              }`}
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
            <div
              className={`w-1 h-6 border-l ${
                theme === "dark" && "border-gray-500"
              }`}
            ></div>
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 ${
                theme === "dark" ? "fill-blue-300" : "fill-blue-500"
              }`}
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
