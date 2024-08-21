import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('GeneralSlice/fetchUsers', async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=4');
  return data;
});

const generalSlice = createSlice({
  name: 'GeneralSlice',
  initialState: {
    burgerMenu: false
  },

  reducers: {
    testFuncktion: (state, action) => {
      state.burgerMenu = action.payload;
      console.log(state.burgerMenu);
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
export const { testFuncktion } = generalSlice.actions;

export default generalSlice.reducer;
