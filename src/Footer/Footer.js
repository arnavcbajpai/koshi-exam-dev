import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
          COVID 19 Tracker
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Footer;
