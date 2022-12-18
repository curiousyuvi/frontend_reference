import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  margin: "105px 0",
  height: "120px",
  "@media (max-width: 600px)": {
    margin: "50px 0",
    height: "auto",
  },
  padding: "2rem 0",
  position: "relative",
}));

export const Overlay = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  background: "rgba(0,0,0,0.4)",
  top: "0",
  right: "0",
  zIndex: "10",
  backdropFilter: "blur(4px)",
  opacity: "0",
  "&:hover": {
    opacity: "1",
  },
  "@media (max-width: 600px)": {
    display: "none",
  },
  transition: "opacity 0.8s ease",
}));

export const BrandsSlip = styled(Box)(({ theme }) => ({
  zIndex: "1",
  display: "flex",
  alignItems: "center",
  gap: "6rem",
  "& img": {
    height: "50px",
  },
  "@media (max-width: 600px)": {
    gap: "2rem",
    "& img": {
      height: "38px",
    },
  },
}));

export const SliderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  overflowX: "hidden",
}));
