import carrito from "../../helpers/Api_Peli.js";
import { Savearray } from "./Save.js";
const d = document;
export function table(pro) {
  setTimeout(() => {
    const $tbody = d.getElementById("mostrarDetalleCarrito");
    let  producto,
      html = "",
      precio = 0,
      titulo = "",
      total = 0

if(pro){
  producto=pro
}else{
  producto=carrito.Carrito
}



    producto.forEach((element) => {
      titulo = element.title;
      precio = 1.2;
      if (titulo == undefined) {
        precio = 1.7;
        titulo = element.name;
      }
      total += precio;
      html += `
  <tr>
  <td>
   <img src="https://image.tmdb.org/t/p/w500${element.poster_path}"  class="img-fluid " alt="..." width="30px">
   </td>
  <td class="text-center text-white">${titulo}</td>
  <td class="text-center text-white">${precio}</td>                      
    <td class="text-center">
           <a href="#"><i class="bx bx-trash" id="${element.id}" data-name="${titulo}"></i></a>
     </td>
  </tr> 
  `;
    
    });
    $tbody.innerHTML = html;
    let jsonArray = JSON.stringify(producto)
    Savearray(jsonArray);  
  }, 1900);
}

