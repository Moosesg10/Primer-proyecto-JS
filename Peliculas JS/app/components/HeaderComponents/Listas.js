import { Ajax } from "../../helpers/Fetchgenres.js";
import { BtnList } from "./BtnList.js";
import api from "../../helpers/Api_Peli.js";

const d = document;
export function Listas() {
  const $div = d.createElement("div"),
    $ul = d.createElement("ul"),
    $li1 = d.createElement("li"),
    $li2 = d.createElement("li"),
    $li3 = d.createElement("li"),
    $a = d.createElement("a"),
    $a2 = d.createElement("a"),
    $ulINS = d.createElement("ul"),
    $ulINS2 = d.createElement("ul");

  let id = "navbarDropdown",
    role = "button";

  $div.classList.add("collapse", "navbar-collapse");
  $div.id = "navbarSupportedContent";
  $ul.classList.add("navbar-nav", "me-0-auto", "mb-2", "mb-lg-0");
  $ul.id="listas"
  $li1.classList.add("nav-item");
  $li2.classList.add("nav-item", "dropdown");
  $li2.id = "2";
  $li3.classList.add("nav-item", "dropdown");

  $ulINS.id = "Tvgenre";
  $ulINS.classList.add("dropdown-menu");
  $ulINS.setAttribute("aria-labelledby", "navbarDropdown");
  $ulINS2.id = "Pelicuasgenre";
  $ulINS2.classList.add("dropdown-menu");
  $ulINS2.setAttribute("aria-labelledby", "navbarDropdown");
  $a.classList.add("nav-link", "dropdown-toggle");
  $a.id = id;
  $a.role = role;
  $a.setAttribute("data-bs-toggle", "dropdown");
  $a.setAttribute("aria-expanded", "false");
  $a.setAttribute("data-id", "Tvgenres");
  $a.href = "#";
  $a2.classList.add("nav-link", "dropdown-toggle");
  $a2.id = id;
  $a2.role = role;
  $a2.setAttribute("data-bs-toggle", "dropdown");
  $a2.setAttribute("aria-expanded", "false");
  $a2.setAttribute("data-id", "Pelicuasgenres");
  $a2.href = "#";

  $a.innerHTML = `
  Generos TV
  `;
  $a2.innerHTML = `
  Generos Cine 
  `;
  $li1.innerHTML = `
  <li class="nav-item">
  <a class="nav-link active" aria-current="page" href="../pelicula/Home.html">Home</a>
    `;
    
    setTimeout(() => {
      const $generos=d.getElementById("listas")
      $generos.addEventListener("click", (e) =>{
     if(e.target.matches(".dropdown-toggle")){
      let Api,tipo
      if(e.target.dataset.id === "Tvgenres"){
       Api=api.APIGenerosTv
       tipo="Tv"
     } 
     if(e.target.dataset.id === "Pelicuasgenres"){
       Api=api.APIGenerosCine
       tipo="Cine"
     }     
     Ajax(tipo,{
      url: Api,
      cbSuccess: (data,tipo) => {
        let html = ""
        data.forEach((el) => {
          html += BtnList(el,tipo);
        });
        if(tipo==="Tv") $ulINS.innerHTML = html
        else if(tipo==="Cine")$ulINS2.innerHTML = html;
      },
    });
     }
      })
    }, 100);
 
  $div.appendChild($ul);
  $ul.appendChild($li1);
  $ul.appendChild($li2);
  $ul.appendChild($li3);
  $li2.appendChild($a);
  $li3.appendChild($a2);
  $li2.appendChild($ulINS);
  $li3.appendChild($ulINS2);

  return $div;
}
