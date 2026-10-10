"use client";
import React from "react";
import {
  TextField as MuiTextField,
  InputAdornment,
  InputLabel,
} from "@mui/material";

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
  fullWidth = true,
  size = "medium",
}) => {
  return (
    <div>
      <InputLabel className={required ? "asterisk" : ""}>{label}</InputLabel>
      <MuiTextField
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
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
      />
    </div>
  );
};

export default TextField;
