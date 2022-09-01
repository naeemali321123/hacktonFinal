import { createSlice } from "@reduxjs/toolkit";

let initialState = { data: [] };

export const productDtlSlice = createSlice({
  name: "productDtlSlice",
  initialState,
  reducers: {
    productDtlInfo: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { productDtlInfo } = productDtlSlice.actions;
export default productDtlSlice.reducer;
