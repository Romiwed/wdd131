const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChillOutput = document.querySelector("#wind-chill");

const temperature = 10;
const windSpeed = 5;

// Footer
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// Wind Chill
const calculateWindChill = (temp, speed) =>
    13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

if (temperature <= 10 && windSpeed > 4.8) {
    windChillOutput.textContent =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillOutput.textContent = "N/A";
}