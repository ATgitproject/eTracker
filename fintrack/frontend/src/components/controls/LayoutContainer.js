"use client";
import React from "react";
import { Box, Grid } from "@mui/material";

const LayoutContainer = ({ children }) => {
  return (
    <Grid container spacing={2} className="page-renderer__content">
      {children}
    </Grid>
  );
};

export default LayoutContainer;
