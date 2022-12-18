import React, { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import PrimaryButton from '../../components/Custom/PrimaryButton/PrimaryButton.js';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModal } from '../../redux/slices/loginModalSlice';
import SolarCalculator from '../../components/SolarCalculator/SolarCalculator';
import BookNowFAB from '../../components/BookNowFAB/BookNowFAB';
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts.jsx';
import OfferForm from '../OfferForm/OfferForm.js';
import SolrufBlogs from '../../components/SolrufBlogs/SolrufBlogs.jsx';
import BecomeVendor from '../../components/BecomeVendor/BecomeVendor.jsx';
import { HashLink } from 'react-router-hash-link';
import { FormFeaturesWrapper, HeroWrapper } from './home.style.js';
import Features from '../../components/Features/Features.jsx';
import Brands from '../../components/Brands/Brands.jsx';
import ProcurementFlow from '../../components/ProcurementFlow/ProcurementFlow.jsx';
import WeCater from '../../components/WeCater/WeCater.jsx';
import ProductCategories from './productsCategories/productsCategories.js';
import TestimonialCardSlider2 from '../../components/TestimonialCardSlider2/TestimonialCardSlider2.jsx';
import BookVisit from '../../components/BookVisit/BookVisit.jsx';
import BookDemo from '../../components/BookDemo/BookDemo.jsx';
import CompaniesPartnered from '../../components/CompaniesPartnered/CompaniesPartnered.jsx';
import HomeLeadForm from '../../components/HomeLeadForm/HomeLeadForm.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroBox = styled(Box)(({ theme }) => ({
   height: '100%',
   width: '100%',
   position: 'absolute',
   top: '0',
   backgroundColor: 'rgba(0,0,0,0.4)',
   display: 'flex',
   flexDirection: 'column',
   color: 'white',
}));

const videoStyle = {
   height: '100%',
   width: '100%',
   objectFit: 'cover',
};

function Home({ register }) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.user);

   useEffect(() => {
      !user && register && dispatch(openLoginModal());
      user && navigate('/');
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const [leadFormOpen, setLeadFormOpen] = useState(false);

   useEffect(() => {
      let timer;
      const storageData = JSON.parse(
         localStorage.getItem('leadFormWithVisitShown')
      );
      if (storageData) {
         timer = setTimeout(() => {
            setLeadFormOpen(true);
         }, 7200000);
         return;
      } else {
         localStorage.setItem('leadFormWithVisitShown', true);
         timer = setTimeout(() => {
            setLeadFormOpen(true);
         }, 2000);
      }

      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         <BookNowFAB />

         <HeroWrapper>
            <video
               src='https://solruf.s3.ap-south-1.amazonaws.com/Homepage_video_rb1hf9+(2).webm'
               muted
               loop
               autoPlay
               style={videoStyle}
            ></video>

            {/* placing background video */}
            <HeroBox sx={{}}>
               <Stack
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     height: '100%',

                     ml: '10%',
                     '@media screen and (max-width: 600px)': {
                        alignItems: 'center',
                        ml: '0',
                     },
                  }}
                  padding={2}
                  rowGap={{ xs: 3, sm: 4, md: 5 }}
               >
                  <Typography
                     sx={{
                        fontWeight: 600,
                        fontSize: {
                           xs: '2rem',
                           md: '3rem',
                           lg: '3.7rem',
                        },
                        lineHeight: '90px',
                        '@media (max-width: 900px)': {
                           lineHeight: '45px',
                        },
                     }}
                     color='white'
                     component='h1'
                  >
                     One place Solar <br />
                     <span style={{ color: '#ffd05b' }}>
                        Marketplace and <br />
                        Installation Platform
                     </span>
                  </Typography>

                  <Box
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        width: '100%',
                     }}
                  >
                     <Typography
                        variant='h4'
                        component='h2'
                        color='white'
                        sx={{
                           fontSize: {
                              xs: '1.1rem',
                              md: '1.4rem',
                              lg: '1.8rem',
                           },
                           fontWeight: '600',
                           mb: 1,
                           maxWidth: '55rem',
                        }}
                     >
                        Nationwide solar installations & products from top
                        Installers and Manufacturers. <br />
                     </Typography>
                  </Box>

                  <Box
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        width: '100%',
                        maxWidth: '25rem',
                     }}
                  >
                     <Box
                        sx={{
                           display: 'flex',
                           columnGap: '2rem',
                           width: '100%',
                        }}
                     >
                        <PrimaryButton
                           onClick={() => {
                              navigate('/products');
                           }}
                           sx={{
                              width: {
                                 xs: '130px',
                                 md: '150px',
                                 lg: '180px',
                              },

                              fontSize: {
                                 xs: '1rem',
                                 md: '1.3rem',
                                 lg: '1.5rem',
                              },

                              padding: '5px',
                              color: 'black',
                           }}
                        >
                           SHOP NOW
                        </PrimaryButton>
                        <PrimaryButton
                           component={HashLink}
                           to='#offer-form'
                           sx={{
                              width: {
                                 xs: '180px',
                                 md: '200px',
                                 lg: '230px',
                              },
                              border: '2px solid #ffd05b',
                              backgroundColor: 'transparent',
                              '&:hover': {
                                 backgroundColor: 'transparent',
                                 border: '2px solid #ffd05b',
                                 color: 'primary.main',
                              },

                              fontSize: {
                                 xs: '0.8rem',
                                 md: '0.9rem',
                                 lg: '0.9rem',
                              },
                              fontWeight: '800',
                              padding: '10px',
                              color: 'primary.main',
                           }}
                        >
                           Book a free site visit
                        </PrimaryButton>
                     </Box>

                     <PrimaryButton
                        size='large'
                        component={HashLink}
                        to='#solar-calculator'
                        sx={{
                           fontSize: '1.2rem',
                           mt: '2rem',
                           borderRadius: '100px',
                           background: 'black',
                           padding: '1rem',
                           color: 'primary.main',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'space-between',
                           '&:hover': {
                              backgroundColor: 'black',
                              transform: 'scale(1.05)',
                              transition: 'transform 0.1s ease',
                           },
                        }}
                        type='submit'
                     >
                        <Box
                           sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              pl: '1rem',
                           }}
                        >
                           <Typography
                              variant='p'
                              component='h3'
                              sx={{ color: 'primary.main' }}
                           >
                              Solar Calculator
                           </Typography>
                           <Typography
                              component='h3'
                              variant='p'
                              sx={{ color: 'white', fontSize: '0.7rem' }}
                           >
                              Get your financial savings with solar!
                           </Typography>
                        </Box>
                        <ArrowForwardIcon
                           sx={{
                              fontSize: '3rem',
                              ml: '1rem',
                              color: 'black',
                              p: '0.5rem',
                              borderRadius: '100px',
                              backgroundColor: 'primary.main',
                           }}
                        />
                     </PrimaryButton>
                  </Box>
               </Stack>
            </HeroBox>
         </HeroWrapper>

         <Brands />

         <FormFeaturesWrapper>
            <OfferForm />
            <Features />
         </FormFeaturesWrapper>

         <SolarCalculator />

         <BookDemo />

         <WeCater />

         <ProductCategories />

         <ExploreProducts />

         <BookVisit />

         <SolrufBlogs />

         <ProcurementFlow />

         <TestimonialCardSlider2 />

         <BecomeVendor />

         <CompaniesPartnered />

         <HomeLeadForm
            open={leadFormOpen}
            onClose={() => setLeadFormOpen(false)}
         />
      </>
   );
}

export default Home;
