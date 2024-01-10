// HeroSection.js
import React from 'react';
import { Box, Typography, Link} from '@mui/material';
import twowomen from '../assets/twowomen.svg';
import rebozowomen from '../assets/rebozo.svg';
import DoulaSlider from './DoulaSlider';
import PageWrapper from './PageWrapper';



const HeroSection = () => {

  

  return (

     <PageWrapper>
   
        <Typography gutterBottom variant='h2' >Letar du doula? 
      </Typography>
      <Typography variant='overline' >Grattis! </Typography>
      <Typography gutterBottom paragraph>
         Att anlita en doula är kanske den bästa present du kan ge till dig själv under graviditeten. Förlossningen är en av livets mest krävande och intensiva upplevelse och med hjälp av en doula ger du dig själv en bättre förutsättning till en positiv förlossningsupplevelse. Det möjliggör också en trygg start för din bebis för livet utanför magen. Forskning* visar nämligen att föräldrar som har stöd av en doula ökar chansen till en positiv förlossningsupplevelse och därmed även en bättre start i livet som förälder.</Typography> <Typography paragraph>
  Mer om fördelarna med att anlita en doula och forskningen bakom det kan du läsa mer om under {' '}
         <Link href="/DoulaEffekten">
          /Doulaeffekten
        </Link>
      </Typography>
      <Typography variant='overline' >Då har du hittat helt rätt</Typography>
       <Typography gutterBottom paragraph>
          
          
        DoulaSkapet är ett Doulateam baserat i Stockholm, bestående av proffesionella och erfarna doulor. Vi arbetar alla utifrån beprövade metoder, samt utifrån den unika person du/ni är och dina/era val. </Typography>
     
      <Typography
           gutterBottom
          variant='h3' data-aos="fade-left">Våra fantastiska Doulor</Typography>
        <Typography body1 sx={{pb:3}}>

          Vi är alla diplomerade doulor som jobbar utifrån Föda Utan Rädsla-metoden. Metoden har praktiska och effektiva verktyg för att minska stress och rädsla under förlossningen. Graviditet och födsel innebär ofta att vila i det okända, men vi fokuserar på de aspekter som faktiskt går att planera och förbereda för att skapa så mycket trygghet som möjligt. DoulaSkapets doulor är alla certifierade förlossningsdoulor som arbetar utifrån samma stabila grund och är utbildare inom Föda Utan Rädslas-metoder.</Typography>
  
    
       
       
      

  
        <Box
    display="flex" // Enable flex container
    justifyContent="center" // Horizontally center the child
    alignItems="center" // Vertically center the child
    // Add other parent styles as needed
>
    <Box
        data-aos="fade-right"
        component="img"
        src={rebozowomen}
        alt="Pregnant woman and doula"
        sx={{
            maxWidth: '200px',
            mt: { xs: 2, md: 1 },
            mb: { xs: 2, md: 3 },
            width: '100%', // Responsive image width
            // Remove justifyContent and alignSelf from here
        }}
    />
</Box>
       <Box>
         
         
            
            <Typography gutterBottom paragraph >DoulaSkapet består av doulorna: Dunja, Karin, Jenny och Annika. Vi är verksamma och boende i Stockholm med omnejd och vårt gemensamma uppdrag är att vi ska erbjuda dig och din familj just det stöd som du - ni behöver, för att göra resan genom graviditeten och förlossningen till en så trygg och fantastisk upplevelse som möjligt. Vårt stöd är anpassat till att kunna skräddarsys helt efter behov och önskemål. Och vi älskar det vi gör. 
         
       </Typography>
       <Typography variant='overline'>För att kontakta någon av oss, gå till respektive profilsida för kontaktuppgifter. Eller gå till {' '}
         <Link href="/Kontakt">
          /Kontakt
        </Link></Typography>
         <DoulaSlider
           
        /> 
        
       </Box>
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
      
</Box>
             
  
    

       
      <Box
    display="flex" // Enable flex container
    justifyContent="center" // Horizontally center the child
    alignItems="center" // Vertically center the child
    // Add other parent styles as needed
>
    <Box
        data-aos="fade-left"
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
</Box>
 
</PageWrapper>
 
  );
};
export default HeroSection;
