import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { HeroBox, MobileImageBox } from "./B2BHero.style";
import sellMobileImage from "../../assets/sell-mobile.png";
import startSellingImage from "../../assets/start-selling.svg";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../../redux/slices/loginModalSlice";

const B2BHero = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleStartSelling = () => {
    !user && dispatch(openLoginModal());
  };
  return (
    <HeroBox>
      <Box
        sx={{
          position: "absolute",
          width: "1000px",
          height: "300px",
          bottom: "-10rem",
          right: "-10rem",
          transform: "rotate(-20deg)",
          backgroundColor: "primary.main",
          "@media (max-width: 1200px)": {
            display: "none",
          },
        }}
      />
      <Box
        component="img"
        src={startSellingImage}
        alt=""
        sx={{
          position: "absolute",
          width: "600px",
          bottom: "0",
          right: "10rem",
          "@media (max-width: 1200px)": {
            display: "none",
          },
          "@media (max-width: 1600px)": {
            right: "0",
            width: "500px",
          },
          "@media (max-width: 1800px)": {
            width: "400px",
          },
        }}
      />
      {/* <Box
        component="img"
        src={startSellingImage}
        alt=""
        sx={{
          position: "absolute",
          width: "600px",
          bottom: "0",
          right: "10rem",
          "@media (max-width: 1300px)": {
            display: "none",
          },
          "@media (max-width: 1800px)": {
            right: "1rem",
          },
        }}
      /> */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          "@media (max-width: 1800px)": {
            maxWidth: "700px",
          },
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          "@media (max-width: 1200px)": {
            gap: "1.5rem",
            alignItems: "center",
            maxWidth: "100%",
          },
        }}
      >
        <MobileImageBox src={sellMobileImage} alt="" />
        <Typography
          variant="h2"
          sx={{
            fontWeight: "800",
            "@media (max-width: 900px)": {
              fontSize: "1.6rem",
            },
            "@media (max-height: 800px)": {
              fontSize: "1.6rem",
            },
          }}
        >
          How to sell on <span style={{ color: "#ffd05b" }}>Solruf</span>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width: 900px)": {
              fontSize: "1rem",
            },
            "@media (max-width: 1200px)": {
              textAlign: "center",
            },
            "@media (max-height: 800px)": {
              fontSize: "1rem",
            },
          }}
        >
          Instantly create & share your business portfolios, get quality
          customer leads and procure top quality products at lowest cost
          directly from verified/certified manufacturers & distributors
        </Typography>
        <Box
          sx={{
            borderRadius: "100px",
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            width: "30rem",
            "@media (max-width: 900px)": {
              width: "20rem",
            },
            "@media (max-height: 800px)": {
              width: "20rem",
            },
          }}
        >
          <Typography
            variant="p"
            sx={{
              p: "0.5rem 1rem",
              fontWeight: "700",
              fontSize: "1.2rem",
              "@media (max-width: 900px)": {
                fontSize: "0.8rem",
              },
              "@media (max-height: 800px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            +91
          </Typography>
          <TextField
            variant="standard"
            sx={{ width: "100%", fontSize: "1.2rem" }}
            InputProps={{
              disableUnderline: true,
              fontSize: "1.4rem", // <== added this
            }}
          />
          <Button
            onClick={handleStartSelling}
            sx={{
              p: "1rem 2rem",
              background: "#000000",
              color: "white",
              borderRadius: "0 100px 100px 0",
              width: "20rem",
              "&:hover": {
                background: "black",
                color: "primary.main",
              },
              "@media (max-width: 900px)": {
                fontSize: "0.8rem",
                p: "0.5rem",
              },
              "@media (max-height: 800px)": {
                fontSize: "0.8rem",
                p: "0.5rem",
              },
            }}
          >
            Start Selling!
          </Button>
        </Box>
      </Box>
    </HeroBox>
  );
};

export default B2BHero;
