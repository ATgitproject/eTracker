"use client";

import { useState } from "react";
import { Box, Typography, Popover } from "@mui/material";
import {
  ShoppingCart,
  Utensils,
  Zap,
  CarFront,
  House,
  HeartPulse,
  BriefcaseBusiness,
  Plane,
  Gamepad2,
  Wallet,
  GraduationCap,
  Gift,
} from "lucide-react";

const ICON_OPTIONS = [
  { name: "shopping-cart", label: "Shopping", Icon: ShoppingCart },
  { name: "utensils", label: "Food", Icon: Utensils },
  { name: "zap", label: "Utilities", Icon: Zap },
  { name: "car-front", label: "Transport", Icon: CarFront },
  { name: "house", label: "Housing", Icon: House },
  { name: "heart-pulse", label: "Healthcare", Icon: HeartPulse },
  { name: "briefcase-business", label: "Salary", Icon: BriefcaseBusiness },
  { name: "plane", label: "Travel", Icon: Plane },
  { name: "gamepad-2", label: "Entertainment", Icon: Gamepad2 },
  { name: "wallet", label: "Wallet", Icon: Wallet },
  { name: "graduation-cap", label: "Education", Icon: GraduationCap },
  { name: "gift", label: "Gifts", Icon: Gift },
];

const getIconOption = (name) =>
  ICON_OPTIONS.find((item) => item.name === name) || ICON_OPTIONS[0];

export { ICON_OPTIONS, getIconOption };

export default function IconComponent({ value, onChange, disabled = false }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const selectedIcon = getIconOption(value);
  const SelectedIcon = selectedIcon.Icon;

  return (
    <>
      <Box
        onClick={(event) => {
          if (!disabled) setAnchorEl(event.currentTarget);
        }}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          p: 1,
          border: "1px solid",
          borderColor: anchorEl ? "primary.main" : "divider",
          borderRadius: 2,
          cursor: disabled ? "default" : "pointer",
          opacity: disabled ? 0.6 : 1,
          width: "100%",
          height: 43,
        }}
      >
        <SelectedIcon size={22} />
        <Typography variant="body2">{selectedIcon.label}</Typography>
      </Box>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              p: 2,
              width: { xs: 300, sm: 440 },
              maxWidth: "calc(100vw - 32px)",
              borderRadius: 2,
            },
          },
        }}
      >
        <Typography fontWeight={600} mb={1.5}>
          Choose an icon
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 1,
          }}
        >
          {ICON_OPTIONS.map(({ name, label, Icon }) => {
            const selected = value === name;

            return (
              <Box
                key={name}
                component="button"
                type="button"
                disabled={disabled}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  onChange?.(name);
                  setAnchorEl(null);
                }}
                sx={{
                  minWidth: 0,
                  height: 58,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.5,
                  border: "1px solid",
                  borderColor: selected ? "#6842FF" : "divider",
                  borderRadius: 2,
                  bgcolor: selected ? "#F0EBFF" : "background.paper",
                  color: selected ? "#6842FF" : "text.primary",
                  cursor: "pointer",
                }}
              >
                <Icon size={20} />
                <Typography component="span" fontSize={11}>
                  {label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Popover>
    </>
  );
}
