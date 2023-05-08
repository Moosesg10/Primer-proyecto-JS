import Carrito from "../../helpers/Api_Peli.js";
import { AgregarAlcarrito } from "./AgregarAlCarrito.js";
import { buscarLocalStore } from "./BuscarLocalStore.js";
import { Savearray } from "./Save.js";
import { table } from "./Table.js";




export async function cargarCompra(id,name,tipo){
    let APIDetalle = "";
  if (tipo == "Cine") {
    APIDetalle = `https://api.themoviedb.org/3/movie/${id}?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES`;
  } else {
    APIDetalle = `https://api.themoviedb.org/3/tv/${id}?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES`;
  }
  try {
    console.log(APIDetalle)
    const resp = await fetch(APIDetalle);
    if (resp.status === 200) {
      const datos = await resp.json();
    //  console.log(datos);
      AgregarAlcarrito(datos, id, tipo);
      table()
    
    } else {
      console.log("error del api");
    }
  } catch (error) {
    console.log(error);
  }
}

export function eliminarCarrito(id, name) {
  let resp=confirm("Seguro que desea eliminar esta Pelicula: "+name),
  carrito=Carrito.Carrito

  if(resp){
    let producto
    producto=carrito.filter(pelicula => (pelicula.id!=parseInt(id))
    ); 
    console.log(producto)
    Savearray(producto)
    table(producto)

    setTimeout(() => {
      location.reload(true);
    }, 2000);
  }
}