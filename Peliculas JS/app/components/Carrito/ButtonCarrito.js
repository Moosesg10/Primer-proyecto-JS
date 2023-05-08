import { VerCarrito } from "./VerCarrito.js"

const d=document
export function buttonCarrito(){
    const $button=d.createElement('button'),
          $spam=d.createElement('span'),
          $header=d.querySelector('.fijo')
    $button.classList.add('panel-btn')
    $button.id="mostrarCarrito"
    $button.type="button"
    $spam.innerHTML=`
    <i class='bx bxs-cart'></i>
    `
    $button.appendChild($spam)

    $header.insertAdjacentElement('afterend',$button)
   setTimeout(() => {

    VerCarrito()
   }, 100);
}