// Submenu.js
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
    <div >
      {isOpen && submenuItems.map((item) => (
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
