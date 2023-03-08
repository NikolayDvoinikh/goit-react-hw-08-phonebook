import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const AuthPage = lazy(() => import('../pages/authPage/AuthPage'));
const LoginPage = lazy(() => import('../pages/loginPage/loginPage'));

const UserRoutes = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/register" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default UserRoutes;
