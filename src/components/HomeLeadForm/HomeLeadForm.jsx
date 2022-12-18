import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  Background,
  EnquiryMSItem,
  FormWrapper,
  LeadFormWrapper,
  RowWrapper,
  SendWrapper,
  ThanksWrapper,
  Wrapper,
} from "./HomeLeadForm.style";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SolrufTextField from "../TextField/TextField";
import SendIcon from "@mui/icons-material/Send";
import PrimaryButton from "../Custom/PrimaryButton/PrimaryButton";
import SolrufModal3 from "../Custom/SolrufModal/SolrufModal3";
import sunSvg from "../../assets/sun.svg";
import siSvg from "../../assets/solar-installation.svg";
import smSvg from "../../assets/solar-maintenance.svg";
import spSvg from "../../assets/solar-products.svg";
import otherSvg from "../../assets/other.svg";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import sent from "../../assets/lottie/sent.json";
import solarHouse from "../../assets/lottie/solar-house.json";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import { axiAuth } from "../../utils/axiosInstance";
// import { toast } from "react-toastify";
import { HashLink } from "react-router-hash-link";
import { toast } from "react-toastify";
import axios from "axios";

// import { ActionsWrapper } from "../CustomerDetailsDrawer/GetAQuoteStyle";

const HomeLeadForm = ({ ...rest }) => {
  //   console.log(data);
  const [pageIdx, setPageIdx] = useState(1);
  // const [siOn, setSiOn] = useState(false);
  // const [smOn, setSmOn] = useState(false);
  // const [spOn, setSpOn] = useState(false);

  const [service, setService] = useState("n/a");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendEnquiry = async (formData) => {
    console.log(formData);

    setPageIdx(3);
    setTimeout(() => {
      rest.onClose();
    }, 4000);

    const data = {
      // vendor_id: "unregistered",
      name: formData.name,
      mobile: formData.phone,
      type: "Lead form",
      email: formData.email,
      address: "n/a",
      message: formData.query,
      service_type: service,
    };

    try {
      const { status } = await axios.post(
        "https://sheet.best/api/sheets/b0c3e070-a8e0-443e-868e-932170e60367/tabs/Homepage%20lead%20form",
        data
      );
      // const { status } = await axiAuth.post("api/booking-consultations", data);
      if (status === 200) {
        setPageIdx(3);
        setTimeout(() => {
          rest.onClose();
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const pages = [
    <Wrapper>
      <Background>
        <Box
          sx={{
            width: "156px",
            height: "156px",
            background: "#FFF2D1",
            borderRadius: "156px",
            position: "absolute",
            top: "-3px",
            left: "-70px",
            zIndex: "-1",
          }}
        />
        <img
          src={sunSvg}
          alt=""
          style={{
            width: "500px",
            height: "500px",
            position: "absolute",
            top: "-3px",
            right: "-250px",
            zIndex: "-1",
          }}
        />
        <LeadFormWrapper>
          {/* aba */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              rowGap: "1.5rem",
            }}
          >
            <Lottie
              animationData={solarHouse}
              loop={true}
              style={{ height: "14rem", transform: "scale(2.0)" }}
            />
            <PrimaryButton
              sx={{
                width: "100%",
                maxWidth: "30rem",
                py: 1.5,
                fontSize: "1rem",
                color: "#4d4d4d",
                backgroundColor: "primary.main",
                "&:hover": {
                  color: "#4d4d4d",
                  backgroundColor: "primary.main",
                },
                fontWeight: "600",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                setPageIdx(1);
              }}
            >
              Send us an Enquiry about our Services <ChevronRightIcon />
            </PrimaryButton>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "1.2rem",
                },
              }}
              fontWeight={400}
            >
              or
            </Typography>
            <PrimaryButton
              component={HashLink}
              to="#offer-form"
              sx={{
                width: "100%",
                maxWidth: "30rem",
                py: 1.5,
                fontSize: "1rem",
                background: "#4d4d4d",
                color: "primary.main",
                "&:hover": {
                  background: "#4d4d4d",
                  color: "primary.main",
                },
                fontWeight: "600",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                rest.onClose();
              }}
            >
              Book a Free Solar Site Visit
              <ChevronRightIcon />
            </PrimaryButton>
          </Box>
        </LeadFormWrapper>
      </Background>
    </Wrapper>,
    <Wrapper>
      <Background>
        <Box
          sx={{
            width: "156px",
            height: "156px",
            background: "#FFF2D1",
            borderRadius: "156px",
            position: "absolute",
            top: "-3px",
            left: "-70px",
            zIndex: "-1",
          }}
        />
        <img
          src={sunSvg}
          alt=""
          style={{
            width: "500px",
            height: "500px",
            position: "absolute",
            top: "-3px",
            right: "-250px",
            zIndex: "-1",
          }}
        />
        <LeadFormWrapper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              rowGap: "1.5rem",
              "@media (max-width: 600px)": {
                rowGap: "0.4rem",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "1.2rem",
                },
              }}
              fontWeight={500}
            >
              What services are you looking for?
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-evenly",
                rowGap: "1.5rem",
                columnGap: "1.5rem",
                "@media (max-width: 600px)": {
                  rowGap: "0.5rem",
                },

                flexWrap: "wrap",
              }}
            >
              <EnquiryMSItem
                component={motion.div}
                whileHover={{
                  scale: 0.9,
                }}
                sx={{
                  border: "1px solid #D8D8D8",
                  "-webkit-backdrop-filter": "blur(10px)",
                  "backdrop-filter": "blur(10px)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "10",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setService("solar installation");
                    setPageIdx(2);
                  }}
                />
                <img
                  src={siSvg}
                  alt=""
                  style={{
                    height: "5rem",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  SOLAR INSTALLATION
                </Typography>
              </EnquiryMSItem>
              <EnquiryMSItem
                component={motion.div}
                whileHover={{
                  scale: 0.9,
                }}
                sx={{
                  border: "1px solid #D8D8D8",
                  background: "transparent",
                  "-webkit-backdrop-filter": "blur(10px)",
                  "backdrop-filter": "blur(10px)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "10",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setService("solar maintenance");
                    setPageIdx(2);
                  }}
                />
                <img
                  src={smSvg}
                  alt=""
                  style={{
                    height: "5rem",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  SOLAR MAINTENANCE
                </Typography>
              </EnquiryMSItem>
              <EnquiryMSItem
                component={motion.div}
                whileHover={{
                  scale: 0.9,
                }}
                sx={{
                  border: "1px solid #D8D8D8",
                  background: "transparent",
                  "-webkit-backdrop-filter": "blur(10px)",
                  "backdrop-filter": "blur(10px)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "10",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setService("solar products");
                    setPageIdx(2);
                  }}
                />
                <img
                  src={spSvg}
                  alt=""
                  style={{
                    height: "5rem",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  SOLAR PRODUCTS
                </Typography>
              </EnquiryMSItem>
              <EnquiryMSItem
                component={motion.div}
                whileHover={{
                  scale: 0.9,
                }}
                sx={{
                  border: "1px solid #D8D8D8",
                  background: "transparent",
                  "-webkit-backdrop-filter": "blur(10px)",
                  "backdrop-filter": "blur(10px)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    cursor: "pointer",
                    zIndex: "10",
                  }}
                  component={HashLink}
                  to="#offer-form"
                  onClick={() => {
                    rest.onClose();
                  }}
                />
                <img
                  src={otherSvg}
                  alt=""
                  style={{
                    height: "5rem",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                  component='h2'
                >
                  Book a Free Solar Site Visit
                </Typography>
              </EnquiryMSItem>
            </Box>
          </Box>
          {/* <ActionWrapper>
            <Button
              sx={{
                width: "100%",

                py: 1.5,
                padding: "11px",
                fontSize: "1rem",
                color: "#000000",
                border: "1px solid #000000",
                "&:hover": {
                  border: 0,
                  bgcolor: "#ffcfcf",
                },
                fontWeight: "600",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
              variant="outlined"
              onClick={rest.onClose}
            >
              Skip
            </Button>
            <PrimaryButton
              sx={{
                width: "100%",

                py: 1.5,
                fontSize: "1rem",
                background: "#4d4d4d",
                color: "primary.main",
                "&:hover": {
                  background: "#000000",
                },
                fontWeight: "600",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                "&:disabled": {
                  background: "rgba(255, 208, 93, 0.5)",
                  color: "#4d4d4d",
                },
              }}
              onClick={() => {
                setPageIdx(2);
              }}
              disabled={!siOn && !smOn && !spOn && !otherOn}
            >
              Next <ChevronRightIcon />
            </PrimaryButton>
          </ActionWrapper> */}
        </LeadFormWrapper>
      </Background>
    </Wrapper>,
    <Wrapper>
      <Background>
        <img
          src={sunSvg}
          alt=""
          style={{
            width: "650px",
            height: "650px",
            position: "absolute",
            bottom: "-280px",
            left: "-270px",
            zIndex: "-1",
          }}
        />
        <LeadFormWrapper
          component="form"
          onSubmit={handleSubmit(handleSendEnquiry)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              rowGap: "0.5rem",
              padding: "1rem",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{ padding: "0", color: "#4d4d4d" }}
                onClick={() => {
                  setPageIdx(1);
                }}
              >
                <ChevronLeftIcon /> Go Back
              </Button>
            </Box>

            <Typography variant="h4" fontWeight={600}>
              Please tell us your enquiry.
            </Typography>
            <Typography variant="h5" fontWeight={400}>
              We will be get back to you shortly.
            </Typography>
          </Box>
          <RowWrapper sx={{ paddingBottom: "2rem" }}>
            <FormWrapper>
              <SolrufTextField
                size="large"
                sx={{
                  appearance: "none",
                  "& .MuiInputBase-root": {
                    borderRadius: "10px",
                    "-webkit-backdrop-filter": "blur(10px)",
                    "backdrop-filter": "blur(10px)",
                    background: "rgba(255, 255, 255,0.2)",
                  },
                }}
                label="Your Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required.",
                  },
                })}
                error={errors.name}
                helperText={errors.name ? errors.name.message : ""}
              />
              <SolrufTextField
                size="large"
                sx={{
                  appearance: "none",
                  "& .MuiInputBase-root": {
                    borderRadius: "10px",
                    "-webkit-backdrop-filter": "blur(10px)",
                    "backdrop-filter": "blur(10px)",
                    background: "rgba(255, 255, 255,0.2)",
                  },
                }}
                label="Your Phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone Number  is required.",
                  },
                  minLength: {
                    value: 10,
                    message:
                      "Phone Number must be at least 10 characters long.",
                  },
                  maxLength: {
                    value: 13,
                    message: "Phone Number too long.",
                  },
                })}
                error={errors.phone}
                helperText={errors.phone ? errors.phone.message : ""}
              />
              <SolrufTextField
                size="large"
                sx={{
                  appearance: "none",
                  "& .MuiInputBase-root": {
                    borderRadius: "10px",
                    "-webkit-backdrop-filter": "blur(10px)",
                    "backdrop-filter": "blur(10px)",
                    background: "rgba(255, 255, 255,0.2)",
                  },
                }}
                label="Your Email (Optional)"
                {...register("email")}
                // error={errors.email}
                // helperText={errors.email ? errors.email.message : ''}
              />
              <SolrufTextField
                size="large"
                multiline
                rows={3}
                sx={{
                  appearance: "none",
                  "& .MuiInputBase-root": {
                    borderRadius: "10px",
                    "-webkit-backdrop-filter": "blur(10px)",
                    "backdrop-filter": "blur(10px)",
                    background: "rgba(255, 255, 255,0.2)",
                  },
                }}
                label="Your Query"
                {...register("query")}
                error={errors.query}
                helperText={errors.query ? errors.query.message : ""}
              />
            </FormWrapper>
            <SendWrapper
              sx={{
                alignItems: "space-between",
              }}
            >
              <Lottie
                animationData={solarHouse}
                loop={true}
                style={{ height: "14rem", transform: "scale(2.2)" }}
              />
              <PrimaryButton
                type="submit"
                sx={{
                  width: "100%",
                  py: 1.5,
                  fontSize: "1rem",
                  background: "#4d4d4d",
                  color: "#FFD05B",
                  "&:hover": {
                    background: "#000000",
                  },

                  "&:disabled": {
                    background: "rgba(255, 208, 93, 0.5)",
                    color: "#4d4d4d",
                  },

                  fontWeight: "600",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  mt: "1.5rem",
                }}

                // disabled={isSubmitting}
              >
                Send Enquiry <SendIcon sx={{ marginLeft: "0.5rem" }} />
              </PrimaryButton>
            </SendWrapper>
          </RowWrapper>
          <Box
            sx={{
              display: "none",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              columnGap: "1.5rem",
              "@media (max-width: 600px)": {
                display: "flex",
              },
            }}
          >
            <PrimaryButton
              type="submit"
              sx={{
                width: "100%",

                py: 1.5,
                fontSize: "1rem",
                background: "#000000",
                color: "#FFD05B",
                "&:hover": {
                  background: "#000000",
                },
                fontWeight: "600",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Send Enquiry <SendIcon sx={{ marginLeft: "0.5rem" }} />
            </PrimaryButton>
          </Box>
        </LeadFormWrapper>
      </Background>
    </Wrapper>,
    <Wrapper>
      <Background>
        <img
          src={sunSvg}
          alt=""
          style={{
            width: "600px",
            height: "600px",
            position: "absolute",
            bottom: "-230px",
            right: "-250px",
            zIndex: "-1",
          }}
        />
        <ThanksWrapper>
          <Lottie
            animationData={sent}
            loop={true}
            style={{ height: "20rem", marginBottom: "4rem" }}
          />
          <Typography
            variant="h3"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "1.3rem",
              },
            }}
            fontWeight={600}
          >
            Thanks for submitting
          </Typography>
          <Typography
            variant="h5"
            fontWeight={400}
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "1rem",
              },
            }}
          >
            You will be hearing from us soon!
          </Typography>
        </ThanksWrapper>
      </Background>
    </Wrapper>,
  ];

  return (
    <div>
      <SolrufModal3 {...rest}>{pages[pageIdx]}</SolrufModal3>
    </div>
  );
};

export default HomeLeadForm;
