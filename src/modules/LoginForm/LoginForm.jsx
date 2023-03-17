import useForm from 'shared/hooks/useForm';

import InputField from 'shared/components/InputField/InputField';

import css from './login-form.module.css';
import initialState from './initialState';
import fields from './fieldsType';

const LoginForm = ({ onSubmit }) => {
  const { handleChange, state, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={css.login_form}>
      <InputField onChange={handleChange} {...fields.email} value={email} />
      <InputField
        onChange={handleChange}
        {...fields.password}
        value={password}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
