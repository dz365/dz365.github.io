const PROJECTS = [
  {
    name: "Pintos",
    overview: "An introduction to OS design",
    link: "https://github.com/dz365/Pintos",
  },
  {
    name: "Ecosquad",
    overview: "A web app for citizen scientists",
    link: "https://github.com/dz365/project-ecosquad",
  },
  {
    name: "Asteroids Remake",
    date: "April 2019 - June 2019",
    overview: "My first project written from scratch",
    link: "https://github.com/dz365/Asteroid-Remake",
  },
];

function changeMainContentToProjects() {
  // Underline projects navlink
  const navlinks = document.querySelectorAll("nav button");
  navlinks.forEach((link) => {
    link.classList.remove("underline");
  });
  document.getElementById("projects-button").classList.add("underline");

  document.getElementById("main-content").innerHTML = `
    <div class="content-list">
      ${PROJECTS.map(
        (project) => `
        <div class="experience">
          <a href="${project.link}" target="_blank" class="title">${project.name}</a>
          <span class="subtitle">${project.overview}</span>
        </div>
      `
      ).join("")}
    </div>
  `;
}
