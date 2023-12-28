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
import Submenu from './SubMenu';
import mobileLogo from '../assets/MobileLogo.png';

const pages = ['Home', 'Doulor', 'Fakta', 'DoulaPaket', 'Kontakt'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = React.useState(false);
  const theme = useTheme();

  const handleOpenNavMenu = (event, page) => {
    setAnchorElNav(event.currentTarget);
    if (page === 'DoulaPaket' || page === 'Doulor') {
      setMobileSubmenuOpen(!mobileSubmenuOpen);
    } else {
      setMobileSubmenuOpen(false);
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileSubmenuOpen(false); // Close the submenu when the menu is closed
  };

  return (
    <AppBar position="static" sx={{ color: theme.palette.text.dark, bgcolor: theme.palette.custom.glassBackground }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <img src={logoImage} alt="Logo" style={{ width: '300px', paddingTop: "4rem", paddingBottom: "4rem" }} />
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
            <IconButton size="large" aria-label="menu" aria-controls="menu-appbar" aria-haspopup="true" onClick={(e) => handleOpenNavMenu(e, null)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
              PaperProps={{ sx: { color: theme.palette.text.dark, bgcolor: theme.palette.background.solidPaper } }} sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page) => (
                <React.Fragment key={page}>
                  <Button onClick={(e) => handleOpenNavMenu(e, page)} sx={{ my: 2, color: theme.palette.text.dark, fontWeight: 'normal', display: 'block' }}>
                    <Link to={`/${page}`} style={{ textDecoration: 'none', color: theme.palette.text.dark }}>{page}</Link>
                  </Button>
                  {(page === 'DoulaPaket' || page === 'Doulor') && mobileSubmenuOpen && (
                    <Submenu pageName={page} isOpen={mobileSubmenuOpen} handleCloseNavMenu={handleCloseNavMenu} />
                  )}
                </React.Fragment>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => setMobileSubmenuOpen(false)} sx={{ my: 2, color: theme.palette.text.dark, fontWeight: 'normal', display: 'block' }}>
                <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page}
                </Link>
                {(page === 'DoulaPaket' || page === 'Doulor') && (
                  <Submenu pageName={page} isOpen={true} handleCloseNavMenu={handleCloseNavMenu} />
                )}
              </Button>
            ))}
          </Box>
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
