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
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const pages = ['Home', 'Doulor', 'Fakta', 'DoulaPaket', 'Kontakt' ]; 


function ResponsiveAppBar() {
  const location = useLocation();
  const currentPage = location.pathname;
  const [anchorElNav, setAnchorElNav] = React.useState(null); 
      const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


//  disableGutters removes default padding. sx is the style prop for MUI components.

  return (
    <AppBar position="static" sx={{ bgcolor: theme.palette.custom.glassBackgroundDark}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* v wraps the logo with a link leading to / */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <img src={logoImage} alt="Logo" style={{ width: '300px', paddingTop: "4rem" }} />
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
            {pages.map((page) => {
                const toPath = page === 'Home' ? '/' : `/${page.replace(' ', '-')}`;
                const isActive = currentPage === toPath;


              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: isActive ? 'secondary.main' : 'primary.dark',
                  fontWeight: isActive ? 'bold' : 'normal',
                  display: 'block',
                }}
                >
                  <Link to={toPath} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {page}
                  </Link>
                </Button>
              );
              })}
                  </Menu>
          </Box>


      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
              const toPath = page === 'Home' ? '/' : `/${page.replace(' ', '-')}`;
              const isActive = currentPage === toPath;

              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, 
                    color: isActive ? 'secondary.main' : 'primary.dark', 
                    fontWeight: isActive ? 'bold' : 'normal', 
                    display: 'block' 
                  }}
                >
                  <Link to={toPath} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {page}
                  </Link>
                </Button>
              );
            })}
          </Box>
           <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <a href="https://www.instagram.com/doulaskapet__tryggforlossning/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: 'black' }}>
                <Instagram />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/doulaskapet" target="_blank" rel="noopener noreferrer">
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;