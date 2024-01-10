import React from 'react';
import PresentationsCards from '../components/PresentationsCards';
import { Grid, Typography } from '@mui/material';
import {doulorArray} from '../components/DoulorArray';
import PageWrapper from '../components/PageWrapper';
import PageSpecificHero from '../components/PageSpecificHero';
import MyBreadcrumbs from '../components/BreadCrumbs';

const VilkaViÄr = () => {

 
   return (
     <PageWrapper >
        <MyBreadcrumbs />
       <PageSpecificHero title="Om DoulaSkapet"/>
      <Typography variant='h2' sx={{pt: 5}}gutterBottom>
        DoulaSkapet - Vår Filosofi
      </Typography>
       <Typography paragraph> Vårt mål är tydligt: du/ni ska ha de förutsättningar som krävs för att du/ni ska få den bästa tänkbara förlossningsupplevelsen, samt välkomna ett nytt litet liv till världen. </Typography>
       <Typography variant='h3' sx={{pt: 5, pb:2}}>Doulor</Typography>
       <Typography body1 sx={{pb:3}}>

         Vi är alla diplomerade doulor som jobbar utifrån Föda Utan Rädsla-metoden. Metoden har praktiska och effektiva verktyg för att minska stress och rädsla under förlossningen. Graviditet och födsel innebär ofta att vila i det okända, men vi fokuserar på de aspekter som faktiskt går att planera och förbereda för att skapa så mycket trygghet som möjligt. DoulaSkapets doulor är alla certifierade förlossningsdoulor som arbetar utifrån samma stabila grund och är utbildare inom Föda Utan Rädslas-metoder.</Typography>
            <Typography gutterBottom paragraph >DoulaSkapet består av doulorna: Dunja, Karin, Jenny och Annika. Vi är verksamma och boende i Stockholm med omnejd och vårt gemensamma uppdrag är att vi ska erbjuda dig och din familj just det stöd som du - ni behöver, för att göra resan genom graviditeten och förlossningen till en så trygg och fantastisk upplevelse som möjligt. Vårt stöd är anpassat till att kunna skräddarsys helt efter behov och önskemål. Och vi älskar det vi gör. 
         
         </Typography>
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
    </PageWrapper>
  );
};

export default VilkaViÄr;