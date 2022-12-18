import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  gap: "2rem",
  margin: "6rem 0",
  "& .testimonial-slider2": {
    width: "100%",
  },
  // "& .flickity-button": {
  //   width: "30px",
  //   border: "none",
  //   outline: "none",
  //   background: "transparent",
  //   margin: "1rem 3rem",
  // },
}));

export const SlideOuterWrapper = styled(Box)(({ theme }) => ({
  padding: "1rem 4rem",
  width: "60%",

  "@media (max-width: 900px)": {
    padding: "1rem 2rem",
  },

  "@media (max-width: 600px)": {
    width: "80%",
    padding: "1rem 1.5rem",
  },
  "@media (max-width: 500px)": {
    padding: "1rem",
  },
  "@media (max-width: 400px)": {
    padding: "0.7rem",
  },
  // paddingBottom: "2rem",
}));

export const TestimonialSlideWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "15rem",
  display: "flex",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)",
  borderRadius: "20px",
  gap: "2rem",
  overflow: "hidden",
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  "@media (max-width: 900px)": {
    gap: "0.5rem",
  },
  padding: "1rem",
}));

export const RowWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
}));

export const SmallImageWrapper = styled("img")(({ theme }) => ({
  width: "3rem",
  height: "3rem",
  borderRadius: "3rem",
  objectFit: "cover",
  "@media (min-width: 900px)": {
    display: "none",
  },
}));

export const SwiperButtonWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "4rem",
}));

export const ImageWrapper = styled("img")(({ theme }) => ({
  width: "20rem",
  objectFit: "cover",
  height: "100%",
  overflow: "hidden",
  "@media (max-width: 900px)": {
    display: "none",
  },
}));
