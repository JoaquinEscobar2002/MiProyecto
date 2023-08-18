import './Cart.css'
import { useCartContext } from '../../state/Cart.context'
import { useEffect, useState } from 'react';
import FormCompra from '../../components/FormCompra/FormCompra';
import Modal from '../../components/Modal/Modal';

const Cart = ({cambiarEstado}) => {
    const {cart, cleanCart, getTotalPrice, removeProduct} = useCartContext();

    
    useEffect(()=>{

    }, [cart,])

    const [modalForm, setModalForm] = useState(false);


    return(
        
        <>
        <section onClick={(e) => cambiarEstado(false)} className='modal-contenedor modal-active'>

            <div onClick={(e) => e.stopPropagation()} className='modal-carrito'>
                <h3>Carrito</h3>
                <button onClick={() => cambiarEstado(false)} id="carritoCerrar"><i className="fas fa-times-circle"></i></button>
                

                {
                    cart.length ? 
                <>
                    {cart.map((item) => 
                    <div key={item.id} className='productoEnCarrito'>
                       <p>Nombre {item.name}</p> 
                       <p>Precio: {item.price}</p>
                       <p>Cantidad: {item.qty}</p>
                       <button onClick={() => removeProduct(item.id)} id="vaciar-carrito" className='boton-eliminar'><i className="fas fa-trash-alt"></i></button>
                    </div>
                
                 
                    )}
                    <p className='precioProducto'>Total: ${getTotalPrice()}</p>
                    <button className='boton-vaciar' onClick={() => cleanCart()}>Vaciar carrito</button>
                        
                    <button className='boton-vaciar' onClick={() => setModalForm(!modalForm)}>Finalizar compra</button>
                
                 <Modal estado={modalForm}>
                    <FormCompra cambiarEstado={setModalForm}/> 
                 </Modal>


                    
                </>
                


                :

                <div className="text-center emptyCart">
                    <h4 className="text-center">El carro esta vacio</h4>
                </div>
}


            </div>


            

        </section>
        </>
        
        )
}

export default Cart