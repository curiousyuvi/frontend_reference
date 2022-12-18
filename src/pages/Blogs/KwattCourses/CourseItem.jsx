import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

const CourseItem = ({
  right,
  title,
  description,
  price,
  prevPrice,
  image,
  shortDescription,
  borchureUrl,
  agendaUrl,
  by,
  enrollNowAnchor,
  enrollNowAction,
  noPrice,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "start",
        flexDirection: right ? "row-reverse" : "",
        "@media (max-width: 900px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          width: "46rem",
          position: "relative",
          borderRadius: "17px",
          "@media (max-width: 900px)": {
            width: "100%",
          },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.35)",
            position: "absolute",
            opacity: "0",
            "&:hover": {
              opacity: "1",
              "& h4": {
                transform: "translateY(-1rem)",
              },
              "& h6": {
                transform: "translateY(-1rem)",
              },
            },
            transition: "all 0.5s",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: "1rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              color: "primary.light",
              transition: "all 0.5s",
            }}
          >
            {title.toUpperCase()}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "400",
              textAlign: "center",
              color: "primary.light",
              transition: "all 0.5s",
            }}
          >
            {shortDescription}
          </Typography>
        </Box>
        <img src={image} alt="" style={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: right ? "flex-end" : "flex-start",
          mx: "2rem",
          "@media (max-width: 900px)": {
            my: "1.5rem",
            mx: 0,
            alignItems: "flex-start",
          },
          justifyContent: "start",
          rowGap: "0.7rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            textAlign: right ? "right" : "",
            "@media (max-width: 900px)": {
              textAlign: "left",
              fontSize: "1.4rem",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "500",
            color: "primary.dark",
            textAlign: right ? "right" : "",
            maxHeight: "10rem",

            "@media (max-width: 900px)": {
              textAlign: "left",
              fontSize: "1rem",
              maxHeight: "20rem",
            },
            overflowY: "hidden",
            fontSize: "1.2rem",
          }}
        >
          {description}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          by {by}
        </Typography>
        {!noPrice ? (
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                "@media (max-width: 900px)": {
                  fontSize: "1.2rem",
                },
              }}
            >
              ₹{price}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                color: "primary.dark",
                textDecoration: "line-through",
                "@media (max-width: 900px)": {
                  fontSize: "1rem",
                },
              }}
            >
              ₹{prevPrice}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                backgroundColor: "primary.main",
                px: "0.5rem",
                "@media (max-width: 900px)": {
                  fontSize: "1rem",
                },
              }}
            >
              20% Discount
            </Typography>
          </Box>
        ) : (
          <></>
        )}
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
          <Button
            href={borchureUrl}
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "primary.light",
              backgroundColor: "primary.dark",
              columnGap: "0.5rem",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "primary.dark",
                textDecoration: "none",
                color: "white",
              },
              "@media (max-width: 900px)": {
                fontSize: "0.8rem",
                columnGap: "0.2rem",
              },
            }}
          >
            Course Brochure
            <SystemUpdateAltIcon />
          </Button>
          {agendaUrl && (
            <Button
              href={agendaUrl}
              target="_blank"
              rel="noreferrer"
              sx={{
                color: "primary.light",
                backgroundColor: "primary.dark",
                columnGap: "0.5rem",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  textDecoration: "none",
                  color: "white",
                },
                "@media (max-width: 900px)": {
                  fontSize: "0.8rem",
                  columnGap: "0.2rem",
                },
              }}
            >
              Course Agenda
              <SystemUpdateAltIcon />
            </Button>
          )}
          {enrollNowAnchor ? (
            <Button
              component="a"
              href={enrollNowAnchor}
              target="_blank"
              rel="noreferrer"
              sx={{
                color: "primary.light",
                backgroundColor: "primary.dark",
                columnGap: "0.5rem",
                fontSize: "1rem",
                "&:hover": {
                  textDecoration: "none",
                  backgroundColor: "primary.dark",
                  color: "white",
                },
                "@media (max-width: 900px)": {
                  fontSize: "0.8rem",
                  columnGap: "0.2rem",
                },
              }}
            >
              Enroll Now
            </Button>
          ) : (
            <Button
              sx={{
                color: "primary.light",
                backgroundColor: "primary.dark",
                columnGap: "0.5rem",
                fontSize: "1rem",
                "&:hover": {
                  textDecoration: "none",
                  backgroundColor: "primary.dark",
                  color: "white",
                },
                "@media (max-width: 900px)": {
                  fontSize: "0.8rem",
                  columnGap: "0.2rem",
                },
              }}
              onClick={enrollNowAction}
            >
              Enroll Now
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseItem;
