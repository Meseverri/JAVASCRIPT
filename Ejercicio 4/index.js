// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const btnToClick=document.createElement("button")
const clickImpt=document.querySelector(".click");

btnToClick.id="btnToClick"
btnToClick.innerHTML="Click me!"
btnToClick.addEventListener("click",()=>console.log(clickImpt.value))

document.body.appendChild(btnToClick)
// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusImpt=document.querySelector(".focus");
focusImpt.addEventListener("focus",()=> console.log(focusImpt.value));
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const Impt=document.querySelector(".value");
Impt.addEventListener("input",()=> console.log(Impt.value));