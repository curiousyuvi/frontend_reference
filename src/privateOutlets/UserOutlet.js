import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const UserOutlet = () => {
   const { user } = useAuth();
   const location = useLocation();

   if (user) return <Outlet />;
   return (
      <Navigate
         to='/login-register'
         state={{
            from: location.pathname,
         }}
      />
   );
};

export default UserOutlet;
