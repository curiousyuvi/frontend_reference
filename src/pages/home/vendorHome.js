import React from "react";
import { Box } from "@mui/system";
import ProductCategories from "./productsCategories/productsCategories";
import B2BHero from "../../components/B2BHero/B2BHero";
import WhyUs from "../../components/WhyUs/WhyUs";
import CreatePortfolioFlow from "../../components/CreatePortfolioFlow/CreatePortfolioFlow";
import BookDemo from "../../components/BookDemo/BookDemo";
import Installers from "../../components/Installers/Installers";
import TestimonialCardSlider from "../../components/TestimonialCardSlider/TestimonialCardSlider";
import SolrufBlogs from "../../components/SolrufBlogs/SolrufBlogs";
import WeCater from "../../components/WeCater/WeCater";

function VendorHome({ register }) {
  // const [kwattPopup, setKwattPopup] = useState(true);

  return (
    <>
      {/* {kwattPopup && <KwattPopup setKwattPopup={setKwattPopup} />} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 100px)",
          gap: "1rem",
          "@media (max-width: 900px)": {
            height: "155vh",
          },
        }}
      >
        <B2BHero />
        <WhyUs />
      </Box>

      <CreatePortfolioFlow />

      <BookDemo />

      <Installers />

      <TestimonialCardSlider />

      <ProductCategories />

      <WeCater />

      <SolrufBlogs />
    </>
  );
}

export default VendorHome;
