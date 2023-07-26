import Card from '../Card/Card'
import styles from'./ItemListContainer.css'
import { getProducts } from '../../../../public/request/productos.js'
import { useEffect, useState } from 'react'


const ItemListContainer = () => {
  
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProductos(response)
                console.log(setProductos)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (

        <section>
            <ul className='ItemListContainer'>
                {productos.map((productos) => (
                <Card key={productos.id} productos={productos} />
                
                ))}
            </ul>
            

        </section>


    )
  }
  
export default ItemListContainer