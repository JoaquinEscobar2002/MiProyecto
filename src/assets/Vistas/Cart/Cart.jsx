import './Cart.css'
import { useCartContext } from '../../state/Cart.context'
import { useEffect } from 'react';
import FormCompra from '../../components/FormCompra/FormCompra';

const Cart = () => {
    const {cart, cleanCart, getTotalPrice, removeProduct} = useCartContext();

    
    useEffect(()=>{

    }, [cart,])


    return(
        <>
        <section className='modal-contenedor'>

            <div className='modal-carrito'>
                <h3>Carrito</h3>
                <button><i className="fas fa-times-circle"></i></button>
                <>
                    {cart.map((item) => 
                    <div key={item.id} className='productoEnCarrito'>
                       <p>Nombre {item.name}</p> 
                       <p>Precio: {item.price}</p>
                       <p>Cantidad: {item.qty}</p>
                       <button onClick={() => removeProduct(item.id)} className='boton-eliminar'><i className="fas fa-trash-alt"></i></button>
                    </div>
                
                 
                )}
                    
                </>
                <p className='precioProducto.'>Total: ${getTotalPrice()}</p>
                <button className='boton-vaciar' onClick={() => cleanCart()}>Vaciar carrito</button>

<br /><br /><br /><br /><br /><br /><br />

                <FormCompra/>
            </div>


            

        </section>
        </>
        
        )
}

export default Cart