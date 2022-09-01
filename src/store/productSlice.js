import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../config/Firebase";

let initialState = { data: [], data1: [] };

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct: (state, action) => {
      console.log("fetchProduct action payload", action.payload);
      state.data = action.payload;
    },
    addProduct: (state, { payload }) => {
      console.log("add Product payload action", payload);
      state.data.unshift(payload);
      addDocOnFirebase(state);
    },
    productDtl: (state, { payload }) => {
      console.log("productDtl payload", payload);
      state.data1 = payload;
    },
  },
});

export const { fetchProduct, addProduct, productDtl } = productSlice.actions;
export default productSlice.reducer;

const addDocOnFirebase = async (state) => {
  try {
    toast("Data Uploading...");
    await setDoc(doc(db, "productInfo", `acmdgregy44`), state);
    toast.success("Add Product Successfully");
  } catch (error) {
    toast.error(error);
  }
};
