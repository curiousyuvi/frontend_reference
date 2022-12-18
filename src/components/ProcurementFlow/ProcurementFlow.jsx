import { Box, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import { StepsWrapper, StepWrapper, Wrapper } from './ProcurementFlow.style';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const steps = ['Enquiry', 'Get Bids', 'Confirm Order'];
const stepsTitle = [
   'Instantly Create Product Enquiry',
   ' Get Competitive Vendor Bids',
   'Get timely and nationwide Delivery',
];

const stepsSubtitle = [
   'Based on Project Scope',
   'Directly from Manufacturers and Distributors',
   'and Payment Security',
];

const stepsImages = [
   'https://solruf.s3.ap-south-1.amazonaws.com/Image+Assets/home/productImage.png',
   'https://solruf.s3.ap-south-1.amazonaws.com/Image+Assets/home/bidImage.png',
   'https://solruf.s3.ap-south-1.amazonaws.com/Image+Assets/home/deliverImage.png',
];

const ImageBox = styled('img')(({ theme }) => ({
   width: '100%',
   maxHeight: '200px',
   objectFit: 'contain',
   borderRadius: '10px',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
   height: '44px',
   width: '44px',
   position: 'absolute',
   top: '50%',
   backgroundColor: '#FEE7AC',
   boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
   color: 'black',
}));

const ProcurementFlow = () => {
   const [activeStep, setActiveStep] = React.useState(0);

   const handleNext = () => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % steps.length);
   };

   const handleBack = () => {
      setActiveStep(
         (prevActiveStep) => (prevActiveStep - 1 + steps.length) % steps.length
      );
   };

   const intervalRef = React.useRef();

   const autoSlideScroll = () => {
      intervalRef.current = setInterval(() => {
         if (true) {
            // clicked by user
            handleNext();
         }
      }, 3000);
      return () => clearInterval(intervalRef.current);
   };

   const stopAutoSlideScrollBack = () => {
      clearInterval(intervalRef.current);
      handleBack();

      setTimeout(() => {
         autoSlideScroll();
      }, 60000);
   };

   const stopAutoSlideScrollNext = () => {
      clearInterval(intervalRef.current);
      handleNext();

      setTimeout(() => {
         autoSlideScroll();
      }, 60000);
   };

   React.useEffect(autoSlideScroll, []);

   return (
      <Container maxWidth='xl'>
         <Typography
            variant='h3'
            textAlign='center'
            fontWeight={600}
            sx={{ py: 2, px: '10px', mb: [0, 0, 0, -4] }}
            component='h2'
         >
            Start procurement in{' '}
            <span
               style={{
                  color: '#ffd05b',
               }}
            >
               3 Simple Steps
            </span>
         </Typography>

         {/*This is stepper box where we ARE showing our stepper and content. */}

         <Box
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               margin: '0 auto',
               flexWrap: 'wrap',
               alignItems: 'center',
               position: 'relative',
               width: '80%',
               flexDirection: 'column',
               gap: '2rem',
               '@media (min-width: 1200px)': {
                  display: 'none',
               },
            }}
         >
            <Typography variant='h5' fontWeight={700} textAlign='center'>
               {stepsTitle[activeStep]}
            </Typography>

            <ImageBox
               src={stepsImages[activeStep]}
               sx={{ height: { xs: '250px', md: '400px' } }}
            />

            <Typography
               variant='h5'
               fontWeight={600}
               sx={{
                  textAlign: 'center',
               }}
            >
               {stepsSubtitle[activeStep]}
            </Typography>

            <StyledIconButton
               aria-label='delete'
               sx={{
                  left: { md: '-12%', xs: '-7%' },
                  top: { xs: '52%' },
               }}
               onClick={stopAutoSlideScrollBack}
            >
               <ChevronLeftIcon />
            </StyledIconButton>
            <StyledIconButton
               aria-label='delete'
               sx={{
                  right: { md: '-12%', xs: '-7%' },
                  top: { xs: '52%' },
               }}
               onClick={stopAutoSlideScrollNext}
            >
               <ChevronRightIcon />
            </StyledIconButton>
         </Box>
         <Wrapper>
            <StepsWrapper>
               <StepWrapper>
                  <Typography variant='h5' fontWeight={800} textAlign='center'>
                     Instantly Create Product Enquiry
                  </Typography>

                  <img
                     src='https://solruf.s3.ap-south-1.amazonaws.com/Image+Assets/home/productImage.png'
                     alt=''
                     style={{ height: '180px', borderRadius: '15px' }}
                  />
                  <Typography
                     variant='h6'
                     sx={{ fontWeight: '600', textAlign: 'center' }}
                  >
                     Based on Project Scope
                  </Typography>
               </StepWrapper>
               {/* <ArrowForwardIcon sx={{ fontSize: '3rem' }} /> */}
               <img src='https://i.ibb.co/0KtfNwL/Group-1811.png' alt='' />
               <StepWrapper>
                  <Typography variant='h5' fontWeight={800} textAlign='center'>
                     Get Competitive Vendor Bids
                  </Typography>
                  <img
                     src='https://solruf.s3.ap-south-1.amazonaws.com/Image+Assets/home/bidImage.png'
                     alt=''
                     style={{ height: '180px', borderRadius: '15px' }}
                  />
                  <Typography
                     variant='h6'
                     sx={{ fontWeight: '600', textAlign: 'center' }}
                  >
                     Directly from Manufacturers and Distributors
                  </Typography>
               </StepWrapper>
               <img src='https://i.ibb.co/0KtfNwL/Group-1811.png' alt='' />

               <StepWrapper>
                  <Typography variant='h5' fontWeight={800} textAlign='center'>
                     Get timely and nationwide Delivery
                  </Typography>
                  <img
                     src='https://solruf.s3.ap-south-1.amazonaws.com/Image+Assets/home/deliverImage.png'
                     alt=''
                     style={{ height: '180px', borderRadius: '15px' }}
                  />
                  <Typography
                     variant='h6'
                     sx={{ fontWeight: '600', textAlign: 'center' }}
                  >
                     and Payment Security
                  </Typography>
               </StepWrapper>
            </StepsWrapper>
         </Wrapper>
      </Container>
   );
};

export default ProcurementFlow;
