import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ProductContext } from '../Contexts/ProductsContext'

export default function Description() {
    const {id,quantity} = useParams()
    const {products } = useContext(ProductContext)
    const [product , setProduct] = useState(null)

    useEffect(()=>{
        setProduct(products.find((product) => product.id === parseInt(id)))
        
    },[])
  return (
    <>
        <img src={product?.image} alt="" />
        <div>Name: {product?.title}</div>
        <div>Price : {product?.price}$</div>
        <div>Qunatity : {quantity}</div>
        <div>Description : {product?.description}</div>
    </>
  )
}
