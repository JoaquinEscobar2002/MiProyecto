import React from 'react';
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'

export const Card = () => {

    const handleCard = (qty) =>{
        console.log('La cantidad agregada es ', qty)
    }

    return (
        <article className='card_producto'>
            <img className='img_producto' src="https://abanicobazar.com/wp-content/uploads/2023/05/bdc0bae8-145f-4c3d-914c-ab26d5460345-PhotoRoom.png-PhotoRoom.png" alt="taza de cafe" />
            <p className='nombre_producto'>Taza de cafe</p>
            <p className='precio_producto'>$400</p>
            <ItemCount stock={0} onAdd={handleCard} />
        </article>
        
        )
    

};

export default Card; 