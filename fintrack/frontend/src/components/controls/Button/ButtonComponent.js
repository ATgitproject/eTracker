"use client";

import React from "react";
import { Button as MuiButton, CircularProgress } from "@mui/material";

const ButtonComponent = ({
  label,
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  startIcon,
  endIcon,
  ...props
}) => {
  const muiVariant =
    variant === "primary"
      ? "contained"
      : variant === "secondary"
        ? "outlined"
        : "text";

  return (
    <MuiButton
      type={type}
      variant={muiVariant}
      onClick={onClick}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      startIcon={loading ? null : startIcon}
      endIcon={loading ? null : endIcon}
      sx={{
        height: "40px",
        minWidth: "140px",
        padding: "0 20px",
        borderRadius: "10px",
        textTransform: "none",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1,

        ...(variant === "primary" && {
          color: "#fff",
          background: "linear-gradient(135deg, #6D3DF5 0%, #5B2FE8 100%)",
          boxShadow: "0 4px 12px rgba(108, 61, 245, 0.22)",

          "&:hover": {
            background: "linear-gradient(135deg, #6032E8 0%, #4F25D6 100%)",
            boxShadow: "0 6px 16px rgba(108, 61, 245, 0.28)",
          },

          "&:active": {
            transform: "translateY(1px)",
          },

          "&.Mui-disabled": {
            color: "#fff",
            background: "#C9BDF5",
            boxShadow: "none",
          },
        }),

        ...(variant === "secondary" && {
          borderColor: "#D9D1FF",
          color: "#5B2FE8",

          "&:hover": {
            borderColor: "#6D3DF5",
            backgroundColor: "#F7F4FF",
          },
        }),

        ...props.sx,
      }}
      {...props}
    >
      {loading ? (
        <CircularProgress
          size={18}
          sx={{
            color: "inherit",
          }}
        />
      ) : (
        children || label
      )}
    </MuiButton>
  );
};

export default ButtonComponent;
