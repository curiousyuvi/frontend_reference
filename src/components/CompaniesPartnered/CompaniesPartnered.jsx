import { Container, Typography } from '@mui/material';
import React from 'react';
import installersImage from '../../assets/installers.png';
import { ImageBox, Wrapper } from './CompaniesPartnered.style';

const CompaniesPartnered = () => {
   return (
      <Container maxWidth='xl'>
         <Wrapper>
            <Typography variant='h3' sx={{ fontWeight: '600', }} component='h2'>
               Manufacturers that have partnered{' '}
               <span
                  style={{
                     color: '#ffd05b',
                  }}
               >
                  with us
               </span>
            </Typography>
            <ImageBox src={installersImage} alt='' />
         </Wrapper>
      </Container>
   );
};

export default CompaniesPartnered;
