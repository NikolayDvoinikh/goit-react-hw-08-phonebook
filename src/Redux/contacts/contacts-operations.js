import {
  apiGetAllContacts,
  apiAddContact,
  apiDeleteContact,
  apiUpdateContact,
} from 'shared/services/apiContact';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, { rejectWithValue }) => {
    try {
      const data = await apiGetAllContacts();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data: result } = await apiAddContact(contact);
      console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await apiDeleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchUpdateContact = createAsyncThunk(
  'contacts/update',
  async (id, { rejectWithValue }) => {
    try {
      const data = await apiUpdateContact(id);
      return data;
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);
