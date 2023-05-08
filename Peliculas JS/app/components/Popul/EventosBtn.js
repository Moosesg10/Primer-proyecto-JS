import api from "../../helpers/Api_Peli.js";

export function eventosBtn(props) {
    let API =props
  const $bg = document.getElementById("Recientes"),
    $botena = document.getElementById("menu-tendencias"),
    $imgpo=document.getElementById("tendecias")
   
 
    const RenderTendecias = async (API) => {
        try {
          const resp = await fetch(API);
          if (resp.status === 200) {
            const datos = await resp.json();
            renderTendencias(datos.results);
          } else {
            console.log("error del api");
          }
        } catch (error) {
          console.log(error);
        }
      };

     $botena.addEventListener("click", (e) => {
      if (e.target.matches("#tendenciaCine")) {
         RenderTendecias(api.APIPelPopularesCine);
      } else if (e.target.matches("#enTelevision")) {
          RenderTendecias(api.APIEnTelevision);
       
      } else if (e.target.matches("#Proximante")) {
          RenderTendecias(api.APIPelProximamente);
       
      } else if (e.target.matches("#Reciente")) {
          RenderTendecias(api.APIPelRecientes);
     
      } else if (e.target.matches("#mejorValoradasCine")) {
          RenderTendecias(api.APIPelMCTMDBEl);
       
      } else if (e.target.matches("#mejorValoradasTv")) {
          RenderTendecias(api.APIPelMCTMDBElTv);
      }
      });

      function renderTendencias(datos){
        let fondo =""
        let img= ""
        datos.forEach(el => {
            fondo=`url(https://image.tmdb.org/t/p/original${el.backdrop_path})`

            img+=`
            <img src="https://image.tmdb.org/t/p/original${el.poster_path}" alt="" width="120px" class="py-2 m-2" id="${el.id}">
            `
        });
        $bg.style.backgroundImage=fondo
        $imgpo.innerHTML=img
      }
   
   
         
     return RenderTendecias(API)
 
}
