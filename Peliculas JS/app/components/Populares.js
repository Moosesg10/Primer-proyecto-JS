import { Botonera } from "./Popul/Botonera.js"
import { cardPopulares } from "./Popul/CardPopulares.js"

export function Populares(){
    const $populares=document.createElement('div')
   
    $populares.classList.add('container-my')
    $populares.id='Recientes'
    $populares.appendChild(Botonera())
    $populares.appendChild(cardPopulares())
    
  
 return $populares
}

