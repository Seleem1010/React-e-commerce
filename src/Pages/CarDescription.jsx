import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import RatingPage from "../components/functionComponents/RatingPage";
import { Button } from "react-bootstrap";
// import { FaRegGrinTongueSquint } from "react-icons/fa";
import { decrement, increment } from "../Redux/slices/CartSlice";

export default function Description() {
  const { id, quantity } = useParams();
  const { products } = useSelector((state) => state.ProductSlice);
  const [product, setProduct] = useState(null);
  const [Quantity, setQuantity] = useState(parseInt(quantity));
  const dispatch = useDispatch();

 

  const add = () => {
    setQuantity(Quantity + 1);
    dispatch(increment());
  };
  const remove = () => {
    setQuantity(Quantity - 1);
    dispatch(decrement());
  };

  useEffect(() => {
    setProduct(products.find((product) => product.id === parseInt(id)));
  }, []);
  return (
    <div>
      <div style={{ alignItems: "center", position: "relative" }}>
        <img
          style={{
            marginTop: "25px",
            padding: "15px",
            marginLeft: "20px",
            width: "400px",
            borderRadius: "50px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
          src={product?.image}
          alt=""
        />

        <p style={{ fontSize: "20px" }}>Product Name:{product?.title}</p>
      </div>

      <div
        style={{
          alignItems: "center",
          position: "relative",
          marginLeft: "500px",
          bottom: "400px",
        }}
      >
        <div style={{ fontSize: "40px" }}>Price : {product?.price}$</div>
        <div style={{ fontSize: "40px" }}>Qunatity : {Quantity} </div>

        <div style={{ fontSize: "25px" }}>
          Description : {product?.description}
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          position: "relative",
          marginLeft: "500px",
          bottom: "400px",
        }}
      >
        <RatingPage />

        <div
          className="justify-content-center my-2"
          style={{
            alignItems: "center",
            position: "relative",
            bottom: "0.5px",
          }}
        >
          <Button variant="success" style={{ width: "10%" }} onClick={add}>
            Add
          </Button>
        </div>

        <div style={{ bottom: "0.5px" }}>
          <Button variant="danger" style={{ width: "10%" }} x onClick={remove}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
