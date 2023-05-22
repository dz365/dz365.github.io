import casewareImage from "../assets/images/caseware.webp";
import skatescribeImage from "../assets/images/skatescribe.webp";

const CASEWARE = {
  company: "Caseware",
  logo: casewareImage,
  url: "https://www.caseware.com",
  jobTitle: "Software Developer",
  duration: "January 2022 - August 2022",
  description: `My second internship was for 8 months at a medium sized auditing company called Caseware. 
    At the time I was working, Caseware was in a transitional stage to fully move all their products to cloud providers. 
    As such, most of what I worked on were related to this. Some of the major things I did include development of a 
    routing microservice to handle incoming requests, and system improvements to better support client needs.`,
  technologies: ["Java", "Spring Boot", "AWS DynamoDB", "Redis", "C++"],
};

const SKATESCRIBE = {
  company: "Skatescribe",
  logo: skatescribeImage,
  url: "https://skatescribe.com",
  jobTitle: "Full Stack Developer",
  duration: "May 2021 - August 2021",
  description: `My first internship was for 4 months at a startup called
    Skatescribe. Backed by NHL investors, they are revolutionizing 
    the skate sharpening industry by using machines,
    leading to high quality cuts that cannot be replicated anywhere
    else. What I worked on during my time here was developing
    measures to improve operational safety and automation to reduce
    the amount of interaction an operator has with the software.`,
  technologies: ["Angular", "Python", "Python Flask", "SocketIO", "PostgreSQL", "Electron"],
};

export { CASEWARE, SKATESCRIBE };
