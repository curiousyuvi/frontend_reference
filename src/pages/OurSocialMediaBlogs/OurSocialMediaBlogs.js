import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MediumIcon from '../../assets/medium-icon.png';
import PageTitle from '../../components/PageTitle/PageTitle';

const OurSocialMediaBlogs = () => {
   return (
      <Container>
          <PageTitle title='Our Social Media Blogs' />
         <Box
            sx={{
               height: 'calc(100vh - 400px)',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <Box>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     mt: 5,
                     gap: 5,
                     mb: 5,
                     '& svg': {
                        fontSize: '50px',
                        '&:nth-child(1)': {
                           color: '#3b5998',
                        },
                        '&:nth-child(2)': {
                           color: '#E1306C',
                        },
                        '&:nth-child(3)': {
                           color: '#0077b5',
                        },
                        '&:nth-child(4)': {
                           color: '#E60023',
                        },
                     },
                     '& img': {
                        width: '50px',
                     },
                  }}
               >
                  <FacebookIcon />
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                  <img src={MediumIcon} alt='' />
               </Box>

               <Typography
                  sx={{
                     textAlign: 'center',
                     backgroundColor: 'primary.main',
                     WebkitTextFillColor: 'transparent',
                     WebkitTextStrokeWidth: '2px',
                     WebkitTextStrokeColor: 'primary.dark',
                     fontSize: '3rem',
                     fontWeight: 'bold',
                     textTransform: 'uppercase',
                     letterSpacing: '1px',
                     marginBottom: '1rem',
                     px: '1rem',
                     clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
                  }}
                  variant='h4'
               >
                  Our Social Media Blogs
               </Typography>
               <Typography
                  sx={{
                     textAlign: 'center',
                     // backgroundColor: 'primary.main',
                     WebkitTextFillColor: 'transparent',
                     WebkitTextStrokeWidth: '2px',
                     WebkitTextStrokeColor: 'primary.dark',
                     fontSize: '2rem',
                     fontWeight: 'bold',
                     textTransform: 'uppercase',
                     letterSpacing: '1px',
                     px: '1rem',
                     clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
                  }}
                  variant='h4'
               >
                  Our Medium Blogs
               </Typography>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     gap: 5,
                     mt: 2,
                  }}
               >
                  <a href='https://medium.com/@Solruf/lets-simplify-last-mile-connectivity-7eedf28413c4'>
                     Link 1
                  </a>
                  <a href='https://medium.com/@Solruf/how-net-metering-system-in-solar-works-468c42bc8cc4'>
                     Link 2
                  </a>
               </Box>
            </Box>
         </Box>
      </Container>
   );
};

export default OurSocialMediaBlogs;
