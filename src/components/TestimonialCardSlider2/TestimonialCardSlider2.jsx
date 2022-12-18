import 'swiper/modules/effect-cards/effect-cards.scss';
import { Container, Typography } from '@mui/material';
import './flickity.css';

import customerImage from '../../assets/customer.jpeg';
import {
   ContentWrapper,
   ImageWrapper,
   RowWrapper,
   SlideOuterWrapper,
   SmallImageWrapper,
   TestimonialSlideWrapper,
   Wrapper,
} from './TestimonialCardSlider.style';
import Flickity from 'react-flickity-component';

const TestimonialCardSlider2 = () => {
   const testimonials = [
      {
         image: customerImage,
         name: 'Bella Smith',
         role: 'Consumer',
         testimonial:
            'Thank you for your first class service and support; it is greatly appreciated.',
      },
      {
         image: customerImage,
         name: 'Bella Smith',
         role: 'Consumer',
         testimonial:
            'We have made a choice for our solar and it isn’t one from your list. That isn’t because they weren’t good. The one we chose spent a lot of time discussing our resources and needs and came up for what we saw as our best options. I went to Solruf for more options at the particular time of our information collection. Rest assured Solruf people were both very good. I have recommended them both to one of my friends who is interested. I have learned that it is a very competitive market.',
      },
      {
         image: customerImage,
         name: 'Bella Smith',
         role: 'Consumer',
         testimonial:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibhmauris, nec turpis orci lectus maecenas. Suspendisse sed magna egetnibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felisid augue sit cursus pellentesque enim Lorem ipsum dolor sit amet,consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectusmaecenas. ',
      },
   ];

   const flickityOptions = {
      initialIndex: 0,
   };

   return (
      <Container
         maxWidth='xl'
         sx={{
            '@media (max-width: 900px)': {
               padding: '0',
            },
         }}
      >
         <Wrapper>
            <Typography
               variant='h3'
               sx={{
                  fontWeight: '600',
                  mb: 5,
                  '@media (max-width: 900px)': {
                     padding: '0 1rem',
                     width: '100%',
                     textAlign: 'center',
                  },
               }}
               component='h2'
            >
               Our customers say <span style={{
                  color: '#ffbc15'
               }}>
               about us
               </span>
            </Typography>

            {/* <Swiper
          modules={[Navigation]}
          className="testimonial-slider2"
          navigation={{
            nextEl: ".testimonial-swiper-button-next",
            prevEl: ".testimonial-swiper-button-prev",
          }}
        >
          {testimonials.map((testimonial, indexO) => (
            <>
              <SwiperSlide key={indexO}>
                <SlideOuterWrapper>
                  <TestimonialSlideWrapper>
                    <ImageWrapper src={testimonial.image} alt="" />
                    <ContentWrapper>
                      <RowWrapper>
                        <SmallImageWrapper src={testimonial.image} alt="" />
                        <Typography
                          variant="p"
                          sx={{ fontWeight: "700", fontSize: "1rem" }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="p"
                          sx={{
                            fontWeight: "600",
                            "@media (min-width: 600px)": {
                              display: "none",
                            },
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </RowWrapper>

                      <Typography
                        variant="p"
                        sx={{
                          fontWeight: "600",
                          "@media (max-width: 600px)": {
                            display: "none",
                          },
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                      <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                        {testimonial.testimonial}
                      </Typography>
                    </ContentWrapper>
                  </TestimonialSlideWrapper>
                </SlideOuterWrapper>
              </SwiperSlide>
            </>
          ))}
          <SwiperButtonWrapper>
            <Box className="testimonial-swiper-button-prev">
              <ChevronLeftIcon sx={{ fontSize: "3rem" }} />
            </Box>
            <Box className="testimonial-swiper-button-next">
              <ChevronRightIcon sx={{ fontSize: "3rem" }} />
            </Box>
          </SwiperButtonWrapper>
        </Swiper> */}
            <Flickity
               className={'testimonial-slider2'} // default ''
               elementType={'div'} // default 'div'
               options={flickityOptions} // takes flickity options {}
               disableImagesLoaded={false} // default false
               reloadOnUpdate // default false
               static // default false
            >
               {testimonials.map((testimonial, index) => (
                  <SlideOuterWrapper>
                     <TestimonialSlideWrapper key={index + testimonial.name}>
                        <ImageWrapper src={testimonial.image} alt='' />
                        <ContentWrapper>
                           <RowWrapper>
                              <SmallImageWrapper
                                 src={testimonial.image}
                                 alt=''
                              />
                              <Typography
                                 variant='p'
                                 sx={{ fontWeight: '700', fontSize: '1.2rem' }}
                              >
                                 {testimonial.name}
                              </Typography>
                              <Typography
                                 variant='p'
                                 sx={{
                                    fontWeight: '600',
                                    color: '#676767',
                                    '@media (min-width: 900px)': {
                                       display: 'none',
                                    },
                                 }}
                              >
                                 {testimonial.role}
                              </Typography>
                           </RowWrapper>

                           <Typography
                              variant='p'
                              sx={{
                                 fontWeight: '600',
                                  color: '#676767',
                                 '@media (max-width: 900px)': {
                                    display: 'none',
                                 },
                              }}
                           >
                              {testimonial.role}
                           </Typography>
                           <Typography
                              variant='h6'
                              sx={{ fontSize: '1rem', mt: 2 }}
                           >
                              {testimonial.testimonial.length > 200
                                 ? testimonial.testimonial.slice(0, 180) + '...'
                                 : testimonial.testimonial}
                           </Typography>
                        </ContentWrapper>
                     </TestimonialSlideWrapper>
                  </SlideOuterWrapper>
               ))}
            </Flickity>
         </Wrapper>
      </Container>
   );
};

export default TestimonialCardSlider2;
