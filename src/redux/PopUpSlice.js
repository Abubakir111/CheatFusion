import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('GeneralSlice/fetchUsers', async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=4');
  return data;
});

const PopUpSlice = createSlice({
  name: 'PopUpSlice',
  initialState: {
    burgerMenu: false,
    logIn: false,
    singIp: false,
    basket: false
  },

  reducers: {
    openBasketCard: (state, action) => {
      state.basket = action.payload;
      console.log(state.basket, 'openBsket');
    },
    openBurgeMenu: (state, action) => {
      state.burgerMenu = action.payload;
      console.log(state.burgerMenu, 'openMenu');
    }
    //   модальное окно  "добавить  пользователя"  открыть  закрыть
    // addUserModal: (state) => {
    //   state.userModal = !state.userModal;
    // },
    // добавить   пользователя
    // addUser: (state, action) => {
    //   console.log(action.payload);
    //   state.users.push(action.payload);
    // }
  }
  //обработка  запроса
  // extraReducers: (build) => {
  //   build.addCase(fetchUsers.pending, (state, action) => {
  //     state.loading = true;
  //   });

  //   build.addCase(fetchUsers.rejected, (state, action) => {
  //     state.loading = false;
  //     action.error.message;
  //   });
  //   build.addCase(fetchUsers.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.users = action.payload;
  //   });
  // },
});
export const { openBasketCard, openBurgeMenu } = PopUpSlice.actions;

export default PopUpSlice.reducer;
