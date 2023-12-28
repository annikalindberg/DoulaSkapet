import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Theme } from '../styles/Theme';

const Submenu = ({ pageName, isOpen, handleCloseNavMenu }) => {
  let submenuItems = [];

  if (pageName === 'DoulaPaket') {
    submenuItems = ['Baspaket', 'PostpartumSupport', 'AkutDoula'];
  } else if (pageName === 'Doulor') {
    submenuItems = ['Annika']; // Add other submenu items if needed
  }

  return (
    <div
      style={{
        display: isOpen ? 'block' : 'none', // Show submenu if open
        position: 'absolute', // Position absolutely within the relative parent
        backgroundColor: Theme.palette.background.paper, // Background color from theme
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', // Add some shadow for depth
        zIndex: 1 // Ensure it's above other content
      }}
      onMouseLeave={handleCloseNavMenu} // Close submenu when mouse leaves
    >
      {submenuItems.map((item) => (
        <Button
          key={item}
          onClick={handleCloseNavMenu}
          sx={{ pl: 4, display: 'block', color: Theme.palette.text.secondary }}
        >
          <Link to={`/${pageName.replace(' ', '-')}/${item.replace(' ', '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {item}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Submenu;
