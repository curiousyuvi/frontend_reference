import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: "2rem",
  gap: "3rem",
  width: "100%",
  "@media (max-width: 600px)": {
    padding: "1rem",
    gap: "2rem",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "600px",
}));

export const FeaturesWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "4rem",
  width: "100%",
  "@media (max-width: 600px)": {
    gap: "1rem",
    flexDirection: "column",
  },
  "@media (min-width: 600px)": {
    flexWrap: "wrap",
  },
  justifyContent: "center",
}));

export const FeatureWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "180px",
  alignItems: "center",
  gap: "0.5rem",
  "@media (max-width: 1200px)": {
    width: "120px",
    "& img": {
      width: "100px !important",
    },
  },
  "@media (max-width: 600px)": {
    flexDirection: "row",
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0px 1.03194px 4.5182px rgba(0, 0, 0, 0.25)",
  },
}));
