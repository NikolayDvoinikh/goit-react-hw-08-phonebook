import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contacts-async-slice';
import { filterSlice } from './filter/filter-slice';
import { authSlice } from './auth/auth-slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  auth: persistedReducer,
});

export default rootReducer;
