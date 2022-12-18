import { Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import ProductDetailList from '../ProductDetailList/ProductDetailList';
import RoundedDarkButton from '../RoundedDarkButton/RoundedDarkButton';
import SliderWIthThumbnail from '../SliderWIthThumbnail/SliderWIthThumbnail';
import noImage from '../../assets/no-image.jpeg';

const Wrapper = styled(Box)(({ theme }) => ({
   margin: '1.5rem 0 ',
   background: '#fff',
   padding: '1.5rem 1rem 1.5rem 2rem',
   borderRadius: '30px',
   boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
}));

const noImages = [noImage, noImage, noImage, noImage, noImage, noImage];

const SingleProduct = ({ product }) => {
   console.log(product);
   const { product_name } = product || {};
   return (
      <Wrapper>
         <Grid container spacing={2} alignItems='center'>
            <Grid item md={6} lg={5}>
               {/* ================== Slider with custom image preview indicator */}
               <Box sx={{ maxWidth: '300px' }}>
                  <SliderWIthThumbnail images={noImages} />
               </Box>
            </Grid>
            {/*  === description list start === */}
            <Grid item md={6} lg={7}>
               <Box>
                  <Typography variant='h5' fontWeight={500}>
                     {product_name}
                  </Typography>
                  {/* ====== Nested Grid Start ====== */}
                  <Grid container item spacing={2}>
                     <Grid item sm={6}>
                        <ProductDetailList
                           list='Price/Watt'
                           description='Rs 256/sq.ft.'
                        />
                        <ProductDetailList
                           list='Price Of Panel'
                           description='Rs 2500000'
                        />
                     </Grid>
                     <Grid item sm={6}>
                        <ProductDetailList
                           list='Inverter Type'
                           description='Offgrid/ongrid'
                           hand='hand'
                        />
                        <ProductDetailList
                           list='Location'
                           description='Jaipur'
                           hand='hand'
                        />
                     </Grid>
                  </Grid>
                  {/* ====== Nested Grid Ends ====== */}
                  <Box sx={{ mt: 3 }}>
                     <RoundedDarkButton title='Check Detailed Portfolio' />
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Wrapper>
   );
};

export default SingleProduct;
