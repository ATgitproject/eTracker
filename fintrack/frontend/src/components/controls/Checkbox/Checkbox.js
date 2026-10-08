"use client";

import React from "react";
import { InputLabel } from "@mui/material";
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
  return (
    <div>
      <InputLabel className={required ? "asterisk" : ""}>{label}</InputLabel>
      <FormControlLabel
        control={
          <MuiCheckbox
            id={id}
            checked={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            {...props}
          />
        }
        label={label}
      />
    </div>
  );
};

export default Checkbox;
