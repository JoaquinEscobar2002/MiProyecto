import { useState } from "react";

const ItemCount = () => {

    const [count, setCount] = useState(0);
    const stock = 11;

    const handleSub = () =>{
        if(!count < 1){
            setCount(count - 1)
        } else{
            alert("No se puede restar mas")
        }
        
    }

    const handleSum = () =>{
        if(count < stock){
            setCount(count + 1)
        } else{
            alert("No hay mas stock disponible")}
    }

    return (
    <div className='sumar_carrito'>
        <div className='sumar_carrito_cantidad'>
            <button onClick={() => handleSub()}>-</button>
            <p>{count}</p>
            <button onClick={() => handleSum()}>+</button>
        </div>
        <div className='sumar_carrito_boton'>
            <button onClick={()=>onAdd()}>Agregar al carrito</button>
        </div>
    </div>
    )
};

export default ItemCount;