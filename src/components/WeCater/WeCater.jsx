import { Container, Typography } from "@mui/material";
import React from "react";
import { ContentWrapper, ImageBox, Wrapper } from "./WeCater.style";
import residentialImage from "../../assets/residential.png";
import industrialImage from "../../assets/industrial.png";
import commercialImage from "../../assets/commercial.png";

const WeCater = () => {
  return (
    <Container maxWidth="xl">
      <Wrapper>
        <Typography variant="h3" sx={{ fontWeight: "700", mb: 5 }}>
          We <span style={{ color: "#ffd05b" }}>Cater</span>
        </Typography>
        <ContentWrapper>
          <ImageBox src={residentialImage} alt="" />
          <ImageBox src={industrialImage} alt="" />
          <ImageBox src={commercialImage} alt="" />
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default WeCater;
