import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import PrimaryButton from "../Custom/PrimaryButton/PrimaryButton";

import ProductDetailList from "../ProductDetailList/ProductDetailList";
import ProductSlider from "../ProductSlider/ProductSlider";
import { ProductCardWrapper } from "./productCard.style";
import noImage from "../../assets/no-image.jpeg";

const noImages = [noImage, noImage, noImage, noImage, noImage, noImage];

const ProductCard = ({ product, bookingOn, sx, editable, actionType }) => {
  const { product_name = "New Product", product_slug = "na" } = product || {};
  const navigate = useNavigate();

  console.log(product);

  return (
    <ProductCardWrapper
      sx={{
        ...sx,
      }}
    >
      {/* <img
        src={`${
          bookingOn
            ? "https://i.ibb.co/YNmYkyg/Frame-169-1.png"
            : "https://i.ibb.co/PDPmLL2/sale-1-1.png"
        }`}
        alt=""
        style={{
          position: "absolute",
          top: "2%",
          left: "2%",
          zIndex: 1000,
        }}
      /> */}
      {product?.images ? (
        <ProductSlider images={product?.images.map((img) => img.image_url)} />
      ) : (
        <ProductSlider images={noImages} />
      )}

      <Box sx={{ mb: 3, mt: 1.5 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "600", textAlign: "center" }}
        >
          {product_name.length > 20
            ? `${product_name.substring(0, 20)}...`
            : product_name}
        </Typography>
        <ProductDetailList list="Price/Watt" description="Rs 256/sq.ft." />
        <ProductDetailList list="Price Of Panel" description="Rs 2500000" />
        <ProductDetailList list="Power Capacity" description="1024 Watts" />
        {/* <ProductDetailList list="Power Capacity" description="1024 Watts" /> */}
      </Box>
      {editable && (
        <PrimaryButton variant="secondary" fullWidth>
          Edit
        </PrimaryButton>
      )}

      {actionType === "purchase" && (
        <PrimaryButton
          fullWidth
          onClick={() => navigate(`/purchaseProduct/${product_slug}`)}
        >
          Purchase
        </PrimaryButton>
      )}

      {actionType === "enquiry" && (
        <PrimaryButton
          fullWidth
          onClick={() =>
            navigate(`/products/${product?.product_id}/${product_slug}`)
          }
        >
          Enquiry
        </PrimaryButton>
      )}
    </ProductCardWrapper>
  );
};

export default ProductCard;

/* 

{/* <img
               src={`${
                  bookingOn
                     ? 'https://i.ibb.co/YNmYkyg/Frame-169-1.png'
                     : 'https://i.ibb.co/PDPmLL2/sale-1-1.png'
               }`}
               alt=''
               style={{ position: 'absolute', top: '3%' }}
            /> 
*/
