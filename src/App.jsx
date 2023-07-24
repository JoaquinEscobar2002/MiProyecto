import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar/NavBar'
import Home from './assets/Vistas/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
    </>
  )
}

export default App
