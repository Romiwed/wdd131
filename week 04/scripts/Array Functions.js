const names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

document.querySelector("#original").textContent =
`Original Array: ${names.join(", ")}`;

const namesB = names.filter(name => name.startsWith("B"));

document.querySelector("#filter").textContent =
`Filter (B): ${namesB.join(", ")}`;

const namesLength = names.map(name => name.length);

document.querySelector("#map").textContent =
`Map (lengths): ${namesLength.join(", ")}`;

const average =
names.reduce((sum, name) => sum + name.length, 0) / names.length;

document.querySelector("#reduce").textContent =
`Average Length: ${average}`;