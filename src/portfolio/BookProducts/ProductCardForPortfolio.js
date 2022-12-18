import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import PrimaryButton from '../../components/Custom/PrimaryButton/PrimaryButton';
import ProductDetailList from '../../components/ProductDetailList/ProductDetailList';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import noImage from '../../assets/no-image.jpeg';
import bookingTag from '../../assets/bookingTag.svg';

import { ProductCardWrapper } from './productCardForPortfolio.style';

const noImages = [noImage, noImage, noImage, noImage, noImage, noImage];

const ProductCardForPortfolio = ({
   product,
   sx,
   editable,
   actionType,
   vendorSlug,
   vendorId,
   openPurchaseModal,
   closePurchaseModal,
}) => {
   const { product_name = 'New Product', product_slug = 'na' } = product || {};
   const navigate = useNavigate();

   console.log(product);

   const [attributes, setAttributes] = useState([]);

   // console.log(product);

   const findExclusiveAttr = product?.attributes?.find(
      (attr) => attr.name === 'exclusive'
   );

   const exclusive =
      findExclusiveAttr?.attribute_values[
         findExclusiveAttr?.attribute_values.length > 0 ? 1 : 0
      ]?.value === '1';

   useEffect(() => {
      if (product.attributes && product.attributes.length > 0) {
         setAttributes(
            product.attributes.filter(
               (attribute) =>
                  attribute?.attribute_values[
                     attribute?.attribute_values?.length - 1
                  ]?.views?.portfolio_card?.visibility
            )
         );
      }
   }, [product.attributes]);

   return (
      <ProductCardWrapper
         sx={{
            ...sx,
         }}
         exclusive={exclusive}
      >
         {product?.details?.booking_availability && (
            <img
               src={bookingTag}
               alt=''
               style={{
                  position: 'absolute',
                  width: '70px',
                  top: '2%',
                  left: '2%',
                  zIndex: 10,
                  transform: 'rotate(-30deg)',
               }}
            />
         )}
         {product?.images ? (
            <ProductSlider
               images={product?.images.map((img) => img.image_url)}
            />
         ) : (
            <ProductSlider images={noImages} />
         )}

         <Box sx={{ mb: 3, mt: 1.5 }}>
            <Typography
               variant='h6'
               sx={{ fontWeight: '600', textAlign: 'center' }}
            >
               {product_name.length > 20
                  ? `${product_name.substring(0, 20)}...`
                  : product_name}
            </Typography>

            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
               }}
            >
               <Box>
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
                              description={`${
                                 attribute?.attribute_values[
                                    attribute?.attribute_values.length - 1
                                 ]?.value
                              } ${
                                 attribute?.attribute_values[
                                    attribute?.attribute_values.length - 1
                                 ]?.value_unit
                              }`}
                           />
                        ))}
               </Box>
               {exclusive && (
                  <Box
                     sx={{
                        alignSelf: 'flex-end',
                     }}
                  >
                     <img
                        src='https://solruf.s3.ap-south-1.amazonaws.com/image+84.svg'
                        alt='exclusive'
                        style={{
                           width: '60px',
                        }}
                     />
                  </Box>
               )}
            </Box>
         </Box>
         {editable && (
            <PrimaryButton variant='secondary' fullWidth>
               Edit
            </PrimaryButton>
         )}

         {actionType === 'purchase' && (
            <Fragment>
               <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
                  <PrimaryButton
                     fullWidth
                     onClick={() =>
                        navigate(
                           `/purchase-product/${vendorSlug}/${vendorId}/${product_slug}/${product?.product_id}`
                        )
                     }
                  >
                     Purchase
                  </PrimaryButton>
               </Box>
               <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
                  <PrimaryButton
                     sx={{
                        background: exclusive ? '#328EBA' : '#primary.main',
                        color: exclusive ? '#ffffff' : '#000000',
                     }}
                     fullWidth
                     onClick={() => openPurchaseModal(product)}
                  >
                     Purchase
                  </PrimaryButton>
               </Box>
            </Fragment>
         )}

         {actionType === 'enquiry' && (
            <PrimaryButton
               fullWidth
               onClick={() =>
                  navigate(`/products/${product?.product_id}/${product_slug}`)
               }
            >
               Enquiry
            </PrimaryButton>
         )}
      </ProductCardWrapper>
   );
};

export default ProductCardForPortfolio;

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
