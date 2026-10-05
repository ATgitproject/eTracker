"use client";

import React from "react";

import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

const Checkbox = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  required = false,
  ...props
}) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          {...props}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
