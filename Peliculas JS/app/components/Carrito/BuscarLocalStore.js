import carrito from "../../helpers/Api_Peli.js";
import {table} from "../Carrito/Table.js"


export function buscarLocalStore(){
 let  local= localStorage.getItem('products');
    let array=local
    if(array){
      carrito.Carrito=JSON.parse(array);
      setTimeout(() => {
        table()
      }, 100);
    }
    
    
}

