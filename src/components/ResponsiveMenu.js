import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logoImage from '../assets/nobg-logo.svg';
import { Instagram, Facebook } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import HomeIcon from '@mui/icons-material/Home'; 

const camelCaseToWords = (str) => {
  return str
    // Handle special characters like 'Ä'
    .replace(/Ä/g, ' Ä')
    // Insert a space before all caps (excluding the first character)
    .replace(/([A-Z][a-z])/g, ' $1')
    // Uppercase the first character
    .replace(/^./, (str) => str.toUpperCase());
}



 
const pages = ['Hem', 'Doulor', 'DoulaEffekten', 'DoulaPaket', 'Kontakt'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ color: theme.palette.text.dark, bgcolor: theme.palette.custom.glassBackground }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Link to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' }, mr: 1 }}>
              <img src={logoImage} alt="Logo" style={{ width: '200px', paddingTop: "4rem", paddingBottom: "4rem"}} sx={{}} />
            </Box>
          </Link>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flexStart', alignItems: 'center' }}>
            <Link to="/" sx={{ mx: 2, display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ color: theme.palette.primary.dark, display: { xs: 'flex', md: 'none' } }} />
            </Link>

            <IconButton size="large" aria-label="menu" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                slotProps={{ 
    paper: { sx: { color: theme.palette.text.dark, bgcolor: theme.palette.background.solidPaper } }
  }}
 sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: theme.palette.text.dark, fontWeight: 'normal', display: 'block' }}>
                      {/* Check if the page is 'Home' and adjust the Link accordingly */}
      <Link to={page === 'Hem' ? '/' : `/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {camelCaseToWords(page)}
      </Link>

                </Button>
              ))}
            </Menu>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} sx={{
                my: 2,
                color: theme.palette.text.dark,
                fontWeight: 'normal',
                display: 'block',

              }}>
                    {/* Check if the page is 'Home' and adjust the Link accordingly */}
      <Link to={page === 'Hem' ? '/' : `/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {camelCaseToWords(page)}
      </Link>

              </Button>
            ))}
          </Box>

          {/* Social media icons */}
         <Box sx={{
        display: { /* xs: 'none', */ md: 'flex' },
/*         position: 'absolute',
 */        right: 0, // Align to the right
            top: 0, // Align to the top
        mt: { xs: '2', md: 'center' },
      }}>
            <a href="https://www.instagram.com/doulaskapet__tryggforlossning/" target="_blank"
              rel="noopener noreferrer"
              
            >
              <IconButton sx={{ color: 'black' }}><Instagram /></IconButton>
            </a>
            <a href="https://www.facebook.com/doulaskapet" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: 'black' }}><Facebook /></IconButton>
            </a>
            {/* <a href="mailto:your.email@example.com">
              <IconButton sx={{ color: 'black' }}><Email /></IconButton>
            </a> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;