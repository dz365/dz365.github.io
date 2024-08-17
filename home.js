const ABOUTME = {
  summary:
    "I'm Daniel Zhang, a Computer Science graduate from the \
     University of Toronto. My dream is to work on something that everyone can appreciate. Hasn't \
     happened yet, but I'm getting closer each day.",
  contact: [
    {
      platform: "Email",
      link: "mailto:dwqz365@gmail.com",
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/dz365/",
    },
    {
      platform: "Github",
      link: "https://github.com/dz365",
    },
    {
      platform: "Resume",
      link: "https://dz365.github.io/Daniel_Zhang_Resume.pdf",
    },
  ],
};

function generateContactListHTML(contactList) {
  let listHTML = '<div class="list">';
  contactList.forEach((contact) => {
    listHTML += `
      <a href=${
        contact.link
      } rel="noreferrer" target="_blank" class="contact-item">
        <div class="icon contact ${contact.platform.toLowerCase()}"></div>
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
    <div class="">
      <p>Hello! ${ABOUTME.summary}</p>
      <span>${generateContactListHTML(ABOUTME.contact)}</span>
      <p style="color:red;">
        NOTE: This site still being updated! Check back weekly for the latest changes.
      </p>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", function () {
  changeMainContentToHome();
});
