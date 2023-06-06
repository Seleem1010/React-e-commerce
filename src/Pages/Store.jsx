import React from 'react'
import ProductSection from "../components/functionComponents/ProductSection";
import { useSelector } from 'react-redux';

export default function Store() {
  const {loading} = useSelector(state=>state.ProductSlice)
  return loading ? (
    <div className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    ):
    (
      <ProductSection/>
    )

}
