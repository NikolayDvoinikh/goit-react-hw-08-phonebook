import { createSlice } from '@reduxjs/toolkit';

import { login, signup, current, logout } from './auth-operations';

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
      })
      .addCase(current.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(current.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.user = payload;
        store.isLogin = true;
      })
      .addCase(current.rejected, (store, { payload }) => {
        store.token = '';
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(logout.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(logout.fulfilled, store => {
        store.isLoading = false;
        store.user = {};
        store.token = '';
        store.isLogin = false;
      })
      .addCase(logout.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});
