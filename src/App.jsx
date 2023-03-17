import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectLoader } from 'redux/contacts/contacts-selectors';
import css from './app.module.css';

export const App = () => {
  const loading = useSelector(selectLoader);
  return (
    <div className={css.container}>
      {!loading && <Navbar />}
      <Container maxWidth="lg" sx={{ mt: '70px' }}>
        <UserRoutes />
      </Container>
    </div>
  );
};
