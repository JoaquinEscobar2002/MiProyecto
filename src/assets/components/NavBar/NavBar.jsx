import React from "react"
import './NavBar.css'

const NavBar = () => {
  
    return (

    <header>
        <nav className="nav">
            <a href="#" className="logo"><h1>Bazzar BDC</h1></a>
            <ul className="menu">
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Como comprar</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
            <button id="boton-carrito"><i className="fas fa-shopping-cart"></i><span id="contadorCarrito">0</span></button>
        </nav>
    </header>


    )
  }
  
export default NavBar

