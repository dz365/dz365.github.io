function changeMainContentToJournal() {
  // Underline journal navlink
  const navlinks = document.querySelectorAll("nav button");
  navlinks.forEach((link) => {
    link.classList.remove("underline");
  });
  document.getElementById("journal-button").classList.add("underline");

  document.getElementById("main-content").innerHTML = `To be implemented soon.`;
}
