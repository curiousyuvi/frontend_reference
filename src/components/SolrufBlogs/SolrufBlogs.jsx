import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SolrufBlog from "./SolrufBlog";
import solarPV from "../../assets/solar-pv.jpeg";
import solarInstallation from "../../assets/solar-installation.jpeg";

const SolrufBlogs = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          width: "100%",
          alignItems: "center",
          p: "1rem",
          margin: "6rem 0",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "700", mb: 8 }} component='h2'>
          Let’s learn from{" "}
          <span style={{ color: "#ffd05b", whiteSpace: "nowrap" }}>
            Solruf Blogs
          </span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <SolrufBlog
            title="WHAT STEPS DO I NEED TO TAKE BEFORE SOLAR POWER SYSTEM INSTALLATION?"
            intro="Once you have decided on your requirement for solar power system, it is time to identify a trustworthy solar company. We would advise you to do your research for the solar company you want to get a solar plant from because it is a product"
            image={solarInstallation}
            to="/blogs/solarSteps"
            widel
          />
          <SolrufBlog
            title="TYPES OF PV SYSTEMS"
            intro="PV systems that are connected to the grid do not require battery storage. A battery can, however, be added to a grid-connected solar system at any time. A grid-connected system is a simple setup that makes use of a grid-connected inverter. It's great for"
            image={solarPV}
            to="/blogs/typesOfPvSystems"
          />
          <SolrufBlog
            title="SOLAR INSTALLATION PROCESS"
            intro="Here we will discuss the process of installing a photovoltaic system.The most common location for the installation of solar PV panels is the roof. Most roofs typically have the desired specifications for the installation "
            image="https://i.ibb.co/ZhwXXWp/Rectangle-155-2.png"
            to="/blogs/solarInstallationProcess"
          />
          <SolrufBlog
            title="COMPONENTS USED FOR INSTALLATION"
            intro="Solar panels collect clean renewable energy in the form of sunlight and convert that light into electricity. Solar batteries are an additional component that allows for the storage of solar photovoltaic energy, so we can use it. Solar inverters are used "
            image="https://i.ibb.co/x2b4q9M/Rectangle-155-3.png"
            to="/blogs/solarComponents"
          />
          <SolrufBlog
            title="SOLAR PANEL MAINTENANCE"
            intro="Solar panels require extremely little maintenance because they have no moving parts. However, you should check them a few times a year for dirt or other debris that may have accumulated on top. You should check the warranty conditions with your installer "
            image="https://i.ibb.co/cJDTyxS/Rectangle-155-4.png"
            to="/blogs/maintenance"
          />
          <SolrufBlog
            title="KWATT SOLAR COURSES"
            intro="kWatt Solutions Pvt Ltd is active in the renewable energy space, focusing on energy optimization and technology customization to endow with economic renewable energy solutions by creating and nurturing a network of entrepreneurs. Founded by Dr. Chetan Singh Solanki and incubated at the renowned IIT Bombay's Society for Innovation and Entrepreneurship (SINE)"
            image="'https://solruf.s3.ap-south-1.amazonaws.com/kwatt-bg+(1)+(1)+(1)+(1)+(1)+(1)+(1).png'"
            to="/blogs/kWatt-solar-courses"
            widel
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SolrufBlogs;
