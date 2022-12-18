import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import PrimaryButton from "../Custom/PrimaryButton/PrimaryButton";

import ProductDetailList from "../ProductDetailList/ProductDetailList";
import { ProductCardWrapper } from "./HomeProductCard.style";
import { useEffect, useState } from "react";

const HomeProductCard = ({ product, bookingOn, sx, editable, actionType }) => {
  const { product_name = "New Product", product_slug = "na" } = product || {};
  const navigate = useNavigate();



  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    if (product?.attributes && product?.attributes.length > 0) {
      setAttributes(
        product.attributes.filter(
          (attribute) =>
            attribute?.attribute_values[attribute?.attribute_values?.length - 1]
              ?.views?.procurement_card?.visibility
        )
      );
    }
  }, [product?.attributes]);

  return (
    <ProductCardWrapper
      sx={{
        ...sx,
      }}
    >
      <img
        src={product?.images[0].image_url}
        alt="product images"
        className="product-slider-image"
      />

      <Box sx={{ mb: 3, mt: 1.5 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "600", textAlign: "center" }}
        >
          {product_name.length > 20
            ? `${product_name.substring(0, 20)}...`
            : product_name}
        </Typography>


        <ProductDetailList
          description={`${product.main_category?.name}, ${product.sub_category?.sub_category_name}`}
          list='Category'
            sx={{
              textAlign: "left",
            }}
        />
        <ProductDetailList
          description={product?.product_brand_name}
          list='Brand'

        />

        {attributes.length > 0 &&
          attributes
            ?.filter(
              (attribute) =>
                attribute?.attribute_values[
                  attribute?.attribute_values?.length - 1
                ]?.views?.procurement_card?.visibility
            )
            .slice(0, 2)
            .map((attribute) => (
              <ProductDetailList
                list={attribute.name}
                description={`${
                  attribute?.attribute_values[
                    attribute?.attribute_values.length - 1
                  ]?.value
                } ${
                  attribute?.attribute_values[
                    attribute?.attribute_values.length - 1
                  ]?.value_unit
                }`}
              />
            ))}
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

export default HomeProductCard;

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
