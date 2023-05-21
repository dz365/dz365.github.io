import { useEffect, useRef, useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navigation = ({ aboutRef, workRef, projectRef }) => {
  const [showOptions, setShowOptions] = useState(false);

  const divRef = useRef(null);
  const toggleRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        divRef.current &&
        !divRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = (elemRef) => {
    const navbarHeight = 120;
    const elementTop = elemRef.current.getBoundingClientRect().top;
    const offsetPosition = elementTop + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setShowOptions(false);
  };

  const scrollToAbout = () => handleScroll(aboutRef);
  const scrollToWork = () => handleScroll(workRef);
  const scrollToProject = () => handleScroll(projectRef);

  return (
    <>
      <button
        ref={toggleRef}
        className={`fixed top-2 right-2 lg:top-3.5 lg:right-4 z-10 p-2 rounded-full ${
          theme === "dark" ? "hover:bg-gray-600" : "hover:bg-google-gray"
        }`}
        onClick={() => setShowOptions(!showOptions)}
      >
        <svg
          class="gb_g"
          focusable="false"
          viewBox="0 0 24 24"
          className={`w-6 h-6 ${
            theme === "dark" ? "fill-gray-200" : "fill-gray-500"
          }`}
        >
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
        </svg>
      </button>

      {showOptions && (
        <div
          ref={divRef}
          className={`z-10 fixed top-16 right-4 w-80 bg-white rounded-lg border shadow-md p-4 grid grid-cols-2 gap-2 ${
            theme === "dark"
              ? "bg-neutral-800 text-gray-300 border-gray-500"
              : "bg-white"
          }`}
        >
          <button
            onClick={scrollToAbout}
            className={`p-2 rounded-xl flex flex-col items-center justify-center gap-2 ${
              theme === "dark" ? "hover:bg-gray-600" : "hover:bg-blue-gray"
            }`}
          >
            <div className="w-14 h-14 bg-contain bg-center  bg-[url('./assets/images/cat.webp')]"></div>
            <span>About Me</span>
          </button>
          <button
            onClick={scrollToWork}
            className={`p-2 rounded-xl flex flex-col items-center justify-center gap-2 ${
              theme === "dark" ? "hover:bg-gray-600" : "hover:bg-blue-gray"
            }`}
          >
            <div className="w-14 h-14 bg-contain bg-center bg-no-repeat bg-[url('./assets/images/briefcase.webp')]"></div>
            <span>Work Experience</span>
          </button>
          <button
            onClick={scrollToProject}
            className={`p-2 rounded-xl flex flex-col items-center justify-center gap-2 ${
              theme === "dark" ? "hover:bg-gray-600" : "hover:bg-blue-gray"
            }`}
          >
            <div className="w-14 h-14 bg-contain bg-center bg-[url('./assets/images/programing.webp')]"></div>
            <span>Projects</span>
          </button>
        </div>
      )}
    </>
  );
};
export default Navigation;
