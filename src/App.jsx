import React from 'react'
import './App.css'
import Header from './components/Header/Header' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Card from './components/Card/Card'

function App() {

  return (
    <>
      <Header />
      <ItemListContainer greeting={"Web en desarrollo..."} />
      <section className='contenedor_card'>
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <div>
          <h3>Bazar</h3>
          <Card />
        </div> */}
      </section>
    </>
    
  )
}

export default App 
