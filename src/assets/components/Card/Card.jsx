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
        <article className="productos__tarjeta">
            <img className='img_producto' src={productos.img} alt={productos.name} onClick={() => navigate(`/item/${productos.id}`)}/>
            <div className="productos__info">
                <p className="titulo__prod">{productos.name}</p>
                <p className="precio">${productos.price}</p>
                <ItemCount stock={productos.stock} onAdd={handleCard} />
            </div>
        </article>
        
        )
    

};

export default Card; 