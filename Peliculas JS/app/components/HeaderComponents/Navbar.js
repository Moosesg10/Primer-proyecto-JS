import { Listas } from "./Listas.js"

const d=document
export function Navbar(){
    const $nav=d.createElement('nav'),
    $div=d.createElement('div'),
    $a=d.createElement('a'),
    $button = d.createElement('button'),
    $span=d.createElement('span'),
    $form = d.createElement("form"),
    $img=d.createElement("img")

    $nav.classList.add('navbar','navbar-expand-lg','bg-dark')
    $div.classList.add('container-fluid')
    $nav.setAttribute("data-bs-theme",'dark'),
    $form.classList.add("d-flex");
    $form.role = "search";
    $form.id="formulario"
  

    $a.href="#"
    $a.classList.add('navbar-brand')
    $button.classList.add('navbar-toggler')
    $button.type="button"
    $button.setAttribute('data-bs-toggle', "collapse")
    $button.setAttribute('data-bs-target', "#navbarSupportedContent")
    $button.setAttribute('aria-controls', "navbarSupportedContent")
    $button.setAttribute('aria-expanded', "false")
    $button.setAttribute('aria-label', "Toggle navigation")
    $span.classList.add('navbar-toggler-icon')
    $img.src=`app/assets/logopeliclas.svg`
    $img.classList.add()
    $a.appendChild($img)
    $form.innerHTML = `
    <input class="form-control me-2 buscarText" type="text" placeholder="Search" aria-label="Search" >
    <button class="btn btn-outline-success" type="submit">Search</button>
    `;

    $nav.appendChild($div)
    $div.appendChild($a)
    $div.appendChild($button)
    $button.appendChild($span)
     $div.appendChild(Listas())
     $div.appendChild($form)
    return $nav
}