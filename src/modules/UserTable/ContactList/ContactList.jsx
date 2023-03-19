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
import {
  filteredByName,
  selectLoader,
  getContactList,
} from 'redux/contacts/contacts-selectors';
import InputField from 'shared/components/InputField/InputField';
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { PersonRemove } from '@mui/icons-material';
import { Box } from '@mui/system';

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

  const onModalEdit = (id, name, number) => {
    setContactId(id);
    setState({ name, number });
    toggleModal();
  };

  const userList = useSelector(filteredByName);
  const contacts = useSelector(getContactList);

  const [state, setState] = useState({ name: '', number: '' });

  const handleUpdate = e => {
    e.preventDefault();

    const uniqContactName = contacts.every(
      ({ name, id }) =>
        state.name.toLowerCase() !== name.toLowerCase() || contactId === id
    );

    const uniqContactNumber = contacts.every(
      ({ number, id }) => number !== state.number || id === contactId
    );

    if (!uniqContactName) {
      return alert('Name is already exist!!!');
    }
    if (!uniqContactNumber) {
      return alert('Number is already exist!!!');
    }
    const data = {
      name: state.name,
      number: state.number,
    };
    dispatch(fetchUpdateContact({ id: contactId, data }));
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
      disablePadding
      sx={{ margin: '0', borderBottom: '1px solid' }}
      key={id}
    >
      <ListItemButton sx={{ margin: '0', cursor: 'default' }}>
        <ListItemText primary={`${name}: ${number}`} />
        <Box>
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
            type="button"
            onClick={() => onModalEdit(id, name, number)}
          >
            Edit
          </Button>
        </Box>
      </ListItemButton>
    </ListItem>
  ));
  return (
    <>
      {
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            margin: '0 auto',
            maxHeight: '200px',
            overflow: 'auto',
            marginBottom: '60px',
          }}
        >
          {elements}
          {modalDelete && (
            <Modal close={toggleModalDelete}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Typography color="primary">Are you shure?</Typography>
                <Button
                  type="button"
                  onClick={handleDelete}
                  sx={{ color: 'red' }}
                >
                  DELETE
                </Button>
              </Box>
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
                <Button
                  variant="outlined"
                  type="submit"
                  sx={{ margin: '10px auto', display: 'flex' }}
                >
                  Update
                </Button>
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
