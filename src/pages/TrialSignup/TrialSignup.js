import {
   Box,
   Checkbox,
   Container,
   Stack,
   Typography,
   useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { FlexBox } from '../../components/styled/styled';
import imageMatrix from './imageMatrix.svg';
import {
   FeatureBox,
   FeatureBoxWrapper,
   TrialFormControlLabel,
   WhiteTextField,
   WhyUsBoxWrapper,
} from './trialSignup.styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LoadingButtonPrimary from '../../components/LoadingButtonPrimary/LoadingButtonPrimary';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../utils/axiosInstance';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import PrimaryButton from '../../components/Custom/PrimaryButton/PrimaryButton';
import { useEffect } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';

const features = [
   {
      title: 'Create solar portfolios',
      image: 'https://i.ibb.co/J7GY1G9/portfolio.png',
   },
   {
      title: 'Automate instant quotation',
      image: 'https://i.ibb.co/5rgNRNW/quotation.png',
   },
   {
      title: 'Boost your Referral business 9X',
      image: 'https://i.ibb.co/VD6DP3j/creditcard.png',
   },
   {
      title: 'Low cost Sales and Procurement',
      image: 'https://i.ibb.co/LNmZpV9/procurement.png',
   },
   {
      title: 'Project financing and EMI Credits',
      image: 'https://i.ibb.co/Mcp8YVT/financing.png',
   },
   {
      title: 'High quality consumer leads',
      image: 'https://i.ibb.co/0CSt5Hg/leads.png',
   },
];

const TrialSignup = () => {
   const [serviceTypes, setServiceTypes] = useState({
      'solar distributor': false,
      'solar installer / epc player': false,
      'solar design': false,
      'solar manufacturer': false,
   });
   const matchSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

   const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] =
      useState(false);

   const handleChange = (event) => {
      const { name, checked } = event.target;
      setServiceTypes((serviceTypes) => ({ ...serviceTypes, [name]: checked }));
   };

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm();

   const handleSignup = async (formData) => {
      const userData = {
         ...formData,
         service_types: Object.keys(serviceTypes).filter(
            (key) => serviceTypes[key] === true
         ),
      };

      try {
         const { status } = await axiosInstance.post(
            'api/company-leads',
            userData
         );
         if (status === 202) {
            toast.success('Signup Successful!');
            setFormSubmittedSuccessfully(true);
         }
      } catch (err) {
         console.log(err.response.data.message);
         toast.success('Please fill all the required field');
      }
   };

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setFormSubmittedSuccessfully(false);
      }, 10000);

      return () => clearTimeout(timeoutId);
   }, [formSubmittedSuccessfully]);

   const scrollToFormHandler = () => {
      window.scrollTo({
         top: matchSm ? 800 : 400,
         behavior: 'smooth',
      });
   };

   return (
      <>
         <Container sx={{ mt: 5 }}>
            <PageTitle title='Signup' />
            <Helmet>
               <meta
                  name='title'
                  content={
                     'India’s first place Solar Marketplace and Installation Platform'
                  }
               />
               <meta
                  property='og:title'
                  content={
                     'India’s first place Solar Marketplace and Installation Platform'
                  }
               />
               <meta
                  name='description'
                  content={
                     'Nationwide solar installations & products from top Installers and Manufacturers.'
                  }
               />
            </Helmet>
            <FlexBox
               justifyContent='center'
               sx={{
                  flexDirection: ['column', 'column-', 'row'],
                  gap: [2, 2, 0],
               }}
            >
               <Stack sx={{ width: ['100%', '100%', '70%'] }} spacing={4}>
                  <Typography variant='h3' component='h1' fontWeight={600}>
                     India’s first place <br /> Solar
                     <span style={{ color: '#ffd05b' }}>
                        {' '}
                        Marketplace and <br /> Installation Platform
                     </span>
                  </Typography>
                  <Typography variant='h6' component='h3'>
                     Nationwide solar installations & products from top
                     Installers and Manufacturers.
                  </Typography>

                  <PrimaryButton
                     sx={{ width: ['100%', '80%', '50%'], display: 'flex' }}
                     onClick={scrollToFormHandler}
                  >
                     Sign up
                  </PrimaryButton>
               </Stack>
               <Box
                  sx={{
                     textAlign: 'center',
                  }}
               >
                  <img
                     style={{
                        width: '350px',
                     }}
                     src={imageMatrix}
                     alt='solar panel scene'
                  />
               </Box>
            </FlexBox>
         </Container>

         <WhyUsBoxWrapper sx={{ my: 5 }}>
            <Container>
               <FlexBox
                  sx={{
                     flexDirection: ['column-reverse', 'column-reverse', 'row'],
                     gap: [2, 2, 1],
                  }}
               >
                  <Box sx={{ flex: 1 }}>
                     <Typography color='#ffffff' variant='h4' fontWeight={600}>
                        Why <span style={{ color: '#ffd05b' }}>us!</span>
                     </Typography>
                     <FeatureBoxWrapper sx={{ py: 2 }}>
                        {features.map((feature) => (
                           <FeatureBox>
                              <img src={feature.image} alt='feature' />
                              <Typography>{feature.title}</Typography>
                           </FeatureBox>
                        ))}
                     </FeatureBoxWrapper>
                  </Box>
                  {/* form */}

                  {!formSubmittedSuccessfully ? (
                     <Box sx={{ flex: 1 }}>
                        <Stack spacing={2}>
                           <Typography
                              color='#ffffff'
                              variant='h4'
                              component='h1'
                              fontWeight={600}
                              textAlign='right'
                           >
                              Get Started with your <br />
                              <span style={{ color: '#ffd05b' }}>
                                 {' '}
                                 one time free
                              </span>
                              trial!
                           </Typography>
                           <Typography
                              color='#ffffff'
                              variant='h6'
                              component='h3'
                              textAlign='right'
                           >
                              Become a{' '}
                              <span style={{ color: '#ffd05b' }}>
                                 Installer
                              </span>{' '}
                              or a{' '}
                              <span style={{ color: '#ffd05b' }}> Vendor</span>{' '}
                              with us
                           </Typography>
                        </Stack>
                        <Stack
                           sx={{ width: '100%', maxWidth: '400px', ml: 'auto' }}
                           spacing={2}
                           mt={2}
                           component='form'
                           onSubmit={handleSubmit(handleSignup)}
                           id='rial-form'
                        >
                           <WhiteTextField
                              size='small'
                              placeholder='Enter your name'
                              {...register('name', {
                                 required: {
                                    value: true,
                                    message: 'Name is required',
                                 },
                              })}
                              error={errors.name}
                              helperText={errors.name && errors.name.message}
                           />
                           <WhiteTextField
                              size='small'
                              placeholder='Enter your email'
                              {...register('email', {
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address',
                                 },
                              })}
                              error={errors.email}
                              helperText={errors.email && errors.email.message}
                           />

                           <WhiteTextField
                              size='small'
                              placeholder='Enter company name'
                              {...register('company_name', {
                                 required: {
                                    value: true,
                                    message: 'Name is required',
                                 },
                              })}
                              error={errors.company_name}
                              helperText={
                                 errors.company_name &&
                                 errors.company_name.message
                              }
                           />

                           <WhiteTextField
                              size='small'
                              placeholder='Enter your phone number'
                              {...register('mobile', {
                                 required: {
                                    value: true,
                                    message:
                                       'Please input a number to continue',
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
                              error={errors.mobile}
                              helperText={
                                 errors.mobile && errors.mobile.message
                              }
                           />
                           <Box>
                              <Typography
                                 variant='h5'
                                 color='primary.main'
                                 mb={1}
                              >
                                 Select your service
                              </Typography>
                              <Stack direction='row'>
                                 <TrialFormControlLabel
                                    control={
                                       <Checkbox
                                          checked={
                                             !!serviceTypes[
                                                'solar installer / epc player'
                                             ]
                                          }
                                          onChange={handleChange}
                                          inputProps={{
                                             'aria-label': 'controlled',
                                          }}
                                          name='solar installer / epc player'
                                       />
                                    }
                                    label='Solar Installer / Epc Player'
                                 />
                                 <TrialFormControlLabel
                                    control={
                                       <Checkbox
                                          checked={
                                             !!serviceTypes[
                                                'solar manufacturer'
                                             ]
                                          }
                                          onChange={handleChange}
                                          inputProps={{
                                             'aria-label': 'controlled',
                                          }}
                                          name='solar manufacturer'
                                       />
                                    }
                                    label='Solar Manufacturer'
                                 />
                              </Stack>
                              <Stack direction='row'>
                                 <TrialFormControlLabel
                                    control={
                                       <Checkbox
                                          checked={
                                             !!serviceTypes['solar design']
                                          }
                                          onChange={handleChange}
                                          inputProps={{
                                             'aria-label': 'controlled',
                                          }}
                                          name='solar design'
                                       />
                                    }
                                    label='Solar Design'
                                 />
                                 <TrialFormControlLabel
                                    control={
                                       <Checkbox
                                          checked={
                                             !!serviceTypes['solar distributor']
                                          }
                                          onChange={handleChange}
                                          inputProps={{
                                             'aria-label': 'controlled',
                                          }}
                                          name='solar distributor'
                                       />
                                    }
                                    label='Solar Distributor'
                                 />
                              </Stack>
                           </Box>
                           <LoadingButtonPrimary
                              endIcon={<NavigateNextIcon />}
                              loading={isSubmitting}
                              type='submit'
                           >
                              Sign Up
                           </LoadingButtonPrimary>
                        </Stack>
                     </Box>
                  ) : (
                     <Box sx={{ flex: 1 }}>
                        <Typography
                           color='#fff'
                           sx={{
                              fontSize: ['1.5rem', '1.6rem', '2.5rem'],
                              fontWeight: 600,
                              textAlign: 'center',
                           }}
                        >
                           Thank you for being with{' '}
                           <span style={{ color: '#ffd05b' }}>Solruf!</span>
                        </Typography>
                     </Box>
                  )}
               </FlexBox>
            </Container>
         </WhyUsBoxWrapper>
      </>
   );
};

export default TrialSignup;
