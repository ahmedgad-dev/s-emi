import { createApi } from '@reduxjs/toolkit/query/react'
import { configureStore,combineReducers, combineSlices } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'



export const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})
