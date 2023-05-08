import { Populares } from "./Populares.js";
import { MostradorContent } from "./MostradorContent.js";
import { modalDetalles } from "./Mostrador/Modal.js";

const d=document

export function Main(){
    
    const $main=d.createElement('main')
    $main.id="main"
    $main.classList.add("container-my")
    $main.appendChild(Populares())
    $main.appendChild(MostradorContent())
    $main.appendChild(modalDetalles())
    
    
    return $main
}