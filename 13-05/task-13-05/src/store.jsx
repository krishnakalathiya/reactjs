import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product/productslice'
import cartReducer from './features/cart/cartslice'
import wishlistReducer from  './features/wishlist/wishlistsclice'
import authReducer from './features/auth/authslice'

export const store = configureStore({
  reducer:{
   product:productReducer,
   cart:cartReducer,
   wishlist:wishlistReducer,
   auth:authReducer
  }
})