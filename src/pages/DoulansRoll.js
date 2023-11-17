// In src/pages/OmOss.js
import React from 'react';
import ResponsiveImage from '../components/responsiveImages';
import twomomsMb from '../assets/images/twomoms-mobile.webp';
import twomomsDt from '../assets/images/twomoms-desktop.webp';
import partneDt from '../assets/images/partnerdoula-dt.webp';
import partnerMb from '../assets/images/partnerdoula-mb.webp';
import partnerTb from '../assets/images/partnerdoula-tb.webp';
import styled from 'styled-components';
import { Box, Typography, Container } from '@mui/material';
import { MdOutlinePregnantWoman } from 'react-icons/md'; // Example icon


// Styled components
const Section = styled(Box)`
  margin: 2rem 0;
`;

const SectionHeader = styled(Typography)`
  font-size: 2rem;
  color: #d17b88; // Soft pink, adjust the color as needed
  margin-bottom: 1rem;
`;

const SectionContent = styled(Typography)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #6d6875; // Soft gray, adjust as needed
`;

const ImageContainer = styled(Box)`
  margin: 2rem 0;
  
`;

const DoulansRoll = () => {
  return (
    <Container>
      <Section>
        <MdOutlinePregnantWoman size={40} color="#d17b88" />
        <SectionHeader variant="h4" gutterBottom>
          Doulans Roll
        </SectionHeader>
        <SectionContent>
          Information about the doula effect, the partner's role, testimonials, etc.
        </SectionContent>
      </Section>

      <ImageContainer>
        <ResponsiveImage
          style={{ borderRadius: '1150px', maxWidth: '500px' }}
          mobile={twomomsMb}
          desktop={twomomsDt}
          alt="Two moms with their baby" />
      </ImageContainer>

      {/* Repeat the pattern for other sections */}
      {/* For each section, you can alternate between text and images to create a flow */}

    </Container>
  );
}

export default DoulansRoll;
