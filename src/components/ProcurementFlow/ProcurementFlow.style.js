import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  margin: "6rem 0",
  "@media (max-width: 1200px)": {
    display: "none",
  },
}));

export const StepsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: "1rem",
  justifyContent: "center",
}));

export const StepWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  width: "400px",
}));
