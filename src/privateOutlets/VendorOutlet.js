import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const VendorOutlet = () => {
   const { user, role } = useAuth();
   const location = useLocation();
   
   if (user && role === 'Vendor') return <Outlet />;
   return (
      <Navigate
         to='/login-register'
         state={{
            from: location.pathname,
         }}
      />
   );
};

export default VendorOutlet;
