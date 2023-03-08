import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './NavbarUser/UserMenu';

import { useSelector } from 'react-redux';
import { selectIsUserLogin } from 'Redux/auth/auth-selectors';

const Navbar = () => {
  const isUserLogin = useSelector(selectIsUserLogin);
  return <div>{isUserLogin ? <UserMenu /> : <NavbarAuth />}</div>;
};

export default Navbar;
