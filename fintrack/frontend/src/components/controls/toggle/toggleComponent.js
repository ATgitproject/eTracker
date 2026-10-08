"use client";

import React from "react";
import { Box, InputLabel, Switch, Typography } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";

const ICON_REGISTRY = {
  sync: SyncIcon,
};

const ToggleComponent = ({
  label = "",
  checked = false,
  onChange,
  icon,
  disabled = false,
  required = false,
  name,
  ...props
}) => {
  const Icon = ICON_REGISTRY[icon];

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
        disabled={disabled}
        onChange={(event) => {
          onChange?.(event?.target?.checked || event);
        }}
      />
    </Box>
  );
};

export default ToggleComponent;
