import instancePhoneBook from './apiAuth';

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

export const apiUpdateContact = async ({ id, data }) => {
  const { data: result } = await instancePhoneBook.patch(
    `/contacts/${id}`,
    data
  );
  return result;
};
