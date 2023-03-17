import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'shared/components/Modal/Modal';

import fields from './fieldsType';

import {
  fetchAllContacts,
  fetchDeleteContact,
  fetchUpdateContact,
} from 'redux/contacts/contacts-operations';
import { useEffect, useState, useCallback } from 'react';
import { filterByName, selectLoader } from 'redux/contacts/contacts-selectors';
import InputField from 'shared/components/InputField/InputField';
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { PersonRemove } from '@mui/icons-material';

const ContactList = () => {
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [contactId, setContactId] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onModalDelete = id => {
    setContactId(id);
    toggleModalDelete();
  };

  const handleDelete = () => {
    dispatch(fetchDeleteContact(contactId));
    toggleModalDelete();
    setContactId('');
  };

  const onModalEdit = id => {
    setContactId(id);
    toggleModal();
  };

  const userList = useSelector(filterByName);

  const [state, setState] = useState({ name: '', number: '' });

  const handleUpdate = e => {
    e.preventDefault();
    const currentContact = userList.find(({ id }) => id === contactId);
    const data = {
      name: currentContact.name,
      number: currentContact.number,
    };
    dispatch(fetchUpdateContact({ id: currentContact.id, data }));
    toggleModal();
    setContactId('');
  };

  const toggleModal = () => {
    setModal(prevState => !prevState);
  };

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const toggleModalDelete = () => setModalDelete(prevState => !prevState);

  const changeColor = (onLoading, active) => (loading ? onLoading : active);

  const elements = userList.map(({ id, name, number }) => (
    <ListItem
      sx={{ margin: '0', padding: '0', borderBottom: '1px solid' }}
      key={id}
    >
      <ListItemButton sx={{ margin: '0', cursor: 'default' }}>
        <ListItemText>
          {name}: {number}
        </ListItemText>
        <div>
          <IconButton
            sx={{ marginRight: '5px' }}
            id={id}
            disabled={loading}
            type="button"
            onClick={() => onModalDelete(id)}
          >
            <PersonRemove color={changeColor('inherit', 'secondary')} />
          </IconButton>
          <Button
            variant="outlined"
            id={id}
            disabled={loading}
            className={css.btn}
            type="button"
            onClick={() => onModalEdit(id)}
          >
            Edit
          </Button>
        </div>
      </ListItemButton>
    </ListItem>
  ));
  return (
    <>
      {
        <List sx={{ width: '100%', maxWidth: 360, margin: '0 auto' }}>
          {elements}
          {modalDelete && (
            <Modal close={toggleModalDelete}>
              <Button type="button" onClick={handleDelete}>
                DELETE
              </Button>
            </Modal>
          )}
          {modal && (
            <Modal close={toggleModal}>
              <form onSubmit={handleUpdate}>
                <InputField
                  {...fields.name}
                  onChange={handleChange}
                  value={state.name}
                />
                <InputField
                  {...fields.number}
                  onChange={handleChange}
                  value={state.number}
                />
                <button type="submit">Update</button>
              </form>
            </Modal>
          )}
        </List>
      }
    </>
  );
};

export default ContactList;

ContactList.defaultProps = {
  filteredList: [],
};

ContactList.propTypes = {
  filteredList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
