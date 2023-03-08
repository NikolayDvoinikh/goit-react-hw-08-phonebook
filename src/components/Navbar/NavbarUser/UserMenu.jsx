import { useSelector } from 'react-redux';

import { selectUser } from 'Redux/auth/auth-selectors';

import css from './user-menu.module.css';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  return (
    <div>
      <p className={css.user_email}>{email}</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
