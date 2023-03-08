import axios from 'axios';

const instancePhoneBook = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  // baseURL: 'https://63fbaaf31ff79e133292e0ae.mockapi.io/contacts',
});

/*https://connections-api.herokuapp.com             /users/signup*/

export const apiGetAllContacts = async () => {
  const { data } = await instancePhoneBook.get('/contacts');
  return data;
};

export const apiAddContact = async contact => {
  const result = await instancePhoneBook.post('/contacts', contact);
  return result;
};

export const apiDeleteContact = async id => {
  const { data } = await instancePhoneBook.delete(`/contacts/${id}`);
  return data;
};

export const apiUpdateContact = async contact => {
  const result = await instancePhoneBook.patch(
    `/contacts/${contact.id}`,
    contact
  );
  return result;
};

export const apiUserSignup = async data => {
  return await instancePhoneBook.post('/users/signup', data);
};

export const apiUserLogin = async data => {
  return await instancePhoneBook.post('/users/login', data);
};

// https://63fbaaf31ff79e133292e0ae.mockapi.io/contacts

// export const apiGetAllContacts = async () => {
//   const { data } = await instancePhoneBook.get('/');
//   return data;
// };

// export const apiAddContact = async contact => {
//   const result = await instancePhoneBook.post('/', contact);
//   return result;
// };

// export const apiDeleteContact = async id => {
//   const { data } = await instancePhoneBook.delete(`/${id}`);
//   return data;
// };
