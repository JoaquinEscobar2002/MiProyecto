import './FormCompra.css'
import { useState } from "react"
import { useCartContext } from "../../state/Cart.context";
import {updateMany} from "../../../lib/productos"
import { addOrder } from "../../../lib/orders";



const FormCompra = ({cambiarEstado}) => {

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

        alert('Tu compra fue realizada con exito! Guarda este id: ' + id);

        await updateMany(items)

        cleanCart();


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        createOrder();
    };

    //Función para validar email
    function isEmailValid(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email)
    }

    // Validaciones
    const validateForm = () => {
        
        if (name.trim() === '') {
            alert('🤨 Ingrese su nombre');
            return false;
        }
       

        if (mail.trim() === '') {            
            alert('🤨 Ingrese su mail');
            return false;
        }

        if (!isEmailValid(mail)) {            
            alert('🤨 Mail invalido');
            return false;
        }

        if (mail !== mail2) {            
            alert('🤨 Su mail no coincide');
            return false;
        }

        if (!tel.match(/^\+?\d+$/)) {            
            alert('🤨 Invalid Phone number');
            return false;
        }

        

        return true;
    };

  

  
    return (
  
        <section onClick={(e) => cambiarEstado(false)} className='modal-contenedorr modlal-activee'>
            <div onClick={(e) => e.stopPropagation()} className="modal-form">
                <h3>Datos comprador</h3>

                <button onClick={() => cambiarEstado(false)} id="formCerrar"><i className="fas fa-times-circle"></i></button>
                <div>
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
                </div>
            
                <button className="boton-vaciar" onClick={handleSubmit}>
                    Realizar pedido
                </button>
                <button onClick={(e) => cambiarEstado(false)}>Cerrar Modal</button>
            </div>
        </section>
      )
    }
    
export default FormCompra