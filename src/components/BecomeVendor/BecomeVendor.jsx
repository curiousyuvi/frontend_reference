import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../Custom/PrimaryButton/PrimaryButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const BecomeVendor = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          p: "2rem",
          my: "6rem",
          gap: "2rem",
          "@media (max-width: 900px)": {
            flexDirection: "column",
            alignItems: "center",
          },
          "@media (max-width: 600px)": {
            "& img": {
              width: "80% !important",
            },
          },
        }}
      >
        <img
          src='https://i.ibb.co/X3R1Dbk/Group-2119.png'
          alt=""
          style={{ width: "30rem",  }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            "@media (max-width: 900px)": {
              alignItems: "center",
            },
            gap: "1rem",
            maxWidth: "40rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "600",
              "@media (max-width: 900px)": {
                textAlign: "center",
              },
            }}
            component='h2'
          >
            Register your Brand with us

          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(0,0,0,0.5)",
              "@media (max-width: 900px)": {
                textAlign: "center",
              },
            }}
          >
           If you are a Solar Installer or have a Solar Products or Service business
          </Typography>
          <PrimaryButton
            size="large"
            component={Link}
            to="/vendors"
            sx={{
              fontSize: "1.2rem",
              "@media (max-width: 600px)": {
                fontSize: "0.8rem",
              },
              mt: "2rem",
              borderRadius: "100px",
              backgroundColor: "primary.main",
              color: "black",
              display: "flex",
              alignItems: "center",
              pr: "0.5rem",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "black",
                transform: "scale(1.05)",
                transition: "transform 0.1s ease",
              },
            }}
          >
            Become a Vendor
            <ArrowForwardIcon
              sx={{
                fontSize: "3rem",
                ml: "1rem",
                p: "0.5rem",
                borderRadius: "100px",
                backgroundColor: "black",
                color: "primary.main",
              }}
            />
          </PrimaryButton>
        </Box>
      </Box>
    </Container>
  );
};

export default BecomeVendor;
