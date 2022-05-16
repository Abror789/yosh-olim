import { createSlice } from "@reduxjs/toolkit";

const root = createSlice({
     name: 'reducer',
     initialState: {
          isAuth: false,
          userData: null,
     },
     reducers: {
          setIsAuth: (state, action) => {
               state.isAuth = action.payload
          },
          setUserData: (state, action) => {
               state.userData = action.payload
          },
     }
})





export default root.reducer
export const { setIsAuth, setUserData } = root.actions