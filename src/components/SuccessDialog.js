import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const SuccessDialog = ({open, onClose}) => {
  const theme = useTheme();
  
  return (
   
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ bgcolor: theme.palette.background.solidYellow }}>
      <DialogTitle>Submission Successful</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Thank you for your message. We will get back to you soon.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{
            bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}>
          Close
        </Button>
        </DialogActions>
      </Box>
    </Dialog>
    
     
  );
};
