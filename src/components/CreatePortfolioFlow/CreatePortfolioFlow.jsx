import { Container, Typography } from "@mui/material";
import React from "react";
import {
  ArrowImageDown,
  ArrowImageRight,
  ColWrapper,
  ImageCircle,
  RowWrapper,
  Wrapper,
} from "./CreatePortfolioFlow.style";
import accountImage from "../../assets/account.svg";
import sharePortfolioImage from "../../assets/share-portfolio.svg";
import portfolioImage from "../../assets/portfolio2.svg";
import arrowRight from "../../assets/arrow.svg";
import arrowDown from "../../assets/arrow-down.svg";

import PrimaryButton from "../Custom/PrimaryButton/PrimaryButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CreatePortfolioFlow = () => {
  return (
    <Container maxWidth="xl">
      <Wrapper>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Create your{" "}
          <span style={{ color: "#ffd05b" }}>One Page Digital Shop</span> in 15
          min
        </Typography>
        <RowWrapper>
          <ColWrapper>
            <ImageCircle src={accountImage} alt="" />
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "600" }}
            >
              Create your account
            </Typography>
          </ColWrapper>
          <ArrowImageRight src={arrowRight} alt="" />
          <ArrowImageDown src={arrowDown} alt="" />

          <ColWrapper>
            <ImageCircle src={portfolioImage} alt="" />
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "600" }}
            >
              Create Personalised Portfolio
            </Typography>
          </ColWrapper>
          <ArrowImageRight src={arrowRight} alt="" />
          <ArrowImageDown src={arrowDown} alt="" />

          <ColWrapper>
            <ImageCircle src={sharePortfolioImage} alt="" />
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "600" }}
            >
              Share Portfolio in one click
            </Typography>
          </ColWrapper>
        </RowWrapper>
        <PrimaryButton
          size="large"
          sx={{
            fontSize: "1.2rem",
            "@media (max-width: 600px)": {
              fontSize: "0.8rem",
            },
            borderRadius: "100px",
            background: "black",
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            mt: "2rem",
            pr: "0.5rem",
            "&:hover": {
              backgroundColor: "black",
              transform: "scale(1.05)",
              transition: "transform 0.1s ease",
            },
          }}
        >
          Create your own sample solar portfolio
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
      </Wrapper>
    </Container>
  );
};

export default CreatePortfolioFlow;
