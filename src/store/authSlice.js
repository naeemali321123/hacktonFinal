import { Satellite } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";

let initialState = { isAuthentication: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      console.log("addProduct action payload", state);
      state.isAuthentication = true;
    },
    logout: (state) => {
      state.isAuthentication = false;
    },
  },
});

export const { login, logout, addProduct } = authSlice.actions;
export default authSlice.reducer;
