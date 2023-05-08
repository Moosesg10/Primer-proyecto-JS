import { renderPeliculas } from "../helpers/Renderpeliculas.js";

const d = document;
export function MostradorContent() {
  //Creacion de los Elementos div para hacer el inserte de los componentes Html para el mostrador
  const $Mostrador = d.createElement("div"),
    $Row = d.createElement("div"),
    $col = d.createElement("div"),
    $card = d.createElement("div"),
    $h2 = d.createElement("h2");

  //adicion de las clases  para hacer el estilos de los componentes Html para el mostrador

  $Mostrador.classList.add("container-my");
  $Row.classList.add("row", "d-flex", "justify-content-center");
  $col.classList.add("col-sm-6", "col-md-8", "col-lg-9", "col-xl-10");
  $card.classList.add("row", "d-flex", "justify-content-center");
  $h2.classList.add(
    "d-flex",
    "justify-content-center",
    "text-white",
    "fw-bolder"
  );

  //asignacion de los ids para los componentes Html para el mostrador
  $Mostrador.id = "Mostrador";
  $card.id = "mostarPeliculas";
  $h2.id = "titulos";
  //Carga de los elementos con la interaccion de el usario mediante un  evento o la cargar de el DOM
  setTimeout(() => {
    renderPeliculas();
  }, 300);

  $Mostrador.appendChild($Row);
  $Row.appendChild($col);
  $col.appendChild($h2);
  $col.appendChild($card);

  return $Mostrador;
}
