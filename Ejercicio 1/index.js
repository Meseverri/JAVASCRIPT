// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showMe=document.querySelector(".showme");
console.log(showMe)
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillao=document.querySelector("#pillado");
console.log(pillao)
// 1.3 Usa querySelector para mostrar por consola todos los p
const parrafos=document.querySelectorAll("p");
parrafos.forEach((p)=> console.log(p))

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon
const pokemon=document.querySelectorAll(".pokemon");
pokemon.forEach((p)=> console.log(p))
// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
const elementosTestMe = document.querySelectorAll('[data-function="testMe"]');
elementosTestMe.forEach((elemento) => {
  console.log(elemento);
});
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

console.log(elementosTestMe[2])