import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { isAuthLoading } from 'redux/auth/auth-selectors';
import css from './app.module.css';

export const App = () => {
  const loadingAuth = useSelector(isAuthLoading);
  return (
    !loadingAuth && (
      <div className={css.container}>
        <Navbar />
        <Container maxWidth="lg" sx={{ mt: '70px' }}>
          <UserRoutes />
        </Container>
      </div>
    )
  );
};
