import './Detail.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../../../public/request/productos.js'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'

const Detail = () => {
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        getProductById('1')
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return(
        <section className='DetailSection'>
            <ItemDetailContainer {...producto}/>
        </section>
    )


}

export default Detail

