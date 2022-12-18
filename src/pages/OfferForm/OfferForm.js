import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SolrufTextField from '../../components/TextField/TextField';
import LoadingButtonPrimary from '../../components/LoadingButtonPrimary/LoadingButtonPrimary';
import SendIcon from '@mui/icons-material/Send';
import {
   ColHeadingWrapper,
   DetailsFieldBox,
   FieldsWrapper,
   IntroWrapper,
   Wrapper,
} from './offerForm.style';
import { axiAuth, axiosInstance } from '../../utils/axiosInstance';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../redux/slices/userSlice';
import { product } from './defaultProduct';
import useSolrufPinCode from '../../hooks/useSolrufPinCode';
import { useDebounce } from 'use-debounce/lib';
import BackToButton from '../../components/BackToButton/BackToButton';
import otpAnimation from '../../assets/otp.gif';
import Lottie from 'lottie-react';
import solarHouse from '../../assets/lottie/solar-house.json';
import solarWindMill from '../../assets/lottie/solar-windmill.json';
import PrimaryButton from '../../components/Custom/PrimaryButton/PrimaryButton';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// import { saveUser } from '../../redux/slices/userSlice';

const StyledSolrufTextField = styled(SolrufTextField)(({ theme }) => ({
   '& label.Mui-focused': {
      color: theme.palette.primary.dark,
      fontWeight: 'bold',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: theme.palette.primary.main,
         borderWidth: '2px',
         borderRadius: '20px',
      },
      '&:hover fieldset': {
         borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
         borderColor: theme.palette.primary.main,
      },
   },
}));

const OfferForm = () => {
   const [sendingOtp, setSendingOtp] = useState(false);
   const [verifying, setVerifying] = useState(false);
   const [page, setPage] = useState('intro');

   const dispatch = useDispatch();

   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { isSubmitting, errors: formErrors },
   } = useForm();

   const [watchPinCode] = watch(['pincode']);
   const [debouncedPinCode] = useDebounce(watchPinCode, 500);

   const { indiaState, district } = useSolrufPinCode(debouncedPinCode);

   const submitHandler = async (formData) => {
      const { mobile } = formData;

      if (page === 'intro') {
         setPage('sendOtp');
      }

      if (page === 'sendOtp') {
         try {
            setSendingOtp(true);
            axios.post(
               'https://sheet.best/api/sheets/b0c3e070-a8e0-443e-868e-932170e60367/tabs/Solruf%20site%20visit%20Forms%20homepage',
               {
                  ...formData,
               }
            );
            const { status } = await axiosInstance.post('api/login', {
               mobile,
            });

            if (status === 200) {
               console.log('OTP Sent');
               setSendingOtp(false);
               toast.success('OTP Sent');
               setPage('verifyOtp');
            }
         } catch (error) {
            try {
               const registerData = {
                  first_name: formData.name,
                  last_name: 'n/a',
                  mobile: formData.mobile,
                  role: 'User',
                  // email: formData.email,
               };
               const { status } = await axiosInstance.post(
                  // register  user
                  'api/register',
                  registerData
               );

               if (status === 200 || status === 201) {
                  console.log('User Registered');
                  toast.success('Otp Sent');
                  setSendingOtp(false);
                  setPage('verifyOtp');
                  reset();
               }
            } catch (error) {
               setSendingOtp(false);
               toast.error(error.response.data.message);
            }
         }
      }

      if (page === 'verifyOtp') {
         try {
            setVerifying(true);
            const { status, data } = await axiosInstance.post(
               'api/verify-otp',
               {
                  mobile,
                  otp: formData.otp,
               }
            );
            if (status === 200) {
               reset();
               setPage('outro');
               setTimeout(() => {
                  setPage('intro');
               }, 300000);
               toast.success(`Welcome back ${data.user.first_name}!`);
               dispatch(saveUser(data));
               await createAnEnquiry(formData);
               setVerifying(false);
            }
         } catch (error) {
            setVerifying(false);
            toast.error(error.response.data.message);
            console.log(error.name, error.message);
         }
      }
   };

   const createAnEnquiry = async (formData) => {
      const d = new Date();
      const mySqlFormatDate = d.toISOString().split('T')[0];
      const enquiryData = {
         product_id: product?.product_id,
         quantity: 1,

         delivery_date: mySqlFormatDate,
         accept_other_brands: true,
         share_company_information: false,
         user_address: {
            pin_code: debouncedPinCode,
            state: indiaState,
            city: district,
            address: formData?.address,
         },
         product: {
            // name: productDetails?.product_name,
            other: {
               attributes: product?.attributes?.filter(
                  (attribute) =>
                     attribute?.attribute_values[
                        attribute?.attribute_values?.length - 1
                     ]?.views?.procurement_card?.visibility
               ),
               defaultImage: product?.default_image,
               productSlug: product?.product_slug,
               productId: product?.product_id,
               productName: product?.product_name,
               hsn_sac_code: product?.hsn_sac_code,
               tax_igst: product?.tax_igst,
               tax_cgst: product?.tax_cgst,
               tax_sgst: product?.tax_sgst,
            },
         },
      };

      try {
         const { status, data } = await axiAuth.post(
            'api/enquiries',
            enquiryData
         );
         if (status === 200) {
            toast.success('Enquiry Created');
            console.log(data);
         }
      } catch (error) {
         toast.error('Enquiry Failed');
         console.log(error.name, error.message);
      }
   };

   return (
      <>
         <Box
            sx={{
               top: '0',
               transform: 'translateY(-30rem)',
               '@media (max-width: 600px)': {
                  transform: 'translateY(-10rem)',
               },
            }}
            id='offer-form'
         />
         <Wrapper
            component='form'
            onSubmit={handleSubmit(submitHandler)}
            sx={{
               px: 6,
               '@media (max-width: 600px)': {
                  px: 2,
               },
            }}
         >
            <Box sx={{ width: '100%' }}>
               {page === 'verifyOtp' && (
                  <BackToButton
                     onClick={() => setPage('sendOtp')}
                  ></BackToButton>
               )}
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
               {page === 'outro' && (
                  <CloseIcon
                     sx={{
                        cursor: 'pointer',
                        fontSize: '2rem',
                        color: 'primary.dark',
                        opacity: '0.5',
                     }}
                     onClick={() => setPage('intro')}
                  />
               )}
            </Box>

            {page === 'intro' && (
               <>
                  <Box />
                  <IntroWrapper>
                     <Lottie
                        animationData={solarWindMill}
                        loop={true}
                        style={{ height: '22rem' }}
                     />
                     <Typography
                        variant='h3'
                        sx={{
                           fontWeight: 600,
                           '@media (max-width: 1200px)': {
                              fontSize: '1.8rem',
                           },
                           '@media (max-width: 600px)': {
                              fontSize: '1.6rem',
                           },
                        }}
                     >
                        Book a Free Solar site visit
                     </Typography>

                     <Typography
                        variant='h5'
                        fontWeight={500}
                        sx={{
                           '@media (max-width: 1200px)': {
                              fontSize: '1rem',
                           },
                           '@media (max-width: 600px)': {
                              fontSize: '0.9rem',
                           },
                        }}
                     >
                        Get top 10 solar quotation in just 60 mins.
                     </Typography>
                  </IntroWrapper>
               </>
            )}

            {page === 'outro' && (
               <>
                  <Box />
                  <IntroWrapper>
                     <Lottie
                        animationData={solarHouse}
                        loop={true}
                        style={{ height: '14rem', transform: 'scale(2.2)' }}
                     />
                     <Typography
                        component='h2'
                        variant='h4'
                        sx={{ fontWeight: 600 }}
                     >
                        Thank you for your Booking! 🎉
                     </Typography>

                     <Typography
                        variant='p'
                        fontWeight={500}
                        textAlign='center'
                     >
                        We wil get back to you shortly.
                     </Typography>
                     <Typography
                        variant='p'
                        fontWeight={500}
                        textAlign='center'
                     >
                        You can check your solar installation enquiry status in
                        your dashboard or by the link below. 👇 Get top 10 solar
                        installer quotation in just 60 mins.
                     </Typography>
                     <PrimaryButton>Go to Dashboard</PrimaryButton>
                  </IntroWrapper>
               </>
            )}

            {page === 'sendOtp' && (
               <ColHeadingWrapper>
                  <Typography
                     component='h2'
                     variant='h4'
                     sx={{ fontWeight: 600 }}
                  >
                     Book a Free Solar site visit
                  </Typography>

                  <Typography
                     variant='p'
                     fontWeight={500}
                     sx={{ fontSize: '1.5rem' }}
                  >
                     Get top 10 solar quotation in just 60 mins.
                  </Typography>
               </ColHeadingWrapper>
            )}

            <DetailsFieldBox>
               {page === 'sendOtp' && (
                  <>
                     <FieldsWrapper>
                        <StyledSolrufTextField
                           label='Name'
                           type='text'
                           {...register('name', {
                              required: {
                                 value: true,
                                 message: 'Name is required',
                              },
                           })}
                           error={formErrors.name}
                           helperText={
                              formErrors.name && formErrors.name.message
                           }
                        />

                        <StyledSolrufTextField
                           label='Email'
                           type='email'
                           {...register('email', {
                              pattern: {
                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                 message: 'Invalid email address',
                              },
                           })}
                           error={formErrors.email}
                           helperText={
                              formErrors.email ? formErrors.email.message : ''
                           }
                        />
                     </FieldsWrapper>

                     <FieldsWrapper>
                        <StyledSolrufTextField
                           label='Mobile'
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
                           error={formErrors.mobile}
                           helperText={
                              formErrors.mobile && formErrors.mobile.message
                           }
                        />

                        <StyledSolrufTextField
                           label='Address'
                           type='text'
                           {...register('address', {
                              required: {
                                 value: true,
                                 message: 'Address is Required',
                              },
                           })}
                           error={formErrors.address}
                           helperText={
                              formErrors.address
                                 ? formErrors.address.message
                                 : ''
                           }
                        />
                     </FieldsWrapper>

                     <StyledSolrufTextField
                        label='Pin code'
                        {...register('pincode', {
                           required: {
                              value: true,
                              message: 'Pin Code is required',
                           },
                        })}
                        error={formErrors.pincode ? true : false}
                        helperText={
                           formErrors.pincode && formErrors.pincode.message
                        }
                     />
                  </>
               )}

               {page === 'verifyOtp' && (
                  <Box
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                     }}
                  >
                     <img src={otpAnimation} alt='' style={{ width: '50%' }} />
                     <Typography sx={{ mb: 1, textAlign: 'center' }}>
                        We have send a code verification to your mobile number
                     </Typography>
                     <Typography sx={{ mb: 1, fontSize: '1.5rem' }}>
                        {watch('mobile')}
                     </Typography>
                     <StyledSolrufTextField
                        label='OTP'
                        type='number'
                        sx={{ mt: 1, mb: 3, maxWidth: '20rem' }}
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
                  </Box>
               )}
            </DetailsFieldBox>

            {page !== 'outro' && (
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: 2,
                     mt: 3,
                     mb: 2,
                  }}
               >
                  <LoadingButtonPrimary
                     onClick={() => console.log('clicked')}
                     endIcon={<SendIcon />}
                     loading={isSubmitting || sendingOtp || verifying}
                     type='submit'
                     fullWidth
                     sx={{
                        py: 1.5,
                        borderRadius: '10px',
                        maxWidth: '20rem',
                        fontSize: '1.2rem',
                        width: '200px',
                        '&:hover': {
                           color: '#000000',
                        },
                     }}
                  >
                     {page === 'intro'
                        ? 'Book Now'
                        : page === 'sendOtp'
                        ? 'Send OTP'
                        : 'Verify OTP'}
                  </LoadingButtonPrimary>
                  <PrimaryButton
                     sx={{
                        py: 1.5,
                        borderRadius: '10px',
                        maxWidth: '20rem',
                        fontSize: '1.2rem',
                        textTransform: 'capitalize',
                        width: '200px',
                        '&:hover': {
                           color: '#000000',
                        },
                     }}
                     IconEnd={WhatsAppIcon}
                     component='a'
                     href='https://api.whatsapp.com/send?phone=+918600694140&text=Hello%20there%21%20I%20would%20like%20to%20know%20more%20about%20SOLRUF%20or%20would%20like%20to%20purchase%20a%20solar%20product.%20Can%20you%20help%20us%20with%20this%3F'
                  >
                     WhatsApp
                  </PrimaryButton>
               </Box>
            )}
         </Wrapper>
      </>
   );
};

export default OfferForm;
