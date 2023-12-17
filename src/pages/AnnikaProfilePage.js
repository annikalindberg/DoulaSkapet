// HeroSection.js
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import HighFiveSVG from '../assets/highfive.svg'; // Adjust the path
import { CTAButton } from '../components/Buttons';
import InfoIcon from '@mui/icons-material/Info';
import CustomNetlifyForm from '../components/CustomGoogleForm';
import ResponsiveImage from '../components/responsiveImages';
import { doulorArray } from '../components/DoulorArray';

const AnnikaProfilePage = () => {
  const theme = useTheme();

  

 return (
 
<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 2 // Adds space between elements
      }}
      data-aos="fade-up"
     >
         <ResponsiveImage image={doulorArray[3].image} alt={doulorArray[3].name} />
    
     
     <Box
       xs={{maxWidth: '70%'}}
       sx={{
       maxWidth: '90%',
       pl: 4,
       pr: 4,
       bgcolor: theme.palette.background.paper

       }}> 
       
        <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, mt: 8, mb: 5 }}>
Annika Doula        </Typography>
        <Typography gutterBottom paragraph >
          Grattis till graviditeten! Och så fint att du hittat till oss på DoulaSkapet! Oavsett vem du är eller var du just nu befinner dig på din resa, så har du kommit helt rätt.
        </Typography> 
       <Box>
         
         <Typography gutterBottom paragraph >DoulaSkapet består av doulorna: Dunja, Karin, Jenny och Annika. Vi är verksamma och boende i Stockholm med omnejd och vårt gemensamma uppdrag är att vi ska erbjuda dig och din familj just det stöd som du - ni behöver, för att göra resan genom graviditeten och förlossningen till en så trygg och fantastisk upplevelse som möjligt. Vårt stöd är anpassat till att kunna skräddarsys helt efter behov och önskemål. Och vi älskar det vi gör. 
         
         </Typography>

          <Typography
           gutterBottom
           variant='h3' data-aos="fade-left">Möt våra fantastiska Doulor</Typography>
        
       </Box>
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
         <Typography gutterBottom variant='h2' >DoulaSkapet</Typography>
        <CustomNetlifyForm />
</Box>
             
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <InfoIcon sx={{ mr: 1 }} />
                     <Typography>Expertise in various birthing methods.</Typography>
                       <InfoIcon sx={{ mr: 1 }} />
                     <Typography>Expertise in various birthing methods.</Typography>
                       <InfoIcon sx={{ mr: 1 }} />
            <Typography>Expertise in various birthing methods.</Typography>
         
    </Box>
       <Box sx={{ display: 'flex', flexDirection: { xs: 'column'}, gap: 2, mt: 3 }}><Typography>
         Tveka inte att kontakta oss för ett första kostnadsfritt "lära-känna-möte" helt utan förbindelser. Välkommen att höra av dig till oss!
       </Typography>
          <CTAButton href={`mailto:doulaskapet@gmail.com`} aria-label="Maila en förfrågan via email">
            Boka kostnadsfritt möte
       </CTAButton>
       
          <CTAButton variant="outlined" href="/doulapaket" aria-label="Gå till DoulaPaket">
            Doulatjänster
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
     </Box>
 
  );
};
export default AnnikaProfilePage;
