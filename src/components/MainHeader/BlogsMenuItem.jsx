import { MenuItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { MenuItemSolruf } from "./mainHeader.style";

const BlogsMenuItem = ({ to, children, style }) => {
  return (
    <MenuItemSolruf>
      <MenuItem
        component={NavLink}
        to={to}
        style={({ isActive }) =>
          isActive
            ? {
                background: " rgba(229,  231, 235)",
              }
            : undefined
        }
        sx={{
          display: "flex",
          alignItems: "center",
          "& svg": {
            marginRight: "0.5rem",
            fontSize: "20px",
          },
          fontSize: "14px",
        }}
      >
        {/* <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& svg': {
                     marginRight: '0.5rem',
                     fontSize: '20px',
                  },
                  fontSize: '14px',
               }}
            > */}
        {/* <LibraryBooksIcon /> */}
        {children}
        {/* </Box> */}
      </MenuItem>
    </MenuItemSolruf>
  );
};

export default BlogsMenuItem;
