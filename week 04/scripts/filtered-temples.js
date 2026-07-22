const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/Aba Nigeria.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/Manti Utah.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/Payson Utah.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/Yigo Guam.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/Washington D.C.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/Lima peru.webp"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "images/Salt Lake Utah.webp"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "images/Rome Italy.webp"
    },
    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44000,
        imageUrl: "images/Paris France.webp"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl: "images/Bogota Colombia.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/Mexico City Mexico.webp"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl: "images/Madrid Spain.webp"
    }
];

const cardsContainer = document.querySelector("#temple-cards");
const pageTitle = document.querySelector("#page-title");

function createTempleCards(templeList) {
    cardsContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML =
            `<span class="label">Location:</span> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML =
            `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML =
            `<span class="label">Size:</span> ` +
            `${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        cardsContainer.appendChild(card);
    });
}

function getYear(temple) {
    return Number(temple.dedicated.slice(0, 4));
}

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Home";
    createTempleCards(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();

    const oldTemples = temples.filter(
        (temple) => getYear(temple) < 1900
    );

    pageTitle.textContent = "Old Temples";
    createTempleCards(oldTemples);
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();

    const newTemples = temples.filter(
        (temple) => getYear(temple) > 2000
    );

    pageTitle.textContent = "New Temples";
    createTempleCards(newTemples);
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();

    const largeTemples = temples.filter(
        (temple) => temple.area > 90000
    );

    pageTitle.textContent = "Large Temples";
    createTempleCards(largeTemples);
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();

    const smallTemples = temples.filter(
        (temple) => temple.area < 10000
    );

    pageTitle.textContent = "Small Temples";
    createTempleCards(smallTemples);
});

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

createTempleCards(temples);