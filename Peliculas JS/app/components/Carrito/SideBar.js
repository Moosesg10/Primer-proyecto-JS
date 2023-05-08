import { renderCarrito } from "./RenderCarrito.js"

const d=document
export function sidebar(){
    const $aside=d.createElement('aside'),
          $nav=d.createElement('nav'),
          $h5=d.createElement('h5'),
          $button=d.querySelector('#mostrarCarrito')
          


    $aside.classList.add('panel')
    $aside.tabIndex= "-1"
    $nav.classList.add('menu')
    $nav.id="carritoDetalles"
    $h5.id="Tituloproducto"
    $h5.classList.add('text-white')
    $h5.innerHTML=`Carrito de Compras `
 
    $nav.appendChild(renderCarrito())
    $nav.insertAdjacentElement('afterbegin',$h5)
   setTimeout(() => {
    $aside.appendChild($nav)
   }, 100);
    
    $button.insertAdjacentElement('afterend',$aside)
}