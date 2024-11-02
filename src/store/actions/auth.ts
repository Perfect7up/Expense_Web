import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null
  },
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.token = token.token;
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
