"use strict";

const reviewCountElement = document.querySelector("#review-count");
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

let reviewCount =
  Number(localStorage.getItem("reviewCount")) || 0;

reviewCount += 1;

localStorage.setItem("reviewCount", reviewCount);

reviewCountElement.textContent =
  `You have completed ${reviewCount} product ${
    reviewCount === 1 ? "review" : "reviews"
  }.`;

currentYear.textContent = new Date().getFullYear();
lastModified.textContent =
  `Last Modification: ${document.lastModified}`;