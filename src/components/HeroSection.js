// HeroSection.js
import React from 'react';
import { Box, Typography, Link} from '@mui/material';
import twowomen from '../assets/twowomen.svg';
import DoulaSlider from './DoulaSlider';
import PageWrapper from './PageWrapper';



const HeroSection = () => {

  

  return (

     <PageWrapper>
   r
        <Typography gutterBottom variant='h2' > Personligt utformat stöd genom graviditet och förlossning
      </Typography>
      <Typography variant='italic' ></Typography>
      <Typography gutterBottom paragraph>
         Att anlita en doula är kanske den bästa present du kan ge till dig själv under graviditeten. Förlossningen är en av livets mest krävande och intensiva upplevelse och med hjälp av en doula ger du dig själv en bättre förutsättning för en positiv förlossningsupplevelse. Det möjliggör också en trygg start för din bebis för livet utanför magen. Forskning* visar nämligen att föräldrar som har stöd av en doula ökar chansen till en positiv förlossningsupplevelse och därmed även en bättre start i livet som förälder.</Typography> <Typography paragraph>
  Mer om fördelarna med att anlita en doula och forskningen bakom det kan du läsa mer om under {' '}
         <Link href="/DoulaEffekten">
          Doulaeffekten
        </Link>
      </Typography>
        
        <Box
    display="flex" // Enable flex container
    justifyContent="center" // Horizontally center the child
    alignItems="center" // Vertically center the child
    // Add other parent styles as needed
>
     <Box
        data-aos="fade-right"
        component="img"
        src={twowomen}
        alt="Pregnant woman and doula"
        sx={{
          maxWidth: '200px',
          mt: { xs: 2, md: 1 },
          mb: { xs: 2, md: 3 },
          width: '100%', // Responsive image width
          // Remove justifyContent and alignSelf from here
        }}
        />
        <Typography variant='h5' gutterBottom>Alla våra Doulor är duktiga, professionella och erfarna. Men vi vet att att hitta en <Typography variant='italic'> duktig och erfaren  </Typography>doula, inte nödvändigtvis detsamma som att hitta<Typography variant='italic'> den rätta  </Typography>doulan. </Typography>
        
</Box> 
        
       <Box>
         
         
            
           
     
        
        <Typography variant='h3' gutterBottom>Matcha med rätt doula</Typography>
        <Typography variant='body1'>Att välja doula handlar om magkänsla, personkemi och just dina/era unika behov. Alla våra doulor är professionella och erfarna, men matchningen ska kännas 100% rätt för alla parter. Därför erbjuder vi på DoulaSkapet alltid ett första (kostnadsfritt och helt förutsättningslöst) "lära-känna" möte med en eller flera av våra doulor. <Typography variant='body2'gutterBottom> (*OBS Detta gäller även för den av oss som ska bli "back-up-doula" för den doula ni väljer).</Typography> Varmt välkommen att skriva till oss, kontaktuppgifter till oss alla hittar ni under {' '}
         <Link href="/Kontakt">
          /Kontakt
          </Link></Typography>
        <Typography>Lär känna oss lite närmare under {' '}
         <Link href="/Doulor">
          /Doulor
          </Link>
        </Typography>
        
         <DoulaSlider
           
        /> 
        
       </Box>
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
      
</Box> 
             

 
</PageWrapper>
 
  );
};
export default HeroSection;
