import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    wishlist: []
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addTowishlist: (state, action) => {
            state.wishlist.push(action.payload)
        },
        removewishlis: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload)
        }
    }

})

export const { addTowishlist, removewishlist } = wishlistSlice.actions

export default wishlistSlice.reducer