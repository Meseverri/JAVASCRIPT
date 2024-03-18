// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const AlbumUL=document.createElement("ul");
albums.forEach((item) => {
    const listItem= document.createElement("li");
    listItem.textContent= item;
    AlbumUL.appendChild(listItem)
})

document.body.appendChild(AlbumUL);

document.querySelector(".fn-remove-me").remove();
