import { Box, Container, IconButton, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { axiosInstance } from '../../utils/axiosInstance';
import SolrufTextField from '../../components/TextField/TextField';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../redux/slices/userSlice';
import {
   Circle,
   RoleBox,
   Text,
   UserBox,
   UserTypeBox,
   VendorBox,
} from '../../components/AuthGuard/authGuard.style';
import LoadingButtonPrimary from '../../components/LoadingButtonPrimary/LoadingButtonPrimary';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router';

const StyledSolrufTextField = styled(SolrufTextField)(({ theme }) => ({
   '& label.Mui-focused': {
      color: theme.palette.primary.dark,
      fontWeight: 'bold',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: theme.palette.primary.main,
         borderWidth: '2px',
         borderRadius: '10px',
      },
      '&:hover fieldset': {
         borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
         borderColor: theme.palette.primary.main,
      },
   },
}));

const RegisterBackDoor = () => {
   const dispatch = useDispatch();

   const [role, setRole] = useState('Vendor');

   const handleUserClick = (event) => {
      setRole('User');
   };
   const handleVendorClick = (event) => {
      setRole('Vendor');
   };

   const [page, setPage] = useState('login');

   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { isSubmitting, errors: formErrors },
   } = useForm();

   const submitHandler = async (formData) => {
      if (!role) return;

      console.log({ formData });
      if (page === 'login') {
         // check if user exists

         try {
            const { status } = await axiosInstance.post('/api/check-mobile', {
               mobile: formData.mobile,
            });
            if (status === 200) {
               setPage('verifyOtp');
            }
         } catch (error) {
            toast.warning('User does not exist!');
            setPage('register');
         }

         return;
      }

      if (page === 'verifyOtp') {
         // verify otp
         try {
            const { status, data } = await axiosInstance.post(
               'api/verify-otp',
               {
                  mobile: formData.mobile,
                  otp: formData.otp,
               }
            );
            if (status === 200) {
               toast.success('OTP Verified');
               dispatch(saveUser(data));
               navigate('/');
            }
         } catch (error) {
            toast.error('OTP Verification Failed');
            console.log(error.name, error.message);
         }
      }

      if (page === 'register') {
         const registerData = {
            mobile: formData.mobile,
            first_name: formData.first_name,
            last_name: formData.last_name,
            role,
         };

         if (formData?.email) {
            registerData.email = formData.email;
         }

         try {
            const { data, status } = await axiosInstance.post(
               'api/register-ghost',
               registerData
            );
            if (status === 200) {
               console.log({ data });
               toast.success('User created successfully');
               dispatch(saveUser(data));
               reset();
               navigate('/');
            }
         } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
         }
      }
   };

   return (
      <Box
         sx={{
            minHeight: 'calc(100vh - 530px)',
         }}
      >
         <Container maxWidth='xl'>
            <Box
               sx={{
                  width: '100%',
                  maxWidth: '500px',
                  margin: '0 auto',
                  pb: '2rem',
               }}
            >
               <Typography variant='h4' sx={{ my: 5, textAlign: 'center' }}>
                  {page === 'login'
                     ? 'Login'
                     : page === 'register'
                     ? 'Register'
                     : 'Verify OTP'}
               </Typography>

               <Box component='form' onSubmit={handleSubmit(submitHandler)}>
                  {page === 'register' && (
                     <>
                        <IconButton onClick={() => setPage('login')}>
                           <KeyboardBackspaceIcon
                              sx={{
                                 color: '#4D4D4D',
                              }}
                           />
                        </IconButton>

                        <StyledSolrufTextField
                           size='small'
                           sx={{ mr: 2, mb: 2 }}
                           type='text'
                           label='First Name'
                           {...register('first_name', {
                              required: {
                                 value: true,
                                 message: 'First name is required',
                              },
                           })}
                           error={formErrors.first_name}
                           helperText={
                              formErrors.first_name &&
                              formErrors.first_name.message
                           }
                        />
                        <StyledSolrufTextField
                           size='small'
                           type='text'
                           label='Last Name'
                           {...register('last_name', {
                              required: {
                                 value: true,
                                 message: 'Last name is required',
                              },
                           })}
                           error={formErrors.last_name}
                           helperText={
                              formErrors.last_name &&
                              formErrors.last_name.message
                           }
                        />

                        <StyledSolrufTextField
                           label='Phone number'
                           size='small'
                           sx={{ my: 2 }}
                           type='number'
                           value={watch('mobile')}
                           disabled
                        />
                     </>
                  )}

                  {page === 'login' && (
                     <StyledSolrufTextField
                        label='Phone number'
                        size='small'
                        sx={{ my: 2 }}
                        type='number'
                        {...register('mobile', {
                           required: {
                              value: true,
                              message: 'Please input a number to continue',
                           },
                           minLength: {
                              value: 10,
                              message:
                                 'Number must be at least 10 characters long',
                           },
                           maxLength: {
                              value: 10,
                              message:
                                 'Number must be at most 10 characters long',
                           },
                        })}
                        error={formErrors.phone}
                        helperText={
                           formErrors.phone && formErrors.phone.message
                        }
                     />
                  )}

                  {page === 'verifyOtp' && (
                     <>
                        <IconButton onClick={() => setPage('login')}>
                           <KeyboardBackspaceIcon
                              sx={{
                                 color: '#4D4D4D',
                              }}
                           />
                        </IconButton>
                        <SolrufTextField
                           label='OTP'
                           size='small'
                           type='number'
                           sx={{ mt: 1, mb: 3 }}
                           {...register('otp', {
                              required: {
                                 value: true,
                                 message: 'Please input OTP to continue',
                              },
                              minLength: {
                                 value: 4,
                                 message:
                                    'OTP must be at least 4 characters long',
                              },
                              maxLength: {
                                 value: 4,
                                 message:
                                    'OTP must be at most 4 characters long',
                              },
                           })}
                           error={formErrors.otp}
                           helperText={
                              formErrors.otp ? formErrors.otp.message : ''
                           }
                        />
                     </>
                  )}

                  {page === 'register' && (
                     <>
                        <StyledSolrufTextField
                           size='small'
                           sx={{ mb: 2 }}
                           type='email'
                           label='Email (Optional)'
                           {...register('email', {
                              pattern: {
                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                 message: 'Invalid email address',
                              },
                           })}
                           error={formErrors.email}
                           helperText={
                              formErrors.email && formErrors.email.message
                           }
                        />

                        <RoleBox>
                           <Typography variant='h5' fontWeight={600}>
                              Register as{' '}
                           </Typography>

                           <UserTypeBox>
                              <VendorBox
                                 sx={{
                                    background:
                                       role === 'Vendor'
                                          ? '#ffd05b'
                                          : '#D0D7D9',
                                    borderRadius: '20px',
                                 }}
                                 onClick={handleVendorClick}
                              >
                                 <Circle
                                    sx={{
                                       background:
                                          role === 'Vendor'
                                             ? '#000000'
                                             : '#D0D7D9',
                                    }}
                                 ></Circle>
                                 <Text>
                                    <Typography variant='h6' fontWeight={600}>
                                       {' '}
                                       Solar Installer / Vendor
                                    </Typography>
                                    <Typography variant='body2'>
                                       You have a solar product/service company
                                       and woulkd like to promote yout business
                                       along with procurement.
                                    </Typography>
                                 </Text>
                              </VendorBox>
                              <UserBox
                                 sx={{
                                    background:
                                       role === 'User' ? '#ffd05b' : '#D0D7D9',
                                    borderRadius: '20px',
                                 }}
                                 onClick={handleUserClick}
                              >
                                 <Circle
                                    sx={{
                                       background:
                                          role === 'User'
                                             ? '#000000'
                                             : '#D0D7D9',
                                    }}
                                 ></Circle>
                                 <Text>
                                    <Typography variant='h6' fontWeight={600}>
                                       {' '}
                                       Purchase consumer
                                    </Typography>
                                    <Typography variant='body2'>
                                       You are here to purchase solar products.
                                    </Typography>
                                 </Text>
                              </UserBox>
                           </UserTypeBox>
                        </RoleBox>
                     </>
                  )}

                  <LoadingButtonPrimary
                     fullWidth
                     type='submit'
                     loading={isSubmitting}
                  >
                     {page === 'login'
                        ? 'Sent Otp'
                        : page === 'verifyOtp'
                        ? 'Verify Otp'
                        : 'Register'}
                  </LoadingButtonPrimary>
               </Box>
            </Box>
         </Container>
      </Box>
   );
};

export default RegisterBackDoor;
