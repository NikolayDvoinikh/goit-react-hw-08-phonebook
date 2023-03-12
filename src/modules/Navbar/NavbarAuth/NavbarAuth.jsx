import { NavLink } from 'react-router-dom';

import css from './navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
