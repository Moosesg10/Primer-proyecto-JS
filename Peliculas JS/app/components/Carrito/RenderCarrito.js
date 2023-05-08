import {botones} from "./Botones.js"

const d = document;

export function renderCarrito() {
    const $table = d.createElement("table"),
      $tHead = d.createElement("thead"),
      $tbody = d.createElement("tbody"),
      $tFooter = d.createElement("tfoot"),
      $div=d.createElement('div')
      $div.classList.add("d-flex", "justify-content-between")

    
    $table.classList.add("table","table-sm","table-striped","table-hover",)
    $tHead.classList.add("table-dark");
    $tbody.classList.add("container-fluid")
    $tbody.id = "mostrarDetalleCarrito";

    $tHead.innerHTML = `
          <tr>
          <th>IMG</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acción</th>
        </tr>
          `;
    $tFooter.innerHTML = `
          <tr>
          <th colspan="2" class="text-white">Total Compra</th>
          <th id="totalCarrito" class="text-center text-white">0</th>
          <th></th>
        </tr>
          `;
    
  
    let divConten=""
    divConten=botones()
    $table.appendChild($tHead);
    $table.appendChild($tbody);
    $table.appendChild($tFooter);
    $div.innerHTML=divConten;
    setTimeout(() => {
      $table.insertAdjacentElement("afterend",$div)
    }, 100);

 
    return $table
}
