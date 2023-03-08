import UserTable from './UserTable/UserTable';
import Navbar from './Navbar/Navbar';
import UserRoutes from './UserRoutes';

export const App = () => {
  return (
    <div>
      <Navbar />
      <UserRoutes />
      <UserTable />
    </div>
  );
};
