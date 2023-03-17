import useForm from 'shared/hooks/useForm';
import InputField from 'shared/components/InputField/InputField';
import initialState from './initialState';
import fields from './fieldsType';

import { Box } from '@mui/material';
import { isAuthLoading } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';

const LoginForm = ({ onSubmit }) => {
  const { handleChange, state, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  const loading = useSelector(isAuthLoading);

  return (
    <Box
      component="form"
      maxWidth="300px"
      margin="0 auto"
      onSubmit={handleSubmit}
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
    </Box>
  );
};

export default LoginForm;
