import { createSlice } from '@reduxjs/toolkit'

var x;
const initialState = {
    mycounter: 0,
    cartItems:[]

}

export const counterSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
    increment: (state) => {
        state.mycounter += 1
    },
    decrement: (state) => {
        state.mycounter -= 1
    },
    getCartItems: (state,action) => {
        state.cartItems = action.payload
    },
    removeFromCart: (state, action) => {
        // // state.cartItems = state.cartItems.filter(item => item.name !== action.payload)
        // const { index } = action.payload
        // const item = state.cartItems[index]
        // console.log(item)
        // item.quantity -= 1
      }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,getCartItems,removeFromCart} = counterSlice.actions

export default counterSlice.reducer