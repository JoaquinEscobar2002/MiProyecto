import React from 'react';
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom';

export const Card = ({productos}) => {

    const handleCard = (qty) =>{
        console.log('La cantidad agregada es ', qty)
    }
    const navigate = useNavigate();

    return (
        <article className='card_producto'>
            <img className='img_producto' src={productos.img} alt={productos.name} onClick={() => navigate(`/item/${productos.id}`)}/>
            <p className='nombre_producto'>{productos.name}</p>
            <p className='precio_producto'>${productos.price}</p>
            <ItemCount stock={productos.stock} onAdd={handleCard} />
        </article>
        
        )
    

};

export default Card; 