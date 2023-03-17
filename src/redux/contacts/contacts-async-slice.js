import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchUpdateContact,
} from './contacts-operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.contacts = payload;
        store.isLoading = false;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      })
      .addCase(fetchAddContact.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.contacts = [...store.contacts, payload];
        store.isLoading = false;
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        const index = store.contacts.findIndex(({ id }) => id === payload);
        store.contacts.splice(index, 1);
        store.isLoading = false;
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      })
      .addCase(fetchUpdateContact.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchUpdateContact.fulfilled, (store, { payload }) => {
        const index = store.contacts.findIndex(({ id }) => id === payload.id);
        store.contacts.splice(index, 1, payload);
        store.isLoading = false;
      })
      .addCase(fetchUpdateContact.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      });
  },
});
