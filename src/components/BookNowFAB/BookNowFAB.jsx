import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { HashLink } from "react-router-hash-link";

const BookNowFAB = () => {
  return (
    <Button
      component={HashLink}
      to="#offer-form"
      sx={{
        position: "fixed",
        boxShadow: 5,
        bottom: "5rem",
        right: "5rem",
        "@media (max-width: 600px)": { display: "none" },
        zIndex: "99999",
        backgroundColor: "primary.main",
        color: "black",
        p: "0",
        width: "14rem",
        height: "4rem",
        borderTopRightRadius: "20px",
        transition: "all 0.8s ease",
        "&:hover": {
          "& .cart-icon": {
            transform: "translateX(11rem)",
          },
          "& .book-now": {
            ml: "0",
            mr: "3rem",
          },
          borderTopRightRadius: "0px",
          borderTopLeftRadius: "20px",

          backgroundColor: "primary.main",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          transition: "all 0.8s ease",
        }}
      >
        <Box
          className="cart-icon"
          sx={{
            background: "white",
            boxShadow: 5,
            borderRadius: "100px",
            height: "5rem",
            width: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: "-1rem",
            transition: "all 0.8s ease",
          }}
        >
          <ShoppingCartOutlinedIcon />
        </Box>
        <Typography
          className="book-now"
          variant="p"
          sx={{ fontSize: "1.3rem", ml: "3rem", transition: "all 0.8s ease" }}
        >
          Book Now
        </Typography>
      </Box>
    </Button>
  );
};

export default BookNowFAB;
