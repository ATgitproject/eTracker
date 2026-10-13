"use client";

import React from "react";
import { Box, InputLabel, Switch } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";

const ICON_REGISTRY = {
  sync: SyncIcon,
};

const ToggleComponent = ({
  label = "",
  value,
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
        checked={Boolean(value)}
        disabled={disabled}
        onChange={onChange}
        sx={{
          width: 46,
          height: 28,
          padding: 0,
          overflow: "visible",

          "& .MuiSwitch-switchBase": {
            padding: "3px",
            transitionDuration: "200ms",

            "&.Mui-checked": {
              transform: "translateX(18px)",
              color: "#FFFFFF",

              "& + .MuiSwitch-track": {
                backgroundColor: "#7C3AED",
                opacity: 1,
                border: "none",
              },
            },

            "&.Mui-disabled": {
              "& + .MuiSwitch-track": {
                opacity: 0.4,
              },
            },
          },

          "& .MuiSwitch-thumb": {
            width: 22,
            height: 22,
            backgroundColor: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
          },

          "& .MuiSwitch-track": {
            borderRadius: 14,
            backgroundColor: "#CBD5E1",
            opacity: 1,
            border: "none",
          },
        }}
      />
    </Box>
  );
};

export default ToggleComponent;
