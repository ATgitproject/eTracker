"use client";

import React from "react";

import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

const Checkbox = ({
  id,
  label,
  checked: checkedProp,
  value,
  onChange,
  disabled = false,
  required = false,
  ...props
}) => {
  const checked = value === undefined ? Boolean(checkedProp) : Boolean(value);

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
