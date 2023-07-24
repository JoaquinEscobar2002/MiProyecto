import Card from '../Card/Card'
import styles from'./ItemListContainer.css'
import productos from '../../../../public/request/productos.json'


const ItemListContainer = () => {
  
    
    return (

    <section>
        <ul className='ItemListContainer'>
            {productos.map((productos) => (
            <Card key={productos.id} productos={productos} />
            
            ))}
        </ul>
        

    </section>


    )
  }
  
export default ItemListContainer