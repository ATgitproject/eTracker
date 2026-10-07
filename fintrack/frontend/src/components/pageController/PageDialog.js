"use client";

import { Drawer, Box, Typography, IconButton, Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const DRAWER_WIDTHS = {
  xs: 360,
  sm: 400,
  md: 420,
  lg: 520,
  xl: 620,
};

const PageDialog = ({
  Component,
  componentProps = {},
  width = "md",
  action,
  title = "Details",
  onClose,
  height = "96%",
  marginTop = "20px",
  marginRight = "20px",
  borderRadius = "16px",
}) => {
  if (typeof Component !== "function") {
    return null;
  }

  const isSaveAction = action === "create" || action === "get";

  const drawerWidth = DRAWER_WIDTHS[width] || DRAWER_WIDTHS.md;

  return (
    <Drawer
      anchor="right"
      open
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(15, 23, 42, 0.42)",
            backdropFilter: "blur(3px)",
          },
        },
      }}
      PaperProps={{
        sx: {
          position: "fixed",
          top: marginTop,
          right: marginRight,
          width: `${drawerWidth}px`,
          maxWidth: "calc(100vw - 32px)",
          height,
          display: "flex",
          flexDirection: "column",
          borderRadius,
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(15, 23, 42, 0.22)",
          margin: 0,
        },
      }}
    >
      <Box
        sx={{
          minHeight: 64,
          px: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          borderBottom: "1px solid",
          borderColor: "#E5E7EB",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          {title}
        </Typography>

        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{
            color: "#64748B",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          px: 2.5,
          py: 2.5,
          "&::-webkit-scrollbar": {
            width: 6,
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(100, 116, 139, 0.35)",
            borderRadius: 10,
          },
        }}
      >
        <Component {...componentProps} />
      </Box>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          px: 2.5,
          py: 2,
          flexShrink: 0,
          borderTop: "1px solid",
          borderColor: "#E5E7EB",
          backgroundColor: "#FFFFFF",
        }}
      >
        {" "}
        <Button
          variant={isSaveAction ? "outlined" : "contained"}
          onClick={onClose}
          sx={{
            flex: isSaveAction ? 0.4 : 1,
            minHeight: 44,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          {isSaveAction ? "Cancel" : "Close"}
        </Button>
        {isSaveAction && (
          <Button
            variant="contained"
            type="submit"
            form="transaction-form"
            sx={{
              flex: 1,
              minHeight: 44,
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            {action === "create" ? "Add Transaction" : "Save Changes"}
          </Button>
        )}
      </Box>
    </Drawer>
  );
};

export default PageDialog;
