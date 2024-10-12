import { configureStore } from '@reduxjs/toolkit';
import PopUpSlice from '../PopUpSlice';
import ProductsSlice from './ProductsSlice';
import AuthorizationUserSlice from './AuthorizationUserSlice';
import UserSlice from './UserSlice';

export const store = configureStore({
  reducer: {
    PopUpSlice: PopUpSlice,
    ProductsSlice: ProductsSlice,
    AuthorizationUserSlice: AuthorizationUserSlice,
    UserSlice: UserSlice
  }
});
