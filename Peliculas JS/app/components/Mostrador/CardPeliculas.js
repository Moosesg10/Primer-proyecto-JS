import { getColor } from "../../helpers/GetColors.js"

export function CardPelicula(props,titulo,tipo){
    let {poster_path,vote_average,id,type}=props

let tipos
if(type ==="Scripted"){
  tipos=type
}else{
  tipos=tipo
}


 return `<div class="col-sm-6 col-md-4 col-lg-3 mb-1" id="cardsmostrador" >
 <div class="card bg-black bg-opacity-25 box hei">    
   <div class="card-header p-0">
         <img src="https://image.tmdb.org/t/p/w500${
           poster_path
         }" alt="..." class="img-fluid rounded-1">
 </div>
 <div class="card-body">
     <h5 class="text-center text-white  text-truncate">${titulo
     }</h5>
   
     <p class="text-warning text-center">Average <span class="badge rounded-pill p-2 ${getColor(
       vote_average
     )} ">${vote_average}</span></p>
 </div>
 <div class="card-footer text-center d-flex justify-content-center aling-items-center" >
  <a href="#" class="btn btn-outline-success m-1 p-1 " id="${id}" name="comprar" data-tipo="${tipos}">Comprar</a>
  <a href="#" class="btn btn-outline-danger m-1 p-1" data-bs-toggle="modal" data-bs-target="#exampleModal" id=${
    id
  } name="detalle" data-tipo="${tipo}"> Detalles</a>
 </div>
</div>
</div>`

}