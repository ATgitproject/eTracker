"use client";

import { useState } from "react";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVertOutlined } from "@mui/icons-material";

import { TOOLBAR_ICONS } from "./utils/TableUtils";

export const RowContextualMenu = ({ row, toolbars = [], onAction }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleAction = (event, toolbar) => {
    event.stopPropagation();
    handleClose();
    onAction?.(toolbar, [row]);
  };

  if (!toolbars.length) return null;

  return (
    <>
      <IconButton
        size="small"
        aria-label="Row actions"
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpen}
        sx={{
          color: "#64748b",
          borderRadius: "6px",
          "&:hover": {
            backgroundColor: "#f1f5f9",
            color: "#4f35e8",
          },
        }}
      >
        <MoreVertOutlined fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={(event) => event.stopPropagation()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              minWidth: 170,
              mt: 0.5,
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
              "& .MuiMenuItem-root": {
                minHeight: 38,
                gap: 1,
                fontSize: 13,
                color: "#172554",
              },
            },
          },
        }}
      >
        {toolbars.map((toolbar) => {
          const action = toolbar.toolbar_action ?? toolbar.TOOLBAR_ACTION;

          const normalizedAction = String(action ?? "").toLowerCase();
          const Icon = TOOLBAR_ICONS[normalizedAction];
          const label = toolbar.toolbar_name ?? toolbar.TOOLBAR_NAME ?? action;

          return (
            <MenuItem
              key={toolbar.toolbar_id ?? toolbar.TOOLBAR_ID ?? normalizedAction}
              onClick={(event) => handleAction(event, toolbar)}
            >
              {Icon && (
                <ListItemIcon sx={{ minWidth: "24px !important" }}>
                  <Icon fontSize="small" />
                </ListItemIcon>
              )}

              <ListItemText primary={label} />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
