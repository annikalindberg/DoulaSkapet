import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logoImage from '../assets/textlogo.svg';
import { Link } from 'react-router-dom';

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200] // this is the light theme background color which is grey and for 
            : theme.palette.grey[800],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img src={logoImage} alt="DoulaSkapet Logo" style={{ height: '100px', marginBottom: '20px' }} />

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <IconButton href="https://www.instagram.com/doulaskapet__tryggforlossning/" target="_blank" rel="noopener noreferrer" aria-label="DoulaSkapet Instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://www.facebook.com/doulaskapet" target="_blank" rel="noopener noreferrer" aria-label="DoulaSkapet Facebook">
          <FacebookIcon />
        </IconButton>
      </Box>

      <Link to="/kontakt" style={{ color: 'black', textDecoration: 'none', marginBottom: '20px' }}>
        <Typography variant="body1">Kontakt</Typography>
      </Link>
    </Box>
  );
}
