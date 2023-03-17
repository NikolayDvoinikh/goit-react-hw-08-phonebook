import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

import { Button, Toolbar, Typography } from '@mui/material';

const UserMenu = () => {
  const { email } = useSelector(selectUser);

  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  return (
    <Toolbar>
      <Typography variant="body1" component="p" sx={{ flexGrow: 1 }}>
        {email}
      </Typography>
      <Button
        color="warning"
        variant="contained"
        type="button"
        onClick={onLogout}
      >
        Logout
      </Button>
    </Toolbar>
  );
};

export default UserMenu;
