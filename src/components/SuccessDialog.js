import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

export const SuccessDialog = ({open, onClose}) => {
  
  
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Submission Successful</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Thank you for your message. We will get back to you soon.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
