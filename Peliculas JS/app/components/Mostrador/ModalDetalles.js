import {getColor} from "../../helpers/GetColors.js"
const d = document
export function RenderDetalles(datos) {
  const $tituloModal = d.getElementById("exampleModalLabel"),
             $modalBody = d.getElementById("modal")
                let productora,
                titulos, title,date
             if(datos.production_companies[0] === undefined){
                productora="Sin productora"
             }else{
                productora=datos.production_companies[0].name
             }
             if( datos.original_title === undefined){
                titulos=datos.name
             }else{
                titulos=datos.production_companies[0].name
             }
             if( datos.title=== undefined){
               title=datos.name
             }else{
               title=datos.title
             }
             if( datos.release_date=== undefined){
               date="Sin fecha de lanzamiento"
             }else{
               date=datos.release_date
             }
                $tituloModal.innerHTML = `${title}`
                let html=`
                <div class="row">
                  <div class="col-5">
                    <img src="https://image.tmdb.org/t/p/w500${
                      datos.poster_path
                    }" alt="" class="img-fluid rounded-1" width="300px" height="550px">
                  </div>
                  <div class="col-7 text-white">
                    <h5 class="small"><b>Titulo Original:${titulos}</b></h5>
                    <h5 class="small"><b>Genero:${datos.genres[0].name}</b></h5>
                    <h5 class="small"><b>Producida:${
                        productora
                    }</b></h5>
                    <h5 class="small "><b>Fecha de Lanzamiento:${date}</b></h5>
                    <h5 class="small text-warning "><b>Popularidad: <span class= "badge rounded-pill p-1 ${getColor(
                      datos.vote_average
                    )}"> ${datos.vote_average}</span></b></h5>
                    <p class="small"><b>Reseña:${datos.overview}</b></p>
                    <img src="https://image.tmdb.org/t/p/w500${
                      datos.backdrop_path
                    }" alt=""  class="img-fluid rounded-1" width="450px" height="250px">
                  </div>
                </div> `;

               $modalBody.innerHTML = html;
}
