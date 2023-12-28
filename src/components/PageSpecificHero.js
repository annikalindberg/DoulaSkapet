import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import styled from 'styled-components';

const StyledHeroBox = styled(Box)`
  background-image: url('/Optimized-images/händerpåmage.webp'); // Default background image
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

/*   @media (max-width: 600px) {
    // Mobile background image
    background-image: url('/Optimized-images/belliespregnant-mobile.webp');
  }

  @media (min-width: 601px)  {
    // Tablet background image
    background-image: url('/Optimized-images/belliespregnant-tablet.webp');
  } */
`;

const PageSpecificHero = ({ title, subtitle, image }) => {
  const theme = useTheme();

  return (
    <StyledHeroBox
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
         py: {
      xs: 2,  // Equivalent to theme.spacing(2)
      sm: 3,  // Equivalent to theme.spacing(3)
      md: 4,  // Equivalent to theme.spacing(4)
      lg: 10   // Equivalent to theme.spacing(8)
    },
    px: {
      xs: 2, 
      sm: 3, 
      md: 4, 
      lg: 10
    },
        color: theme.palette.text.primary,
        textAlign: 'center',
        gap: 2,
        border: '1px solid red',
      }}
      {...image && { style: { backgroundImage: `url(${image})` } }}
    >
      {/* You can include an image here */}
     
        <Typography
           variant="h1" gutterBottom
           sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, mt: 8, mb: 5,
             color: theme.palette.text.primary,
              
           }}
        >
      
        {title}
      </Typography>
      {/* You can include subtitle and other content here */}
    </StyledHeroBox>
  );
};

export default PageSpecificHero;
