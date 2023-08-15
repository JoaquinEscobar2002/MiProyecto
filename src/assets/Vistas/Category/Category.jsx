import { useEffect, useState } from "react";
import { getProducts } from "../../../../public/request/productos";
import "./Category.css"
import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Card from "../../components/Card/Card";


export const Category = () =>{
    const {id} = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts(id)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    return(
        <section className='productos'>
        <ul className='productos__contenedor'>
            {productos.map((productos) => (
            <Card key={productos.id} productos={productos} />
            
            ))}
        </ul>
        </section>
    )
}