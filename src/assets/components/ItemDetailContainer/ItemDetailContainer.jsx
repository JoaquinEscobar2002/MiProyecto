import styles from'./ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../state/Cart.context';


const ItemDetailContainer = ({id, img, name, price, stock, description, category}) => {
  
  const {addProduct} = useCartContext();

  const producto = {id, img, name, price, stock, description, category}

  const handleAdd = (qty) => {
     addProduct(producto, qty)
  }


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
          <ItemCount stock={stock/*  - item.qty */} onAdd={handleAdd} />
        </section>
      </article>
    )
  }
  
export default ItemDetailContainer