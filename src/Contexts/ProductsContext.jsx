import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext(null)

export default function ProductsContextProvider({children}) {
  const [products ,setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((dataArr) => setProducts(dataArr));
  });
  return (
    <ProductContext.Provider value={{products ,setProducts}}>
      {children}
    </ProductContext.Provider>
  );
}
