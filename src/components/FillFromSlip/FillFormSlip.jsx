import { Box, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../Custom/PrimaryButton/PrimaryButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import solarPanelImage from "../../assets/solar-panel.png";
import { HashLink } from "react-router-hash-link";

const FillFormSlip = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(88.96deg, #FFD05B -7.29%, #EBA800 98.86%);",
        display: "flex",
        width: "100%",
        height: "15rem",
        alignItems: "center",
        justifyContent: "space-evenly",
        my: "3rem",
        "@media (max-width: 900px)": {
          "& img": {
            display: "none",
          },
        },
      }}
    >
      <img
        src={solarPanelImage}
        alt=""
        style={{ scale: "1.4", transform: "translateY(-8px)" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", p: "1rem" }}>
        <Typography variant="h4" fontWeight={600} component='h2'>
          Book a Free Solar site visit
        </Typography>
        <PrimaryButton
          size="large"
          component={HashLink}
          to="#offer-form"
          sx={{
            fontSize: "1.2rem",
            mt: "1rem",
            borderRadius: "100px",
            background: "black",
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            pr: "0.5rem",
            width: "18rem",
            "&:hover": {
              backgroundColor: "black",
              color: "primary.main",
              textDecoration: "none",
              transform: "scale(1.05)",
              transition: "transform 0.1s ease",
            },
          }}
        >
          Fill up the form
          <ArrowForwardIcon
            sx={{
              fontSize: "3rem",
              ml: "1rem",
              color: "black",
              p: "0.5rem",
              borderRadius: "100px",
              backgroundColor: "primary.main",
            }}
          />
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default FillFormSlip;
