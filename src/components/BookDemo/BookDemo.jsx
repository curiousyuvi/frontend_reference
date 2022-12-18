import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
// import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";
import { ImageWrapper, TextWrapper, Wrapper } from "./BookDemo.style";
import calendarImage from "../../assets/calendar.png";

const BookDemo = () => {
  const PopupButtonWrapper = styled(Box)(({ theme }) => ({
    "& .calendly-popup-button": {
      zIndex: "10",
      cursor: "pointer",
      padding: "1rem 2rem",
      borderRadius: "15px",
      outline: "none",
      border: "none",
      background: theme.palette.primary.main,
      fontWeight: "700",
      fontSize: "1.3rem",
      color: "primary.dark",
      "@media (max-width: 900px)": {
        fontSize: "1.1rem",
        padding: "0.8rem 1.6rem",
      },
    },
  }));
  return (
    <Container maxWidth="xl">
      <Wrapper>
        <ImageWrapper src={calendarImage} alt="" />
        <TextWrapper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "1rem",
              "@media (max-width: 900px)": {
                alignItems: "center",
              },
            }}
          >
            <Typography
              variant="h3"
              component='h2'
              sx={{
                whiteSpace: "nowrap",
                fontWeight: "700",

                "@media (max-width: 900px)": {
                  fontSize: "2rem",
                  textAlign: "center",
                },
                "@media (max-width: 600px)": {
                  whiteSpace: "normal",
                  fontSize: "1.6rem",
                },
                "@media (max-width: 400px)": {
                  fontSize: "1.4rem",
                },
              }}
            >
              Book a{" "}
              <span
                style={{
                  color: "#ffd05b",
                  whiteSpace: "nowrap",
                }}
              >
                Solar session
              </span>{" "}
              with us <br />
            </Typography>

            <Typography
              component='h2'
              sx={{
                fontWeight: "700",
                whiteSpace: "nowrap",
                fontSize: "2rem",
                "@media (max-width: 1200px)": {
                  fontSize: "1.4rem",
                },
                "@media (max-width: 900px)": {
                  fontSize: "1rem",
                  textAlign: "center",
                  whiteSpace: "normal",
                  fontWeight: "600",
                },
              }}
            >
              on solar installation process and financial benefits.
            </Typography>
          </Box>
        </TextWrapper>
        <PopupButtonWrapper>
          <PopupButton
            className="calendly-popup-button"
            url="https://calendly.com/solruf-operations/solruf-solar-installation-session?hide_landing_page_details=1&hide_gdpr_banner=1"
            rootElement={document.getElementById("root")}
            text="Book Now"
          />
        </PopupButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default BookDemo;
