import ContactForm from 'modules/UserTable/ContactForm/ContactForm';
import ContactList from 'modules/UserTable/ContactList/ContactList';
import Filter from 'modules/Filter/Filter';

import css from './user-table.module.css';

const UserTablePage = () => {
  return (
    <div className={css.table_container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default UserTablePage;
