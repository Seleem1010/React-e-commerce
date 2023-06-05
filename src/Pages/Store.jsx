// import React from 'react'

// export default function Store() {
//   return (
//     <>
//      <ProductSection/>
//     </>
//   )
// }
// import ProductSection from "../components/functionComponents/ProductSection";

import React, { useContext, useState } from "react";
import BasicExample from "/media/allam/Data/ITI/Front-end/React/project/React-e-commerce/src/components/functionComponents/Card.jsx";
import { ProductContext } from "/media/allam/Data/ITI/Front-end/React/project/React-e-commerce/src/Contexts/ProductsContext.jsx";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";

function Store() {
  const { products } = useContext(ProductContext);
  const { mycounter } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Store</h1>
      <div className="row">
        {products.map((product, index) => (
          <BasicExample
            key={index}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="text-center my-4">
        <Link to="/Cart">
          <button className="btn btn-primary">
            Go to Cart ({mycounter})
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Store;