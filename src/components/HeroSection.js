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
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: { xs: 'center', md: 'left' }
      }}
      data-aos="fade-up"
    >
      <Box sx={{ maxWidth: { md: '60%' } }}>
        <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, mt: 8, mb: 5 }}>
          DoulaSkapet - Trygg Förlossning
        </Typography>
        <Typography paragraph fontSize={{ xs: '0.5rem', sm: '0.8rem', md: '1.4rem', lg: '1.75rem' }}>
          Grattis till graviditeten! Och så fint att du hittat till oss på DoulaSkapet! Oavsett vem du är eller var du just nu befinner dig på din resa, så har du kommit helt rätt.
        </Typography> 
       <Box>
         <Typography variant='h2' data-aos="fade-left">DoulaSkapet</Typography>
         <Typography paragraph data-aos="fade-left">DoulaSkapet doulorna: Dunja, Karin, Jenny och Annika. Vi är verksamma och boende i Stockholm med omnejd och vårt gemensamma uppdrag är att vi ska erbjuda dig och din familj just det stöd som du - ni behöver, för att göra resan genom graviditeten och förlossningen till en så trygg och fantastisk upplevelse som möjligt. Vårt stöd är anpassat till att kunna skräddarsys helt efter behov och önskemål. Och vi älskar det vi gör. 
         
         </Typography>
           <Typography paragraph>
          
          
          Inom DoulaSkapet arbetar vi utifrån beprövade metoder, samt utifrån den unika person du/ni är och dina/era val. </Typography>
        </Box>

             
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <InfoIcon sx={{ mr: 1 }} />
                     <Typography>Expertise in various birthing methods.</Typography>
                       <InfoIcon sx={{ mr: 1 }} />
                     <Typography>Expertise in various birthing methods.</Typography>
                       <InfoIcon sx={{ mr: 1 }} />
            <Typography>Expertise in various birthing methods.</Typography>
          </Box>
             <Typography
                 variant='h3'
                 sx={{
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' }, // Adjust font size based on screen size
    mt: 6, mb:3 // Adds margin-top for spacing above the element
                 }}
             >DoulaSkapet - vår filosofi </Typography>
    
        <Typography paragraph>
         Relationen mellan doulan och den födande bygger på ett ömsesidigt förtroende, en djup respekt och lyhördhet för den födandes behov och önskan, ett ständigt öppet sinne samt en fingertoppskänsla byggd på en lång erfarenhet och en intuitiv förmåga.
         </Typography>
          <Typography paragraph>
         Varje födsel är unik och det gör att vi doulor anpassar vårt arbete efter vem vi jobbar med. Vi ser till att du/ni får ett tryggt doulastöd inför, under och efter födseln för att hela familjen ska få en så trygg och positiv start som möjligt. Från "plusset på stickan" till och med den fjärde trimestern, eller postpartum - den första tiden med er nya lilla familjemedlem, så har vi det ni behöver i form av stöd och trygghet.
         
         Tveka inte att kontakta oss för ett första kostnadsfritt "lära-känna-möte" helt utan förbindelser. Välkommen att höra av dig till oss!       </Typography>
        {/*  <CTAButton
    
          as="a"
          href={`mailto:doulaskapet@gmail.com`}
          aria-label="Maila en förfrågan via email"
        >
       skicka en förfrågan!
         </CTAButton> */}
      
       {/* <Typography paragraph> Eller kika in på våra respektive profil för att se vilka olika tjänster vi kan erbjuda!
       </Typography> */}   </Box>  
       <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 3 }}>
          <CTAButton href={`mailto:doulaskapet@gmail.com`} aria-label="Maila en förfrågan via email">
            Contact Us for a Free Consultation
       </CTAButton>
       
          <CTAButton variant="outlined" href="/doulapaket" aria-label="Gå till DoulaPaket">
            Explore Our Doula Packages
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
