import React from "react"
import './NavBar.css'
import { NavLink, Outlet } from "react-router-dom"

const NavBar = () => {
  
    return (

    <>
    <header>
        <nav className="nav">
            <a href="#" className="logo"><h1>Bazzar BDC</h1></a>
            <ul className="menu">
                <li><NavLink className={"link"} to={"/"}>Home</NavLink></li>
                <li><NavLink className={"link"} to={"/category/cocina"}>Cocina</NavLink></li>
                <li><NavLink className={"link"} to={"/category/hogar"}>Hogar</NavLink></li>
                <li><NavLink className={"link"} to={"/category/pc"}>PC</NavLink></li>
            </ul>
            <button id="boton-carrito"><i className="fas fa-shopping-cart"></i><span id="contadorCarrito">0</span></button>
        </nav>
    </header>
    <Outlet/>
    </>

    )
  }
  
export default NavBar

