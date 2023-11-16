// In src/pages/OmOss.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ResponsiveImage from '../components/responsiveImages';
import  twomomsMb from '../assets/images/twomoms-mobile.webp';
import  twomomsDt from '../assets/images/twomoms-desktop.webp';

// add headlines and content, links to referenser, testimonials, etc 
const DoulansRoll = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>Doulans Roll</Typography>
        <Typography paragraph>
Doulaeffekten, partnern då?, Testemonials    </Typography>
        {/* Add more detailed content, images, etc */}
      </Box>
      <Box sx={{ my: 4 }}>
        <ResponsiveImage mobile={twomomsMb} desktop={twomomsDt} alt="Two moms" />
        {/* Note: For images with only mobile and desktop versions */}
      </Box>
    </Container>
  );
}


export default DoulansRoll;
