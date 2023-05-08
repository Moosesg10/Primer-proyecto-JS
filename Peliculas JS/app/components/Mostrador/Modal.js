import { Ajaxresutls } from "../../helpers/Fetchpeli.js"
import { RenderDetalles } from "./ModalDetalles.js"

const d=document
export function modalDetalles(){
   const $modal=d.createElement('modal'),
          $modalDialog=d.createElement('div'),
          $modalContent=d.createElement('div'),
          $modalHeader=d.createElement('div'),
          $modalTile=d.createElement('h1'),
          $modalBody=d.createElement('div'),
          $modalFooter=d.createElement('div'), 
          $buttonClose=d.createElement('button'),
          $buttonComprar=d.createElement('button'),
          $buttonCerrar=d.createElement('button')

   $modal.classList.add("modal","fade")
   $modal.id="exampleModal"
   $modal.tabIndex="-1"
   $modal.setAttribute("aria-labelledby","exampleModalLabel")
   $modal.setAttribute("aria-hidden","true")

   $modalDialog.classList.add('modal-dialog',"modal-lg","borde","box")
   $modalContent.classList.add('modal-content','bg')
   $modalHeader.classList.add('modal-header')
   $modalBody.classList.add('modal-body')
   $modalBody.id="modal"
  $modalFooter.classList.add("modal-footer")

   $modalTile.classList.add('modal-header',"fs-5","text-truncate")
   $modalTile.id="exampleModalLabel"

   $buttonClose.classList.add("btn-close")
   $buttonClose.type="button"
   $buttonClose.setAttribute("data-bs-dismiss","modal" )
   $buttonClose.setAttribute("aria-label","Close" )

   $buttonCerrar.classList.add("btn","btn-secondary")
   $buttonCerrar.type="button"
   $buttonCerrar.setAttribute("data-bs-dismiss","modal" )
  

   $buttonComprar.classList.add("btn","btn-primary")
   $buttonComprar.type="button"
  
  $buttonCerrar.innerHTML=`
  Close
  `
  $buttonComprar.innerHTML=`
    Comprar
  `

//const $botones = d.getElementById("cardsmostrador")

  d.addEventListener("click", (e) => {
    if (e.target.name === "detalle") {
       let id=e.target.id,
           name=e.target.name,
           tipo=e.target.dataset.tipo
           
          let  APIDetalles;
           if(tipo === "Cine"){
               APIDetalles=`https://api.themoviedb.org/3/movie/${id}?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES`
           }else if(tipo === "Tv"){
               APIDetalles = `https://api.themoviedb.org/3/tv/${id}?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES`;
           }
      
     setTimeout(() => {
      Ajaxresutls(id,name,tipo,"",{
        API: APIDetalles,
        renderPeliculasPopulares: (datos) => RenderDetalles(datos)
    })      
     }, 200);
     
    }
    });



   
  $modal.appendChild($modalDialog)   
  $modalDialog.appendChild($modalContent) 
 $modalContent.appendChild($modalHeader) 
 $modalContent.appendChild($modalBody) 
 $modalContent.appendChild($modalFooter)
  
  $modalHeader.appendChild($modalTile)
  $modalHeader.appendChild($buttonClose)

  $modalFooter.appendChild($buttonCerrar)
  $modalFooter.appendChild($buttonComprar)


   return $modal
}