const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    }
});

// Footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;