import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductDetailList from '../ProductDetailList/ProductDetailList';
import ProductSlider from '../ProductSlider/ProductSlider';
import RoundedDarkButton from '../RoundedDarkButton/RoundedDarkButton';
import { HorizontalProductCardWrapper } from './horizontalProductCard.style';
import noImage from '../../assets/no-image.jpeg';

const noImages = [noImage, noImage, noImage, noImage, noImage, noImage];

const HorizontalProductCard = ({ product, sx, type }) => {
   console.log('>>>>>>>>>>>>>>>>', product);

   const [attributes, setAttributes] = useState([]);
   const [sliderImages, setSliderImages] = useState([]);

   useEffect(() => {
      console.log('changing attributes');
      if (type === 'procurement') {
         if (product.attributes && product.attributes.length > 0) {
            setAttributes(
               product.attributes.filter(
                  (attribute) =>
                     attribute?.attribute_values[0]?.views?.procurement_card
                        ?.visibility
               )
            );
         }

         setSliderImages(
            product?.images?.length
               ? product?.images.map((img) => img.image_url)
               : noImages
         );
      } else if (type === 'enquiry') {
         setAttributes(
            product?.other?.attributes?.filter(
               (attribute) =>
                  attribute?.attribute_values[0]?.views?.procurement_card
                     ?.visibility
            )
         );

         setSliderImages(
            product?.other?.productImages?.length
               ? product?.other?.productImages.map((img) => img.image_url)
               : noImages
         );
      }
   }, [product, type]);

   console.log(attributes);
   return (
      <HorizontalProductCardWrapper sx={{ ...sx }}>
         <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
               <Box sx={{ width: '300px' }}>
                  <ProductSlider images={sliderImages} />
               </Box>
            </Grid>
            <Grid
               item
               xs={12}
               sm={6}
               onClick={() =>
                  window.open(
                     `/products/${product?.product_id}/${product?.product_slug}`,
                     '_blank'
                  )
               }
            >
               <Box>
                  <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
                     {product?.product_name
                        ? product?.product_name
                        : 'New Product'}
                  </Typography>

                  <ProductDetailList
                     list='Category'
                     description={`${product.main_category?.name}, ${product.sub_category?.sub_category_name}`}
                  />

                  <ProductDetailList
                     list='Brand'
                     description={product?.product_brand_name}
                  />

                  {attributes.length > 0 &&
                     attributes
                        .slice(0, 2)
                        .map((attribute) => (
                           <ProductDetailList
                              list={attribute.name}
                              description={`${attribute.attribute_values[0].value} ${attribute.attribute_values[0].value_unit}`}
                           />
                        ))}

                  <RoundedDarkButton
                     title='Check Details'
                     style={{ marginTop: '1rem' }}
                  />
               </Box>
            </Grid>
         </Grid>
      </HorizontalProductCardWrapper>
   );
};

export default HorizontalProductCard;
