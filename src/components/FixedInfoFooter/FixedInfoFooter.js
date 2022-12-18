import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Wrapper } from "./fixedInfoFooter.style";

import EmailIcon from "@mui/icons-material/Email";
// import { MailIcon } from '@heroicons/react/outline';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FixedInfoFooter = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        width: "100%",
        backgroundColor: "primary.main",
        zIndex: "1000",
        "@media (max-width: 900px)": {
          backgroundColor: "primary.main",
        },
      }}
    >
      <Container maxWidth="xl">
        <Wrapper>
          <Typography
            component="a"
            href="mailto:support@solruf.com"
            sx={{
              display: {
                xs: "none",
                sm: "inline-block",
              },
              color: "#4d4d4d",

              "&:hover": {
                color: "#4d4d4d",
              },
            }}
          >
            support@solruf.com
          </Typography>
          <Typography
            component="a"
            href="mailto:support@solruf.com"
            sx={{
              display: {
                xs: "inline-block",
                sm: "none",
              },
              "&:hover": {
                color: "#4d4d4d",
              },
              "@media (max-width: 900px)": {
                color: "#4d4d4d",
              },
            }}
          >
            <EmailIcon />
          </Typography>

          <Typography
            sx={{
              color: "#4d4d4d",
            }}
          >
            Pan India Services
          </Typography>
          <Box
            sx={{
              alignItems: "center",
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <WhatsAppIcon
              sx={{
                color: "#4d4d4d",
                mr: 1,
              }}
            />
            <Typography
              component="a"
              href="https://api.whatsapp.com/send?phone=+918600694140&text=Hello%20there%21%20I%20would%20like%20to%20know%20more%20about%20SOLRUF%20or%20would%20like%20to%20purchase%20a%20solar%20product.%20Can%20you%20help%20us%20with%20this%3F"
              sx={{
                color: "#4d4d4d",
                "&:hover": {
                  color: "#4d4d4d",
                },
              }}
            >
              +91-8600694140
            </Typography>
          </Box>
          <Typography
            component="a"
            href="https://api.whatsapp.com/send?phone=+918600694140&text=Hello%20there%21%20I%20would%20like%20to%20know%20more%20about%20SOLRUF%20or%20would%20like%20to%20purchase%20a%20solar%20product.%20Can%20you%20help%20us%20with%20this%3F"
            sx={{
              display: {
                xs: "inline-block",
                sm: "none",
              },
              "&:hover": {
                color: "#4d4d4d",
              },
              "@media (max-width: 900px)": {
                color: "#4d4d4d",
              },
            }}
          >
            <WhatsAppIcon />
          </Typography>
        </Wrapper>
      </Container>
    </Box>
  );
};

export default FixedInfoFooter;
