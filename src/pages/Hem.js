
import React from 'react';
import HeroSection from '../components/HeroSection';
import PageSpecificHero from '../components/PageSpecificHero';
import  PageWrapper  from '../components/PageWrapper';
import MyBreadcrumbs from '../components/BreadCrumbs';
import ResponsiveImage from '../components/ResponsiveImage';
import { Typography, Grid, Box } from '@mui/material';
import highfive from '../assets/highfive.png'

const Hem = () => {

  return (
    
    <PageWrapper>
    <PageSpecificHero component="h1"
        title="På jakt efter en Doula i Stockholm?" 
      subtitle="Då har du hittat helt rätt."/>
      <MyBreadcrumbs />
      <HeroSection />
     
      <Typography variant='h3' data-aos="fade-right"
        sx={{textAlign: 'center'}}
      >DoulaSkapet - vår filosofi </Typography>
       <Grid container spacing={5} alignItems="flexStart" sx={{ mt: 4 }}>
        {/* Image Grid Item */}
        <Grid item xs={12} md={6}>
           <Typography paragraph>
         Relationen mellan doulan och den födande bygger på ett ömsesidigt förtroende, en djup respekt och lyhördhet för den födandes behov och önskan, ett ständigt öppet sinne samt en fingertoppskänsla byggd på en lång erfarenhet och en intuitiv förmåga.
          </Typography>
          <Typography paragraph>
         Varje födsel är unik och det gör att vi doulor anpassar vårt arbete efter vem vi jobbar med. Vi ser till att du/ni får ett tryggt doulastöd inför, under och efter födseln för att hela familjen ska få en så trygg och positiv start som möjligt. Från "plusset på stickan" till och med den fjärde trimestern, eller postpartum - den första tiden med er nya lilla familjemedlem, så har vi det ni behöver i form av stöd och trygghet.
         
      </Typography>
          <Typography variant='h4' gutterbottom>Trygghet på dina villkor</Typography>
          <Typography paragraph> Vårt mål är tydligt: du/ni ska ha de förutsättningar som krävs för att du/ni ska få den bästa tänkbara förlossningsupplevelsen, samt välkomna ett nytt litet liv till världen. </Typography>
          
          
        </Grid>
      
        {/* Image Grid Item */}
        <Grid item xs={12} md={6}>
          <ResponsiveImage
            mobileSrc={`${process.env.PUBLIC_URL}/optimized-images/babyfeet-mobile.webp`}
            tabletSrc={`${process.env.PUBLIC_URL}/optimized-images/babyfeet-tablet.webp`}
            desktopSrc={`${process.env.PUBLIC_URL}/optimized-images/babyfeet-desktop.webp`}
            alt="Hands holding a newborn baby"
          />
          </Grid>

        {/* Text Grid Item */}
        <Grid item xs={12} md={6}>
         <ResponsiveImage
           
            mobileSrc={`${process.env.PUBLIC_URL}/optimized-images/partnerdoula-mb.webp`}
            tabletSrc={`${process.env.PUBLIC_URL}/optimized-images/partnerdoula-tb.webp`}
            desktopSrc={`${process.env.PUBLIC_URL}/optimized-images/partnerdoula-dt.webp`}
            alt="Doula and partner supporting pregnant woman"
          />
        </Grid>

        {/* Text Grid Item FROM HERE and all the way down the textcontent has no margins on the left side on mobile view */}
        <Grid item xs={12} md={6}> 
              <Typography variant='h4' gutterBottom>Föda Utan Rädsla (FUR)</Typography>
            <Typography paragraph gutterBottom>Föda Utan Rädsla-metoden har redan använts av tusentals födande i flera länder och allt fler professionella vårdgivare och sjukhus låter sig utbildas i vår unika omvårdnadsmodell (SAFE). FUR-metoden fokuserar på att stärka din och ditt barns egen förmåga och kraft som redan finns inom er. Vi vet att både du och barnet redan har all kunskap ni behöver för att föda och födas. Våra metoder vilar på en stabil grund av fysiologisk kunskap och innehåller en bredd av verktyg som är utvecklade kring bevisade effekter. Läs mer om Föda Utan Rädsla-metoden här:  </Typography>
        <a
          href="https://fodautanradsla.se/om/metoden"
          target="_blank"
          rel="noopener noreferrer"
    
          >Föda Utan Rädsla</a>
    
</Grid>
              <Typography variant='h4' gutterBottom>Förutsägbarhet i det oförutsägbara</Typography>
            <Typography paragraph>Vi anlitar alltid i första hand våra egna doulor som backup, och erbjuder alltid att få träffa även den doula som är tilltänkt som backup, samt möjilghet att byta till en annan backup om så önskas. Vi vet att valet av doula är högst personligt och måste bygga på ömsesidigt förtroende.
            Vi vill att du/ni ska känna trygghet och förutsägbarhet på alla sätt där det går.</Typography>
          
            <Typography variant='h4' gutterBottom>Traumamedvetenhet</Typography>
            <Typography paragraph> Vi är medvetna om att det kan finnas en historia av trauma i bagaget hos den som föder, och att det kan påverka förlossningsupplevelsen. Inom DoulaSkapet arbetar vi traumamedvetenhet och möter dig/er utifrån det. </Typography>
          
            <Typography variant='h4' gutterBottom>Personligt och profesionellt</Typography>
            <Typography paragraph> Precis som att du är unik så är din födsel det, oavsett om det är din första eller tredje så är varje person och varje barn unikt och har behov som är unika. Inom DoulaSkapet är vi noga med att inte tro oss veta, utan vill lära känna dig som födande och eventuell partner/stödperson/medförälder innan vi skräddarsyr vårt stöd. Vi vill kunna möta varje unik situation med respekt, omsorg och professionalitet. </Typography>
     
            <Typography variant='h4' gutterBottom>Tillgång till nätverk och kompetens</Typography>
            <Typography paragraph> Med vår erfarenhet och tillgång till ett omfattande nätverk av experter och resurser, är vi starkare tillsammans. "Ensam är inte stark" är ett mantra som vi lever efter, och tillsammans kan vi erbjuda en omfattande och kvalitativ tjänst, har vi lyxen att ha ett stort nätverk av andra doulor, barnmorskor, amningsrådgivare, psykologer, psykoterapeuter, kiropraktorer och massörer som vi kan rekommendera/rådgöra med vid behov. </Typography>
                 
      </Grid>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, mt: 4, justifyContent: 'center' }}>
        <Typography variant='italic' gutterBottom >Med DoulaSkapet är du och din familj i goda händer</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center' }}>
        <Box
        data-aos="fade-right"
        component="img"
        src={highfive}
        alt="Pregnant woman and doula"
        sx={{
          maxWidth: '200px',
          mt: { xs: 4, md: 3 },
          mb: { xs: 4, md: 5 },
          width: '100%', 
        }}
        /> 
          </Box>
          
       
      
        
</PageWrapper>

  );
}

export default Hem;