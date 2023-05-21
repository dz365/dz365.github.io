import { useEffect, useRef, useState } from "react";
import { ReactComponent as GridIcon } from "./assets/icons/grid.svg";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import { ReactComponent as XMarkIcon } from "./assets/icons/xmark.svg";
import catImage from "./assets/images/cat.webp";
import resume from "./assets/Daniel_Zhang_Resume.pdf";
import googleLight from "./assets/images/google-light.png";
import BubbleList from "./components/BubbleList";
import SearchHit from "./components/SearchHit";
import { CASEWARE, SKATESCRIBE } from "./constants/WorkExperiences";
import { ASTEROIDS, ECOSQUAD, WEBGALLERY } from "./constants/Projects";
function App() {
  const [showOptions, setShowOptions] = useState(false);

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
    <div className="w-full h-screen">
      <div className="sticky top-0 left-0 bg-white border-b px-5 py-3 w-full flex items-center">
        <div className="w-full flex lg:flex-row flex-col items-center gap-2 lg:gap-8">
          <img alt="Google" src={googleLight} className="w-24" />
          <div className="w-full max-w-lg border shadow-md rounded-3xl px-4 py-2.5 flex justify-between gap-3">
            <span className="text-gray-700 pr-2">daniel zhang website</span>
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
        <button
          ref={gridRef}
          className="fixed top-3.5 right-4 z-10 p-2 rounded-full hover:bg-google-gray"
          onClick={() => setShowOptions(!showOptions)}
        >
          <div className="w-6">
            <GridIcon />
          </div>
        </button>
      </div>
      <div className="lg:px-52 px-2 py-4 w-full lg:w-10/12 flex flex-col-reverse lg:flex-row lg:items-start gap-16">
        <div className="lg:w-5/12 flex flex-col  lg:basis-4/6">
          <span className="text-sm text-gray-700">
            5 results (0.01 seconds)
          </span>
          <span className="text-2xl text-blue-900 my-4">Work Experience</span>
          <div className="flex flex-col gap-10">
            <SearchHit
              image={CASEWARE.logo}
              pageTitle={CASEWARE.company}
              pageLink={CASEWARE.url}
              hitTitle={CASEWARE.jobTitle}
              date={CASEWARE.duration}
              description={CASEWARE.description}
              additionalInfo={<BubbleList list={CASEWARE.technologies} />}
            />
            <SearchHit
              image={SKATESCRIBE.logo}
              pageTitle={SKATESCRIBE.company}
              pageLink={SKATESCRIBE.url}
              hitTitle={SKATESCRIBE.jobTitle}
              date={SKATESCRIBE.duration}
              description={SKATESCRIBE.description}
              additionalInfo={<BubbleList list={SKATESCRIBE.technologies} />}
            />
          </div>
          <span className="text-2xl text-blue-900 my-4">Projects</span>
          <div className="flex flex-col gap-10">
            <SearchHit
              image={ECOSQUAD.logo}
              pageTitle={ECOSQUAD.name}
              pageLink={ECOSQUAD.url}
              hitTitle={ECOSQUAD.name}
              date={ECOSQUAD.duration}
              description={ECOSQUAD.description}
              additionalInfo={<BubbleList list={ECOSQUAD.technologies} />}
            />
            <SearchHit
              image={WEBGALLERY.logo}
              pageTitle={WEBGALLERY.name}
              pageLink={WEBGALLERY.url}
              hitTitle={WEBGALLERY.name}
              date={WEBGALLERY.duration}
              description={WEBGALLERY.description}
              additionalInfo={<BubbleList list={WEBGALLERY.technologies} />}
            />
            <SearchHit
              image={ASTEROIDS.logo}
              pageTitle={ASTEROIDS.name}
              pageLink={ASTEROIDS.url}
              hitTitle={ASTEROIDS.name}
              date={ASTEROIDS.duration}
              description={ASTEROIDS.description}
              additionalInfo={<BubbleList list={ASTEROIDS.technologies} />}
            />
          </div>
        </div>
        <div className="border rounded-lg p-4 flex flex-col gap-4 lg:basis-2/6">
          <div className="flex items-center justify-between items-center">
            <div className="basis-7/12 flex flex-col">
              <span className="text-3xl">Daniel Zhang</span>
              <span className="text-sm text-gray-700">dwqz365@gmail.com</span>
            </div>
            <img src={catImage} className="w-16 h-16" alt="about" />
          </div>
          <p className="text-gray-800 text-sm">
            Hey there! Thanks for visiting. I'm Daniel Zhang, a 4th year
            Computer Science student at the University of Toronto. My dream is
            to work on something that everyone can appreciate. Hasn't happened
            yet, but I'm slowly getting there through all the experiences I've
            gained from various courses I've taken throughout my degree and my
            amazing internship experiences.
          </p>
          <p className="text-gray-800 text-sm">
            When I'm not thinking about how I'm going to land my first full time
            job, you can catch me watching anime, sketching, and learning
            Mandarin so one day I can revisit the place where I spent most of my
            childhood.
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-lg">Profile</span>
            <div className="w-full flex gap-4">
              <a
                href="https://www.linkedin.com/in/dz365/"
                rel="noreferrer"
                target="_blank"
                className="flex flex-col items-center gap-2 hover:underline"
              >
                <div className="w-6 h-6 bg-[url('./assets/icons/linkedin.svg')] bg-contain"></div>
                <span className="text-sm text-blue-800">LinkedIn</span>
              </a>
              <a
                href="https://github.com/dz365"
                rel="noreferrer"
                target="_blank"
                className="flex flex-col items-center gap-2 hover:underline"
              >
                <div className="w-6 h-6 bg-[url('./assets/icons/github.svg')] bg-contain"></div>
                <span className="text-sm text-blue-800">Github</span>
              </a>
              <a
                href={resume}
                rel="noreferrer"
                target="_blank"
                className="flex flex-col items-center gap-2 hover:underline"
              >
                <div className="w-6 h-6 bg-[url('./assets/images/docs.webp')] bg-contain"></div>
                <span className="text-sm text-blue-800">Resume</span>
              </a>
            </div>
          </div>
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
        </div>
      )}
    </div>
  );
}

export default App;
