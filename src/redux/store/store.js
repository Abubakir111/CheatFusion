import { configureStore } from '@reduxjs/toolkit';
import PopUpSlice from '../PopUpSlice';
import ProductsSlice from './ProductsSlice';

export const store = configureStore({
  reducer: {
    PopUpSlice: PopUpSlice,
    ProductsSlice: ProductsSlice
  }
});
