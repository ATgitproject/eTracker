"use client";
import { useState } from "react";
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
} from "@mui/material";
import { Pencil, Trash2, Eye } from "lucide-react";
import { TOOLBAR_ICONS } from "./utils/TableUtils";

export const RowContextualMenu = ({ row, toolbars = [], onAction }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const open = Boolean(anchorEl);
  const editToolbar = toolbars?.find((tb) => tb?.toolbar_action === "edit");
  const viewToolbar = toolbars?.find((tb) => tb?.toolbar_action === "view");
  const deleteToolbar = toolbars?.find((tb) => tb?.toolbar_action === "delete");

  const actionSx = {
    view: {
      ...{ borderRadius: "6px", color: "#4f35e8" },
      "&:hover": { backgroundColor: "#f1f5f9", color: "#4f35e8" },
    },
    edit: {
      ...{ borderRadius: "6px", color: "#16A34A" },
      "&:hover": { backgroundColor: "#eff6ff", color: "#16A34A" },
    },
    delete: {
      ...{ borderRadius: "6px", color: "#dc2626" },
      "&:hover": { backgroundColor: "#fef2f2", color: "#dc2626" },
    },
  };

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
      <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {editToolbar ? (
          <IconButton
            size="small"
            aria-label="Row actions"
            aria-haspopup="menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpen}
            sx={actionSx.edit}
          >
            <Pencil
              fontSize="small"
              onClick={(event) => {
                handleAction(event, editToolbar);
              }}
            />
          </IconButton>
        ) : null}

        {deleteToolbar ? (
          <IconButton
            size="small"
            aria-label="Row actions"
            aria-haspopup="menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpen}
            sx={actionSx.delete}
          >
            <Trash2
              fontSize="small"
              onClick={() => {
                setShowConfirmation(true);
              }}
            />
          </IconButton>
        ) : null}

        {viewToolbar ? (
          <IconButton
            size="small"
            aria-label="Row actions"
            aria-haspopup="menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpen}
            sx={actionSx.view}
          >
            <Eye
              fontSize="small"
              onClick={(event) => {
                handleAction(event, viewToolbar);
              }}
            />
          </IconButton>
        ) : null}
      </Box>
      <Dialog
        open={!!showConfirmation}
        onClose={() => setShowConfirmation(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: "16px", p: 1 } }}
      >
        <DialogTitle
          sx={{
            fontSize: 18,
            fontWeight: 600,
            color: "#24345B",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "#d3d3d3",
          }}
        >
          Delete Confirmation
        </DialogTitle>

        <DialogContent sx={{ textAlign: "center", padding: "20px !important" }}>
          <Typography sx={{ fontSize: 14, color: "#000000" }}>
            Are you sure you want to delete this record?
          </Typography>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
          <Button
            fullWidth
            onClick={() => setShowConfirmation(false)}
            sx={{
              minHeight: 40,
              textTransform: "none",
              fontWeight: 600,
              color: "#24345B",
              border: "1px solid #DFE5F2",
              borderRadius: "10px",
              "&:hover": { bgcolor: "#F8F9FD", borderColor: "#6842FF" },
            }}
          >
            Cancel
          </Button>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            onClick={(event) => {
              handleAction(event, deleteToolbar);
              setShowConfirmation(false);
            }}
            sx={{
              minHeight: 40,
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "10px",
              bgcolor: "#DC2626",
              "&:hover": { bgcolor: "#B91C1C" },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
