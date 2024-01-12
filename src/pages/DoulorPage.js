import React from 'react';
import PresentationsCards from '../components/PresentationsCards';
import { Grid, Typography, Box } from '@mui/material';
import {doulorArray} from '../components/DoulorArray';
import PageWrapper from '../components/PageWrapper';
import PageSpecificHero from '../components/PageSpecificHero';
import MyBreadcrumbs from '../components/BreadCrumbs';
import rebozowomen from '../assets/rebozo.svg';

const DoulorPage = () => {

 
   return (
     <PageWrapper >
        <MyBreadcrumbs />
       <PageSpecificHero title="Doulor" />
       
    
       <Grid container spacing={4} justifyContent="center">
        {doulorArray.map((doula) => (
          <Grid item
            sx={{ mt: 3 }}
            xs={12}
            sm={6}
            md={6}
            key={doula.id}>
            <PresentationsCards
     
              name={doula.name}
              image={doula.image}
              pris={doula.pris}
              bor={doula.bor}
              description={doula.description}
              erbjuder={doula.erbjuder}
            
              
            />
            
          </Grid>
        ))}
       </Grid>
       <Typography gutterBottom paragraph>
          
          
        DoulaSkapet är ett Doulateam baserat i Stockholm, bestående av proffesionella och erfarna doulor. Vi arbetar alla utifrån beprövade metoder, samt utifrån den unika person du/ni är och dina/era val. </Typography>
     
      <Typography
           gutterBottom
          variant='h4' data-aos="fade-left">Beprövade metoder, proffesionellt och personligt bemötande </Typography>
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
 
       
        
       </Box>
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
      
</Box>
    </PageWrapper>
  );
};

export default DoulorPage; 