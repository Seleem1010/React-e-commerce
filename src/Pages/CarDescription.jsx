import React, {  useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export default function Description() {
    const {id,quantity} = useParams()
    const {products } = useSelector(state=>state.ProductSlice)
    const [product , setProduct] = useState(null)

    useEffect(()=>{
        setProduct(products.find((product) => product.id === parseInt(id)))
        
    },[])
  return (
    <div className="container">
      {product ? (
        <>
          <img src={product.image} alt="" />
          <div className="title">{product.title}</div>
          <div className="price">Price: ${product.price}</div>
          <div className="quantity">Quantity: {quantity}</div>
          <div className="description">{product.description}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
      }