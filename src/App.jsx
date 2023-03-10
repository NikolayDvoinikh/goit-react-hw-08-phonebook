import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AuthLayout from 'modules/AuthLayout/AuthLayout';
import { PersistGate } from 'redux-persist/integration/react';
import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <BrowserRouter basename="/goit-react-hw-08-phonebook">
              <Navbar />
              <UserRoutes />
            </BrowserRouter>
          </AuthLayout>
        </PersistGate>
      </Provider>
    </div>
  );
};
