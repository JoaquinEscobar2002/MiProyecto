import { useState } from 'react'
import NavBar from './assets/components/NavBar/NavBar'
import Home from './assets/Vistas/Home/Home'
import Detail from './assets/Vistas/Detail/Detail'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import { CartProvider } from './assets/state/Cart.context';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}>
    <Route path="/" element={<Home/>}/>
    <Route path="/item/:id" element={<Detail/>}/>
    <Route path="/category/:id" element={<div>Categoria</div>}/>
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
