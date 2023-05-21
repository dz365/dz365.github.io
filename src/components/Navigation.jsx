import { useEffect, useRef, useState } from "react";
import { ReactComponent as GridIcon } from "../assets/icons/grid.svg";

const Navigation = ({ aboutRef, workRef, projectRef }) => {
  const [showOptions, setShowOptions] = useState(false);

  const divRef = useRef(null);
  const toggleRef = useRef(null);

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
        className="fixed top-2 right-2 lg:top-3.5 lg:right-4 z-10 p-2 rounded-full hover:bg-google-gray"
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className="w-6">
          <GridIcon />
        </div>
      </button>

      {showOptions && (
        <div
          ref={divRef}
          className="z-10 fixed top-16 right-4 w-80 bg-white rounded-lg border shadow-md p-4 grid grid-cols-2 gap-2"
        >
          <button
            onClick={scrollToAbout}
            className="p-2 hover:bg-blue-gray rounded-xl flex flex-col items-center justify-center gap-2"
          >
            <div className="w-14 h-14 bg-contain bg-center  bg-[url('./assets/images/cat.webp')]"></div>
            <span>About Me</span>
          </button>
          <button
            onClick={scrollToWork}
            className="p-2 flex flex-col items-center hover:bg-blue-gray rounded-xl flex flex-col items-center justify-center gap-2"
          >
            <div className="w-14 h-14 bg-contain bg-center bg-no-repeat bg-[url('./assets/images/briefcase.webp')]"></div>
            <span>Work Experience</span>
          </button>
          <button
            onClick={scrollToProject}
            className="p-2 hover:bg-blue-gray rounded-xl flex flex-col items-center justify-center gap-2"
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
