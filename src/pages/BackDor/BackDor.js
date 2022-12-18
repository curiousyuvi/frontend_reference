



import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { axiosInstance } from '../../utils/axiosInstance';
import SolrufTextField from '../../components/TextField/TextField';
import PrimaryButton from '../../components/Custom/PrimaryButton/PrimaryButton';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router';

const Form = () => {
   const [verifying, setVerifying] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { isSubmitting, errors: formErrors },
   } = useForm();

   const navigate = useNavigate();

   const dispatch = useDispatch();

   const submitHandler = async (formData) => {
      try {
         setVerifying(true);
         const { status, data } = await axiosInstance.post(
            'api/verify-otp',
            formData
         );
         if (status === 200) {
            setVerifying(false);
            toast.success('OTP Verified');
            dispatch(saveUser(data));
            navigate('/');

         }
      } catch (error) {
         setVerifying(false);
         toast.error('OTP Verification Failed');
         console.log(error.name, error.message);
      }
   };

   return (
      <Box sx={{
         minHeight: 'calc(100vh - 530px)',
      }}>
         <Container maxWidth='xl'>
            <Box
               sx={{
                  width: '100%',
                  maxWidth: '500px',
                  margin: '0 auto',
               }}
            >
               <Typography variant='h4' sx={{ my: 5, textAlign: 'center' }}>
                  Update Portfolio
               </Typography>

               <Box component='form' onSubmit={handleSubmit(submitHandler)}>
                  <>
                     <SolrufTextField
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
                              message: 'OTP must be at least 4 characters long',
                           },
                           maxLength: {
                              value: 4,
                              message: 'OTP must be at most 4 characters long',
                           },
                        })}
                        error={formErrors.otp}
                        helperText={
                           formErrors.otp ? formErrors.otp.message : ''
                        }
                     />
                  </>

                  <PrimaryButton
                     fullWidth
                     type='submit'
                     disabled={verifying || isSubmitting}
                  >
                     Enter
                  </PrimaryButton>
               </Box>
            </Box>
         </Container>
      </Box>
   );
};

export default Form;

