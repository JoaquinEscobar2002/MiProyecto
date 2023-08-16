import Card from '../Card/Card'
import styles from'./ItemListContainer.css'
import { getProducts } from '../../../lib/productos'
import { useEffect, useState } from 'react'


const ItemListContainer = () => {
  
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    

    return (

        <section className='productos'>
            <div className="productos__titulo"><h2>Nuestros mejores precios</h2></div>
            <ul className='productos__contenedor'>
                {productos.map((productos) => (
                <Card key={productos.id} productos={productos} />
                
                ))}
            </ul>
            

        </section>


    )
  }
  
export default ItemListContainer