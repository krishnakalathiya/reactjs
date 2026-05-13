import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users/userslice'

export const store = configureStore({
  reducer:{
    users:userReducer
  }
})