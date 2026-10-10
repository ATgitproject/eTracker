"use client";

import { useState } from "react";
import { Box, Typography, Popover, IconButton, Tooltip } from "@mui/material";
import { Check, ChevronDown } from "lucide-react";

const COLOR_OPTIONS = [
  "#6842FF",
  "#16A765",
  "#FF6B35",
  "#F44336",
  "#2196F3",
  "#FFC107",
  "#D936F5",
  "#607D8B",
  "#111827",
  "#EC4899",
];

export { COLOR_OPTIONS };

export default function ColorSelectComponent({
  value = "#6842FF",
  onChange,
  disabled = false,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const selectedColor = value || "#6842FF";
  const open = Boolean(anchorEl);

  const handleColorChange = (color) => {
    onChange?.(color);
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        onClick={(event) => {
          event.stopPropagation();
          if (!disabled) setAnchorEl(event.currentTarget);
        }}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          p: 1,
          border: "1px solid",
          borderColor: open ? "primary.main" : "divider",
          borderRadius: 2,
          cursor: disabled ? "default" : "pointer",
          opacity: disabled ? 0.6 : 1,
          minWidth: 150,
          height: 43,
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: selectedColor,
            border: "1px solid rgba(128,128,128,0.35)",
            flexShrink: 0,
          }}
        />

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="body2" fontWeight={600}>
            {selectedColor.toUpperCase()}
          </Typography>
        </Box>

        <ChevronDown size={18} />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              p: 2,
              width: 280,
              maxWidth: "calc(100vw - 32px)",
              borderRadius: 2,
            },
          },
        }}
      >
        <Typography fontWeight={600} sx={{ mb: 1.5 }}>
          Choose a color
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {COLOR_OPTIONS.map((color) => {
            const selected =
              selectedColor.toLowerCase() === color.toLowerCase();

            return (
              <Tooltip title={color} key={color}>
                <IconButton
                  type="button"
                  aria-label={`Choose color ${color}`}
                  disabled={disabled}
                  onClick={() => handleColorChange(color)}
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: color,
                    color: "#FFFFFF",
                    border: selected
                      ? "3px solid #B9A8FF"
                      : "1px solid rgba(128,128,128,0.5)",
                    "&:hover": {
                      bgcolor: color,
                      opacity: 0.85,
                    },
                  }}
                >
                  {selected && <Check size={17} />}
                </IconButton>
              </Tooltip>
            );
          })}
        </Box>

        <Typography fontWeight={600} sx={{ mt: 2, mb: 1 }}>
          Custom color
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <input
            type="color"
            aria-label="Choose custom color"
            value={selectedColor}
            disabled={disabled}
            onChange={(event) => onChange?.(event.target.value)}
            style={{
              width: 42,
              height: 36,
              border: 0,
              padding: 0,
              cursor: "pointer",
              background: "transparent",
            }}
          />

          <Typography variant="body2">{selectedColor.toUpperCase()}</Typography>
        </Box>
      </Popover>
    </>
  );
}
