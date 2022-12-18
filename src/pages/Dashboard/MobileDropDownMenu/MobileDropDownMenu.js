import React from "react";

import { Box } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

// const styles = {
//   textDecoration: "none",
//   "&:hover": {
//     color: "#ffd05b",
//   },
// };

function MobileDropDownMenu(props) {
  const location = useLocation();
  const shouldDisplay = () => {
    return props.display;
  };

  let dropDownItems = props.dropDownTitles.map((title, ind) => {
    return (
      <NavLink
        key={title}
        fontWeight={props.activeMenu === ind ? 600 : 400}
        margin={"10px"}
        to={props.dropDownLinks[ind]}
        style={({ isActive }) => {
          console.log(title, location.pathname.split("/").slice(-1)[0]);
          return {
            color:
              title === "Dashboard"
                ? location.pathname.split("/").slice(-1)[0] === "dashboard"
                  ? "#fff"
                  : "#ffd05b"
                : isActive
                ? "#fff"
                : "#ffd05b",
            fontWeight:
              title === "Dashboard"
                ? location.pathname.split("/").slice(-1)[0] === "dashboard"
                  ? "600"
                  : "400"
                : isActive
                ? "600"
                : "400",
            fontSize: "1.3rem",
          };
        }}
        onClick={() => {
          props.showDropDown(false);
          props.setActiveMenu(ind);
        }}
      >
        {title}
      </NavLink>
    );
  });

  return (
    <Box
      sx={{
        width: "98%",
        padding: "10px 5px",
        maxHeight: "358px",
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "0 0 4px 4px",
        bgcolor: "primary.dark",
        zIndex: "1000",
        display: shouldDisplay() === true ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      {dropDownItems}
    </Box>
  );
}

export { MobileDropDownMenu };
