"use client";

import { useState } from "react";
import { Box, Typography, Popover, InputLabel } from "@mui/material";
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
  ArrowLeftRight,
  Laptop,
  MoreHorizontal,
  User,
} from "lucide-react";

const ICON_OPTIONS = [
  { name: "zap", label: "Utilities", Icon: Zap },
  { name: "house", label: "Housing", Icon: House },
  { name: "heart-pulse", label: "Healthcare", Icon: HeartPulse },
  { name: "plane", label: "Travel", Icon: Plane },
  { name: "wallet", label: "Wallet", Icon: Wallet },
  { name: "gift", label: "Gifts", Icon: Gift },
  { name: "shopping-cart", label: "Shopping", Icon: ShoppingCart },
  { name: "car-front", label: "Transport", Icon: CarFront },
  { name: "briefcase-business", label: "Salary", Icon: BriefcaseBusiness },
  { name: "utensils", label: "Food", Icon: Utensils },
  { name: "graduation-cap", label: "Education", Icon: GraduationCap },
  { name: "gamepad-2", label: "Entertainment", Icon: Gamepad2 },
  { name: "arrow-left-right", label: "Transfer", Icon: ArrowLeftRight },
  { name: "laptop", label: "Freelance", Icon: Laptop },
  { name: "more-horizontal", label: "Others", Icon: MoreHorizontal },
  { name: "user", label: "Personal Care", Icon: User },
  { name: "upi", label: "UPI", image: "/icons/upi.png" },
  { name: "netflix", label: "Netflix", image: "/icons/netflix.png" },
  { name: "spotify", label: "Spotify", image: "/icons/Spotify.png" },
  { name: "microsoft", label: "Microsoft", image: "/icons/Microsoft.png" },
  { name: "hoststar", label: "JioHotstar", image: "/icons/jiohotstar.png" },
  {
    name: "Crunchyroll",
    label: "Crunchyroll",
    image: "/icons/Crunchyroll.png",
  },
  { name: "youtube", label: "YouTube", image: "/icons/Youtube.png" },
  { name: "prime", label: "Prime Video", image: "/icons/prime.png" },
  { name: "googleone", label: "Google One", image: "/icons/googleone.png" },
];

const getIconOption = (name) =>
  ICON_OPTIONS.find((item) => item.name === name) || ICON_OPTIONS?.[0];

export { ICON_OPTIONS, getIconOption };

export default function IconComponent({
  value,
  onChange,
  label,
  disabled = false,
  required = false,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const selectedIcon = getIconOption(value);
  const SelectedIcon = selectedIcon?.Icon;

  return (
    <>
      <div>
        <InputLabel className={required ? "asterisk" : ""}>{label}</InputLabel>
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
            height: 43,
            width: "100%",
          }}
        >
          {selectedIcon?.image ? (
            <Box
              component="img"
              src={selectedIcon.image}
              alt={selectedIcon.label}
              sx={{ width: 22, height: 22, objectFit: "contain" }}
            />
          ) : SelectedIcon ? (
            <SelectedIcon size={22} />
          ) : null}
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
            {ICON_OPTIONS.map(({ name, label, Icon, image }) => {
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
                  {image ? (
                    <Box
                      component="img"
                      src={image}
                      alt={label}
                      sx={{ width: 22, height: 22, objectFit: "contain" }}
                    />
                  ) : Icon ? (
                    <Icon size={20} />
                  ) : null}
                  <Typography component="span" fontSize={11}>
                    {label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Popover>
      </div>
    </>
  );
}
