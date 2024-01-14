import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import styled from 'styled-components';

const StyledHeroBox = styled(Box)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center; // Updated to center align items horizontally
  justify-content: center; // Added to center align items vertically
  text-align: center; // Ensure text inside is centered

  background-image: url(${props => props.backgroundImage || '/Optimized-images/händerpåmage.webp'}); // Default image
`;




const PageSpecificHero = ({ title, subtitle, image }) => {
  const theme = useTheme();

  return (
    <StyledHeroBox
        backgroundImage={image}
        /* backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" */
        sx={{
        /*   display: 'flex',
          flexDirection: 'column', */
        
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
/*           textAlign: 'center',
 */          /* gap: 2, */
        }}
      >
       
     
        <Typography
           variant="h1" gutterBottom
           sx={{
               mt: 10, mb: 10,
             color: theme.palette.text.primary,
              /* textAlign: 'center', */
            

              
           }}>
        
      
        {title}
      </Typography>
     
            <Typography
        variant="italic"
        sx={{
         
         
                  

         
        }}
      >
        {subtitle}
      </Typography>
    </StyledHeroBox>
  );
};

export default PageSpecificHero;
