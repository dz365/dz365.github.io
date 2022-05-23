import * as React from "react";
import asteroids from "../assets/Projects/Asteroids.png";
import easyapply from "../assets/Projects/EasyApply.png";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const easyApplyBody = (
    <p>
      In an Intro to SoftEng course I took in 3rd year, various project ideas
      were presented at the beginning of the semester. One idea I found
      interesting was a job search website in which applicants can include a
      pitch video alongside their application when applying for jobs. I got
      together with 4 others who were also intrigued by the idea and together we
      set upon developing a minimal viable product.
      <br />
      <br />
      There were tons of setback faced along the way (the biggest one being time
      management), but in the span of 4 months we accomplished our goals. I was
      responsible for the frontend of the project as well as setting up the API
      requests for the user profile.
    </p>
  );

  const zoomerBody = (
    <p>
      In a SoftEng course I took in 3rd year, one thing we learned about was the concept
      of a microservice. To solidify our understanding, we were assigned a
      project called Zoomer, which was a ride share API composed of various
      microservices. Requests would enter through an api gateway from from there
      it would be redirected to the appropriate microservice. For example, we
      would have one microservice for managing user profile related aspects. So
      things like email, name, password, birth date, etc.
      <br />
      <br />
      By the end of the project, I could definitely say I was comfortable with
      developing microservices. This understanding was very helpful in my
      internship with Caseware, where I primarily worked on developing
      microservices.
    </p>
  );
  const asteroidBody = (
    <p>
      In the final months of my Grade 12 year, my ComSci teacher gave one final
      task. Recreate Asteroids from scratch.
      <br />
      <br />
      Though the task was really intimidating at first, I was super excited
      because creating games was what I had gotten into coding for. When the day
      came to submit our work, I fonding remember thinking how much I learned
      since the start of grade 11. From not knowing how to write a loop to this.
      <br />
      <br />
      I've included Asteroids in my hall of fame because it's nice to be
      reminded of how far I've come in such a short period of time.
    </p>
  );

  const websiteBody = (
    <p>
      Everyone always talked about how cool it is to have your own website so I
      thought I'd give it a try. There's been multiple iteration and every time
      I think back a part of me goes like "Why did I ever write this" or "I wish
      I had thought of this sooner!" I'm sure this iteration is no exception. If
      you have any suggestions please reach out because I can definitely say
      that one big flaw of mine is graphic design. :')
    </p>
  );

  const projects = [
    {
      title: "Easy Apply 🌱",
      languages: "React / Express / NodeJS / MongoDB",
      summary: "Job Search App",
      body: easyApplyBody,
      image: easyapply,
    },
    {
      title: "Zoomer 🚃",
      languages: "Docker / Java / MongoDB / Neo4j / PostgreSQL",
      summary: "Ride-Share API",
      body: zoomerBody,
    },
    {
      title: "Asteroids 🚀",
      languages: "Java / Java Swing",
      summary: "Asteroids Remake",
      body: asteroidBody,
      link: "https://github.com/dz365/Asteroid-Remake",
      image: asteroids,
    },
    {
      title: "Website 🖥️",
      languages: "React",
      summary: "You're looking at it right now!",
      body: websiteBody,
      link: "https://github.com/dz365/dz365.github.io/tree/master",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="lg:w-4/5 p-4 flex flex-col gap-10">
        <p className="text-white text-5xl font-black">projects</p>
        <p className="text-white text-xl">
          These are some of the notable projects I've done up to date as well as
          the links to the github repo. Sadly, due to school policy I'm unable
          to share some codebase. If you have any question however feel free to
          contact me!
        </p>
        <div className="flex justify-center">
          <div className="lg:w-4/5 grid lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project}>
                <ProjectCard
                  title={project.title}
                  languages={project.languages}
                  summary={project.summary}
                  body={project.body}
                  link={project.link}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
