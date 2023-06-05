import React, { createContext, useState } from 'react';

export const  CartItemsContext= createContext(null);

export default function CartItemsProvider({ children }) {
  const [mycounter, setMycounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartItemsContext.Provider value={{ mycounter, setMycounter, cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
}

