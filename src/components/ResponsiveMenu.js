import * as React from 'react';
import {useState } from 'react';
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
import Submenu from './SubMenu';

const pages = ['Home', 'Doulor', 'Fakta', 'DoulaPaket', 'Kontakt' ]; 



function ResponsiveAppBar() {
  const location = useLocation();
  const currentPage = location.pathname;
  const [anchorElNav, setAnchorElNav] = React.useState(null); 
      const theme = useTheme();
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = React.useState(null);

  const handleOpenNavMenu = (event, page) => {
    setAnchorElNav(event.currentTarget);
    if (page === 'DoulaPaket') {
      setOpenSubmenu(!openSubmenu);
    } else {
      setOpenSubmenu(false);
    }
    console.log(page);
    console.log(openSubmenu);
  };
  // Function to handle opening submenus in desktop mode
  const handleDesktopSubmenuOpen = (page) => {
    setOpenDesktopSubmenu(page);
  };

  // Function to handle closing submenus in desktop mode
  const handleDesktopSubmenuClose = () => {
    setOpenDesktopSubmenu(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setOpenSubmenu(false); // Close the submenu when the menu is closed
  };

const [openSubmenu, setOpenSubmenu] = React.useState(false);  

  return (
    <AppBar position="static" sx={{
      color: theme.palette.text.dark,
       bgcolor: theme.palette.custom.glassBackgroundDark
    }}>
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
              /*   bgcolor: theme.palette.custom.glassBackgroundDark, Does not affect the unfolded menu*/
              }}
            >
              {pages.map((page) => {
                const toPath = page === 'Home' ? '/' : `/${page.replace(' ', '-')}`;
                const menuItems = [
                  <Button
                    key={page}
                    onClick={(e) => handleOpenNavMenu(e, page)}
                    sx={{
                      my: 2,
                      color: theme.palette.text.dark,
                      fontWeight: 'normal',
                      display: 'block',
                    }}
                  >
                    <Link to={toPath} style={{ textDecoration: 'none', color: theme.palette.text.dark }}>
                      {page}
                    </Link>
                  </Button>,
                  <Submenu
                    key={`${page}-submenu`}
                    pageName={page}
                    isOpen={openSubmenu && page === 'DoulaPaket'}
                    handleCloseNavMenu={handleCloseNavMenu}
                  />
                ];
                return menuItems;
              })}
            </Menu>
          </Box>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
              const toPath = page === 'Home' ? '/' : `/${page.replace(' ', '-')}`;
              const isActive = currentPage === toPath;

                          return (
                            <div
                              style={{position: 'relative'}}
                              key={page}
                              onMouseEnter={() => handleDesktopSubmenuOpen(page)} onMouseLeave={handleDesktopSubmenuClose}>
                  <Button
                    sx={{ my: 2, color: theme.palette.text.dark, fontWeight: 'normal', display: 'block' }}
                  >
                    <Link to={toPath} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {page}
                    </Link>
                  </Button>
                  {/* Display the submenu for this page if it is open */}
                              {openDesktopSubmenu === page && (
                                
                                <Submenu
                                
                      pageName={page}
                      isOpen={true}  // Always open since we are handling it with mouse events
                      handleCloseNavMenu={handleDesktopSubmenuClose}
                    />
                  )}
                </div>
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