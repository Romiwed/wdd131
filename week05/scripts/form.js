"use strict";

const products = [
  {
    id: "fc-1888",
    name: "Flux Capacitor",
    averageRating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power Laces",
    averageRating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time Circuits",
    averageRating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low Voltage Reactor",
    averageRating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp Equalizer",
    averageRating: 5.0
  }
];

const productSelect = document.querySelector("#product-name");
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

if (productSelect) {
  products.forEach((product) => {
    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    productSelect.appendChild(option);
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
  lastModified.textContent =
    `Last Modification: ${document.lastModified}`;
}