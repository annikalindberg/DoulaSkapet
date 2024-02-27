import React, { useState } from 'react';
import { Dialog, FormGroup, FormControlLabel, Switch, Button, Typography } from '@mui/material';

const CustomizeCookieDialog = ({ open, onClose }) => {
  const [cookiePreferences, setCookiePreferences] = useState({
    prestanda: false,
    Funktionalitet: false,
    Analys: false,
    Marknadsföring: false,
  });

  const handleChange = (event) => {
    setCookiePreferences({ ...cookiePreferences, [event.target.name]: event.target.checked });
  };

  const handleSave = () => {
      // Spara användarens preferenser
       localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
  applyCookiePreferences(cookiePreferences);
    onClose();
  };
    const applyCookiePreferences = (preferences) => {
  // Exempel: inaktivera Google Analytics om användaren inte samtyckt till analyscookies
        if (!preferences.analytics) {
            window['ga-disable-G-YCXHC9RKK7'] = true;
        }
    }

  return (
      <Dialog open={open} onClose={onClose}
          sx={{
             
                '& .MuiPaper-root': { // Detta påverkar papperselementet inuti dialogen
                  backgroundColor: 'white', // Anpassa opaciteten här, 1 är helt opak
                    padding: 5,
                }
            }}
      >
          <Typography variant='h5' gutterBottom
                sx={{
                    color: 'black'
                }}>Anpassa cookie-inställningar</Typography>    
      <FormGroup>
        {Object.entries(cookiePreferences).map(([key, value]) => (
          <FormControlLabel
            control={<Switch checked={value} onChange={handleChange} name={key} />}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            key={key}
          />
        ))}
      </FormGroup>
          <Button sx={{ mt: 2 }}
                variant="contained" // Use 'contained' for the primary action
              onClick={handleSave}>Spara inställningar</Button>
    </Dialog>
  );
};

export default CustomizeCookieDialog;
