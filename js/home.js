const GITHUB_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" class="contact-icon icon-tabler icon-tabler-brand-github" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
`;
const LINKEDIN_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" class="contact-icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M8 11l0 5" />
    <path d="M8 8l0 .01" />
    <path d="M12 16l0 -5" />
    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </svg>
`;
const MAIL_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" class="contact-icon icon-tabler icon-tabler-mail" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
    <path d="M3 7l9 6l9 -6" />
  </svg>
`;
const RESUME_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" class="contact-icon icon-tabler icon-tabler-file-cv" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
    <path d="M13 11l1.5 6l1.5 -6" />
  </svg>
`;

const ABOUTME = {
  summary:
    "I'm Daniel Zhang, a Computer Science graduate from the \
     University of Toronto. My dream is to work on something that everyone can appreciate. Hasn't \
     happened yet, but I'm getting closer each day.",
  contact: [
    {
      platform: "Email",
      svg: MAIL_ICON,
      link: "mailto:dwqz365@gmail.com",
    },
    {
      platform: "LinkedIn",
      svg: LINKEDIN_ICON,
      link: "https://www.linkedin.com/in/dz365/",
    },
    {
      platform: "Github",
      svg: GITHUB_ICON,
      link: "https://github.com/dz365",
    },
    {
      platform: "Resume",
      svg: RESUME_ICON,
      link: "https://dz365.github.io/Daniel%20Zhang%20Resume.pdf",
    },
  ],
};

function generateContactListHTML(contactList) {
  let listHTML = '<div class="list">';
  contactList.forEach((contact) => {
    listHTML += `
      <a href=${contact.link} rel="noreferrer" target="_blank" class="contact-item">
        ${contact.svg}
        <span>${contact.platform}</span>
      </a>`;
  });
  listHTML += "</div>";
  return listHTML;
}

function changeMainContentToHome() {
  // Underline home navlink
  const navlinks = document.querySelectorAll("nav button");
  navlinks.forEach((link) => {
    link.classList.remove("underline");
  });
  document.getElementById("home-button").classList.add("underline");

  document.getElementById("main-content").innerHTML = `
    <div id="profile-img"></div>
    <p>Hello! ${ABOUTME.summary}</p>
    <span>${generateContactListHTML(ABOUTME.contact)}</span>
    <p style="color:#9d6435;">
      NOTE: This site still being updated! Check back weekly for the latest changes.
    </p>
  `;
}

window.addEventListener("DOMContentLoaded", function () {
  changeMainContentToHome();
});
