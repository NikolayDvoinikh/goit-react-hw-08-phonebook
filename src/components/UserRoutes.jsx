import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const AuthPage = lazy(() => import('../pages/authPage/AuthPage'));
const LoginPage = lazy(() => import('../pages/loginPage/loginPage'));

const UserRoutes = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default UserRoutes;
