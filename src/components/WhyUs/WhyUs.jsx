import { Container, Typography } from "@mui/material";
import React from "react";
import { ColWrapper, ImageCircle, RowWrapper, Wrapper } from "./WhyUs.style";
import createShareImage from "../../assets/create-share.svg";
import panImage from "../../assets/pan-circle.svg";
import snedQuoteImage from "../../assets/send-quote.svg";
import paymentSecurityImage from "../../assets/payment-security.svg";
import boostBImage from "../../assets/boost-b.svg";

const WhyUs = () => {
  return (
    <Container maxWidth="xl">
      <Wrapper>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          <span style={{ color: "#ffd05b", whiteSpace: "nowrap" }}>Why</span>{" "}
          Us?
        </Typography>
        <RowWrapper>
          <ColWrapper>
            <ImageCircle src={createShareImage} alt="" />
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                "@media (max-width: 900px)": {
                  padding: "1rem",
                  fontSize: "1rem",
                },
              }}
            >
              Create & share your business profile links
            </Typography>
          </ColWrapper>
          <ColWrapper right>
            <ImageCircle src={paymentSecurityImage} alt="" />
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                "@media (max-width: 900px)": {
                  padding: "1rem",
                  fontSize: "1rem",
                },
              }}
            >
              Payment security & nationwide delivery
            </Typography>
          </ColWrapper>
          <ColWrapper>
            <ImageCircle src={panImage} alt="" />
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                "@media (max-width: 900px)": {
                  padding: "1rem",
                  fontSize: "1rem",
                },
              }}
            >
              PAN India manufacturers & distributors
            </Typography>
          </ColWrapper>
          <ColWrapper right>
            <ImageCircle src={snedQuoteImage} alt="" />
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                "@media (max-width: 900px)": {
                  padding: "1rem",
                  fontSize: "1rem",
                },
              }}
            >
              Send quotes to clients anytime, anywhere
            </Typography>
          </ColWrapper>
          <ColWrapper>
            <ImageCircle src={boostBImage} alt="" />
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                "@media (max-width: 900px)": {
                  padding: "1rem",
                  fontSize: "1rem",
                },
              }}
            >
              Boost your business reach by 9X
            </Typography>
          </ColWrapper>
        </RowWrapper>
      </Wrapper>
    </Container>
  );
};

export default WhyUs;
