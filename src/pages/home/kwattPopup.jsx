import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import kwattLogo from "../../assets/kwatt-logo.svg";
import FastForwardIcon from "@mui/icons-material/FastForward";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const KwattPopup = ({ setKwattPopup }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "2.5rem",
          backgroundColor: "rgba(214, 173, 77,0.8)",
          zIndex: "10",
          position: "fixed",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "@media (min-width: 900px)": {
            display: "none",
          },
        }}
      >
        <Box
          component={motion.p}
          animate={{ x: -2800 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            type: "linear",
            ease: "linear",
          }}
          sx={{ margin: "0", padding: "0" }}
        >
          <NavLink
            style={{
              color: "white",
              whiteSpace: "nowrap",
              fontWeight: "600",
              fontSize: "1rem",
              margin: "0",
              padding: "0",
              marginLeft: "5rem",
              display: "flex",
              alignItems: "center",
              columnGap: "5rem",
              textDecoration: "underline",
              textDecorationThickness: "0.1px",
              textDecorationColor: "rgba(256,256,256,0.7)",
              "&:hover": {
                textDecoration: "underline",
                color: "white",
                cursor: "pointer",
              },
            }}
            to="/blogs/kWatt-solar-courses"
          >
            <span>
              Check out the Solar Training courses by kWatt Solutions Pvt.
              Limited on upto 20% Discount.
            </span>
            <span>
              Check out the Solar Training courses by kWatt Solutions Pvt.
              Limited on upto 20% Discount.
            </span>
            <span>
              Check out the Solar Training courses by kWatt Solutions Pvt.
              Limited on upto 20% Discount.
            </span>
            <span>
              Check out the Solar Training courses by kWatt Solutions Pvt.
              Limited on upto 20% Discount.
            </span>
          </NavLink>
        </Box>
      </Box>
      <Box
        sx={{
          /*  */ position: "absolute",
          top: "20px",
          right: "20px",
          "@media (max-width: 900px)": {
            display: "none",
          },
          webkitBackdropFilter: "blur(5px)",
          backdropFilter: "blur(5px)",
          zIndex: "10",
          width: "20rem",
          border: "5px solid #ffd05b",
          borderRadius: "24px",
          height: "180px",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <IconButton
            sx={{
              color: "primary.light",
              position: "absolute",
              top: "5px",
              right: "5px",
              zIndex: "14",
            }}
            onClick={() => {
              setKwattPopup(false);
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              padding: "1rem",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              top: "0",
              position: "absolute",
              zIndex: "12",
            }}
          >
            <img
              src={kwattLogo}
              alt="kWatt Solutions Private Ltd."
              style={{ width: "100%" }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: "primary.light", fontWeight: "600" }}>
                Check out the Solar Training Courses upto 20% Discount
              </Typography>
              <Link
                style={{
                  border: "2px solid black",
                  textDecoration: "none",
                  animationDuration: "1s",
                  animationName: "ping",
                  animationIterationCount: "infinite",
                  borderRadius: "10px",
                  padding: "2px 8px 0 8px",
                }}
                // LinkComponent={Link}
                to="/blogs/kWatt-solar-courses"
              >
                <FastForwardIcon />
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "#FFB600",
              opacity: "0.5",
              borderRadius: "24px",
              transform: "rotate(-2.32deg) scale(1.03)",
              zIndex: "10",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default KwattPopup;
