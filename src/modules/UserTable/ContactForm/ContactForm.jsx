import { useSelector, useDispatch } from 'react-redux';
import { fetchAddContact } from 'redux/contacts/contacts-operations';
import {
  getContactList,
  selectLoader,
  selectError,
} from 'redux/contacts/contacts-selectors';
import { useState, useEffect } from 'react';
import { initState } from './initState';

import css from './ContactForm.module.css';
import { Box, TextField } from '@mui/material';

const ContactForm = () => {
  const [state, setState] = useState({ ...initState });
  const { name, number } = state;

  const contacts = useSelector(getContactList);
  const loading = useSelector(selectLoader);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.filter(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ).length
    ) {
      return alert(`${name} is already in contacts`);
    }

    if (contacts.filter(contact => contact.number === number).length) {
      return alert(`${number} is already in contacts`);
    }

    dispatch(fetchAddContact({ ...state }));
  };

  useEffect(() => {
    !loading && !error && setState({ ...initState });
  }, [loading, error]);

  const isActiveBtn = name && number ? loading : true;

  return (
    <Box
      ml="auto"
      mr="auto"
      sx={{ maxWidth: '300px', border: '2px solid', padding: '40px' }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{ width: '100%', padding: '10px 0' }}
        id="standard-required"
        label="Name"
        variant="standard"
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        sx={{ width: '100%', padding: '10px 0' }}
        id="standard-required"
        label="Number"
        variant="standard"
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className={css.btnSubmit} type="submit" disabled={isActiveBtn}>
        {!loading ? (
          'Add contact '
        ) : (
          <div className={css.loadBtn}>
            <div className={css.loading}></div>Loading...
          </div>
        )}
      </button>
    </Box>
  );
};

export default ContactForm;
