import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export default function CartContextProvider({children}) {
    const [ mycounter , setMycounter] = useState(0);
  return (
    <>
    <CartContext.Provider value={{mycounter , setMycounter}}>
        {children}
    </CartContext.Provider>
    </>
  );
}
