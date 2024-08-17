const EXPERIENCES = [
  {
    company: "Service Delivery Data Hub Project",
    position: "Full Stack Developer (Work Learning Experience)",
    date: "November 2023",
    location: "Toronto, ON",
  },
  {
    company: "Caseware International",
    position: "Software Developer Intern",
    date: "January 2022 - August 2022",
    location: "Toronto, ON",
  },
  {
    company: "Skatescribe",
    position: "Full Stack Developer Intern",
    date: "May 2021 - August 2021",
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
          <span class="subtitle">${experience.date}</span>
          <span class="title">${experience.position}</span>
          <span class="company">${experience.company}</span>
          <span>${experience.location}</span>
        </div>
      `
      ).join("")}
    </div>
  `;
}
