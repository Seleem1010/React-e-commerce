import { createSlice } from '@reduxjs/toolkit'

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
        state.cartItems = state.cartItems.filter(item => item.name !== action.payload)
      }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,getCartItems,removeFromCart} = counterSlice.actions

export default counterSlice.reducer