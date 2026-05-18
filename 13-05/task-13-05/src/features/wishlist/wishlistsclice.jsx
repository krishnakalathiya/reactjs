// src/redux/wishlistSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {

    addTowishlist: (state, action) => {

      const existingProduct = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (!existingProduct) {
        state.wishlist.push(action.payload);
      }
    },

    removeTowishlist: (state, action) => {

      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addTowishlist,
  removeTowishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;