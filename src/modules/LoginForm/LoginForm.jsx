import useForm from 'shared/hooks/useForm';
import InputField from 'shared/components/InputField/InputField';
import initialState from './initialState';
import fields from './fieldsType';
import { useState, useEffect } from 'react';

import { Box } from '@mui/material';
import { isAuthLoading, resetMessage } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import Message from 'shared/components/Message';
import { useDispatch } from 'react-redux';
import { resetError } from 'redux/auth/auth-operations';

const LoginForm = ({ onSubmit }) => {
  const { handleChange, state, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;
  const loading = useSelector(isAuthLoading);

  const [message, setMessage] = useState({
    open: false,
    text: '',
  });
  const error = useSelector(resetMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setMessage({ open: true, text: 'Login or Password is incorrect' });
      dispatch(resetError());
      return;
    }
  }, [error, dispatch]);

  return (
    <Box
      component="form"
      maxWidth="300px"
      margin="0 auto"
      onSubmit={handleSubmit}
      padding={3}
    >
      <InputField onChange={handleChange} {...fields.email} value={email} />
      <InputField
        onChange={handleChange}
        {...fields.password}
        value={password}
      />
      <LoadingButton
        sx={{ margin: '30px auto 0', display: 'flex' }}
        type="submit"
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        <span>LogIn</span>
      </LoadingButton>
      <Message
        isOpen={message.open}
        handleClose={() => setMessage({ open: false, text: '' })}
      >
        {message.text}
      </Message>
    </Box>
  );
};

export default LoginForm;
