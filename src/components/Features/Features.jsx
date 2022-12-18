import { Typography } from "@mui/material";
import React from "react";
import panIndiaImage from "../../assets/pan.svg";
import solarImage from "../../assets/solar-home.svg";
import securityImage from "../../assets/security.svg";
import portfolioImage from "../../assets/portfolio.svg";
import { FeaturesWrapper, FeatureWrapper, Wrapper } from "./Features.style";

const Features = () => {
  return (
    <Wrapper>
      <Typography variant="h4" sx={{ fontWeight: "500" }}>
        Why choose us?
      </Typography>
      <FeaturesWrapper>
        <FeatureWrapper>
          <img src={panIndiaImage} alt="" style={{ width: "150px" }} />
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              "@media (max-width: 600px)": {
                fontSize: "1.1rem",
              },
            }}
            component='h3'
          >
            Nationwide Manufacturers & Distributors
          </Typography>
        </FeatureWrapper>
        <FeatureWrapper>
          <img src={solarImage} alt="" style={{ width: "150px" }} />
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              "@media (max-width: 600px)": {
                fontSize: "1.1rem",
              },
            }}
          >
            Solar Installations from top Installers in your locality
          </Typography>
        </FeatureWrapper>
        <FeatureWrapper>
          <img src={securityImage} alt="" style={{ width: "150px" }} />
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              "@media (max-width: 600px)": {
                fontSize: "1.1rem",
              },
            }}
          >
            Payment Security & Nationwide delivery
          </Typography>
        </FeatureWrapper>
        <FeatureWrapper>
          <img src={portfolioImage} alt="" style={{ width: "150px" }} />
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              "@media (max-width: 600px)": {
                fontSize: "1.1rem",
              },
            }}
          >
            Verified Vendor Solar profiles
          </Typography>
        </FeatureWrapper>
      </FeaturesWrapper>
    </Wrapper>
  );
};

export default Features;
