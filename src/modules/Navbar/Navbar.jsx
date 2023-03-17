import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './NavbarUser/UserMenu';

import { useSelector } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/auth-selectors';

import { AppBar } from '@mui/material';

const Navbar = () => {
  const isUserLogin = useSelector(selectIsUserLogin);

  return (
    <AppBar
      sx={{
        position: 'fixed',
      }}
    >
      {isUserLogin ? <UserMenu /> : <NavbarAuth />}
    </AppBar>
  );
};

export default Navbar;
