const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("For loop:");
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

console.log("While loop:");
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

console.log("forEach loop:");
studentReport.forEach(function(score) {
    if (score < LIMIT) {
        console.log(score);
    }
});

console.log("for...in loop:");
for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
}

console.log("Next DAYS days:");

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let today = new Date();

for (let i = 0; i < DAYS; i++) {
    let futureDay = new Date();
    futureDay.setDate(today.getDate() + i);
    console.log(dayNames[futureDay.getDay()]);
}