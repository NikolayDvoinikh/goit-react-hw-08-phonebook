import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fieldsType';
import InputField from 'shared/components/InputField/InputField';
import { Box } from '@mui/material';
import { isAuthLoading } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';

const AuthForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const loading = useSelector(isAuthLoading);

  const { name, email, password } = state;

  return (
    <Box
      component="form"
      maxWidth="300px"
      margin="0 auto"
      onSubmit={handleSubmit}
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
    </Box>
  );
};

export default AuthForm;
