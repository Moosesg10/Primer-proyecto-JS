export async function Ajaxresutls(id,name,tipo,text,props){
    let {API,renderPeliculasPopulares}=props
    const  titulos=name
  try {
    const resp = await fetch(API+id);
    if (resp.status === 200) {
      const  datos = await resp.json();
      let content;
      if(name==="detalle"){
        content= datos
      }else{
        content= datos.results
      }
      if(name==="comprar"){
        renderPeliculasPopulares(datos,tipo,id);
        return false
      }
      renderPeliculasPopulares(content,titulos,tipo,text,id);
    } else {
      console.log("error del api");
    }
  } catch (error) {
    console.log(error);
  }

}

  