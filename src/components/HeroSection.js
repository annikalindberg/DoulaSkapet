// HeroSection.js
import React from 'react';
import { Box, Typography, Link} from '@mui/material';
import twowomen from '../assets/twowomen.svg';
import InfoIcon from '@mui/icons-material/Info';
import DoulaSlider from './DoulaSlider';
import Button from '@mui/material/Button';
import PageWrapper from './PageWrapper';



const HeroSection = () => {

  

  return (

     <PageWrapper>
     {/*   xs={{maxWidth: '70%'}}
       sx={{
         maxWdth: '100%',
            paddingTop: '2rem',
       pl: 4,
       pr: 4,
         bgcolor: theme.palette.background.paper,
       border: '1px solid green'

     }}>   */}
    
        <Typography gutterBottom variant='overline' >
       Grattis till graviditeten!  </Typography>
     <typography gutterBottom paragraph>
       Och så fint att du hittat till oss på DoulaSkapet! Oavsett vem du är eller var du just nu befinner dig på din resa, så har du kommit helt rätt.
     </typography>
    
       
        <Typography gutterBottom paragraph>
         Att anlita en doula är kanske den bästa present du kan ge till dig själv under graviditeten. Förlossningen är en av livets mest krävande och intensiva upplevelse och med hjälp av en doula ger du dig själv en bättre förutsättning till en positiv förlossningsupplevelse. Det möjliggör också en trygg start för din bebis för livet utanför magen. Forskning* visar nämligen att föräldrar som har stöd av en doula ökar chansen till en positiv förlossningsupplevelse och därmed även en bättre start i livet som förälder.</Typography> <Typography paragraph>
  Mer om fördelarna med att anlita en doula och forskningen bakom det kan du läsa mer om under {' '}
         <Link href="/VarförDoula">
          Fakta
        </Link>
      </Typography>

  
      
       <Box>
         
    

          <Typography
           gutterBottom
           variant='h2' data-aos="fade-left">Möt våra fantastiska Doulor</Typography>
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
          <Button variant='contained' href={`mailto:doulaskapet@gmail.com`} aria-label="Maila en förfrågan via email">
            Boka kostnadsfritt möte
       </Button>
       
          <Button variant="contained" href="/doulapaket" aria-label="Gå till DoulaPaket">
            Doulatjänster
       </Button>
       
        </Box>

       
         <Box
 
             data-aos="fade-left"
        component="img"
        src={twowomen}
        alt="Pregnant woman and doula"
        sx={{
          maxWidth: '200px',
          mt: { xs: 2, md: 0 }, // Add top margin on small screens
            width: '100%' // Responsive image width

        }}
     />
 
</PageWrapper>
 
  );
};
export default HeroSection;
