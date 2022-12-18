import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  gap: "2rem",
  margin: "6rem 0",
}));

export const ImageBox = styled("img")(({ theme }) => ({
  width: "100%",
}));
