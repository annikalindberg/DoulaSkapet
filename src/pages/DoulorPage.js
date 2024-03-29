import React from 'react';
import PresentationsCards from '../components/PresentationsCards';
import { Grid, Typography, Box } from '@mui/material';
import {doulorArray} from '../components/DoulorArray';
import PageWrapper from '../components/PageWrapper';
import PageSpecificHero from '../components/PageSpecificHero';
import MyBreadcrumbs from '../components/BreadCrumbs';
import rebozowomen from '../assets/rebozo.svg';
import { Helmet } from 'react-helmet';


const DoulorPage = () => {

 
   return (
     <PageWrapper >
       <Helmet>
         <title>Doulor</title>
          <link rel="canonical" href="https://www.doulaskapet.se/Doulor" />
         <meta name="description" content="DoulaSkapet i Stockholm erbjuder professionella doulatjänster. Stöd för genom graviditet, förlossning och postpartum. Våra doulor är erfarna och har bred kompetens och erfarenhet. Vi har ett normkritiskt och inkluderande perspektiv, jobbar medvetet, behovsanpassat och proffessionellt." />
        </Helmet>
         
        <MyBreadcrumbs />
       <PageSpecificHero
         component="h1"
         title="Våra Doulor"
         subtitle="Beprövade metoder, proffesionellt och personligt bemötande "
          image="/optimized-images/orange-bg.webp"
       />
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
       <Typography gutterBottom variant='h3' data-aos="fade-right">Diplomerade Doulor i Stockholm </Typography>
       <Typography gutterBottom paragraph>
          
          
        DoulaSkapet är ett Doulateam baserat i Stockholm, bestående av proffesionella och erfarna doulor. Vi arbetar alla utifrån beprövade metoder, samt utifrån den unika person du/ni är och dina/era val. </Typography>
     
       <Typography
           gutterBottom
          variant='h4' data-aos="fade-left">Föda Utan Rädsla</Typography> 
        <Typography body1 sx={{pb:3}}>

          Vi är alla diplomerade doulor som jobbar utifrån Föda Utan Rädsla-metoden. Metoden har praktiska och effektiva verktyg för att minska stress och rädsla under förlossningen. Graviditet och födsel innebär ofta att vila i det okända, men vi fokuserar på de aspekter som faktiskt går att planera och förbereda för att skapa så mycket trygghet som möjligt. DoulaSkapets doulor är alla certifierade förlossningsdoulor som arbetar utifrån samma stabila grund och är utbildare inom Föda Utan Rädslas-metoder.</Typography>
  
    
       
       
      

  

      
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
      
</Box>
    
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

export default DoulorPage; 