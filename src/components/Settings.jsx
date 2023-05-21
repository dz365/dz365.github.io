import { useContext, useEffect, useRef, useState } from "react";
import { ReactComponent as GearIcon } from "../assets/icons/gear.svg";
import lightMode from "../assets/images/light-mode.webp";
import darkMode from "../assets/images/dark-mode.webp";
import defaultMode from "../assets/images/default-mode.webp";
import { ThemeContext } from "../contexts/ThemeContext";

const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);

  const divRef = useRef(null);
  const toggleRef = useRef(null);

  const { setTheme } = useContext(ThemeContext);
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
        className="fixed top-2 right-14 lg:top-3.5 lg:right-16 z-10 p-2 rounded-full hover:bg-google-gray"
        onClick={() => setShowSettings(!showSettings)}
      >
        <div className="w-6 opacity-75">
          <GearIcon />
        </div>
      </button>

      {showSettings && (
        <div
          ref={divRef}
          className="z-10 fixed top-16 right-4 bg-white rounded-lg border shadow-md p-4 flex flex-col gap-3"
        >
          <span className="text-lg">Appearance</span>
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
