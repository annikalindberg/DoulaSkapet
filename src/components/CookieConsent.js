import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const CookieConsentDialog = ({ open, onClose, onReadPolicy, onCustomize }) => {
    const theme = useTheme();
  const handleAccept = () => {
    Cookies.set('userConsent', 'accepted'); // Sätter en cookie för att spara användarens samtycke
    onClose();
  };

  const handleCustomize = () => {
    onCustomize();
      
          onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="cookie-dialog-title"
      sx={{
    '& .MuiPaper-root': { // Detta påverkar papperselementet inuti dialogen
      backgroundColor: 'white', // Anpassa opaciteten här, 1 är helt opak
    }
  }}
>
      <DialogContent>
              <DialogContentText id="cookie-dialog-description">
                  <Typography variant='h5' gutterBottom
                      sx={{
                          color: theme.palette.text.dark,
                      }}>Cookiepolicy</Typography>
                  
                  <Typography variant='body2'
                      sx={{
                          color: theme.palette.text.dark,
                      }}
                  >
          Den här webbplatsen använder cookies för att förbättra användarupplevelsen. Vi använder både nödvändiga cookies för webbplatsens grundläggande funktioner och icke-nödvändiga cookies för analys och marknadsföring.
          <br /><br />
                      Du kan välja att acceptera alla cookies eller anpassa dina cookie-inställningar. Genom att fortsätta använda vår webbplats godkänner du användningen av cookies. För mer information, vänligen läs vår <Link
                          to="/cookiepolicy"
                          onClick={onReadPolicy}
                          
                        >Läs vår cookiepolicy
                      </Link>.
                  </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
              <Button
                  onClick={handleAccept}
                   variant="contained" // Use 'contained' for the primary action
      color="primary" // Use your theme's primary color
                  sx={{
                       color: 'white',
          fontWeight: 'bold',
          mr: 2, // Adds margin to the right for spacing
                  }}>
          Acceptera alla cookies
        </Button>
              <Button
                  onClick={handleCustomize}
                   variant="outlined" // 'outlined' for the secondary action
sx={{
color: theme.palette.text.dark, // Use the primary color for text
borderColor: theme.palette.primary.dark, // Use the primary color for border
}}>
          Anpassa inställningar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CookieConsentDialog;
