import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Loader from '../Loader/Loader';

const Redirect = () => {
   const { user, role } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   console.log({ user, role });

   // navigate to the desired page
   useEffect(() => {
      if (role === 'Vendor') {
         navigate('/vendor/dashboard/sale', {
            replace: true,
            state: { from: location.pathname },
         });
      } else if (role === 'User') {
         navigate('/user-dashboard/purchase-enquiries', {
            replace: true,
            state: { from: location.pathname },
         });
      } else {
         window.location.href = '/';
      }
   }, [role, navigate, location.pathname]);

   return (
      <Box
         sx={{
            textAlign: 'center',
            mt: 5,
         }}
      >
         <Loader />
      </Box>
   );
};

export default Redirect;
