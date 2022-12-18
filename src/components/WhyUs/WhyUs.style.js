import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  gap: "2rem",
  "@media (max-width: 900px)": {
    alignItems: "center",
  },
}));

export const RowWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "2rem",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ColWrapper = styled(Box)(({ theme, right }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  maxWidth: "400px",
  "@media (max-width: 900px)": {
    flexDirection: right ? "row-reverse" : "row",
    borderRadius: "600px",
    boxShadow: "0px 1.03194px 4.5182px rgba(0, 0, 0, 0.25)",
  },
}));

export const ImageCircle = styled("img")(({ theme }) => ({
  width: "120px",
  "@media (max-width: 900px)": {
    width: "80px",
  },
}));
