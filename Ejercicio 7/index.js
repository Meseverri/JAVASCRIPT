const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const PlacesDiv=document.querySelector("[data-function='printHere']")
const placesUl=document.createElement("ul")
places.forEach((place)=>{ 
  const  li=document.createElement('li');
  li.textContent=place;
  placesUl.appendChild(li);
})
PlacesDiv.appendChild(placesUl)

