const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Crear el elemento de la lista
const li = document.createElement("li");

// Agregar un capítulo de ejemplo
li.textContent = "Alma 5";

// Crear el botón de eliminar
const deleteButton = document.createElement("button");
deleteButton.textContent = "❌";
deleteButton.setAttribute("aria-label", "Remove Alma 5");

// Agregar el botón al elemento de la lista
li.append(deleteButton);

// Agregar el elemento de la lista al <ul>
list.append(li);