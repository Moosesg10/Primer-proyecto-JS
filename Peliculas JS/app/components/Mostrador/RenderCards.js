import { CardPelicula } from "../Mostrador/CardPeliculas.js";
const d=document
export function renderCards(datos,name,tipo,textbuscar) {
   setTimeout(() => {
    const $card=d.getElementById("mostarPeliculas"),
    $h2=d.getElementById("titulos"),
    $bg=d.getElementById("Mostrador")    
    $h2.innerHTML = `Generos: ${name}`;
    if (textbuscar) $h2.innerHTML = `Has buscado : ${textbuscar}`;
    let html = "",
      fondo = "",
      titulo;
    datos.forEach((el) => {
      fondo=`url(https://image.tmdb.org/t/p/original${el.backdrop_path})`
      titulo = el.name;
      if (titulo === undefined) {
        titulo = el.title;
      }
      html += CardPelicula(el,titulo,tipo);
    });
    $card.innerHTML = html;
    $bg.style.backgroundImage=fondo
   }, 200);
  
}