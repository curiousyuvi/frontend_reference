import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "4rem",
  "@media (max-width: 1200px)": {
    padding: "4rem 3rem",
  },
  boxShadow:
    "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
  borderRadius: "38px",
  gap: "2rem",
  position: "relative",
  margin: "6rem 0",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    padding: "3rem 1rem",
  },
  overflow: "hidden",
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  zIndex: "10",
}));

export const ImageWrapper = styled("img")(({ theme }) => ({
  width: "400px",
  position: "absolute",
  zIndex: "1",
  bottom: "-5rem",
  opacity: "0.4",
  transform: "translateX(10rem)",
  "@media (max-width: 900px)": {
    display: "none",
  },
}));
