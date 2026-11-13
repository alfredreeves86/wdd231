//moved here from modules.mjs
export function setSectionSelection(section) {
 const sectionSelect = document.querySelector("#sectionNumber");
    section.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}