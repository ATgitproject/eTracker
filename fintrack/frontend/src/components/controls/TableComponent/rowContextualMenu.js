"use client";
import { useState } from "react";
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
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

      <Dialog
        open={!!showConfirmation}
        onClose={() => setShowConfirmation(false)}
      >
        <DialogTitle>Are you sure you want to delete this record ?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setShowConfirmation(false)}>Cancel</Button>
          <Button
            color="error"
            onClick={(event) => {
              handleAction(event, deleteToolbar);
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
