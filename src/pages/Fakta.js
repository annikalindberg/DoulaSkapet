// In src/pages/OmOss.js
import React from 'react';
import ResponsiveImage from '../components/responsiveImages';
import twomomsMb from '../assets/images/twomoms-mobile.webp';
import twomomsDt from '../assets/images/twomoms-desktop.webp';
/* import partneDt from '../assets/images/partnerdoula-dt.webp';
import partnerMb from '../assets/images/partnerdoula-mb.webp';
import partnerTb from '../assets/images/partnerdoula-tb.webp'; */
import styled from 'styled-components';
import { Box, Typography, Container } from '@mui/material';
import { MdOutlinePregnantWoman } from 'react-icons/md'; // Example icon
import InfoIcon from '@mui/icons-material/Info';

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

const Fakta = () => {
  return (
    <Container>
      <Section>
        <MdOutlinePregnantWoman size={40} color="#d17b88" />
        <SectionHeader variant="h2" gutterBottom>
          Vad är en Doula?
        </SectionHeader>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <InfoIcon sx={{ mr: 1 }} />
                     <Typography>Expertise in various birthing methods.</Typography>
                       <InfoIcon sx={{ mr: 1 }} />
                     <Typography>Expertise in various birthing methods.</Typography>
                       <InfoIcon sx={{ mr: 1 }} />
            <Typography>Expertise in various birthing methods.</Typography>
          </Box>
        <SectionContent>          <Typography paragraph >
         Att föda barn är en av de mest kraftfulla upplevelser en människa kan gå igenom, och oavsett hur födseln går till så påverkar det oss djupt på många plan: fysiologiskt, emotionellt, mentalt och själsligt.
          </Typography>
          <Typography paragraph>
            En doula är en person som har erfarenhet av förlossning och är tränad i att ge stöd och information till den födande kvinnan och hennes närmaste under graviditet, förlossning och den första tiden efteråt. Ordet doula kommer från grekiskan och betyder fritt översatt 'kvinna som ger omvårdnad'. Att kvinnor med erfarenhet från barnafödande hjälper andra kvinnor som föder barn är en urgammal företeelse.
          </Typography>
          <Typography paragraph>
            En doula har inget medicinskt ansvar och ger inga medicinska råd. Hennes roll är tydligt avgränsad i förhållande till personalen på förlossningsavdelningen. Hon är inte heller någon ersättning för barnmorska eller partner. Hon är ett komplement som ger stöd och hjälp på ett sätt som ingen annan kan.
          </Typography>

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

export default Fakta;
