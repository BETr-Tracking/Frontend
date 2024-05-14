import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

const Popup = ({ children, title, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default Popup;
