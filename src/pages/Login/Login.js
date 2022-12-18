import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import AuthGuard2 from '../../components/AuthGuard/AuthGuard2';

const Login = () => {
   return (
      <Box>
         <Container>
            <Box
               sx={{
                  width: '100%',
                  maxWidth: 500,
                  mx: 'auto',
                  height: 'calc(100vh - 400px)',
                  mt: 5,
                  borderRadius: 1,
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     backgroundColor: 'white',
                     borderRadius: 1,
                     boxShadow: 25,
                     p: 5,
                  }}
               >
                  <AuthGuard2 />
               </Box>
            </Box>
         </Container>
      </Box>
   );
};

export default Login;
