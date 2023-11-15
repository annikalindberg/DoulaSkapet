import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logoImage from '../assets/nobg-logo.svg';
import { Instagram, Facebook, LinkedIn, Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const pages = ['OmOss', 'DoulaPaket', 'Doula']; // These are your page names
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.light"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                      <img src={logoImage}
                          alt="Logo"
                          style={{ width: '200px', margin: "1rem" }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
                      <IconButton

              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Button
                key={page}
                component={Link} // Wrap the Button component with Link
                to={`/${page.toLowerCase()}`} // Link to the page route
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'primary.dark', display: 'block' }}
              >
                {page}
              </Button>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={logoImage} alt="Logo" style={{ height: '40px' }} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'primary.dark', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
<Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: 'black' }}>
                <Instagram />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: 'black' }}>
                <Facebook />
              </IconButton>
            </a>
       <a href="mailto:your.email@example.com">
              <IconButton sx={{ color: 'black' }}>
                <Email />
              </IconButton>
            </a>
          </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography
                          textAlign="center"
                 
                      >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;