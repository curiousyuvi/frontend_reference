import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SolrufBlog = ({ title, intro, image, to, widel }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "20rem",
        width: widel ? "40rem" : "20rem",
        "@media (max-width: 1600px)": {
          width: "30rem",
        },
        boxShadow: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "flex-start",
          rowGap: "0.5rem",
          height: "100%",
          p: "2rem",
          width: "100%",
          background: "rgba(0,0,0,0.7)",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "600", color: "white" }}>
          {title}
        </Typography>
        <Typography variant="p" sx={{ fontWeight: "400", color: "white" }}>
          {intro}...
          <Link
            to={to}
            style={{
              color: "#ffd05b",
              fontWeight: "600",
              "&:hover": {
                color: "#ffd05b",
                textDecoration: "none",
              },
              whiteSpace: "nowrap",
            }}
          >
            Read More
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SolrufBlog;
