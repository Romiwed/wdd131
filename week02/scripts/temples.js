const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");

  const isOpen = navigation.classList.contains("open");

  menuButton.textContent = isOpen ? "X" : "☰";
  menuButton.setAttribute("aria-expanded", isOpen);
});