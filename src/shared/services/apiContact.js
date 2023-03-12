import instancePhoneBook from './apiAuth';

export const apiGetAllContacts = async () => {
  const { data } = await instancePhoneBook.get('/contacts');
  return data;
};

export const apiAddContact = async contact => {
  const result = await instancePhoneBook.post('/contacts', contact);
  console.log(result);
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
