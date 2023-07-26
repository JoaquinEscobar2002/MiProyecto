import styles from'./ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetailContainer = ({id, img, name, price, stock, description, categori}) => {
  
    return (

        <article className='cardDetail'>
           <header className='cardDetail-header'>
            <h2 className='cardDetail-name'>{name}</h2>
           </header>
           <picture>
            <img src={img} alt={name} className='cardDetail-img' />
           </picture>
          <section className='cardDetail-info'>
            <p>Categoria: {categori}</p>
            <p>Descripcion: {description}</p>
            <p>Precio: ${price}</p>
          </section>
          <footer>
          <ItemCount stock={stock} />
          </footer>
            

        </article>


    )
  }
  
export default ItemDetailContainer