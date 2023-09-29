import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
