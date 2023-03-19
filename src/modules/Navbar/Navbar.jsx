import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './NavbarUser/UserMenu';

import { useSelector } from 'react-redux';
import { selectIsUserLogin, isAuthLoading } from 'redux/auth/auth-selectors';

import { AppBar } from '@mui/material';

const Navbar = () => {
  const isUserLogin = useSelector(selectIsUserLogin);
  const loading = useSelector(isAuthLoading);
  return (
    <AppBar
      sx={{
        position: 'fixed',
      }}
    >
      {isUserLogin && !loading && <UserMenu />}
      {!isUserLogin && !loading && <NavbarAuth />}
    </AppBar>
  );
};

export default Navbar;
