// HeroSection.js
import React from 'react';
import { Box, Typography, useTheme, Link} from '@mui/material';
import HighFiveSVG from '../assets/twowomen.svg';
import { CTAButton } from './Buttons';
import InfoIcon from '@mui/icons-material/Info';
import DoulaSlider from './DoulaSlider';


const HeroSection = () => {
  const theme = useTheme();

  

 return (

     <Box
       xs={{maxWidth: '70%'}}
       sx={{
         maxWidth: '100%',
            paddingTop: '2rem',
       pl: 4,
       pr: 4,
         bgcolor: theme.palette.background.paper,
       border: '1px solid green'

     }}> 
    
        <Typography gutterBottom variant='overline' >
       Grattis till graviditeten!  </Typography>
     <typography gutterBottom paragraph>
       Och så fint att du hittat till oss på DoulaSkapet! Oavsett vem du är eller var du just nu befinner dig på din resa, så har du kommit helt rätt.
     </typography>
       <Typography variant="h2" >Varför anlita en Doula</Typography>
       
        <Typography paragraph>
         Att anlita en doula är kanske den bästa present du kan ge till dig själv under graviditeten. Förlossningen är en av livets mest krävande och intensiva upplevelse och med hjälp av en doula ger du dig själv en bättre förutsättning till en positiv förlossningsupplevelse. Det möjliggör också en trygg start för din bebis för livet utanför magen. Forskning* visar nämligen att föräldrar som har stöd av en doula ökar chansen till en positiv förlossningsupplevelse och därmed även en bättre start i livet som förälder.</Typography> <Typography paragraph>
  Mer om fördelarna med att anlita en doula och forskningen bakom det kan du läsa mer om under {' '}
         <Link href="/fakta">
          Fakta
        </Link>
      </Typography>

       
        <Typography variant='h3'>
          Ge dig själv och din bebis de bästa förutsättningar för en trygg start 
        </Typography>
      
       <Box>
         
         <Typography gutterBottom paragraph >DoulaSkapet består av doulorna: Dunja, Karin, Jenny och Annika. Vi är verksamma och boende i Stockholm med omnejd och vårt gemensamma uppdrag är att vi ska erbjuda dig och din familj just det stöd som du - ni behöver, för att göra resan genom graviditeten och förlossningen till en så trygg och fantastisk upplevelse som möjligt. Vårt stöd är anpassat till att kunna skräddarsys helt efter behov och önskemål. Och vi älskar det vi gör. 
         
         </Typography>

          <Typography
           gutterBottom
           variant='h3' data-aos="fade-left">Möt våra fantastiska Doulor</Typography>
         <DoulaSlider
           
           
          /> 
       </Box>
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
         <Typography gutterBottom variant='h2' >DoulaSkapet</Typography>
           <Typography gutterBottom paragraph>
          
          
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

 
  );
};
export default HeroSection;
