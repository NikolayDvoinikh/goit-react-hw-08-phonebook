import useForm from 'components/shared/hooks/useForm';
import initialState from './initialState';
import fields from './fieldsType';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';

import css from './auth-form.module.css';

const AuthForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  const id = () => nanoid();

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.auth_form}>
        <label htmlFor={id}>
          <input
            {...fields.name}
            id={id}
            onChange={handleChange}
            value={name}
          />
        </label>
        <label htmlFor={id}>
          <input
            {...fields.email}
            id={id}
            onChange={handleChange}
            value={email}
          />
        </label>
        <label htmlFor={id}>
          <input
            {...fields.password}
            id={id}
            onChange={handleChange}
            value={password}
          />
        </label>
      </form>{' '}
    </div>
  );
};

export default AuthForm;
