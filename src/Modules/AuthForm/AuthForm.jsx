import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fieldsType';
import InputField from 'shared/components/InputField/InputField';

import css from './auth-form.module.css';

const AuthForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.auth_form}>
      <InputField {...fields.name} onChange={handleChange} value={name} />
      <InputField {...fields.email} onChange={handleChange} value={email} />
      <InputField
        {...fields.password}
        onChange={handleChange}
        value={password}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default AuthForm;
