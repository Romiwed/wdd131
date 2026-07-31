"use strict";

/* ------------------------------
   MILAN EXPLORER DATA
------------------------------ */

const attractions = [
    {
        id: 1,
        name: "Duomo di Milano",
        category: "landmark",
        image: "images/attraction-1.webp",
        description:
            "The Duomo is Milan's most famous cathedral and one of the city's most important landmarks."
    },
    {
        id: 2,
        name: "Galleria Vittorio Emanuele II",
        category: "landmark",
        image: "images/attraction-2.webp",
        description:
            "A historic shopping gallery near the Duomo, known for its elegant architecture and luxury stores."
    },
    {
        id: 3,
        name: "Sforza Castle",
        category: "museum",
        image: "images/attraction-3.webp",
        description:
            "A historic castle that contains museums, art collections, and beautiful courtyards."
    },
    {
        id: 4,
        name: "Sempione Park",
        category: "park",
        image: "images/attraction-4.webp",
        description:
            "A large public park located behind Sforza Castle, ideal for walking, relaxing, and enjoying nature."
    },
    {
        id: 5,
        name: "Navigli District",
        category: "district",
        image: "images/attraction-5.webp",
        description:
            "A lively neighborhood known for its canals, restaurants, cafés, markets, and evening atmosphere."
    },
    {
        id: 6,
        name: "Brera District",
        category: "district",
        image: "images/attraction-6.webp",
        description:
            "A charming neighborhood filled with art galleries, historic streets, restaurants, and local shops."
    }
];

/* ------------------------------
   LOCAL STORAGE
------------------------------ */

function getFavorites() {
    const storedFavorites =
        localStorage.getItem("milanFavorites");

    if (storedFavorites) {
        return JSON.parse(storedFavorites);
    }

    return [];
}

function saveFavorites(favorites) {
    localStorage.setItem(
        "milanFavorites",
        JSON.stringify(favorites)
    );
}

function isFavorite(attractionId) {
    const favorites = getFavorites();

    return favorites.includes(attractionId);
}

function toggleFavorite(attractionId) {
    const favorites = getFavorites();

    if (favorites.includes(attractionId)) {
        const updatedFavorites = favorites.filter(
            (favoriteId) => favoriteId !== attractionId
        );

        saveFavorites(updatedFavorites);
    } else {
        favorites.push(attractionId);
        saveFavorites(favorites);
    }

    const categoryFilter =
        document.querySelector("#category-filter");

    const selectedCategory = categoryFilter
        ? categoryFilter.value
        : "all";

    displayAttractions(selectedCategory);
    displayFeaturedAttractions();
    displayFavorites();
    updateFavoriteSummary();
}

/* ------------------------------
   CREATE ATTRACTION CARD
------------------------------ */

function createAttractionCard(attraction) {
    const card = document.createElement("article");

    card.classList.add("attraction-card");

    const saved = isFavorite(attraction.id);

    card.innerHTML = `
        <img
            src="${attraction.image}"
            alt="${attraction.name}"
            loading="lazy"
            width="500"
            height="350"
        >

        <div class="card-content">

            <span class="category-label">
                ${attraction.category}
            </span>

            <h3>${attraction.name}</h3>

            <p>${attraction.description}</p>

            <button
                class="favorite-button ${saved ? "saved" : ""}"
                type="button"
                data-id="${attraction.id}"
            >
                ${saved
                    ? "Remove from Favorites"
                    : "Save as Favorite"}
            </button>

        </div>
    `;

    const favoriteButton =
        card.querySelector(".favorite-button");

    favoriteButton.addEventListener("click", () => {
        toggleFavorite(attraction.id);
    });

    return card;
}

/* ------------------------------
   DISPLAY ALL ATTRACTIONS
------------------------------ */

function displayAttractions(category = "all") {
    const container =
        document.querySelector("#attractions-container");

    const resultsMessage =
        document.querySelector("#results-message");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const filteredAttractions =
        category === "all"
            ? attractions
            : attractions.filter(
                (attraction) =>
                    attraction.category === category
            );

    filteredAttractions.forEach((attraction) => {
        const card = createAttractionCard(attraction);

        container.appendChild(card);
    });

    if (resultsMessage) {
        resultsMessage.textContent =
            `${filteredAttractions.length} attraction(s) found.`;
    }
}
/* ------------------------------
   FEATURED ATTRACTIONS
------------------------------ */

function displayFeaturedAttractions() {
    const featuredContainer =
        document.querySelector("#featured-attractions");

    if (!featuredContainer) {
        return;
    }

    featuredContainer.innerHTML = "";

    attractions.slice(0, 3).forEach((attraction) => {
        const card = createAttractionCard(attraction);

        featuredContainer.appendChild(card);
    });
}

/* ------------------------------
   FAVORITES SECTION
------------------------------ */

function displayFavorites() {
    const favoritesContainer =
        document.querySelector("#favorites-container");

    if (!favoritesContainer) {
        return;
    }

    favoritesContainer.innerHTML = "";

    const favorites = getFavorites();

    if (favorites.length === 0) {
        favoritesContainer.innerHTML =
            `<p>No favorite attractions saved yet.</p>`;

        return;
    }

    const list = document.createElement("ul");

    list.classList.add("favorite-list");

    favorites.forEach((favoriteId) => {
        const attraction = attractions.find(
            (item) => item.id === favoriteId
        );

        if (attraction) {
            const item = document.createElement("li");

            item.textContent = `${attraction.name}`;

            list.appendChild(item);
        }
    });

    favoritesContainer.appendChild(list);
}

/* ------------------------------
   FAVORITE SUMMARY
------------------------------ */

function updateFavoriteSummary() {
    const summary =
        document.querySelector("#favorite-summary");

    if (!summary) {
        return;
    }

    const total = getFavorites().length;

    if (total === 0) {
        summary.textContent =
            `You haven't saved any attractions yet.`;
    } else if (total === 1) {
        summary.textContent =
            `You have saved 1 favorite attraction.`;
    } else {
        summary.textContent =
            `You have saved ${total} favorite attractions.`;
    }
}

/* ------------------------------
   CLEAR FAVORITES
------------------------------ */

function clearFavorites() {
    localStorage.removeItem("milanFavorites");

    const categoryFilter =
        document.querySelector("#category-filter");

    const selectedCategory = categoryFilter
        ? categoryFilter.value
        : "all";

    displayAttractions(selectedCategory);
    displayFavorites();
    displayFeaturedAttractions();
    updateFavoriteSummary();
}

/* ------------------------------
   CATEGORY FILTER
------------------------------ */

function filterAttractions() {
    const categoryFilter =
        document.querySelector("#category-filter");

    if (!categoryFilter) {
        return;
    }

    displayAttractions(categoryFilter.value);
}

/* ------------------------------
   ATTRACTION EVENTS
------------------------------ */

function initializeAttractionEvents() {
    const clearButton =
        document.querySelector("#clear-favorites");

    const categoryFilter =
        document.querySelector("#category-filter");

    if (clearButton) {
        clearButton.addEventListener(
            "click",
            clearFavorites
        );
    }

    if (categoryFilter) {
        categoryFilter.addEventListener(
            "change",
            filterAttractions
        );
    }
}
/* ------------------------------
   MOBILE NAVIGATION
------------------------------ */

function initializeMenu() {
    const menuButton =
        document.querySelector("#menu-button");

    const navigation =
        document.querySelector("#main-navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const menuIsOpen =
            navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen.toString()
        );

        menuButton.textContent =
            menuIsOpen ? `✕` : `☰`;

        menuButton.setAttribute(
            "aria-label",
            menuIsOpen
                ? `Close Navigation`
                : `Open Navigation`
        );
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                `Open Navigation`
            );

            menuButton.textContent = `☰`;
        });
    });
}

/* ------------------------------
   FOOTER INFORMATION
------------------------------ */

function updateFooter() {
    const currentYear =
        document.querySelector("#current-year");

    const lastModified =
        document.querySelector("#last-modified");

    if (currentYear) {
        currentYear.textContent =
            `${new Date().getFullYear()}`;
    }

    if (lastModified) {
        lastModified.textContent =
            `Last Modified: ${document.lastModified}`;
    }
}

/* ------------------------------
   FORM SUBMISSION COUNTER
------------------------------ */

function increaseSubmissionCount() {
    const pageIsFormResponse =
        window.location.pathname.includes(
            "form-response.html"
        );

    if (!pageIsFormResponse) {
        return;
    }

    const parameters =
        new URLSearchParams(window.location.search);

    if (!parameters.has("firstName")) {
        return;
    }

    const storedCount =
        Number(
            localStorage.getItem(
                "milanSubmissionCount"
            )
        ) || 0;

    const newCount = storedCount + 1;

    localStorage.setItem(
        "milanSubmissionCount",
        newCount.toString()
    );
}

/* ------------------------------
   DISPLAY FORM RESPONSE
------------------------------ */

function displayFormResponse() {
    const responseName =
        document.querySelector("#response-name");

    if (!responseName) {
        return;
    }

    const parameters =
        new URLSearchParams(window.location.search);

    const firstName =
        parameters.get("firstName")?.trim() || "";

    const lastName =
        parameters.get("lastName")?.trim() || "";

    const email =
        parameters.get("email")?.trim() ||
        `Not provided`;

    const topic =
        parameters.get("topic") ||
        `Not provided`;

    const visitedMilan =
        parameters.get("visitedMilan") ||
        `Not provided`;

    const message =
        parameters.get("message")?.trim() ||
        `Not provided`;

    const newsletter =
        parameters.get("newsletter") === "yes"
            ? `Yes`
            : `No`;

    const fullName =
        `${firstName} ${lastName}`.trim() ||
        `Not provided`;

    const topicNames = {
        general: `General Question`,
        attraction: `Attraction Recommendation`,
        restaurant: `Restaurant Recommendation`,
        feedback: `Website Feedback`
    };

    responseName.textContent = fullName;

    const responseEmail =
        document.querySelector("#response-email");

    const responseTopic =
        document.querySelector("#response-topic");

    const responseVisited =
        document.querySelector("#response-visited");

    const responseMessage =
        document.querySelector("#response-message");

    const responseNewsletter =
        document.querySelector(
            "#response-newsletter"
        );

    if (responseEmail) {
        responseEmail.textContent = email;
    }

    if (responseTopic) {
        responseTopic.textContent =
            topicNames[topic] || topic;
    }

    if (responseVisited) {
        responseVisited.textContent =
            visitedMilan === "yes"
                ? `Yes`
                : visitedMilan === "no"
                    ? `No`
                    : `Not provided`;
    }

    if (responseMessage) {
        responseMessage.textContent = message;
    }

    if (responseNewsletter) {
        responseNewsletter.textContent =
            newsletter;
    }
}

/* ------------------------------
   DISPLAY SUBMISSION COUNT
------------------------------ */

function displaySubmissionCount() {
    const submissionCount =
        document.querySelector("#submission-count");

    if (!submissionCount) {
        return;
    }

    const count =
        Number(
            localStorage.getItem(
                "milanSubmissionCount"
            )
        ) || 0;

    if (count === 1) {
        submissionCount.textContent =
            `You have submitted this form 1 time from this browser.`;
    } else {
        submissionCount.textContent =
            `You have submitted this form ${count} times from this browser.`;
    }
}

/* ------------------------------
   INITIALIZE WEBSITE
------------------------------ */

function initializeWebsite() {
    initializeMenu();
    initializeAttractionEvents();
    updateFooter();

    displayAttractions();
    displayFeaturedAttractions();
    displayFavorites();
    updateFavoriteSummary();

    increaseSubmissionCount();
    displayFormResponse();
    displaySubmissionCount();
}

document.addEventListener(
    "DOMContentLoaded",
    initializeWebsite
);