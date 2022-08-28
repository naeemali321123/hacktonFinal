import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../store/authSlice';
import productSlice from '../store/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    product: productSlice,
  },
});
