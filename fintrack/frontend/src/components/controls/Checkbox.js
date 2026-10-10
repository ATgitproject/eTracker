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
  const checked = value === undefined ? Boolean(checkedProp) : Boolean(value);

  return (
    <div>
      <InputLabel className={required ? "asterisk" : ""}>{label}</InputLabel>
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
    </div>
  );
};

export default Checkbox;
