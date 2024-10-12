import { createSlice } from '@reduxjs/toolkit';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Создаём асинхронный thunk для регистрации
export const registerUser = createAsyncThunk('user/register', async (userData) => {
  const { data } = await axios.post('https://api.cheatfusion.store/shop/register', userData);

  // Возвращаем данные с сервера (например, токен и пользовательскую информацию)
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle', // idle | loading | succeeded | failed
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Сохраняем данные о пользователе
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
