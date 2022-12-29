import React from "react";
import grad from "../assets/me.jpg";
import resume from "../assets/Resume.pdf";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="lg:w-4/5 flex flex-col gap-4">
        <p className="text-5xl text-white font-black">about</p>
        <div className="w-full flex justify-center">
          <div className="lg:w-4/5 p-4">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <img
                src={grad}
                alt="photo of me"
                className="lg:w-1/3 rounded-xl"
              />
              <div className="lg:w-2/3 flex flex-col gap-10 items-center">
                <div className="flex gap-10">
                  <a
                    href="https://www.linkedin.com/in/dz365/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transform duration-500 hover:scale-110"
                  >
                    <LinkedInIcon fontSize="large" className="scale-150" />
                  </a>

                  <a
                    href="https://www.github.com/dz365/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transform duration-500 hover:scale-110"
                  >
                    <GitHubIcon fontSize="large" className="scale-150" />
                  </a>
                </div>
                <div className="relative text-white text-lg">
                  <p className="text-lg">
                    My name is Daniel Zhang and I'm a Computer Science student
                    currently studying at the University of Toronto. I'm
                    currently looking for 2023 internships! Check out my resume
                    <a
                      href={resume}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 text-lg text-sky-300 hover:text-sky-200"
                    >
                      &nbsp;here.
                    </a>
                    <br />
                    <br />
                    I started programming in grade 11 when I took a programming
                    course that my high school offered. Though it was really
                    hard at first, I found that I really liked building and
                    simplifying things. Although my programming skills have
                    gotten a lot better and I've learned many new concepts, I
                    know that I still have lots to learn.
                    <br />
                    <br />
                    Hobbies include: Watching anime and other animated shows,
                    enjoying nature and working out. If I were to give a
                    recommendation, I'd say Avatar: The Last Airbender and
                    Steins;Gate. Steins;Gate may be confusing but the series
                    definitely picks pick in a few episodes. <br />
                    <br />
                    Scroll down for more me...
                  </p>
                  <ExpandMoreIcon fontSize="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
