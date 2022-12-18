import React from 'react';
import Footer from '../../components/Footer/Footer';

import { Container, Typography, Box } from '@mui/material';
import MainHeader from '../../components/MainHeader/MainHeader';

import { styled } from '@mui/system';
import { DownloadChip } from '../../components/CustomerDetailsDrawer/customerDetailsDrawer.style';

const PolicyBox = styled('div')(({ theme }) => ({
   height: '130px',
   //  border: '1px solid grey',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '0px 20px 0px 20px',
   borderRadius: '5px',
   backgroundColor: '#ffffff',
   boxShadow: theme.shadows[25],
}));

const PrivacyPolicy = () => {
   return (
      <>
         <MainHeader />
         <Container sx={{ mb: 5, mt: 5 }}>
            <Typography variant='h2' fontWeight={500}>
               Policies
            </Typography>
            <Box sx={{ mt: 5 }}>
               <PolicyBox>
                  <Typography variant='h4' fontWeight={450}>
                     Privacy Policy
                  </Typography>
                  <DownloadChip
                     label='Download Link'
                     component='a'
                     href='https://solruf.s3.ap-south-1.amazonaws.com/Solruf+Policies/Privacy+Policy.pdf'
                     target='_blank'
                  />
               </PolicyBox>
               <PolicyBox sx={{ my: 3 }}>
                  <Typography variant='h4' fontWeight={450}>
                     Terms and Conditions
                  </Typography>
                  <DownloadChip
                     label='Download Link'
                     component='a'
                     href='https://solruf.s3.ap-south-1.amazonaws.com/Solruf+Policies/Terms+%26+Conditions.pdf'
                     target='_blank'
                  />
               </PolicyBox>
               <PolicyBox>
                  <Typography variant='h4' fontWeight={450}>
                     Return and Refund Policy
                  </Typography>
                  <DownloadChip
                     label='Download Link'
                     component='a'
                     href='https://solruf.s3.ap-south-1.amazonaws.com/Solruf+Policies/Return+%26+Refund+Policy.pdf'
                     target='_blank'
                  />
               </PolicyBox>

               <PolicyBox sx={{mt: 3}}>
                  <Typography variant='h4' fontWeight={450}>
                     Disclaimer
                  </Typography>
                  <DownloadChip
                     label='Download Link'
                     component='a'
                     href='https://solruf.s3.ap-south-1.amazonaws.com/Solruf+Policies/Disclaimer.pdf'
                     target='_blank'
                  />
               </PolicyBox>
            </Box>
         </Container>
         <Footer />
      </>
   );
};

export default PrivacyPolicy;
