const DEFAULT_JOURNAL_URL = "https://dz365.github.io/journal";

/* Return file contents as an array of lines or empty array upon error. */
async function getTextFileContents(filePath) {
  try {
    const response = await fetch(filePath);

    // Check if the file was fetched successfully
    if (!response.ok) {
      return [];
    }
    const text = await response.text();
    return text.split("\n\n");
  } catch (error) {
    return [];
  }
}

function displayJournalFile(filePath) {
  const contentDiv = document.getElementById("main-content");
  contentDiv.innerHTML = "";
  getTextFileContents(`${DEFAULT_JOURNAL_URL}${filePath}`).then((lines) => {
    const time24HrRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    const dateRegex = new RegExp(
      "^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday) " +
        "(January|February|March|April|May|June|July|August|September|October|November|December) " +
        "(0?[1-9]|[12][0-9]|3[01])$",
      "i"
    );
    // Create a <p> tag for each line and append it to the div
    lines.forEach((line) => {
      const p = document.createElement("p");
      p.textContent = line;
      if (dateRegex.test(line.trim())) p.classList.add("journal-date");
      if (time24HrRegex.test(line.trim())) p.classList.add("journal-time");
      contentDiv.appendChild(p);
    });
  });
}

function changeMainContentToJournal() {
  // Underline journal navlink
  const navlinks = document.querySelectorAll("nav button");
  navlinks.forEach((link) => {
    link.classList.remove("underline");
  });
  document.getElementById("journal-button").classList.add("underline");

  displayJournalFile("/2024/August.txt");
}
