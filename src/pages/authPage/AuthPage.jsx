import AuthForm from 'Modules/AuthForm/AuthForm';
import { signup } from 'Redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const AuthPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <AuthForm onSubmit={handleSignup} />
    </div>
  );
};
export default AuthPage;
