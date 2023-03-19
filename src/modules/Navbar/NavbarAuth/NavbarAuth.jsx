import { NavLink } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import css from './navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <Toolbar sx={{ justifyContent: 'center' }}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        LogIn
      </NavLink>
    </Toolbar>
  );
};

export default NavbarAuth;
