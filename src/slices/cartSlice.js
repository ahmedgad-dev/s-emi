import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  cartOpen: false,
  amount: 0,
  total:0,
  isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart:(state, action) =>  {  
        const existingCartItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id)   
        if(!existingCartItem){
          state.cartItems.push({...action.payload, quantity:1})   
        }  
      },
      clearCart: (state) => {
        state.cartItems = [];
      },
      removeItem: (state, action) => {
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        state.amount -= 1
      },
      increaseQuantity: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.quantity = cartItem.quantity + 1;
      },
      decreaseQuantity: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
         if(cartItem.quantity === 1){
            payload.quantity = 1
         }
        cartItem.quantity = cartItem.quantity - 1;
      },
      calculateTotals: (state) => {
        const newCartAmount = state.cartItems.reduce((total, nextItem) => {
          return total + nextItem.quantity
        }, 0)
      
        const newCartTotal = state.cartItems.reduce((total, nextItem) => {
          let price = Number(nextItem.offer_price.replace('$',''))
          return total + nextItem.quantity * price
        }, 0)
        state.amount = newCartAmount;
        state.total = newCartTotal.toFixed(2)
      },
     }
   })

   export const {addToCart, clearCart, removeItem, increaseQuantity, decreaseQuantity, calculateTotals } = cartSlice.actions;
  

export default cartSlice.reducer;