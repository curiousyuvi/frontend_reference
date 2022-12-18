import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { setProductData } from "../../../redux/slices/viewProductSlice";
import { useNavigate } from "react-router-dom";
import { productName } from "./productCategoriesData";

const ProductImageBox = styled(Box)(({ theme }) => ({
  width: "260px",
  height: "320px",
  position: "relative",
  padding: "14px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "2rem 40px",
  "&:hover #overlay": {
    opacity: 1,
  },
  boxShadow: "0px 2px 24px rgba(22, 60, 158, 0.2)",
  borderRadius: "8px",
}));

const ImageBox = styled("img")(({ theme }) => ({
  height: "200px",
  width: "200px",
  objectFit: "cover",
}));

const OverlayBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#00000095",
  opacity: "0",
  height: "100%",
  width: "100%",
  position: "absolute",
  top: "0px",
  transition: "opacity 0.5s",
  cursor: "pointer",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ProductCategories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let productCards = productName.map((item, ind) => {
    return (
      <ProductImageBox key={ind}>
        <OverlayBox
          id="overlay"
          onClick={() => {
            dispatch(
              setProductData({
                productCategoryData: item.CategoryId,
                productSubCategoryData: item.SubCategoryId,
              })
            );
            navigate(`/products`);
          }}
        >
          <Typography variant="h6" color={"white"} fontWeight={600}>
            View Product
          </Typography>
        </OverlayBox>
        <ImageBox sx={{ borderRadius: 2 }} src={item.image}></ImageBox>
        <Typography variant="h6" textAlign={"center"}>
          {item.name}
        </Typography>
      </ProductImageBox>
    );
  });

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "10px 10px 40px 10px",
        borderRadius: "10px",
        my: "4rem",
      }}
      explore
      our
    >
      <Typography variant="h3" textAlign="center" fontWeight={600}  sx={{
        mb: 6
      }}>
        Explore Using <span style={{ color: "#ffd05b" }}>Categories</span>
      </Typography>
      <Box
        sx={{
          margin: "auto",
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "space-between",
          flexWrap: "wrap",
          borderRadius: "10px",
        }}
      >
        {productCards}
      </Box>
    </Container>
  );
};

export default ProductCategories;
