const sections = {
  Career: "Career",
  Projects: "Projects",
};

const sideBarContents = [
  {
    sectionTitle: "All Experiences",
    sectionClass: "all-experiences",
    sectionCount: 0,
  },
  {
    sectionTitle: sections.Career,
    sectionClass: "work-experiences",
    sectionCount: 2,
  },
  {
    sectionTitle: sections.Projects,
    sectionClass: "projects",
    sectionCount: 0,
  },
];

const experienceTimeline = [
  {
    year: 2023,
    experiences: [
      {
        type: sections.Projects,
        title: "Ecosquad",
        description: "A citizen scientist web app",
        class: "ecosquad",
      },
    ],
  },
  {
    year: 2022,
    experiences: [
      {
        type: sections.Career,
        title: "Caseware",
        description: "Software Developer Intern",
        class: "caseware",
      },
    ],
  },
  {
    year: 2021,
    experiences: [
      {
        type: sections.Career,
        title: "Skatescribe",
        description: "Full Stack Developer Intern",
        class: "skatescribe",
      },
    ],
  },
  {
    year: 2019,
    experiences: [
      {
        type: sections.Projects,
        title: "Asteroids Remake",
        description: "Remake of the famous arcade game",
        class: "asteroids",
      },
    ],
  },
];

function createSidebar(activeSection) {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sideBarContents.forEach((section) => {
    const newSection = document.createElement("div");
    newSection.classList.add("section");
    if (activeSection === section.sectionTitle)
      newSection.classList.add("active-section");
    newSection.innerHTML = `
        <div class="section-info">
          <div class="section-icon ${section.sectionClass}"></div>
          <div class="section-title">${section.sectionTitle}</div>
        </div>
        <div class="count">${section.sectionCount}</div>
      `;
    sidebar.appendChild(newSection);
  });
  return sidebar;
}

function createReminderContent(section) {
  const reminderContent = document.createElement("div");
  reminderContent.classList.add("reminders-content");

  const contentTitle = document.createElement("span");
  contentTitle.classList.add("content-title");
  contentTitle.innerHTML = section;
  reminderContent.appendChild(contentTitle);

  const experienceTimelineElem = document.createElement("div");
  experienceTimelineElem.classList.add("experience-timeline");

  experienceTimeline.forEach((yearExperienceMap) => {
    const year = document.createElement("span");
    year.classList.add("year");
    year.innerHTML = yearExperienceMap.year;
    experienceTimelineElem.appendChild(year);

    yearExperienceMap.experiences.forEach((experience) => {
      const experienceCard = document.createElement("div");
      experienceCard.classList.add("experience-card", experience.class);
      experienceCard.innerHTML = `
          <div class="card-description">
            <span class="card-title">${experience.title}</span>
            <span>${experience.description}</span>
          </div>
        `;
      experienceTimelineElem.appendChild(experienceCard);
    });
    const divider = document.createElement("div");
    divider.classList.add("divider");
    experienceTimelineElem.appendChild(divider);
    divider.innerHTML = `&nbsp;`;
  });

  // Remove the last divider
  const dividers = experienceTimelineElem.getElementsByClassName("divider");
  if (dividers.length > 0) {
    const lastDivider = dividers[dividers.length - 1];
    experienceTimelineElem.removeChild(lastDivider);
  }

  reminderContent.appendChild(experienceTimelineElem);
  return reminderContent;
}

function displayReminderAppWindow(section) {
  const reminderApp = document.createElement("div");
  reminderApp.id = "reminders-app";

  reminderApp.appendChild(createSidebar(section));
  reminderApp.appendChild(createReminderContent(section));

  const reminderWindow = createWindow(reminderApp);
  document.body.appendChild(reminderWindow);
}
