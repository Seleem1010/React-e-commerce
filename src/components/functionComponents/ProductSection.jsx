//#########################################################################
//#########################################################################
//#########################################################################
//######################## using function ##################################
//#########################################################################

import React, { useContext} from "react";
import Card from "./Card";
import { ProductContext } from "../../Contexts/ProductsContext";
export default function MyProductSection() {
  const {products} = useContext(ProductContext);
  
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

