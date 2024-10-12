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
    logInPge: false,
    singupPage: false,
    basket: false,
    scrollProduct: true
  },

  reducers: {
    openBasketCard: (state, action) => {
      state.basket = action.payload;
      if (state.burgerMenu === true) {
        state.burgerMenu = false;
      }
      if (state.basket === true) {
        state.scrollProduct = true;
      }
      // else{
      //    state.scrollProduct = false;
      // }
      // state.basket ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    },
    openBurgeMenu: (state, action) => {
      state.burgerMenu = action.payload;

      console.log(state.burgerMenu, 'openMenu');
    },
    openLoginCard: (state, action) => {
      state.logInPge = action.payload;
      if (state.burgerMenu == true) {
        state.burgerMenu = false;
        state.logInPge = action.payload;
      }
      console.log(state.logInPge, 'logInPge');
    },
    openSingUpCard: (state, action) => {
      state.singupPage = action.payload;
      if (state.burgerMenu == true) {
        state.burgerMenu = false;
        state.singupPage = action.payload;
      }
      console.log(state.singupPage, 'singupPage');
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
export const { openBasketCard, openBurgeMenu, openLoginCard, openSingUpCard } = PopUpSlice.actions;

export default PopUpSlice.reducer;
