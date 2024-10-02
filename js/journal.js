const PREVIOUS_ENTRY_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 6l-6 6l6 6" />
  </svg>
`;
const NEXT_ENTRY_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 6l6 6l-6 6" />
  </svg>
`;

const DEFAULT_JOURNAL_URL = "https://dz365.github.io/journal/";

const JOURNAL_ENTRIES = [
  "2024/October",
  "2024/September",
  "2024/August",
  "2024/July",
  "2024/June",
];

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

function generateJournalNavHTMLElem(journalFileEntry) {
  const journalNav = document.createElement("div");
  journalNav.classList.add("journal-nav");

  // Add previous entry
  if (journalFileEntry < JOURNAL_ENTRIES.length - 1) {
    const previousEntry = document.createElement("button");
    previousEntry.innerHTML = PREVIOUS_ENTRY_SVG;
    previousEntry.addEventListener("click", () => {
      displayJournalFile(journalFileEntry + 1);
    });
    journalNav.appendChild(previousEntry);
  } else {
    const previousEntry = document.createElement("span");
    journalNav.appendChild(previousEntry);
  }

  // Add current entry
  const currentEntry = document.createElement("span");
  currentEntry.classList.add("bold");
  currentEntry.textContent = JOURNAL_ENTRIES[journalFileEntry];
  journalNav.appendChild(currentEntry);

  // Add next entry
  if (journalFileEntry > 0) {
    const nextEntry = document.createElement("button");
    nextEntry.innerHTML = NEXT_ENTRY_SVG;
    nextEntry.addEventListener("click", () =>
      displayJournalFile(journalFileEntry - 1)
    );
    journalNav.appendChild(nextEntry);
  } else {
    const nextEntry = document.createElement("span");
    journalNav.appendChild(nextEntry);
  }
  return journalNav;
}

function displayJournalFile(journalFileEntry) {
  const contentDiv = document.getElementById("main-content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(generateJournalNavHTMLElem(journalFileEntry));

  getTextFileContents(
    `${DEFAULT_JOURNAL_URL}${JOURNAL_ENTRIES[journalFileEntry]}.txt`
  ).then((lines) => {
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
      if (time24HrRegex.test(line.trim())) p.classList.add("secondary-text");
      contentDiv.appendChild(p);
    });

    // Remove top margin from first <p>
    contentDiv.querySelector(".journal-date").style.marginTop = "0";
  });
}

function changeMainContentToJournal() {
  // Underline journal navlink
  const navlinks = document.querySelectorAll("nav button");
  navlinks.forEach((link) => {
    link.classList.remove("underline");
  });
  document.getElementById("journal-button").classList.add("underline");

  displayJournalFile(0);
}
