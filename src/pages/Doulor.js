import React from 'react';
import PresentationsCards from '../components/PresentationsCards';
import { Grid, Container, Typography } from '@mui/material';
import {doulorArray} from '../components/DoulorArray';

export const Doulor = () => {

 
   return (
    <Container >
      <Typography variant='h2' sx={{pt: 5}}gutterBottom>
        DoulaSkapet - Vår Filosofi
      </Typography>
       <Typography paragraph> Vårt mål är tydligt: du/ni ska ha de förutsättningar som krävs för att du/ni ska få den bästa tänkbara förlossningsupplevelsen, samt välkomna ett nytt litet liv till världen. </Typography>
       <Typography variant='h3' sx={{pt: 5, pb:2}}>Doulor</Typography>
       <Typography body1 sx={{pb:3}}>

         Vi är alla diplomerade doulor som jobbar utifrån Föda Utan Rädsla-metoden. Metoden har praktiska och effektiva verktyg för att minska stress och rädsla under förlossningen. Graviditet och födsel innebär ofta att vila i det okända, men vi fokuserar på de aspekter som faktiskt går att planera och förbereda för att skapa så mycket trygghet som möjligt. DoulaSkapets doulor är alla certifierade förlossningsdoulor som arbetar utifrån samma stabila grund och är utbildare inom Föda Utan Rädslas-metoder.</Typography>
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
    </Container>
  );
};

export default Doulor;