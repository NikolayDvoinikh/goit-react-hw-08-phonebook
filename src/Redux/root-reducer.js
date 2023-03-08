import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contacts-async-slice';
import { filterSlice } from './filter/filter-slice';
import { authSlice } from './auth/auth-slice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  auth: authSlice.reducer,
});

export default rootReducer;
