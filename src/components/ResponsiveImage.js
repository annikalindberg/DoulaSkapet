import React from 'react';
import { Box } from '@mui/material';

const ResponsiveImage = ({ mobileSrc, tabletSrc, desktopSrc, alt }) => (
  <Box
    component="img"
    sx={{
      width: '100%',
      height: 'auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
      borderRadius: '20px',
      
    }}
    src={mobileSrc} // Default src
    srcSet={`
      ${mobileSrc} 300w,  // Width for mobile
      ${tabletSrc} 600w,  // Width for tablet
      ${desktopSrc} 1280w // Width for desktop
    `}
    alt={alt}
  />
);

export default ResponsiveImage;
