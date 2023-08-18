import React, { useState } from "react"
import './NavBar.css'
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { useCartContext } from "../../state/Cart.context"
import Cart from "../../Vistas/Cart/Cart"
import Modal from "../Modal/Modal"

const NavBar = () => {

    const {getCartQty} = useCartContext();

    const [modalCart, setModalCart] = useState(false);
  
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
            <button id="boton-carrito" onClick={() => setModalCart(!modalCart)}><i className="fas fa-shopping-cart"></i><span id="contadorCarrito">{getCartQty()}</span></button>
        </nav>
    </header>
    <Modal
        estado={modalCart}
    >
        <Cart cambiarEstado={setModalCart}></Cart>
    </Modal>
    <Outlet/>
    </>

    )
  }
  
export default NavBar

