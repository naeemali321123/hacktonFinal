import { createSlice } from "@reduxjs/toolkit";

let initialState = {data:[]};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("addProduct action payload", action.payload);
      state.data = action.payload
      
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
