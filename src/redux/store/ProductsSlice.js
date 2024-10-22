import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (developmentStatus) => {
  const { data } = await axios.get(
    developmentStatus
      ? 'http://localhost:8080/https://api.cheatfusion.store/shop/products'
      : 'https://api.cheatfusion.store/shop/products'
  );

  return data;
});

export const fetchMakeorder = createAsyncThunk('products/fetchMakeorder', async (arg, { rejectWithValue }) => {
  const { developmentStatus, body, auth } = arg; // Деструктурируем аргуме
  console.log(body);
  console.log(auth);
  console.log(developmentStatus);
  const url = developmentStatus
    ? 'http://localhost:8080/https://api.cheatfusion.store/shop/makeorder'
    : 'https://api.cheatfusion.store/shop/makeorder';

  try {
    const { data } = await axios.post(url, body, auth);
    return data; // Если запрос успешен, возвращаем данные
  } catch (error) {
    // Если произошла ошибка, возвращаем данные об ошибке
    return rejectWithValue(error.response.data);
  }
});

const ProductsSlice = createSlice({
  name: 'PopUpSlice',
  initialState: {
    data: [],
    loading: false,
    error: '',
    ActiveProduct: [],
    // TotalMoney:0,
    productActivId: '',
    orderId: '',
    urlPay: '',
    errorMakeorder: [],
    developmentStatus: true
  },

  reducers: {
    productPageId: (state, action) => {
      state.productActivId = action.payload;
      const localActivetProduct = state.data.filter((element) => element.pid == action.payload);
      localStorage.setItem('ActiveProduct', JSON.stringify(localActivetProduct));
    },
    ProductStore: (state, action) => {
      const existingProduct = state.ActiveProduct.find(
        (element) =>
          element.id === action.payload.id &&
          element.title === action.payload.title &&
          element.pid === action.payload.pid
      );

      if (existingProduct) {
        // Если продукт найден, увеличиваем count и пересчитываем цену
        existingProduct.count++;
        existingProduct.price += existingProduct.basePrice;
      } else {
        // Если продукт не найден, добавляем его в массив
        state.ActiveProduct.push(action.payload);
      }
    },
    hendelCountAdd: (state, action) => {
      state.ActiveProduct.forEach((elemet) => {
        if (elemet.id == action.payload) {
          elemet.count++;
          elemet.price += elemet.basePrice;
        }
      });
    },

    hendelCountPrev: (state, action) => {
      state.ActiveProduct.forEach((elemet) => {
        if (elemet.id == action.payload) {
          if (elemet.count <= 1) {
            elemet.count = 1;
            elemet.price;
          } else {
            elemet.count--;
            elemet.price -= elemet.basePrice;
          }
        }
      });
    },
    DeletProduct: (state, action) => {
      state.ActiveProduct = state.ActiveProduct.filter((element) => element.id !== action.payload);
    },
    EraseMessage: (state) => {
      state.errorMakeorder = '';
    }
  },
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
      // console.log(action.payload);
      state.data = action.payload;
    });
    // fetchMakeorder;
    build.addCase(fetchMakeorder.pending, (state) => {
      state.loading = true;
    });

    build.addCase(fetchMakeorder.rejected, (state, action) => {
      state.loading = false;
      // state.errorMakeorder = action.payload || action.error.message;
      state.errorMakeorder = [action.payload.error];
    });
    build.addCase(fetchMakeorder.fulfilled, (state, action) => {
      state.loading = false;
      // console.log(action.payload);
      state.errorMakeorder = '';
      state.orderId = action.payload.orderId;
      state.urlPay = action.payload.url;
    });
  }
});
export const { productPageId, ProductStore, hendelCountPrev, hendelCountAdd, DeletProduct, EraseMessage } =
  ProductsSlice.actions;

export default ProductsSlice.reducer;
