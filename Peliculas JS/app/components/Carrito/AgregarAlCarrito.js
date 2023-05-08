import api from "../../helpers/Api_Peli.js"


export function AgregarAlcarrito(datos, id,tipo){
    let {title,name,}=datos;

    let carrito=api.Carrito
    let titulo=title
    if(titulo===undefined){
        titulo=name
    }
    if(carrito.find(el => (el.id==id))){
        alert(`El producto ${titulo} ya esta  el carrito`)
    }else{
        alert(`El producto ${titulo} se agrego a en el carrito`)
        carrito.push(datos);  
       
    
        
    }

}