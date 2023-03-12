import axios from 'axios';

const instancePhoneBook = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instancePhoneBook.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  instancePhoneBook.defaults.headers.common.Authorization = '';
};

export const apiUserSignup = async data => {
  const { data: result } = await instancePhoneBook.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const apiUserLogin = async data => {
  const { data: result } = await instancePhoneBook.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const apiUserCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instancePhoneBook.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const apiUserLogout = async () => {
  const { data } = await instancePhoneBook.post('/users/logout');
  setToken();
  return data;
};

export default instancePhoneBook;
