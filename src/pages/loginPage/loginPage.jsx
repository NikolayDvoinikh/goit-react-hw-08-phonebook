import LoginForm from 'Modules/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'Redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
export default LoginPage;
