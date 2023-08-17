import { useState } from "react"
import { useCartContext } from "../../state/Cart.context";
import {updateMany} from "../../../lib/productos"
import { addOrder } from "../../../lib/orders";



const FormCompra = () => {

    const {cart,getTotalPrice, cleanCart} = useCartContext()

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [mail2, setMail2] = useState('');
    const [tel, setTel] = useState('');

    const createOrder = async () => {
        //mapear el cart para generar la orden
        const items = cart.map(({id, name, qty, price}) => ({id, name, qty, price}))

        //datos del form
        const order = {
            buyer: {name, tel, mail},
            items, 
            total: getTotalPrice(),
        }

        //addOrder envia order a firestore y nos devuelve una id
        const id = await addOrder(order); 

        console.log(id);

        await updateMany(items)

        cleanCart();


    }
  

  
    return (
  
        <div className='formCompra'>
            <div>
                <span>Nombre</span>
                <input type="text" className="forn_input" placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <span>Correo</span>
                <input type="mail" className="forn_input" placeholder="Correo" onChange={(e) => setMail(e.target.value)}/>
            </div>
            <div>
                <span>Repetir correo</span>
                <input type="mail" className="forn_input" placeholder="Correo" onChange={(e) => setMail2(e.target.value)}/>
            </div>
            <div>
                <span>Telefono</span>
                <input type="number" className="forn_input" placeholder="Telefono" onChange={(e) => setTel(e.target.value)}/>
            </div>
        
            <button className="cart_item-button form_button boton-vaciar" onClick={createOrder}>
                Realizar pedido
            </button>
        </div>
      )
    }
    
export default FormCompra