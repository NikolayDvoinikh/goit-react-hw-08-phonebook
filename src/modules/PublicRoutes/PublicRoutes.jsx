import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuth } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(selectAuth);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
