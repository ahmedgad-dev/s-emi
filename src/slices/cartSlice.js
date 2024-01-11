import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  cartOpen: false,
  amount: 0,
  total: 0,
  isLoading: true,
};

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)   
  if(existingCartItem){
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
       {...cartItem, quantity: cartItem.quantity + 1} :
        cartItem )
  }
    return[...cartItems, {...productToAdd, quantity: 1}]    
}

const updateCartItems = (newCartItems) => {
  const newCartCount = newCartItems.reduce((total, nextItem) => {
    return total + nextItem.quantity
  }, 0)

  const newCartTotal = newCartItems.reduce((total, nextItem) => {
    return total + nextItem.quantity * nextItem.price
  }, 0)
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart:(state, action) =>  {  
        const existingCartItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id)       
        if(!existingCartItem){
          state.cartItems.push(action.payload)
          state.amount += 1
          //state.total = state.total + action.payload.price         
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
      increase: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount + 1;
      },
      decrease: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount - 1;
      },
      calculateTotals: (state) => {
        let amount ;
        let total ;
        state.cartItems.forEach((item) => {
          total += item.price;
        });
        state.amount = amount;
        state.total = total;
      },
     }
   })

   export const {addToCart, clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
  

export default cartSlice.reducer;