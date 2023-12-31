import './Detail.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../../lib/productos'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'
import { useCartContext } from '../../state/Cart.context'

const Detail = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});
    
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

