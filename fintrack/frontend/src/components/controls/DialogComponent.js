"use client";
import { Dialog, DialogContent } from "@mui/material";

const DialogComponent = ({ Component, open, onClose, props = {} }) => {
  if (!Component) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <Component {...props} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
