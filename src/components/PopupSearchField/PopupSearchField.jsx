import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import SolrufModal from '../Custom/SolrufModal/SolrufModal';
import SearchIcon from '@mui/icons-material/Search';
import Loader from '../Loader/Loader';
import {
   ProductWrapper,
   SearchChip,
   SearchDataWrapper,
   SearchFieldWrapper,
   SearchForm,
} from './PopupSearchField.style';
import { productName } from '../../pages/home/productsCategories/productCategoriesData';
import { useDispatch } from 'react-redux';
import { setProductData } from '../../redux/slices/viewProductSlice';
import { useNavigate } from 'react-router';

const PopupSearchField = ({
   searchClickHandler,
   setSearchTerm,
   setShowResultBox,
   searchTerm,
   searchInputRef,
   searching,
   searchData,
   goToProduct,
   showResultBox,
   resultBoxRef,
}) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const matchMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
   // const match1400 = useMediaQuery((theme) => theme.breakpoints.down(1400));
   // const matchSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

   const [searchModalOpen, setSearchModalOpen] = useState(false);

   return (
      <>
         <SolrufModal
            open={searchModalOpen}
            onClose={() => setSearchModalOpen(false)}
            sx={{
               top: '40%',
               // glass effect
               backdropFilter: 'blur(5px)',
               WebkitBackdropFilter: 'blur(5px)',
               backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}
         >
            <SearchForm component='form' onSubmit={searchClickHandler}>
               <input
                  type='search'
                  placeholder='ex: solar panel, but...'
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setShowResultBox(true)}
                  value={searchTerm}
                  ref={searchInputRef}
               />
               <SearchIcon />
            </SearchForm>

            <Box
               sx={{
                  my: 2,
               }}
            >
               {searching && <Loader />}

               {!searching && !searchTerm && searchData.length === 0 && (
                  <Typography
                     sx={{
                        color: '#ffffff',
                     }}
                  >
                     Write something or click on a category below to search
                  </Typography>
               )}

               {!searching && searchTerm && searchData.length === 0 && (
                  <Typography
                     sx={{
                        color: '#ffffff',
                     }}
                  >
                     No Product Found!
                  </Typography>
               )}
            </Box>

            <Box
               sx={{
                  mb: 3,
               }}
            >
               <Stack
                  direction='row'
                  gap={2}
                  flexWrap='wrap'
                  justifyContent='center'
               >
                  {productName?.map((category, i) => (
                     <SearchChip
                        key={category?.CategoryId}
                        label={category.name}
                        onClick={() => {
                           dispatch(
                              setProductData({
                                 productCategoryData: category.CategoryId,
                                 productSubCategoryData: category.SubCategoryId,
                              })
                           );
                           setSearchModalOpen(false);
                           navigate(`/products`);
                        }}
                     />
                  ))}
               </Stack>
            </Box>

            <SearchDataWrapper>
               {searchData.length > 0 &&
                  searchData?.map((item) => (
                     <ProductWrapper
                        onClick={() =>
                           goToProduct(
                              item.product_slug,
                              item.product_id,
                              setSearchModalOpen
                           )
                        }
                     >
                        <Box
                           sx={{
                              width: '100%',
                              height: '90px',
                              overflow: 'hidden',
                              mb: '0.5rem',
                           }}
                        >
                           <img
                              src={item?.default_image}
                              alt='default'
                              style={{
                                 width: '100%',
                                 // make the image cover the whole box
                                 height: '100%',
                                 objectFit: 'cover',
                              }}
                           />
                        </Box>
                        <Typography
                           sx={{
                              textAlign: 'center',
                              fontSize: '0.7rem',
                              fontWeight: '500',
                              color: '#000000',
                           }}
                        >
                           {item?.product_name}
                        </Typography>
                     </ProductWrapper>
                  ))}
            </SearchDataWrapper>
         </SolrufModal>

         {!matchMd && (
            <SearchFieldWrapper onClick={() => setSearchModalOpen(true)}>
               <input
                  type='search'
                  style={{
                     color: 'white',
                  }}
                  defaultValue='Search Product'
                  disabled
               />
               <SearchIcon />
            </SearchFieldWrapper>
         )}

         {/* {!match1400 && (
            <SearchBox component='form' onSubmit={searchClickHandler}>
               <input
                  type='text'
                  placeholder='ex: solar panel, but...'
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setShowResultBox(true)}
                  value={searchTerm}
                  ref={searchInputRef}
               />

               <SearchIcon />

               <ResultBox
                  sx={{
                     display: showResultBox ? 'block' : 'none',
                  }}
                  ref={resultBoxRef}
               >
                  {searching && <Loader />}

                  {!searching && !searchTerm && searchData.length === 0 && (
                     <Typography
                        sx={{
                           color: '#4d4d4d',
                        }}
                     >
                        Write something to search
                     </Typography>
                  )}

                  {!searching && searchTerm && searchData.length === 0 && (
                     <Typography
                        sx={{
                           color: '#4d4d4d',
                        }}
                     >
                        No Product Found!
                     </Typography>
                  )}
                  {searchData.length > 0 &&
                     searchData?.map((item) => (
                        <ResultItem
                           onClick={() =>
                              goToProduct(item.product_slug, item.product_id)
                           }
                        >
                           <Box className='imageBox'>
                              <img src={item?.default_image} alt='default' />
                           </Box>
                           <Typography>{item?.product_name}</Typography>
                        </ResultItem>
                     ))}
               </ResultBox>
            </SearchBox>
         )} */}
      </>
   );
};

export default PopupSearchField;
