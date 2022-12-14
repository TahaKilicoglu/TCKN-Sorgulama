import {createSlice} from "@reduxjs/toolkit"

const initialState= {
   firstName: "",
   lastName: "",
   tckn: "",
   year: ""
  }

export const userSlice = createSlice({
   name:"user",
   initialState,
   reducers: {
  
   login: (state, action) => {
     state.user = action.payload
     console.log(state.user);
   },
   logout: (state) => {
     state.user = null
   }
 }
})

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

  