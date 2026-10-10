"use client";

import { Alert, Drawer, Box, Typography, IconButton } from "@mui/material";
import ButtonComponent from "../controls/ButtonComponent";
import CloseIcon from "@mui/icons-material/Close";
import useFormFields from "../shared/hooks/useFormFields";

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
  onSave,
  useForm,
  isSaving = false,
  saveError = "",
  height = "96%",
  marginTop = "20px",
  marginRight = "20px",
  borderRadius = "16px",
}) => {
  if (typeof Component !== "function") {
    return null;
  }
  const { isSavable } = useFormFields({
    useForm,
  });
  const submitForm = useForm?.handleSubmit(onSave) ?? onSave;

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
        paper: {
          sx: {
            width: `${drawerWidth}px !important`,
            maxWidth: "calc(100vw - 40px)",
            height: height,
            position: "fixed",
            top: marginTop,
            right: marginRight,
            margin: 0,
            borderRadius: borderRadius,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 12px 40px rgba(15, 23, 42, 0.22)",
          },
        },
      }}
    >
      {/* Header */}
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
      {saveError && (
        <Alert severity="error" sx={{ mx: 2.5, mb: 1 }}>
          {saveError}
        </Alert>
      )}

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
        <ButtonComponent
          key="dialog___closebtn"
          variant={isSaveAction ? "secondary" : "primary"}
          fullWidth={false}
          onClick={onClose}
        >
          {isSaveAction ? "Cancel" : "Close"}
        </ButtonComponent>

        {isSaveAction && (
          <ButtonComponent
            key="dialog___savebtn"
            variant="primary"
            type="button"
            fullWidth={false}
            onClick={submitForm}
            disabled={!isSavable || isSaving}
          >
            {isSaving
              ? "Saving..."
              : action === "create"
                ? "Add Transaction"
                : "Save Changes"}
          </ButtonComponent>
        )}
      </Box>
    </Drawer>
  );
};

export default PageDialog;
