import { useState } from 'react'
import NavBar from './assets/components/NavBar/NavBar'
import Home from './assets/Vistas/Home/Home'
import Detail from './assets/Vistas/Detail/Detail'
import Cart from './assets/Vistas/Cart/Cart'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import { CartProvider } from './assets/state/Cart.context';
import { Category } from './assets/Vistas/Category/Category';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}>
    <Route path="/" element={<Home/>}/>
    <Route path="/item/:id" element={<Detail/>}/>
    <Route path="/category/:id" element={<Category/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Route>
  )
)

function App() {

  return (
    <>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </>
  )
}

export default App
