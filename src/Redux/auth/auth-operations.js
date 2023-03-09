import { apiUserLogin, apiUserSignup } from 'components/shared/services/api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await apiUserSignup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'autn/login',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await apiUserLogin(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
