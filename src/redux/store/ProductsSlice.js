import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await axios.get('https://api.cheatfusion.store/shop/products');
  return data;
});

const ProductsSlice = createSlice({
  name: 'PopUpSlice',
  initialState: {
    data: '',
    loading: false,
    error: ''
  },

  //   reducers: {
  //     openBasketCard: () => {}

  //   },
  //обработка  запроса
  extraReducers: (build) => {
    build.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });

    build.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    build.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  }
});
export const { openBasketCard } = ProductsSlice.actions;

export default ProductsSlice.reducer;
