import linkedInIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import githubLightIcon from "../assets/icons/github-light.svg";
import resumeIcon from "../assets/images/docs.webp";
import ProfileLink from "../components/ProfileLink";
import catImage from "../assets/images/cat.webp";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const AboutMeCard = () => {
  const resume = "Daniel_Zhang_Resume.pdf";
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`border rounded-lg p-4 flex flex-col gap-4 ${
        theme === "dark" && "border-gray-500"
      }`}
    >
      <div className="flex items-center justify-between items-center">
        <div className="basis-7/12 flex flex-col">
          <span className={`text-3xl ${theme === "dark" && "text-gray-100"}`}>
            Daniel Zhang
          </span>
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            dwqz365@gmail.com
          </span>
        </div>
        <img src={catImage} className="w-12 h-12" alt="about" />
      </div>
      <p
        className={`text-sm ${
          theme === "dark" ? "text-gray-300" : "text-gray-800"
        }`}
      >
        Hey there! Thanks for visiting. I'm Daniel Zhang, a 4th year Computer
        Science student at the University of Toronto. My dream is to work on
        something that everyone can appreciate. Hasn't happened yet, but I'm
        slowly getting there through all the experiences I've gained from
        various courses I've taken throughout my degree and my amazing
        internship experiences.
      </p>
      <p
        className={`text-sm ${
          theme === "dark" ? "text-gray-300" : "text-gray-800"
        }`}
      >
        When I'm not thinking about how I'm going to land my first full time
        job, you can catch me watching anime, sketching, and learning Mandarin
        so one day I can revisit the place where I spent most of my childhood.
      </p>
      <div className="flex flex-col gap-2">
        <span className={`text-lg ${theme === "dark" && "text-gray-200"}`}>
          Profile
        </span>
        <div className="w-full flex gap-4">
          <ProfileLink
            iconLight={linkedInIcon}
            iconDark={linkedInIcon}
            name="LinkedIn"
            link="https://www.linkedin.com/in/dz365/"
          />
          <ProfileLink
            iconLight={githubIcon}
            iconDark={githubLightIcon}
            name="Github"
            link="https://github.com/dz365"
          />
          <ProfileLink
            iconLight={resumeIcon}
            iconDark={resumeIcon}
            name="Resume"
            link={process.env.PUBLIC_URL + '/' + resume}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
