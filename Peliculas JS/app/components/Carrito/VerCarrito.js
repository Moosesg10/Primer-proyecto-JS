
import { table } from "./Table.js";

const d = document;
export function VerCarrito() {
  d.addEventListener("click", (e) => {
 
    if (
      e.target.matches("#mostrarCarrito") ||
      e.target.matches("#mostrarCarrito *")
    ) {
      d.querySelector(".panel").classList.toggle("is-active");
      d.querySelector(" .panel-btn ").classList.toggle("is-active");
      table()
    }else return false
  });
}
