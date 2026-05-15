import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    wishlist:[]
}

const wishlistSlice = createSlice({
  name:'wishlist',
  initialState,
  reducers:{
    addTowishlist:(state , action) => {
      state.wishlist.push(action.payload)
    },
    removeTowishlist:(state , action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload)
    }
  }
  
})

export const {addTowishlist , removeTowishlist} = wishlistSlice.actions

export default wishlistSlice.reducer