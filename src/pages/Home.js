
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ResponsiveImage from '../components/responsiveImages';
import babyfeetDt from '../assets/images/babyfeet-desktop.webp';
import babyfeetMb from '../assets/images/babyfeet-mobile.webp';
import  babyfeetTb  from '../assets/images/babyfeet-tablet.webp';
import  handsholdingbabyDt  from '../assets/images/handsholdingbaby-desktop.webp';
import handsholdingbabyMb  from '../assets/images/handsholdingbaby-mobile.webp';
import  handsholdingbabyTb  from '../assets/images/handsholdingbaby-tablet.webp';
import  twomomsMb from '../assets/images/twomoms-mobile.webp';
import  twomomsDt from '../assets/images/twomoms-desktop.webp';


const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>Hem</Typography>
        <Typography paragraph>
Hem       </Typography>
      </Box>
      <Box sx={{ my: 4 }}>
        <ResponsiveImage mobile={babyfeetMb} tablet={babyfeetTb} desktop={babyfeetDt} alt="Baby feet" />
    <ResponsiveImage mobile={handsholdingbabyMb} tablet={handsholdingbabyTb} desktop={handsholdingbabyDt} alt="Hands holding baby" />
    <ResponsiveImage mobile={twomomsMb} desktop={twomomsDt} alt="Two moms" /> 
        {/* Note: For images with only mobile and desktop versions */}
        </Box>
    </Container>
  );
}

export default Home;
