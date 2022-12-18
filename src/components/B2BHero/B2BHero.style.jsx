import { Box } from "@mui/material";
import styled from "styled-components";

export const HeroBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  "@media (max-height: 800px)": {
    height: "60%",
  },
  // minHeight: "24rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "8rem",
  background: "rgba(228, 163, 0, 0.05)",
  borderRadius: "0px 0px 139px 139px",
  "@media (max-width: 1200px)": {
    padding: "2rem",
    borderRadius: "0px 0px 37.6458px 37.6458px",
  },
  position: "relative",
  overflow: "hidden",
}));

export const MobileImageBox = styled("img")(({ theme }) => ({
  height: "200px",
  "@media (min-width: 900px)": {
    display: "none",
  },
}));
