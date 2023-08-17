import React from "react"
import './NavBar.css'
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { useCartContext } from "../../state/Cart.context"

const NavBar = () => {

    const {getCartQty} = useCartContext();
  
    const navigate = useNavigate();
    return (

    <>
    <header>
    <nav className="nav">
            <NavLink className={"logo"} to={"/"}><h1>Bazzar BDC</h1></NavLink>
            <ul className="menu">
                <li><NavLink className={"link"} to={"/category/cocina"}>Cocina</NavLink></li>
                <li><NavLink className={"link"} to={"/category/hogar"}>Hogar</NavLink></li>
                <li><NavLink className={"link"} to={"/category/pc"}>PC</NavLink></li>
            </ul>
            <button id="boton-carrito" onClick={() => navigate('/cart')}><i className="fas fa-shopping-cart"></i><span id="contadorCarrito">{getCartQty()}</span></button>
        </nav>
    </header>
    <Outlet/>
    </>

    )
  }
  
export default NavBar

