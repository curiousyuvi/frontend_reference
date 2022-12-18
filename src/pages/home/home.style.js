import { Box, styled } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "calc(100vh - 94px)",
  "@media (max-width: 900px)": {
    height: "calc(100vh - 107px)",
  },
}));

export const FormFeaturesWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  margin: "6rem 0",
  gap: "1rem",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    alignItems: "center",
  },
  width: "100%",
  padding: "1rem",
}));
