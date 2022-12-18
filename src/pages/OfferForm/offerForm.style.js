import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "900px",
  // border: "2px solid #ffd05b",
  borderRadius: "20px",
  padding: "1rem",
  minHeight: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  boxShadow: theme.shadows[25],
  overflow: "hidden",
}));

export const DetailsFieldBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  rowGap: "1rem",
}));

export const FieldsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  gap: "1rem",
}));

export const ColHeadingWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
}));

export const IntroWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
}));
