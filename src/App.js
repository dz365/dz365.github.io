import { useEffect, useRef, useState } from "react";
import { ReactComponent as GridIcon } from "./assets/icons/grid.svg";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import { ReactComponent as XMarkIcon } from "./assets/icons/xmark.svg";
import catImage from "./assets/images/cat.webp";
import casewareImage from "./assets/images/caseware.webp";
import skatescribeImage from "./assets/images/skatescribe.webp";
import ecosquadImage from "./assets/images/ecosquad.webp";
import webGalleryImage from "./assets/images/webgallery.webp";
import asteroidsImage from "./assets/images/asteroids.webp";
import resume from "./assets/Daniel_Zhang_Resume.pdf";
import googleLight from "./assets/images/google-light.png";
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
        <div className="w-full flex md:flex-row flex-col items-center gap-2 md:gap-8">
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
      <div className="md:px-52 px-2 py-4 w-full md:w-10/12 flex flex-col-reverse md:flex-row md:items-start gap-16">
        <div className="md:w-5/12 flex flex-col  md:basis-4/6">
          <span className="text-sm text-gray-700">
            5 results (0.01 seconds)
          </span>
          <span className="text-2xl text-blue-900 my-4">Work Experience</span>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={casewareImage}
                    className="w-8 h-8 bg-google-gray rounded-full p-1"
                    alt="work"
                  />
                  <div className="flex flex-col">
                    <span>Caseware</span>
                    <span className="text-sm text-gray-700">
                      https://www.caseware.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <span className="text-xl text-violet-700">
                  Software Developer
                </span>
                <span className="text-gray-700">
                  January 2022 - August 2022
                </span>
              </div>

              <p className="text-gray-800">
                My second internship was for 8 months at a medium sized auditing
                company called Caseware. At the time I was working, Caseware was
                in a transitional stage to fully move all their products to
                cloud providers. As such, most of what I worked on were related
                to this. Some of the major things I did include development of a
                routing microservice to handle incoming requests, and system
                improvements to better support client needs.
              </p>
              <div className="flex gap-2 flex-wrap	">
                {["Java", "Spring Boot", "AWS DynamoDB", "Redis", "C++"].map(
                  (language) => (
                    <span className="bg-google-gray px-3 py-1 rounded-3xl text-sm">
                      {language}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={skatescribeImage}
                    className="w-8 h-8 bg-google-gray rounded-full p-1"
                    alt="work"
                  />
                  <div className="flex flex-col">
                    <span>Skatescribe</span>
                    <span className="text-sm text-gray-700">
                      https://skatescribe.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <span className="text-xl text-violet-700">
                  Full Stack Developer
                </span>
                <span className="text-gray-700">May 2021 - August 2021</span>
              </div>

              <p className="text-gray-900">
                My first internship was for 4 months at a startup called
                Skatescribe. Backed by multiple NHL investors, Skatescribe is
                revolutionizing the skate sharpening industry by using machines,
                leading to high quality cuts that cannot be replicated anywhere
                else. What I worked on during my time here was developing
                measures to improve operational safety and automation to reduce
                the amount of interaction an operator has with the software.
              </p>
              <div className="flex gap-2 flex-wrap	">
                {[
                  "Angular",
                  "Python",
                  "Python Flask",
                  "SocketIO",
                  "PostgreSQL",
                ].map((language) => (
                  <span className="bg-google-gray px-3 py-1 rounded-3xl text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <span className="text-2xl text-blue-900 my-4">Projects</span>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={ecosquadImage}
                    className="w-8 h-8 bg-google-gray rounded-full p-1"
                    alt="work"
                  />
                  <div className="flex flex-col">
                    <span>Ecosquad</span>
                    <span className="text-sm text-gray-700">
                      https://github.com/dz365/project-ecosquad
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xl text-violet-700">Ecosquad</span>
              <p className="text-gray-900">
                Ecosquad is a web app developed by me and a friend of mine. The
                inspiration behind it was that we wanted a place where we could
                upload wildlife discoveries that we would make from time to
                time. Hence we made a citizen scientist app where users could
                share, search, and view discoveries on an interactive map.
              </p>
              <div className="flex gap-2 flex-wrap	">
                {[
                  "React",
                  "MapLibre GL",
                  "ExpressJS",
                  "PostgreSQL",
                  "Meilisearch",
                ].map((language) => (
                  <span className="bg-google-gray px-3 py-1 rounded-3xl text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={webGalleryImage}
                    className="w-8 h-8 bg-google-gray rounded-full p-1"
                    alt="work"
                  />
                  <div className="flex flex-col">
                    <span>Web Gallery</span>
                    <span className="text-sm text-gray-700">
                      https://github.com/dz365/Web-Gallery
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xl text-violet-700">Web Gallery</span>
              <p className="text-gray-900">
                Web Gallery is a web app that allows people to upload and view
                photos and attach comments. Ultimately, this app was just to
                test my understanding of the basics of web programming. Features
                like authentication and authorization, pagination were also
                implemented.
              </p>
              <div className="flex gap-2 flex-wrap	">
                {["HTML", "CSS", "Javascript", "ExpressJS", "SQLite"].map(
                  (language) => (
                    <span className="bg-google-gray px-3 py-1 rounded-3xl text-sm">
                      {language}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={asteroidsImage}
                    className="w-8 h-8 bg-google-gray rounded-full p-1"
                    alt="work"
                  />
                  <div className="flex flex-col">
                    <span>Asteroid Remake</span>
                    <span className="text-sm text-gray-700">
                      https://github.com/dz365/Asteroid-Remake
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xl text-violet-700">Asteroid Remake</span>
              <p className="text-gray-900">
                This was a project that I did along with a friend quite a while
                back, but I had so much fun creating that I decided to include
                it here. It's also nice to be reminded of how far I've come in
                such a short period of time. As per the name, this was a remake
                of Asteroids by Altari, alongisde additional features like
                powerups.
              </p>
              <div className="flex gap-2 flex-wrap	">
                {["Java", "Java Swing"].map((language) => (
                  <span className="bg-google-gray px-3 py-1 rounded-3xl text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex flex-col gap-4 md:basis-2/6">
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
          <button className="p-2 hover:bg-blue-gray rounded-xl flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 bg-contain bg-center bg-[url('./assets/images/docs.webp')]"></div>
            <span>Resume</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
