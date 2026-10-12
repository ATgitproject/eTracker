"use client";
import React from "react";
import {
  TextField as MuiTextField,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { fieldControlSx, fieldLabelSx } from "./utils/fieldStyles";

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
      <InputLabel sx={fieldLabelSx} className={required ? "asterisk" : ""}>
        {label}
      </InputLabel>
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
        sx={fieldControlSx}
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
