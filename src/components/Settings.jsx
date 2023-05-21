import { useContext, useEffect, useRef, useState } from "react";
import lightMode from "../assets/images/light-mode.webp";
import darkMode from "../assets/images/dark-mode.webp";
import defaultMode from "../assets/images/default-mode.webp";
import { ThemeContext } from "../contexts/ThemeContext";

const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);

  const divRef = useRef(null);
  const toggleRef = useRef(null);

  const { theme, setTheme } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState("deviceDefault");

  const handleThemeChange = (event) => {
    let theme = event.target.value;
    if (theme === "deviceDefault") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    setSelectedTheme(event.target.value);
    setTheme(theme);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        divRef.current &&
        !divRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        setShowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        ref={toggleRef}
        className={`fixed top-2 right-14 lg:top-3.5 lg:right-16 z-10 p-2 rounded-full ${
          theme === "dark" ? "hover:bg-gray-600" : "hover:bg-google-gray"
        }`}
        onClick={() => setShowSettings(!showSettings)}
      >
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-6 h-6 ${
            theme === "dark" ? "fill-gray-200" : "fill-gray-500"
          }`}
        >
          <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
          <circle cx="12" cy="12" r="3.5"></circle>
        </svg>
      </button>

      {showSettings && (
        <div
          ref={divRef}
          className={`z-10 fixed top-16 right-4 rounded-lg border shadow-md p-4 flex flex-col gap-3 ${
            theme === "dark"
              ? "bg-neutral-800 text-gray-300 border-gray-500"
              : "bg-white"
          }`}
        >
          <span className={`text-lg ${theme === "dark" && "text-gray-100"}`}>
            Appearance
          </span>
          <label className="flex items-center justify-between">
            <div className="flex gap-3">
              <input
                type="radio"
                value="light"
                checked={selectedTheme === "light"}
                onChange={handleThemeChange}
              />
              Light Theme
            </div>

            <img src={lightMode} alt="light" className="mx-4 w-16" />
          </label>

          <label className="flex items-center justify-between">
            <div className="flex gap-3">
              <input
                type="radio"
                value="dark"
                checked={selectedTheme === "dark"}
                onChange={handleThemeChange}
              />
              Dark Theme
            </div>
            <img src={darkMode} alt="dark" className="mx-4 w-16" />
          </label>

          <label className="flex items-center justify-between">
            <div className="flex gap-3">
              <input
                type="radio"
                value="deviceDefault"
                checked={selectedTheme === "deviceDefault"}
                onChange={handleThemeChange}
              />
              Device Default
            </div>
            <img src={defaultMode} alt="dark" className="mx-4 w-16" />
          </label>
        </div>
      )}
    </>
  );
};
export default Settings;
