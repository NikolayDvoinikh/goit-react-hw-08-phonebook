import Navbar from './Navbar/Navbar';
import UserRoutes from './UserRoutes';
import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Navbar />
      <UserRoutes />
    </div>
  );
};
