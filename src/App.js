import WorkExperienceHits from "./components/WorkExperienceHits";
import ProjectHits from "./components/ProjectHits";
import AboutMeCard from "./components/AboutMeCard";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import { useContext, useRef } from "react";
import Settings from "./components/Settings";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-fit ${
        theme === "dark" ? "bg-google-dark" : "bg-white"
      }`}
    >
      <TopBar />
      <Navigation
        aboutRef={aboutRef}
        workRef={workRef}
        projectRef={projectRef}
      />
      <Settings />
      <div className="2xl:ml-52 xl:ml-40 lg:ml-32 2xl:w-8/12 px-2 py-4 w-10/12 m-auto">
        <span
          className={`text-sm ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          5 results (0.01 seconds)
        </span>
        <div className="mt-4 lg:mt-0 flex flex-col-reverse lg:flex-row lg:items-start lg:gap-16">
          <div className="flex flex-col lg:basis-4/6">
            <span
              ref={workRef}
              className={`text-2xl my-4  ${
                theme === "dark" ? "text-blue-400" : "text-blue-900"
              }`}
            >
              Work Experience
            </span>
            <WorkExperienceHits />
            <span
              ref={projectRef}
              className={`text-2xl my-4  ${
                theme === "dark" ? "text-blue-400" : "text-blue-900"
              }`}
            >
              Projects
            </span>
            <ProjectHits />
          </div>
          <div ref={aboutRef} className="lg:basis-2/6">
            <AboutMeCard />
          </div>
        </div>
      </div>
      <footer className={`w-full text-center text-sm py-4 ${theme === "dark" ? "bg-gray-950 text-gray-500" : "bg-gray-100 text-gray-700"}`}>Created using React with Tailwind CSS</footer>
    </div>
  );
}

export default App;
