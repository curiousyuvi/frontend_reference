import { Container, Typography, useMediaQuery } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { axiAuth } from "../../utils/axiosInstance";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Navigation } from "swiper";
import HomeProductCard from "../HomeProductCard/HomeProductCard";

const ExploreProducts = () => {
  const toWindows = (inputArray, size) => {
    return inputArray.reduce((acc, _, index, arr) => {
      if (index + size > arr.length) {
        //we've reached the maximum number of windows, so don't add any more
        return acc;
      }

      //add a new window of [currentItem, maxWindowSizeItem)
      return acc.concat(
        //wrap in extra array, otherwise .concat flattens it
        [arr.slice(index, index + size)]
      );
    }, []);
  };
  const [products, setProducts] = useState(null);
  const fetchProducts = () => {
    let url = "api/products?length=9&page=2";
    axiAuth.post(url).then((data) => {
      data.data.products && setProducts(data.data.products);
    });
  };

  const match1200 = useMediaQuery((theme) => theme.breakpoints.down(1200));

  const match900 = useMediaQuery((theme) => theme.breakpoints.down(900));

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {products ? (
        <Container
          maxWidth="xl"
          sx={{
            width: "100%",
            margin: "4rem auto",
            "& .swiper": {
              width: "100%",
              // maxWidth: "600px",
              height: "600px",
            },
            "& .swiper-slide": {
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: "1rem",
            gap: "2rem",
            "@media (max-width: 600px)": {
              gap: "0",
            },
            py: "2rem",
          }}
        >
          <Typography variant="h3" fontWeight="600" sx={{
            mb: 3
          }}>
            Explore our <span style={{ color: "#ffd05b" }}>Products</span>
          </Typography>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "2rem",
              width: "100%",
              p: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                overflowX: "auto",
                width: "100%",
                gap: "2rem",
              }}
            >
              {products.map((product) => (
                <ProductCard actionType="purchase" product={product} />
              ))}
            </Box>
          </Box> */}
          <Swiper
            modules={[Navigation]}
            className="product-slider"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {/* {products.map((product, index) => (
              <SwiperSlide key={index}>
                <HomeProductCard actionType="purchase" product={product} />
              </SwiperSlide>
            ))} */}
            {toWindows(products, match900 ? 1 : match1200 ? 2 : 3).map(
              (productWindow, indexO) => (
                <>
                  <SwiperSlide key={indexO}>
                    {productWindow.map((product, indexI) => (
                      <HomeProductCard
                        key={indexI}
                        actionType="enquiry"
                        product={product}
                      />
                    ))}{" "}
                  </SwiperSlide>
                </>
              )
            )}

            {
              <Fragment>
                {/* used material icons instead of font awesome icons */}

                <div className="swiper-button-prev">
                  <ChevronLeftIcon />
                </div>
                <div className="swiper-button-next">
                  <ChevronRightIcon />
                </div>
              </Fragment>
            }
          </Swiper>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default ExploreProducts;
