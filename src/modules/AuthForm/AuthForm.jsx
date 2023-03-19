import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fieldsType';
import InputField from 'shared/components/InputField/InputField';
import { Box } from '@mui/material';
import { isAuthLoading, resetMessage } from 'redux/auth/auth-selectors';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/auth/auth-operations';
import { useState, useEffect } from 'react';
import Message from 'shared/components/Message';

const AuthForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const [message, setMessage] = useState({
    open: false,
    text: '',
  });
  const error = useSelector(resetMessage);

  const dispatch = useDispatch();

  const loading = useSelector(isAuthLoading);

  const { name, email, password } = state;

  useEffect(() => {
    if (error) {
      setMessage({
        open: true,
        text: `User with Email ${email} exist`,
      });
      dispatch(resetError());
      return;
    }
  }, [error, dispatch, email]);

  return (
    <Box
      component="form"
      maxWidth="300px"
      margin="0 auto"
      onSubmit={handleSubmit}
      padding={3}
    >
      <InputField {...fields.name} onChange={handleChange} value={name} />
      <InputField {...fields.email} onChange={handleChange} value={email} />
      <InputField
        {...fields.password}
        onChange={handleChange}
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
        <span>Register</span>
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

export default AuthForm;
