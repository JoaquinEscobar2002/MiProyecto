import styles from'./ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetailContainer = ({id, img, name, price, stock, description, category}) => {
  
    return (

      <article className='cardDetail'>
        <header className='cardDetail-header'>
          <h2 className='cardDetail-name'>{name}</h2>
        </header>
        <picture>
          <img src={img} alt={name} className='cardDetail-img' />
        </picture>
        <section className='cardDetail-info'>
          <p>Categoria: {category}</p>
          <p>Descripcion: {description}</p>
          <p>Precio: ${price}</p>
        </section>
        <ItemCount stock={stock} />
      </article>
    )
  }
  
export default ItemDetailContainer