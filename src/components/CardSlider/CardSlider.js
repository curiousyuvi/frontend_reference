import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { EffectCards, Keyboard, Scrollbar, Navigation, Pagination  } from 'swiper';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';
import 'swiper/modules/effect-cards/effect-cards.scss';

// import "swiper/modules/scrollbar/scrollbar.scss";


import './styles.css';

// import required modules
// import { EffectCards } from 'swiper';

const CardSlider = () => {
   return (
      <div>
         {' '}
         <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Navigation, Pagination, Keyboard, Scrollbar]}
            className='mySwiper'
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
         >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>


            <div className='swiper-button-prev'>
               {/* <i className='fas fa-chevron-left'></i> */}
               {/* <NavigateNextIcon sx={{
                  transform: 'rotate(180deg)'
               }} /> */}
            </div>
            <div className='swiper-button-next'>
               {/* <i className='fas fa-chevron-right'></i> */}

               {/* <NavigateNextIcon /> */}
            </div>
         </Swiper>
      </div>
   );
};

export default CardSlider;
