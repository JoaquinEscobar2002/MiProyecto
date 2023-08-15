import { createContext, useContext, useState } from "react";


const CartContext = createContext([]); //<-- valor por defecto ([])

export const useCartContext = () => useContext(CartContext);




export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    /* const contenedorModal = document.getElementsByClassName('modalContenedor')[0] */

    //Añadir
    
    const addProduct = (item, qty) => {
    

        const element = cart.find((product) => product.id === item.id);

        if(element) {
            const newCart = cart.map((product) => {
                if(product.id === item.id) {
                    return {...product, qty: product.qty + qty};
                }
                return product;
            });
            setCart(newCart);
        } else {setCart([
            ...cart, {
                ...item,
                qty,
            },
            ]);
        }
    };

    //Eliminar

    const removeProduct = (id) => {
        const newCart = cart.filter((product) => product.id !== id );
        setCart(newCart);
    }

    //Limpiar

    const cleanCart = () => setCart([]);

    //Prwecio total

    const getTotalPrice = () => cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    //Leer (agrego el carrito a value, llamo a value en el contexto)

    const getCartQty = () => cart.reduce((acc, item) => acc + item.qty, 0);

    const value = {
        cart,
        addProduct,
        getCartQty,
        removeProduct,
        cleanCart,
        getTotalPrice,
    };

    



    return (
        <CartContext.Provider
            value={value}
            displayName="CartContext"
        >
            {children}
        </CartContext.Provider>
    );
};