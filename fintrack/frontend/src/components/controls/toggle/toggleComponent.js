"use client";

import React from "react";
import { Box, Switch, Typography } from "@mui/material";
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

        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "20px",
            color: "#111827",
          }}
        >
          {label}
        </Typography>
      </Box>

      <Switch
        {...props}
        name={name}
        // checked={checked}
        disabled={disabled}
        onChange={(event) => {
          //   onChange?.(event.target.checked, event);
        }}
        sx={{
          width: 38,
          height: 22,
          padding: 0,

          /* SWITCH BASE */
          "& .MuiSwitch-switchBase": {
            padding: "3px",
            color: "#FFFFFF",

            "&:hover": {
              backgroundColor: "transparent",
            },

            "&.Mui-checked": {
              transform: "translateX(16px)",
              color: "#FFFFFF",

              "& + .MuiSwitch-track": {
                backgroundColor: "#6D3DF5",
                opacity: 1,
              },
            },
          },

          /* THUMB */
          "& .MuiSwitch-thumb": {
            width: 16,
            height: 16,
            backgroundColor: "#FFFFFF !important",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.18)",
          },

          /* TRACK */
          "& .MuiSwitch-track": {
            width: 38,
            height: 22,
            borderRadius: "11px",
            backgroundColor: "#C5CEE2 !important",
            opacity: "1 !important",
            transition: "background-color 200ms ease",
          },

          /* CHECKED STATE */
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#6D3DF5 !important",
            opacity: "1 !important",
          },

          /* DISABLED */
          "& .MuiSwitch-switchBase.Mui-disabled": {
            color: "#FFFFFF",
          },

          "& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.5,
          },
        }}
      />
    </Box>
  );
};

export default ToggleComponent;
