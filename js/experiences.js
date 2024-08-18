const EXPERIENCES = [
  {
    company: "Service Delivery Data Hub Project",
    position: "full stack developer (work learning experience)",
    date: "november 2023",
    location: "Toronto, ON",
  },
  {
    company: "Caseware",
    position: "software developer intern",
    date: "january 2022 - august 2022",
    location: "Toronto, ON",
  },
  {
    company: "Skatescribe",
    position: "full stack developer intern",
    date: "may 2021 - august 2021",
    location: "Markham, ON",
  },
];

function changeMainContentToExperiences() {
  // Underline experiences navlink
  const navlinks = document.querySelectorAll("nav button");
  navlinks.forEach((link) => {
    link.classList.remove("underline");
  });
  document.getElementById("experiences-button").classList.add("underline");

  document.getElementById("main-content").innerHTML = `
    <div class="content-list">
      ${EXPERIENCES.map(
        (experience) => `
        <div class="experience">
          <span class="secondary-text">${experience.date}</span>
          <span class="title">${experience.position}</span>
          <span class="company">${experience.company}</span>
          <span>${experience.location}</span>
        </div>
      `
      ).join("")}
    </div>
  `;
}
