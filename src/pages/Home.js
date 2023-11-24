
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import styled from 'styled-components';
import ResponsiveImage from '../components/responsiveImages';
import babyfeetDt from '../assets/images/babyfeet-desktop.webp';
import babyfeetMb from '../assets/images/babyfeet-mobile.webp';
import  babyfeetTb  from '../assets/images/babyfeet-tablet.webp';
import  handsholdingbabyDt  from '../assets/images/handsholdingbaby-desktop.webp';
import handsholdingbabyMb  from '../assets/images/handsholdingbaby-mobile.webp';
import  handsholdingbabyTb  from '../assets/images/handsholdingbaby-tablet.webp';
import  twomomsMb from '../assets/images/twomoms-mobile.webp';
import  twomomsDt from '../assets/images/twomoms-desktop.webp';


const ContentSection = styled(Box)`
  margin-bottom: 2rem;
`;

const Home = () => {
  return (
    <Container>
      <ContentSection>
        <Typography variant="h1" gutterBottom>Hem</Typography>
        <Typography paragraph>
          Introductory text about your service, mission, or key message.
        </Typography>
        <ResponsiveImage mobile={babyfeetMb} tablet={babyfeetTb} desktop={babyfeetDt} alt="Baby feet" />
      </ContentSection>

      <ContentSection>
        <Typography variant="h5">Our Philosophy</Typography>
        <Typography paragraph>
          Description of your doula philosophy or approach.
        </Typography>
        <ResponsiveImage mobile={handsholdingbabyMb} tablet={handsholdingbabyTb} desktop={handsholdingbabyDt} alt="Hands holding baby" />
      </ContentSection>

      <ContentSection>
        <Typography variant="h5">Client Stories</Typography>
        <Typography paragraph>
          Testimonials or stories from clients.
        </Typography>
        <ResponsiveImage mobile={twomomsMb} desktop={twomomsDt} alt="Two moms" />
      </ContentSection>

    </Container>
  );
}

export default Home;