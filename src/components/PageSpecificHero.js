import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import styled from 'styled-components';

const StyledHeroBox = styled(Box)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  background-image: url(${props => props.backgroundImage || '/Optimized-images/händerpåmage.webp'}); // Default image

`;



const PageSpecificHero = ({ title, subtitle, image }) => {
  const theme = useTheme();

  return (
    <StyledHeroBox
        backgroundImage={image}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          mb: 5,
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
      >
        {/* You can include an image here */}
      {/* You can include subtitle and other content here */}
    
     
        <Typography
           variant="h1" gutterBottom
           sx={{
               mt: 8, mb: 5,
             color: theme.palette.text.primary,
            

              
           }}
        >
      
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'left', justifyContent: 'center', maxWidth: '60%', ml: 'auto', mr: 'auto' }} 
        
      >
            <Typography
        variant="italic"
        sx={{
         
          textAlign: 'center', // Align text to the left

                  

          // Adjust the font size and other styles as needed
        }}
      >
        {subtitle}
        </Typography>
      </Box>
    </StyledHeroBox>
  );
};

export default PageSpecificHero;
