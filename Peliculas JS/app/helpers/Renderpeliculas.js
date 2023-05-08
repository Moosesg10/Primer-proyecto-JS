// Importacion de componentes 
import api from "./Api_Peli.js";
import { Ajaxresutls } from "./Fetchpeli.js";
import { renderCards } from "../components/Mostrador/RenderCards.js";

const d = document;

export function renderPeliculas() {
  //declaracion de  las constantes para el evento click
  const $genres = d.getElementById("listas"),
  //declaracion de  las constantes para filtar las cards
    form = d.getElementById("formulario"),
    $input = d.querySelector(".buscarText");
  //Peticion a la api para renderisar las cards
  Ajaxresutls(28, "Accion", "Cine", "", {
    API: api.APIPelPopularesCine,
    renderPeliculasPopulares: (datos, name,tipo) => {
      localStorage.setItem("Tipo" ,tipo);
      renderCards(datos, name,tipo)},
  });

  //Peticion a la api para renderisar las cards mediante un evento click
  $genres.addEventListener("click", (e) => {
    if (
      e.target.matches("#Pelicuasgenre a") ||
      e.target.matches("#Tvgenre a")
    ) {
      let id = e.target.id,
        name = e.target.name,
        tipo = e.target.dataset.tipo;
      let Api;
      if (tipo === "Tv") {
        Api = api.APIPelPopularesTv;
      } else if (tipo === "Cine") {
        Api = api.APIPelPopularesCine;
      }
      Ajaxresutls(id, name, tipo, "", {
        API: Api,
        renderPeliculasPopulares: (datos, name,tipo) => renderCards(datos, name,tipo),
      });
    }
  });

  //Apertura de un temporizador para poder asignar un evento a un elemento el cual se carga directamente desde javascript
  setTimeout(() => {
  //asignacion de evento para filtrar las cards segun el nombre el cual se filtra desde un formulario
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const textbuscar = $input.value,
        pag = 1
  let query= localStorage.getItem("Tipo")
  let tipo=query
      Ajaxresutls("", "", tipo, textbuscar, {
        API: api.APIBuscarCine + textbuscar + "&page=" + pag,
        renderPeliculasPopulares: (datos, name, tipo,textbuscar) => renderCards(datos, name, tipo,textbuscar)
      });
      d.addEventListener("keyup", e => {
        if (e.target.matches(".buscarText")) {
          if (e.key=== "Escape"){
            e.target.value= "";
            Ajaxresutls(28, "Accion", "Cine", "", {
              API: api.APIPelPopularesCine,
              renderPeliculasPopulares: (datos,name) => renderCards(datos,name),
            });
          }
        }
      })
    });
  }, 200);
}
