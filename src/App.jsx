import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar/NavBar'
import Home from './assets/Vistas/Home/Home'
import Detail from './assets/Vistas/Detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      {/* <Home /> */}
      <Detail/>
    </>
  )
}

export default App
