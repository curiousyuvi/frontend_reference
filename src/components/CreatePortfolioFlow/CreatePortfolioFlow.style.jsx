import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)",
  borderRadius: "38px",
  gap: "2rem",
  margin: "6rem 0",
}));

export const RowWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    alignItems: "center",
  },
  gap: "1rem",
}));

export const ColWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  maxWidth: "400px",
}));

export const ImageCircle = styled("img")(({ theme }) => ({
  height: "160px",
}));

export const ArrowImageRight = styled("img")(({ theme }) => ({
  width: "100px",
  "@media (max-width: 900px)": {
    display: "none",
  },
}));

export const ArrowImageDown = styled("img")(({ theme }) => ({
  height: "50px",
  "@media (min-width: 900px)": {
    display: "none",
  },
}));
