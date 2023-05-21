import linkedInIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import resumeIcon from "../assets/images/docs.webp";
import ProfileLink from "../components/ProfileLink";
import catImage from "../assets/images/cat.webp";
import resume from "../assets/Daniel_Zhang_Resume.pdf";

const AboutMeCard = () => {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between items-center">
        <div className="basis-7/12 flex flex-col">
          <span className="text-3xl">Daniel Zhang</span>
          <span className="text-sm text-gray-700">dwqz365@gmail.com</span>
        </div>
        <img src={catImage} className="w-12 h-12" alt="about" />
      </div>
      <p className="text-gray-800 text-sm">
        Hey there! Thanks for visiting. I'm Daniel Zhang, a 4th year Computer
        Science student at the University of Toronto. My dream is to work on
        something that everyone can appreciate. Hasn't happened yet, but I'm
        slowly getting there through all the experiences I've gained from
        various courses I've taken throughout my degree and my amazing
        internship experiences.
      </p>
      <p className="text-gray-800 text-sm">
        When I'm not thinking about how I'm going to land my first full time
        job, you can catch me watching anime, sketching, and learning Mandarin
        so one day I can revisit the place where I spent most of my childhood.
      </p>
      <div className="flex flex-col gap-2">
        <span className="text-lg">Profile</span>
        <div className="w-full flex gap-4">
          <ProfileLink
            icon={linkedInIcon}
            name="LinkedIn"
            link="https://www.linkedin.com/in/dz365/"
          />
          <ProfileLink
            icon={githubIcon}
            name="Github"
            link="https://github.com/dz365"
          />
          <ProfileLink icon={resumeIcon} name="Resume" link={resume} />
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
