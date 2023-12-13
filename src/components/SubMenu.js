// Submenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Theme } from '../styles/Theme';

const Submenu = ({ pageName, isOpen, handleCloseNavMenu }) => {
  // Define submenu items for the "Doulor" page
  const submenuItems = pageName === 'DoulaPaket' ? ['Baspaket', 'PostpartumSupport', 'AkutDoula'] : [];

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
