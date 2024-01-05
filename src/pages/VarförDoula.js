import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Container, ListItem, List } from '@mui/material';
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
/*   color: #6d6875; // Soft gray, adjust as needed */
`;

const ImageContainer = styled(Box)`
  margin: 2rem 0;
  
`;

const VarförDoula = () => {
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

      <ImageContainer> {/* Make it pick right image depending on screensize */}
        <img

          src="/optimized-images/twomoms.webp" alt="Two moms" style={{ width: '100%', paddingTop: "4rem" }} />
      </ImageContainer>

      {/* Repeat the pattern for other sections */}
      {/* For each section, you can alternate between text and images to create a flow */}
      
            <Typography paragraph>
          Det finns en hel del forskning som visar på fördelarna med att anlita en doula. Flera studier har visat att föräldrar som har stöd av en doula ökar chansen till en positiv förlossningsupplevelse och därmed även en bättre start i livet som förälder. Mer specifikt har forskningen visat att doulan kan bidra till:
        </Typography>

                <Typography variant="h3">Stöd i forskningen</Typography>
        <List aria-label="Fördelar med att anlita en doula">
          <ListItem>Mindre behov av medicinsk smärtlindring</ListItem>
          <ListItem>Lägre risk för medicinska komplikationer</ListItem>
          <ListItem>Bättre förlossningsupplevelser</ListItem>
          <ListItem>Lägre risk för kejsarsnitt</ListItem>
          <ListItem>Lägre risk för förlossningsdepression</ListItem>
          <ListItem>Bättre förutsättningar till en välfungerande amningsstart</ListItem>
          <ListItem>Ökad känsla av välbefinnande</ListItem>
          <ListItem>Ökad känsla av tillfredsställelse</ListItem>
          <ListItem>Ökad känsla av att vara en bra partner</ListItem>
        </List>
         <Typography paragraph>
          Av studierna framgår också att föräldrar som haft stöd av doula är mer delaktiga i förlossningen och känner sig mer tillfreds med sin upplevelse.
        </Typography>
      
             <Typography variant='h3'>Ett välkommet stöd i förlossningsvården </Typography>
        <Typography paragraph> Vårt samarbete med sjukvården har visat sig vara mycket värdefullt. Barnmorskor och övrig vårdpersonal uppskattar ofta vår närvaro eftersom effekten av en ökad oxytocinmängd ger ett lugn och en positiv atomsfär i förlossningsrummet. Det gynnar alltså både dig som blivande förälder och ditt sjukvårdsteam.
        </Typography>
        <Typography variant='h3'>Partnerns roll</Typography>
        <Typography paragraph>
          Finns det en partner/stödperson med, är det en stor fördel att ha med sig en doula som kan stötta både dig och din partner/stödperson under förlossningen. Du som partner/stödperson är den som känner den som föder allra bäst, och doulans uppgift är därför att se till att DU har det stöd som DU behöver för att vara det. Med en doula har du som partner/stödperson en större möjlighet att vara mer delaktig i och vara mer närvarande för den som föder. Många upplever att med doulans närvaro tenderar partnerns/ stödpersonens engagemang att öka under förlossningen och upplever sig kunna vara mer närvarande. </Typography>
    </Container>
  );
}

export default VarförDoula;
