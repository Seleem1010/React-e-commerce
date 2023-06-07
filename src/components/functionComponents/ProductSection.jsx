import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
export default function MyProductSection() {
  
  const {products} = useSelector(state => state.ProductSlice);
  
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Card key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}

