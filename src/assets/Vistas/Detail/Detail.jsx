import './Detail.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../../../public/request/productos.js'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState(null);
    
    useEffect(() => {
        getProductById(id)
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

