import ecosquadImage from "../assets/images/ecosquad.webp";
import webGalleryImage from "../assets/images/webgallery.webp";
import asteroidsImage from "../assets/images/asteroids.webp";

const ECOSQUAD = {
  logo: ecosquadImage,
  name: "Ecosquad",
  url: "https://github.com/dz365/project-ecosquad",
  date: "",
  description: `Ecosquad is a web app developed by me and a friend of mine. The
                inspiration behind it was that we wanted a place where we could
                upload wildlife discoveries that we would make from time to
                time. Hence we made a citizen scientist app where users could
                share, search, and view discoveries on an interactive map.`,
  technologies: [
    "React",
    "MapLibre GL",
    "ExpressJS",
    "PostgreSQL",
    "Meilisearch",
    "Docker",
  ],
};

const WEBGALLERY = {
  logo: webGalleryImage,
  name: "Web Gallery",
  url: "https://github.com/dz365/Web-Gallery",
  date: "",
  description: `Web Gallery is a web app that allows people to upload and view
                photos and attach comments. Ultimately, this app was just to
                test my understanding of the basics of web programming. Features
                like authentication and authorization, pagination were also
                implemented.`,
  technologies: ["HTML", "CSS", "Javascript", "ExpressJS", "SQLite"],
};

const ASTEROIDS = {
  logo: asteroidsImage,
  name: "Asteroids Remake",
  url: "https://github.com/dz365/Asteroid-Remake",
  date: "",
  description: `This was a project that I did along with a friend quite a while
                back, but I had so much fun creating that I decided to include
                it here. It's also nice to be reminded of how far I've come in
                such a short period of time. As per the name, this was a remake
                of Asteroids by Altari, alongisde additional features like
                powerups.`,
  technologies: ["Java", "Java Swing"],
};
export { ECOSQUAD, WEBGALLERY, ASTEROIDS };
