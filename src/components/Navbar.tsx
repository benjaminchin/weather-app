import React from "react";
import Item from "./Item";
import Cloud from "@mui/icons-material/Cloud";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <div className="navbar">
      <Item>
        <Typography variant="h4" fontWeight={700}>A Simple Weather App</Typography>
      </Item>
    </div>
  );
};

export default Navbar;
