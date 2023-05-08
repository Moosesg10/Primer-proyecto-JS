import { Navbar } from "./HeaderComponents/Navbar.js"
const d=document
export function Header(){
    const $main=document.getElementById("root"),
    $header=d.createElement("header")
    $header.classList.add("fijo")
    $header.appendChild(Navbar())
    $main.appendChild($header)
    return $header
}