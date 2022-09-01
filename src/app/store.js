import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../pages/counter/counterSlice';
import authReducer from '../store/authSlice';
import productDtlReducer from '../store/productDtlSlice';
import productReducer from '../store/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    product: productReducer,
    productDtl: productDtlReducer
  },
});
