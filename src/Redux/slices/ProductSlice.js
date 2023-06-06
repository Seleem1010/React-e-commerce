import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    loading:false
}
export const getAllProducts = createAsyncThunk("getAllProducts",async()=>{
    const {data} = await axios.get("https://fakestoreapi.com/products")
    return data
})

export const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
    getProducts: (state,action) => {
        state.products = action.payload
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getAllProducts.pending,(state)=>{
        state.loading = true
    })
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{
        state.loading = false
        state.products = action.payload
    })
    builder.addCase(getAllProducts.rejected,(state)=>{

    })
}
})




// Action creators are generated for each case reducer function
export const { getProducts } = productSlice.actions

export default productSlice.reducer