import ContactForm from 'modules/UserTable/ContactForm/ContactForm';
import ContactList from 'modules/UserTable/ContactList/ContactList';
import Filter from 'modules/Filter/Filter';

import { Container, Typography } from '@mui/material';

const UserTablePage = () => {
  return (
    <Container>
      <Typography
        variant="h1"
        align="center"
        sx={{ fontWeight: 700, padding: 3, fontSize: '32px' }}
      >
        Phonebook
      </Typography>
      <ContactForm />
      <Typography
        variant="h2"
        align="center"
        sx={{ fontWeight: 500, padding: 2, fontSize: '28px' }}
      >
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default UserTablePage;
