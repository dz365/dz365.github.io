import { useEffect, useRef, useState } from "react";
import { ReactComponent as GridIcon } from "./assets/icons/grid.svg";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import { ReactComponent as XMarkIcon } from "./assets/icons/xmark.svg";
import { ReactComponent as MicrophoneIcon } from "./assets/icons/microphone.svg";
import { ReactComponent as CameraIcon } from "./assets/icons/camera.svg";
import catImage from "./assets/images/cat.webp";
import briefcaseImage from "./assets/images/briefcase.webp";
import programmingImage from "./assets/images/programing.webp";

import googleLight from "./assets/images/google-light.png";
function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const divRef = useRef(null);
  const gridRef = useRef(null);
  const contactDivRef = useRef(null);
  const avatarRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contactDivRef.current &&
        !contactDivRef.current.contains(event.target) &&
        !avatarRef.current.contains(event.target)
      ) {
        setShowContact(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="sticky top-0 left-0 bg-white border-b px-5 py-2 w-full flex justify-between items-center gap-8">
        <div className="flex items-center gap-8">
          <img alt="Google" src={googleLight} className="w-24" />
          <div className="w-[692px] border shadow-md rounded-3xl px-4 py-2.5 flex justify-between gap-3">
            <span className="text-gray-700 pr-2">daniel zhang website</span>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 opacity-50">
                <XMarkIcon />
              </div>
              <div className="w-1 h-6 border-l"></div>
              <div className="w-6 h-6">
                <MicrophoneIcon />
              </div>
              <div className="w-6 h-6">
                <CameraIcon />
              </div>
              <div className="w-6 h-6">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            ref={gridRef}
            className="z-10 p-2 rounded-full hover:bg-google-gray"
            onClick={() => setShowOptions(!showOptions)}
          >
            <div className="w-6">
              <GridIcon />
            </div>
          </button>
          <button
            ref={avatarRef}
            className="p-1 rounded-full hover:bg-google-gray"
            onClick={() => setShowContact(!showContact)}
          >
            <div className="w-8 h-8 rounded-full bg-contain bg-center bg-[url('./assets/images/cat.webp')]"></div>
          </button>
        </div>
      </div>
      <p>About 2,270,000 results (0.31 seconds) </p>
      <div className="w-5/12 p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={catImage} className="w-8 h-8" alt="about" />
            <span className="text-lg text-blue-800">About Me</span>
          </div>
          <p className="text-gray-900">
            Hello! I'm Daniel Zhang, a 4th year Computer Science student at the
            University of Toronto. My favourite part of programming is
            everything frontend related. It would be a dream of mine to code
            something so appealing that every user who enters goes "Holy !@#$
            this looks so good!" or something along those lines. That hasn't
            happened yet, but slowly and surely I'm getting there through all
            the experiences I've gained from various courses I've taken
            throughout my degree and my amazing internship experiences.
          </p>
          <p className="text-gray-900">
            When I'm not thinking about how I'm going to land my first full time
            job, you can catch me watching various shows (ahem anime),
            sketching, and learning Mandarin so one day I can revisit without
            aid the place where I spent most of my childhood.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={briefcaseImage} className="w-8 h-8" alt="work" />
            <span className="text-lg text-blue-800">Work Experience</span>
          </div>
          <div className="flex justify-between">
            <span>Software Developer @ Caseware</span>
            <span>January 2022 - August 2022</span>
          </div>
          <p className="text-gray-900">
            My second internship was for 8 months at a medium sized auditing
            company called Caseware. At the time I was working, Caseware was in
            a transitional stage to fully move all their products to cloud
            providers. As such, most of what I worked on were related to this.
            Some of the major things I did include development of a routing
            microservice to handle incoming requests, and system improvements to
            better support client needs.
          </p>
          <span>
            Tech stack used: Java + Spring Boot, AWS DynamoDB, Redis, C++
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={briefcaseImage} className="w-8 h-8" alt="work" />
            <span className="text-lg text-blue-800">Work Experience</span>
          </div>
          <div className="flex justify-between">
            <span>Full Stack Developer @ Skatescribe</span>
            <span>May 2021 - August 2021</span>
          </div>
          <p className="text-gray-900">
            My first internship was for 4 months at a startup called
            Skatescribe. Backed by multiple NHL investors, Skatescribe is
            revolutionizing the skate sharpening industry by using machines,
            leading to high quality cuts that cannot be replicated anywhere
            else. What I worked on during my time here was developing measures
            to improve operational safety and automation to reduce the amount of
            interaction an operator has with the software.
          </p>
          <span>
            Tech stack used: Angular, Python + Flask, PostgreSQL, SocketIO
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={programmingImage} className="w-8 h-8" alt="project" />
            <span className="text-lg text-blue-800">Project</span>
          </div>
          <span>Ecosquad</span>
          <p className="text-gray-900">
            Ecosquad is a web app developed by me and a friend of mine. The
            inspiration behind it was that we wanted a place where we could
            upload wildlife discoveries that we would make from time to time.
            Hence we made a citizen scientist app where users could share,
            search, and view discoveries on an interactive map.
          </p>
          <span>
            Tech stack used: React, MapLibre GL, ExpressJS, PostgreSQL,
            Meilisearch
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={programmingImage} className="w-8 h-8" alt="project" />
            <span className="text-lg text-blue-800">Project</span>
          </div>
          <span>Web Gallery</span>
          <p className="text-gray-900">
            Web Gallery is a web app that allows people to upload and view
            photos and attach comments. Ultimately, this app was just to test my
            understanding of the basics of web programming. Features like
            authentication and authorization, pagination were also included.
          </p>
          <span>Tech stack used: HTML, CSS, JS, ExpressJS, SQLite</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={programmingImage} className="w-8 h-8" alt="project" />
            <span className="text-lg text-blue-800">Project</span>
          </div>
          <span>Asteroids Remake</span>
          <p className="text-gray-900">
            This was a project that I did along with a friend quite a while
            back, but I had so much fun creating that I decided to include it
            here. It's also nice to be reminded of how far I've come in such a
            short period of time. As per the name, this was a remake of
            Asteroids by Altari, alongisde additional features like powerups.
          </p>
          <span>Tech stack used: Java, Java Swing</span>
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
      {showContact && (
        <div
          ref={contactDivRef}
          className="flex flex-col gap-3 bg-blue-gray p-2 rounded-lg w-72 shadow z-10 fixed top-16 right-4"
        >
          <div className="bg-white rounded-lg p-2 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src={catImage}
                alt="avatar"
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <div className="text-green-600">Daniel Zhang</div>
                <div className="text-gray-500 text-sm font-light">
                  dwqz365@gmail.com
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="self-center w-11/12 h-1 border-t mb-1"></div>
              <div className="flex flex-col gap-2">
                <div className="mx-6 flex items-center gap-8">
                  <div className="w-6 h-6 bg-[url('./assets/icons/linkedin.svg')] bg-contain"></div>
                  <a
                    href="https://www.linkedin.com/in/dz365/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm text-gray-900 opacity-90"
                  >
                    /dz365
                  </a>
                </div>
                <div className="mx-6 flex items-center gap-8">
                  <div className="w-6 h-6 bg-[url('./assets/icons/github.svg')] bg-contain"></div>
                  <a
                    href="https://github.com/dz365"
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm text-gray-900 opacity-90"
                  >
                    /dz365
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="mx-8 flex items-center gap-8 opacity-75">
            <div className="w-4 h-4 bg-logout bg-contain bg-center bg-no-repeat"></div>
            <span className="text-sm">Sign out</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
