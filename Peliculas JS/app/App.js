import { eventosBtn } from "./components/Popul/EventosBtn.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import api from "./helpers/Api_Peli.js";
import { buttonCarrito } from "./components/Carrito/ButtonCarrito.js";
import { sidebar } from "./components/Carrito/SideBar.js";
import { Comprar } from "./components/Carrito/Comprar.js";
import { buscarLocalStore } from "./components/Carrito/BuscarLocalStore.js";







export function App(){
    const $root = document.getElementById("root")
   
    $root.appendChild(Header());
    $root.appendChild(Main());
    buscarLocalStore()
    eventosBtn(api.APIPelPopularesCine)
  setTimeout(() => {
      buttonCarrito()
    sidebar()
    Comprar()
  }, 1000);
  
  
}
