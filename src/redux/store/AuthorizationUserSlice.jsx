import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const AuthorizationUserSlice = createSlice({
  name: 'AuthorizationSlice',
  testRegistrationUser: '',
  initialState: {
    loadingAuthorization: false,
    userLogin: [],
    logout: true
  },

  reducers: {
    addUser: (state, action) => {
      state.userLogin = [action.payload];
    },
    Logout: (state) => {
      state.logout = false;
      if (state.logout == false) {
        const userJwt = Cookies.remove('jwt');
        // state.userLogin = [];
        console.log(userJwt);
      }
    }
  }
});
export const { addUser, Logout } = AuthorizationUserSlice.actions;

export default AuthorizationUserSlice.reducer;
