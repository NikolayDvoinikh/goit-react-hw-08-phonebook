import { createSlice } from '@reduxjs/toolkit';

import { login, signup } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(signup.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.isLogin = true;
        store.user = payload.user;
        store.token = payload.token;
      })
      .addCase(signup.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      })
      .addCase(login.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(login.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.isLogin = true;
        store.user = payload.user;
        store.token = payload.token;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      });
  },
});
