// ######################################################
// ######################################################
// ######################################################
// ######################## using function #####################
// ######################################################

import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRegGrinTongueSquint, FaShoppingCart } from "react-icons/fa";
import {CartContext} from "../../Contexts/CartContext";
import { useNavigate } from "react-router";

function BasicExample({ product }) {
  const {mycounter , setMycounter} = useContext(CartContext)
  const { image, title, description, price ,id} = product;
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate()

  const add = () => {
    setQuantity(quantity + 1);
    setMycounter(mycounter + 1)
  };
  const remove = () => {
    setQuantity(quantity - 1);
    setMycounter(mycounter - 1);
  };
  useEffect(() => {console.log("updated");}, [quantity]);
  return (
    <div className="col-12 col-md-6 col-lg-3 g-3">
      <Card >
      <div className="text-center text-danger p-2"><FaShoppingCart></FaShoppingCart> : {mycounter}</div>

        <Card.Img variant="top" src={image} style={{ height : "200px" , objectFit:"contain"}}/>
        <Card.Body>
          <Card.Title style={{height:"48px" ,overflow:"hidden"}}>{title}</Card.Title>
          <Card.Text style={{height:"168px" ,overflow:"hidden"}}>{description}</Card.Text>
          <div className="d-flex my-2 justify-content-between">
          <Button variant="primary" >
            {price || 100}
            <FaRegGrinTongueSquint></FaRegGrinTongueSquint>
          </Button>
          <Button variant="warning" onClick={()=>{navigate(`${id}/${quantity}`)}}>
            Check Details
          </Button>

          </div>
          <div className="d-flex my-2 justify-content-between">
            <Button
              variant="success"
              style={quantity > 0 ? {} : { width: "100%" }}
              onClick={add}
            >
              add<FaRegGrinTongueSquint></FaRegGrinTongueSquint>
            </Button>
            {quantity > 0 ? (
              <>
                <p>{quantity}</p>
                <Button variant="danger" onClick={remove}>
                  remove<FaRegGrinTongueSquint></FaRegGrinTongueSquint>
                </Button>
              </>
            ) : (
              ""
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;

