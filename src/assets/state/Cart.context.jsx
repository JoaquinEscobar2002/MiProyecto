import { createContext, useContext } from "react";


const CartContext = createContext([]); //<-- valor por defecto ([])

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    return (
        <CartContext.Provider
            value={[]}
            displayName="CartContext"
        >
            {children}
        </CartContext.Provider>
    );
};