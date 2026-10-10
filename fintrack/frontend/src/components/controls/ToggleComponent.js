"use client";

import React from "react";
import { Box, InputLabel, Switch, Typography } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";

const ICON_REGISTRY = {
  sync: SyncIcon,
};

const ToggleComponent = ({
  label = "",
  checked: checkedProp = false,
  value,
  onChange,
  icon,
  disabled = false,
  required = false,
  name,
  ...props
}) => {
  const Icon = ICON_REGISTRY[icon];
  const checked = value === undefined ? checkedProp : Boolean(value);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {Icon && (
          <Icon
            sx={{
              width: 18,
              height: 18,
              color: "#475569",
            }}
          />
        )}

        <InputLabel className={required ? "asterisk" : ""}>{label}</InputLabel>
      </Box>

      <Switch
        {...props}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
    </Box>
  );
};

export default ToggleComponent;
