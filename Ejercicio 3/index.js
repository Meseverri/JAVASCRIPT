// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const listUl = document.createElement("ul");
countries.forEach((country) => {
  const newLi = document.createElement("li");
  newLi.textContent = country;
  listUl.appendChild(newLi);
});

document.body.appendChild(listUl);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const  removeButton = document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const printDiv = document.querySelector('div[data-function="printHere"]');
const carUl = document.createElement("ul");

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"].forEach((car)=>{
    let newLi= document.createElement('li');
    newLi.textContent = car;
    carUl.appendChild(newLi);
});
printDiv.appendChild(carUl);


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const divTemplate=(title,imgUrl)=>{
    return  `
        <h4>${title}</h4>
        <img src="${imgUrl}"/>
        <button>deleteMe</button>
        
      `;
};
const countriesList = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
].forEach((img)=>{
    const newDiv = document.createElement("div");
    newDiv.innerHTML = divTemplate(img.title,img.imgUrl) ;
    newDiv.className = "card";
    
    document.body.appendChild(newDiv);
});


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const deleLastDiv=document.createElement( 'button' );
// deleLastDiv.setAttribute('onclick',countriesList[countriesList.length -1].remove());
deleLastDiv.textContent='Delete last';
document.body.appendChild(deleLastDiv);

deleLastDiv.addEventListener('click',()=>{
    const cards=document.querySelectorAll('.card');
    cards[cards.length-1].remove();
})



// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const cards=document.querySelectorAll('.card>button').forEach(
    (btn)=>{
        btn.addEventListener('click',()=>console.log(btn.parentElement.remove()));
    }
);





