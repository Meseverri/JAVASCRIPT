// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const parrafo = document.createElement("p");
// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
parrafo.textContent = "Soy dinámico!";
nuevoDiv.appendChild(parrafo);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
for (let i = 0; i < 6; i++) {
  const parrafo = document.createElement("p");
  parrafo.textContent = `Párrafo ${i + 1}`;
  nuevoDiv.appendChild(parrafo);
}

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Element = document.querySelector(".fn-insert-here");
h2Element.textContent = "Wubba Lubba dub dub";
// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const listaUl = document.createElement("ul");
apps.forEach((app) => {
  const listItem = document.createElement("li");
  listItem.textContent = app;
  listaUl.appendChild(listItem);
});
document.body.appendChild(listaUl);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementosAEliminar = document.querySelectorAll(".fn-remove-me");
elementosAEliminar.forEach((elemento) => {
  elemento.remove();
});


// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const allDiv=document.querySelectorAll("div")
const nuevoParrafoEnMedio = document.createElement("p");
nuevoParrafoEnMedio.textContent = "Voy en medio!";
document.body.insertBefore(nuevoParrafoEnMedio, allDiv[1]);
// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here
const divsInsert = document.querySelectorAll("div.fn-insert-here");
divsInsert.forEach((div) => {
  const newP=document.createElement("p")
  newP.style= "background: yellow"
  newP.textContent = "Voy dentro!";
  div.appendChild(newP);
}
);