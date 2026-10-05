"use client";

import React from "react";

import { Button as MuiButton } from "@mui/material";

const Button = ({
    label,
    children,
    variant = "primary",
    type = "button",
    onClick,
    disabled = false,
    loading = false,
    fullWidth = true,
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
            startIcon={startIcon}
            endIcon={endIcon}
            {...props}
        >
            {loading ? "Loading..." : children || label}
        </MuiButton>
    );
};

export default Button;