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
import { Instagram, Facebook, Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import HomeIcon from '@mui/icons-material/Home'; 

 
const pages = ['Home', 'Doulor', 'Fakta', 'DoulaPaket', 'Kontakt'];

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
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <img src={logoImage} alt="Logo" style={{ width: '300px', paddingTop: "4rem", paddingBottom: "4rem" }} />
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
              PaperProps={{ sx: { color: theme.palette.text.dark, bgcolor: theme.palette.background.solidPaper } }} sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: theme.palette.text.dark, fontWeight: 'normal', display: 'block' }}>
                      {/* Check if the page is 'Home' and adjust the Link accordingly */}
      <Link to={page === 'Home' ? '/' : `/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {page}
      </Link>

                </Button>
              ))}
            </Menu>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: theme.palette.text.dark, fontWeight: 'normal', display: 'block' }}>
                    {/* Check if the page is 'Home' and adjust the Link accordingly */}
      <Link to={page === 'Home' ? '/' : `/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {page}
      </Link>

              </Button>
            ))}
          </Box>

          {/* Social media icons */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', }}>
            <a href="https://www.instagram.com/doulaskapet__tryggforlossning/" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: 'black' }}><Instagram /></IconButton>
            </a>
            <a href="https://www.facebook.com/doulaskapet" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: 'black' }}><Facebook /></IconButton>
            </a>
            <a href="mailto:your.email@example.com">
              <IconButton sx={{ color: 'black' }}><Email /></IconButton>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;