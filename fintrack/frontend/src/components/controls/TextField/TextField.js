"use client";

import React from "react";

import { TextField as MuiTextField, InputAdornment } from "@mui/material";

import "./TextField.scss";

const TextField = ({
  label,
  placeholder,
  type = "text",
  icon,
  required = false,
  value = "",
  onChange,
  onBlur,
  name,
  id,
  disabled = false,
  error = false,
  helperText,
  fullWidth = true,
  size = "medium",
  ...props
}) => {
  return (
    <MuiTextField
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      size={size}
      variant="outlined"
      slotProps={{
        input: {
          startAdornment: icon ? (
            <InputAdornment position="start">{icon}</InputAdornment>
          ) : undefined,
        },
      }}
      {...props}
    />
  );
};

export default TextField;
