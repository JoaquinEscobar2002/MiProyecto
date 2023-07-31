import { useState } from "react";
import "./ItemCount.css"

// Componente de las cards para sumar los productos al carrito por cantidad.
const ItemCount = ({stock, onAdd }) => {

    //Declaro el useState con la variable count (cantidad de tal producto)
    const [count, setCount] = useState(1);
    
    //Funcion que resta a setCount 
    const handleSub = () =>{
        if(count > 1){
            setCount(count - 1)
        } else{
            alert("No se puede restar mas")
        }
        
    }
    //Funcion que resta a setCount 
    const handleSum = () =>{
        if(stock > count){
            setCount(count + 1)
        } else{
            alert("No hay mas stock disponible")}
    }
    
    //Renderiza los botones y la cantidad en la card
    return (
    <div className='sumar_carrito'>
        <div className='sumar_carrito_cantidad'>
            <p>{count}</p>
            <div className="div_botons">
                <div className='sumar_carrito_botons' onClick={() => handleSum()}>+</div>
                <div className='sumar_carrito_botons' onClick={() => handleSub()}>-</div>
            </div>
            
        </div>
        <button className='sumar_carrito_boton' disabled={!stock} onClick={()=>onAdd(count)}>Agregar</button>
 
    </div>
    )
};

export default ItemCount;