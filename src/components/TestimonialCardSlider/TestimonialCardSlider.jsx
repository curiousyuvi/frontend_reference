import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import {
  EffectCards,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper";

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';
import "swiper/modules/effect-cards/effect-cards.scss";
import vendorImage from "../../assets/vendor.jpeg";
import blob from "../../assets/blob.svg";

// import "swiper/modules/scrollbar/scrollbar.scss";

import "./styles.css";
import { Box, Container, Typography } from "@mui/material";

// import required modules
// import { EffectCards } from 'swiper';

const TestimonialCardSlider = () => {
  const testimonials = [
    {
      image: vendorImage,
      name: "Bella Smith",
      role: "Vendor",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibhmauris, nec turpis orci lectus maecenas. Suspendisse sed magna egetnibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felisid augue sit cursus pellentesque enim Lorem ipsum dolor sit amet,consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectusmaecenas. Suspendisse sed magna eget nibh in turpis. Consequat duisdiam lacus arcu. ",
    },
    {
      image: vendorImage,
      name: "Bella Smith",
      role: "Vendor",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibhmauris, nec turpis orci lectus maecenas. Suspendisse sed magna egetnibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felisid augue sit cursus pellentesque enim Lorem ipsum dolor sit amet,consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectusmaecenas. Suspendisse sed magna eget nibh in turpis. Consequat duisdiam lacus arcu. ",
    },
    {
      image: vendorImage,
      name: "Bella Smith",
      role: "Vendor",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibhmauris, nec turpis orci lectus maecenas. Suspendisse sed magna egetnibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felisid augue sit cursus pellentesque enim Lorem ipsum dolor sit amet,consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectusmaecenas. Suspendisse sed magna eget nibh in turpis. Consequat duisdiam lacus arcu. ",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: "2rem",
          my: "6rem",
          p: "1rem",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "600" }}>
          What other <span style={{ color: "#ffd05b" }}>Installers</span> say
        </Typography>
        <Box
          className="testimonial"
          sx={{
            position: "relative",
            display: "flex",
            my: "4rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 900px)": {
              "& .blob": {
                display: "none",
              },
            },
            "& .swiper-slide-visible": {
              "& .testimonial-content": {
                "& img": {
                  opacity: "1",
                },
                "@media (min-width: 600px)": {
                  transform: "translateY(-5rem)",
                  pb: "0.2rem",
                },
                transition: "opacity 0.5s ease",
              },
            },
          }}
        >
          <img
            src={blob}
            alt=""
            className="blob"
            style={{
              position: "absolute",
              transform: "translateX(5rem)",
            }}
          />
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Navigation, Pagination, Keyboard, Scrollbar]}
            className="mySwiper"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide>
                <Box
                  className="testimonial-content"
                  sx={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    justifyContent: "space-evenly",
                    p: "3rem",
                    pb: "0",
                    "& img": {
                      opacity: "0",
                    },
                    "@media (max-width: 600px)": {
                      transform: "translateY(0)",
                      gap: "0.2rem",
                      p: "1rem",

                      "& img": {
                        width: "60px !important",
                      },
                    },
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt=""
                    style={{ borderRadius: "120px", width: "120px" }}
                  />
                  <Typography
                    varinat="h4"
                    sx={{
                      fontWeight: "600",
                      "@media (max-width: 600px)": {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    varinat="h6"
                    sx={{
                      "@media (max-width: 600px)": {
                        fontSize: "0.8rem",
                      },
                    }}
                  >
                    {" "}
                    {testimonial.role}
                  </Typography>
                  <Typography
                    varinat="h6"
                    sx={{
                      textAlign: "center",
                      "@media (max-width: 600px)": {
                        fontSize: "0.8rem",
                      },
                    }}
                  >
                    {testimonial.testimonial}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}

            <Box
              className="swiper-button-prev"
              sx={{
                backgroundColor: "primary.main",
                width: "50px",
                height: "50px",
                p: "1rem",
                borderRadius: "50px",
                color: "white",
              }}
            >
              <ChevronLeftIcon />
            </Box>
            <Box
              className="swiper-button-next"
              sx={{
                backgroundColor: "primary.main",
                width: "50px",
                height: "50px",
                p: "1rem",
                borderRadius: "50px",
                color: "white",
              }}
            >
              <ChevronRightIcon />
            </Box>
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
};

export default TestimonialCardSlider;
