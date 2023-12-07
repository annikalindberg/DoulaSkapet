// HeroSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import HighFiveSVG from '../assets/highfive.svg'; // Adjust the path
import { CTAButton } from './Buttons';
import InfoIcon from '@mui/icons-material/Info';


const HeroSection = () => {
 return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on medium and up
        alignItems: 'center',
             justifyContent: 'space-around',
        textAlign: { xs: 'center', md: 'left' } // Center text on small screens
      }}
      data-aos="fade-up"
    >
      <Box sx={{ maxWidth: { md: '60%' } }}> {/* Limit text width on larger screens */}
             <Typography
                 data-aos="fade-right"
  variant="h1"
  gutterBottom
  sx={{
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, // Adjust font size based on screen size
    mt: 8, mb: 5 // Adds margin-top for spacing above the element
  }}
>
  DoulaSkapet - Trygg Förlossning
</Typography>
             <Typography paragraph data-aos="fade-right"> Grattis till graviditeten, och så fint att du hittat till oss.  </Typography> 
                     <Box>
          {/* Bullet points or short paragraphs with icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <InfoIcon sx={{ mr: 1 }} />
                     <Typography>Expertise in various birthing methods.</Typography>
                       <InfoIcon sx={{ mr: 1 }} />
                     <Typography>Expertise in various birthing methods.</Typography>
                       <InfoIcon sx={{ mr: 1 }} />
            <Typography>Expertise in various birthing methods.</Typography>
          </Box>
          {/* Repeat for other points */}
        </Box>

             <Typography paragraph data-aos="fade-left">Våra Doulor finns i Stockholm, med omnejd och finns till för att du ska få det stöd som just du/just ni bevöver
                 inför, under och efter förlossning. Oavsett om du är den som ska föda, är partner eller stödperson till någon som ska föda, precis har fött barn eller bara är nyfiken på vad en doula gör, så har du kommit helt rätt.
          
          Inom DoulaSkapet arbetar vi utifrån beprövade metoder, samt utifrån den unika person du/ni är och dina/era val. </Typography>
          
             <Typography
                 variant='h2'
                 sx={{
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' }, // Adjust font size based on screen size
    mt: 6, mb:3 // Adds margin-top for spacing above the element
                 }}
             >DoulaSkapet - vår filosofi </Typography>
              <Typography paragraph >
Att föda barn är en av de mest kraftfulla upplevelser en människa kan gå igenom, och oavsett hur födseln går till så påverkar det oss djupt på många plan: fysiologiskt, emotionellt, mentalt och själsligt.

Vi i DoulaSkapet tycker det är helt fantastiskt att få närvara och få delta vid en förlossning. Relationen mellan doulan och den födande bygger på ett ömsesidig förtroende, respekt, öppet sinne, fingertoppskänsla och erfarenhet. Varje födsel är unik och det gör att vi doulor anpassar vårt arbete efter vem vi jobbar med. Vi ser till att du/ni får ett tryggt doulastöd inför, under och efter födseln för att hela familjen ska få en så trygg och positiv start som möjligt.</Typography>
        <Typography paragraph>
          
          Hoppas att du hittar det du söker, annars är du varmt välkommen att  </Typography>
        <CTAButton
          as="a"
          href={`mailto:doulaskapet@gmail.com`}
          aria-label="Maila en förfrågan via email"
        >
          ta kontakt med oss!
        </CTAButton>
      </Box>
         <Box
             data-aos="fade-left"
        component="img"
        src={HighFiveSVG}
        alt="High Five"
        sx={{
          maxWidth: '200px',
          mt: { xs: 2, md: 0 }, // Add top margin on small screens
            width: '100%' // Responsive image width

        }}
      />
    </Box>
  );
};
export default HeroSection;
