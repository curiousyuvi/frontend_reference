import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  margin: "6rem 0",
  padding: "1rem",
  gap: "2rem",
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  "@media (max-width: 900px)": {
    flexDirection: "column",
  },
  justifyContent: "space-evenly",
  width: "100%",
  alignItems: "center",
  gap: "2rem",
}));

export const ImageBox = styled("img")(({ theme }) => ({
  width: "400px",
  "@media (max-width: 600px)": {
    width: "100%",
  },
  "@media (max-width: 1200px)": {
    width: "250px",
  },
}));
