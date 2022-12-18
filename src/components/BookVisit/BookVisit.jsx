import { Box, Typography } from '@mui/material';
import React from 'react';
import solarSiteImage from '../../assets/solar-site.jpeg';
import PrimaryButton from '../Custom/PrimaryButton/PrimaryButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { HashLink } from 'react-router-hash-link';

const BookVisit = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            p: '2rem',
            my: '6rem',
            mt: 5,
            gap: '2rem',
            '@media (max-width: 900px)': {
               flexDirection: 'column',
               alignItems: 'center',
            },
            '@media (max-width: 600px)': {
               '& img': {
                  width: '80% !important',
               },
            },
         }}
      >
         <img
            src={solarSiteImage}
            alt=''
            style={{ width: '30rem', borderRadius: '20px' }}
         />
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               '@media (max-width: 900px)': {
                  alignItems: 'center',
               },
               gap: '1rem',
               maxWidth: '40rem',
            }}
         >
            <Typography
               variant='h3'
               component='h2'
               sx={{
                  fontWeight: '600',
                  '@media (max-width: 900px)': {
                     textAlign: 'center',
                  },
               }}
            >
               Get quotations from top installers in your locality
            </Typography>
            <PrimaryButton
               size='large'
               component={HashLink}
               to='#offer-form'
               sx={{
                  fontSize: '1.2rem',

                  mt: '2rem',
                  '@media (max-width: 600px)': {
                     fontSize: '0.8rem',
                  },
                  borderRadius: '100px',
                  backgroundColor: 'primary.main',
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  pr: '0.5rem',
                  '&:hover': {
                     backgroundColor: 'primary.main',
                     color: 'black',
                     transform: 'scale(1.05)',
                     transition: 'transform 0.1s ease',
                  },
               }}
            >
               Book Free Site Visit
               <ArrowForwardIcon
                  sx={{
                     fontSize: '3rem',
                     ml: '1rem',
                     p: '0.5rem',
                     borderRadius: '100px',
                     backgroundColor: 'black',
                     color: 'primary.main',
                  }}
               />
            </PrimaryButton>
         </Box>
      </Box>
   );
};

export default BookVisit;
