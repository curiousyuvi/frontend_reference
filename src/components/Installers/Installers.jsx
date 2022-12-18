import { Container, Typography } from "@mui/material";
import React from "react";
import { ImageBox, Wrapper } from "./Installers.style";
import installersImage from "../../assets/installers.png";

const Installers = () => {
  return (
    <Container maxWidth="xl">
      <Wrapper>
        <Typography variant="h3" sx={{ fontWeight: "600" }}>
          <span style={{ color: "#ffd05b" }}>20+</span> Installers onboarded
          with us
        </Typography>
        <ImageBox src={installersImage} alt="" />
      </Wrapper>
    </Container>
  );
};

export default Installers;
