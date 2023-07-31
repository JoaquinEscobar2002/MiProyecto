import styles from'./ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetailContainer = ({id, img, name, price, stock, description, category}) => {
  
    return (

      <article className='cardDetail'>
        <section className='cardDetail-picture'>
          <picture>
            <img src={img} alt={name} className='cardDetail-img' />
          </picture>
        </section>

        <section className='cardDetail-info'>
          <h2 className='cardDetail-name'>{name}</h2>
          <div className='cardDetail-div'>
            <p>Categoria: {category}</p>
            <p>Descripcion: {description}</p>
            <p>Precio: ${price}</p>
          </div>
          <ItemCount stock={stock} />
        </section>
      </article>
    )
  }
  
export default ItemDetailContainer