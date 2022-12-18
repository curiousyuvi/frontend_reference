import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import PrimaryButton from '../../components/Custom/PrimaryButton/PrimaryButton';
import ProductDetailList from '../../components/ProductDetailList/ProductDetailList';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import noImage from '../../assets/no-image.jpeg';

import { ProductCardWrapper } from './procurementProductCard.style';

const noImages = [noImage, noImage, noImage, noImage, noImage, noImage];

const ProcurementProductCard = ({ product, bookingOn, sx, actionType }) => {
   const {
      product_name = 'New Product',
      product_slug = 'na',
      product_id,
   } = product || {};
   const navigate = useNavigate();

   const [attributes, setAttributes] = useState([]);

   useEffect(() => {
      if (product.attributes && product.attributes.length > 0) {
         setAttributes(
            product.attributes.filter(
               (attribute) =>
                  attribute?.attribute_values[0]?.views?.procurement_card
                     ?.visibility
            )
         );
      }
   }, [product.attributes]);


   return (
      <ProductCardWrapper
         sx={{
            ...sx,
         }}
      >
         {product?.images ? (
            <ProductSlider
               images={product?.images.map((img) => img.image_url)}
            />
         ) : (
            <ProductSlider images={noImages} />
         )}

         <Box sx={{ mb: 3, mt: 1.5, pb: 1.5 }}>
            <Typography
               variant='h6'
               sx={{ fontWeight: '600', textAlign: 'center' }}
            >
               {product_name}
            </Typography>

            <ProductDetailList
               description={`${product.main_category?.name}, ${product.sub_category?.sub_category_name}`}
               list='Category'
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
                        key={attribute.id}
                        list={attribute.name}
                        description={`${attribute.attribute_values[0].value} ${attribute.attribute_values[0].value_unit}`}
                     />
                  ))}
         </Box>

         {actionType === 'enquiry' && (
            <PrimaryButton
               fullWidth
               onClick={() =>
                  navigate(`/products/${product_id}/${product_slug}`)
               }
               sx={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  borderRadius: '0 0 8px 8px',
                  py: 1.5,
               }}
            >
               Enquiry
            </PrimaryButton>
         )}
      </ProductCardWrapper>
   );
};

export default ProcurementProductCard;

/* 

{/* <img
               src={`${
                  bookingOn
                     ? 'https://i.ibb.co/YNmYkyg/Frame-169-1.png'
                     : 'https://i.ibb.co/PDPmLL2/sale-1-1.png'
               }`}
               alt=''
               style={{ position: 'absolute', top: '3%' }}
            /> 
*/
