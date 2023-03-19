import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';
import { Container } from '@mui/material';

import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: '70px' }}>
        <UserRoutes />
      </Container>
    </div>
  );
};
