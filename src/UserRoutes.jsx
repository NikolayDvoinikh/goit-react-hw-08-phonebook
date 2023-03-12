import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicRoute from 'modules/PublicRoutes/PublicRoutes';
import PrivateRoute from 'modules/PrivateRoutes/PrivateRoutes';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const AuthPage = lazy(() => import('./pages/authPage/AuthPage'));
const LoginPage = lazy(() => import('./pages/loginPage/loginPage'));
const UserTablePage = lazy(() => import('./pages/userTablePage/UserTablePage'));

const UserRoutes = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<AuthPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/my-contacts" element={<UserTablePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default UserRoutes;
