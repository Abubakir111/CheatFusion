// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchAuthorizationUser = createAsyncThunk(
//   'AuthorizationUserSlice/fetchAuthorizationUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('https://api.cheatfusion.store/shop/registration', userData);
//       return data;
//     } catch (error) {
//       if (error.response) {
//         // Если сервер вернул ответ с ошибкой
//         return rejectWithValue(error.response.data); // возвращаем ответ сервера
//       } else {
//         // Если ошибка произошла на стороне клиента или сети
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const fetchLoginUser = createAsyncThunk(
//   'AuthorizationUserSlice/fetchLoginUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('https://api.cheatfusion.store/shop/login', userData);
//       return data;
//     } catch (error) {
//       if (error.response) {
//         // Если сервер вернул ответ с ошибкой
//         return rejectWithValue(error.response.data); // возвращаем ответ сервера
//       } else {
//         // Если ошибка произошла на стороне клиента или сети
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// const AuthorizationUserSlice = createSlice({
//   name: 'AuthorizationSlice',
//   initialState: {
//     authorization: {
//       login: '',
//       email: '',
//       jwt: '',
//       inviteCode: '',
//       referrals: [],
//       offers: 0,
//       transactions: 0,
//       promocodes: []
//     },
//     errorAuthorization: '',
//     loadingAuthorization: false,
//     LoginData: [],
//     errorLogin: '',
//     loadingLogin: false,
//     errorTest: ''
//   },
//   reducers: {},
//   extraReducers: (build) => {
//     // Регистрация
//     build.addCase(fetchAuthorizationUser.pending, (state) => {
//       state.loadingAuthorization = true;
//     });

//     build.addCase(fetchAuthorizationUser.rejected, (state, action) => {
//       state.loadingAuthorization = false;
//       state.errorAuthorization = action.payload || action.error.message; // Если ошибка пришла с сервера или это была ошибка сети
//     });

//     build.addCase(fetchAuthorizationUser.fulfilled, (state, action) => {
//       state.loadingAuthorization = false;
//       const { login, email, jwt, inviteCode, referrals, offers, transactions, promocodes } = action.payload;
//       state.authorization = { login, email, jwt, inviteCode, referrals, offers, transactions, promocodes };
//       localStorage.setItem('jwtUser', JSON.stringify(action.payload));
//     });

//     // Вход
//     build.addCase(fetchLoginUser.pending, (state) => {
//       state.loadingLogin = true;
//     });

//     build.addCase(fetchLoginUser.rejected, (state, action) => {
//       state.loadingLogin = false;
//       state.errorLogin = action.payload || action.error.message; // Сохраняем ошибку от сервера или сети
//       state.errorTest = action.error; // Можно оставить для отладки
//     });

//     build.addCase(fetchLoginUser.fulfilled, (state, action) => {
//       state.loadingLogin = false;
//       localStorage.setItem('user', JSON.stringify(action.payload));
//       state.LoginData.push(action.payload);
//     });
//   }
// });
// export const {} = AuthorizationUserSlice.actions;

// export default AuthorizationUserSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuthorizationUser = createAsyncThunk(
  'AuthorizationUserSlice/fetchAuthorizationUser',
  async (userData) => {
    const { data } = await axios.post('https://api.cheatfusion.store/shop/registration', userData);

    return data;
  }
);

export const fetchLoginUser = createAsyncThunk('AuthorizationUserSlice/fetchLoginUser', async (userData) => {
  const { data } = await axios.post('https://api.cheatfusion.store/shop/login', userData);

  return data;
});
const AuthorizationUserSlice = createSlice({
  name: 'AuthorizationSlice',
  initialState: {
    testAuthorization: '',
    authorization: {
      login: '',
      email: '',
      jwt: '',
      inviteCode: '',
      referrals: [],
      offers: 0,
      transactions: 0,
      promocodes: []
    },
    errorAuthorization: '',
    loadingAuthorization: '',
    LoginData: [],
    errorLogin: '',
    loadingLogin: '',
    errorTest: ''
  },

  reducers: {
    // функция
  },
  //обработка  запроса
  extraReducers: (build) => {
    build.addCase(fetchAuthorizationUser.pending, (state) => {
      state.loadingAuthorization = true;
    });

    build.addCase(fetchAuthorizationUser.rejected, (state, action) => {
      state.loadingAuthorization = false;
      state.errorAuthorization = action.error.message;
    });
    build.addCase(fetchAuthorizationUser.fulfilled, (state, action) => {
      state.loadingAuthorization = false;
      // console.log(action.payload);
      state.testAuthorization = action.payload;
      state.authorization.login = action.payload.login;
      state.authorization.email = action.payload.email;
      state.authorization.jwt = action.payload.jwt;
      state.authorization.inviteCode = action.payload.inviteCode;
      state.authorization.referrals = action.payload.referrals;
      state.authorization.offers = action.payload.offers;
      state.authorization.transactions = action.payload.transactions;
      state.authorization.promocodes = action.payload.promocodes;
      localStorage.setItem('jwtUser', JSON.stringify(action.payload));
    });
    // Login
    build.addCase(fetchLoginUser.pending, (state) => {
      state.loadingLogin = true;
    });

    build.addCase(fetchLoginUser.rejected, (state, action) => {
      state.loadingLogin = false;
      state.errorLogin = action.error.message;
      state.errorTest = action.error;
    });
    build.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.loadingLogin = false;
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.LoginData.push(action.payload);

      // localStorage.setItem('', JSON.stringify(action.payload));
    });
  }
});
// export const {} = AuthorizationUserSlice.actions;

export default AuthorizationUserSlice.reducer;
