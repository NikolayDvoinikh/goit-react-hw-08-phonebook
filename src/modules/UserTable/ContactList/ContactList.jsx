import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'shared/components/Modal/Modal';
import useForm from 'shared/hooks/useForm';

import fields from './fieldsType';

import {
  fetchAllContacts,
  fetchDeleteContact,
  fetchUpdateContact,
} from 'redux/contacts/contacts-operations';
import { useEffect, useState } from 'react';
import { filterByName, selectLoader } from 'redux/contacts/contacts-selectors';
import InputField from 'shared/components/InputField/InputField';

const ContactList = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(fetchDeleteContact(id));
  };

  const handleUpdate = id => {
    dispatch(fetchUpdateContact(id));
  };

  const userList = useSelector(filterByName);

  const toggleModal = () => {
    setModal(prevState => !prevState);
  };
  const initialState = { name: '', number: '' };
  const { handleChange, state, setState, handleSubmit } = useForm({
    initialState,
  });
  const { name, number } = state;

  const elements = userList.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      <span className={css.text}>
        {name}: {number}
      </span>
      <button
        id={id}
        disabled={loading}
        className={css.btn}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
      <button
        id={id}
        disabled={loading}
        className={css.btn}
        type="button"
        onClick={() => toggleModal()}
      >
        Edit
      </button>
    </li>
  ));
  return (
    <>
      {
        <ul className={css.listContacts}>
          {elements}
          {modal && (
            <Modal close={toggleModal}>
              <form onSubmit={handleUpdate}>
                <InputField
                  {...fields.name}
                  onChange={handleChange}
                  value={name}
                />
                <InputField
                  {...fields.number}
                  onChange={handleChange}
                  value={number}
                />
                <button type="submit">Update</button>
              </form>
            </Modal>
          )}
        </ul>
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
