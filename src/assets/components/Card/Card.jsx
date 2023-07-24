import React from 'react';
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'

export const Card = ({productos}) => {

    const handleCard = (qty) =>{
        console.log('La cantidad agregada es ', qty)
    }

    return (
        <article className='card_producto'>
            <img className='img_producto' src={productos.img} alt={productos.name} />
            <p className='nombre_producto'>{productos.name}</p>
            <p className='precio_producto'>${productos.price}</p>
            <ItemCount stock={productos.stock} onAdd={handleCard} />
        </article>
        
        )
    

};

export default Card; 