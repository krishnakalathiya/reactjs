import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
  name:"auth",
  initialState:{
    islogin:false,
    user:null
  },
  reducers:{
    loginUser:(state, action) =>{
      state.islogin = true;
      state.user = action.payload
    },

    logoutuser:(state) => {
      state.isLogin = false;
      state.user = null
    }
  }
})

export const {loginUser,logoutuser} = authslice.actions

export default authslice.reducer