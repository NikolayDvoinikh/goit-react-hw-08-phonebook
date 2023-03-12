import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

import css from './user-menu.module.css';

const UserMenu = () => {
  const { email } = useSelector(selectUser);

  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  return (
    <div>
      <p className={css.user_email}>{email}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
