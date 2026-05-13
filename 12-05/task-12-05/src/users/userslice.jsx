import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  users:[],
  loading:false,
  error:null
}

// API Calling

export const fetchUsers = createAsyncThunk("users/fetchUsers" , async() => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")

  return res.data
})

// reducer

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
      builder
      // pending

      .addCase(fetchUsers.pending , (state) => {
        state.loading = true
      })

      // fullfilled
      .addCase(fetchUsers.fulfilled , (state , action) => {
        state.users = action.payload
        state.loading = false
      })

      // Rejected

      .addCase(fetchUsers.rejected , (state , action) => {
        state.loading = false,
        state.error = action.error.message
      })

    }
})

export default userSlice.reducer