import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import styled from 'styled-components';

const StyledHeroBox = styled(Box)`
  background-image: url('/Optimized-images/belliespregnant.webp'); // Default background image
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    // Mobile background image
    background-image: url('/Optimized-images/belliespregnant-mobile.webp');
  }

  @media (min-width: 601px) and (max-width: 960px) {
    // Tablet background image
    background-image: url('/Optimized-images/belliespregnant-tablet.webp');
  }
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
        py: 4,
        px: 4,
        color: theme.palette.text.primary,
        textAlign: 'center',
        gap: 2,
        border: '1px solid red',
      }}
    >
        <Typography
           variant="h1" gutterBottom
           sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, mt: 8, mb: 5,
             color: { md: theme.palette.text.light, lg: theme.palette.text.light },
              
           }}
        >
      
        DoulaSkapet - Trygg Förlossning
      </Typography>
      {/* You can include subtitle and other content here */}
    </StyledHeroBox>
  );
};

export default PageSpecificHero;
