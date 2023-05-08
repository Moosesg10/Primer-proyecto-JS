import { cargarCompra, eliminarCarrito } from "./CargarComprar.js";


const d = document;
export function Comprar() {
  d.addEventListener("click", (e) => {
    if (e.target.name === "comprar") {
      e.preventDefault();
      let id = e.target.id,
        name = e.target.name,
        tipo = e.target.dataset.tipo;

      cargarCompra(id, name, tipo);
    }
    if (e.target.id === "vaciarCarrito") {
      let resp = confirm("seguro que quieres vaciar el carrito");
      if (resp) {
        console.log("funciona");
        localStorage.removeItem("products");
        location.reload(true);
      }
    }
    if (e.target.matches(".bx-trash")) {
      e.preventDefault();
      let id = e.target.id,
        name = e.target.dataset.name;
      
    eliminarCarrito(id,name)
    }
  });
}
