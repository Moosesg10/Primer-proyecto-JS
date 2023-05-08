export function Botonera(){
    const $botonera=document.createElement("div")
    $botonera.id="menu-tendencias"
    $botonera.classList.add("d-flex","justify-content-center"),
   
    $botonera.innerHTML=`
    <a href="#" class="btn btn-info  m-2" id="tendenciaCine">Tendencias Cine</a>
 <a href="#" class="btn btn-success  m-2 " id="enTelevision">En Televisión</a>
 <a href="#" class="btn btn-danger  m-2 " id="Proximante">Próximamente</a>
 <a href="#" class="btn btn-warning  m-2 " id="Reciente">Recientes</a>
 <a href="#" class="btn btn-dark  m-2" id="mejorValoradasCine">Mejor Valoradas Cine</a>
 <a href="#" class="btn btn-dark  m-2" id="mejorValoradasTv">Mejor Valoradas Tv</a>
    `
    return $botonera
}