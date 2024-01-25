
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import PageSpecificHero from '../components/PageSpecificHero';
import  PageWrapper  from '../components/PageWrapper';
import MyBreadcrumbs from '../components/BreadCrumbs';
import ResponsiveImage from '../components/ResponsiveImage';
import { Typography, Box } from '@mui/material';
import twowomen from '../assets/twowomen.svg'
import layingdown from '../assets/layongdown.svg'


const Hem = () => {

  return (
        <PageWrapper>
    <Helmet>
        <title>DoulaSkapet - Trygg Förlossning</title>
         <link rel="canonical" href="https://www.doulaskapet.se" />
      <meta name="description" content="DoulaSkapet i Stockholm erbjuder professionella doulatjänster. Stöd för genom graviditet, förlossning och postpartum. Våra doulor är erfarna och har bred kompetens och erfarenhet att stötta HBTQ-personer, självstående, regnbågsgamiler och jobbar traumamedvetet och HBTQ-medvetet. Våra doulor har olika erfarenheter av att t.ex. föda barn utanför heteronormen, cisnormen och tvåsamhetsnormen. Vi har ett normkritiskt perspektiv och jobbar behovsanpassat och proffessionellt."></meta>
      </Helmet>
<MyBreadcrumbs />
    <PageSpecificHero component="h1"
        title="Letar du efter en Doula i Stockholm?" 
        subtitle="Då har du hittat helt rätt." 
      image="/optimized-images/handsheart-bg.webp"/>
      <HeroSection />
     
      <Typography gutterBottom variant='h3' data-aos="fade-right"
        sx={{textAlign: 'center'}}
      >DoulaSkapet - trygghet på dina villkor </Typography>
          <Typography gutterbottom paragraph>
         Varje födsel är unik och det gör att vi doulor anpassar vårt arbete efter vem vi jobbar med. Vi ser till att du/ni får ett tryggt doulastöd inför, under och efter födseln för att hela familjen ska få en så trygg och positiv start som möjligt. Från "plusset på stickan" till och med den fjärde trimestern, eller postpartum - den första tiden med er nya lilla familjemedlem, så har vi det ni behöver i form av stöd och trygghet.
         
      </Typography>
      <Typography paragraph> Vårt mål är tydligt: du/ni ska ha de förutsättningar som krävs för att du/ni ska få den bästa tänkbara förlossningsupplevelsen. Och för att välkomna ett nytt litet liv till världen. </Typography>
          {/*  <Typography gutterBottom paragraph >
         Relationen mellan doulan och den födande bygger på ett ömsesidigt förtroende, en djup respekt och lyhördhet för den födandes behov och önskan, Att ha ett ständigt öppet sinne samt en fingertoppskänsla är viktiga egenskaper hos våra doulor. 
      </Typography> */}

        
     
      
      <Typography variant='h3' gutterbottom>HBTQ-kompetens och normkritiskt perspektiv</Typography>
      <Typography paragraph gutterbottom>Vi på DoulaSkapet har ett normkritiskt och inkluderande perspektiv, jobbar medvetet, behovsanpassat och proffessionellt. Vi tror att en doula som har egen levd erfarenhet av att att föda barn utanför normen ger en unik möjilghet att se de behov som andra födande med liknande erfarenheter kan ha. Våra doulor har erfarenhet av att att både stötta klienter som bryter mot cis-normen, heteronormen och tvåsamhetsnormen, men även att själv göra det. </Typography>
      
      <Box
        
    display="flex" // Enable flex container
    justifyContent="center" // Horizontally center the child
    alignItems="center" // Vertically center the child
        sx={{   
       mr: { xs: 2, md: 4, large: 6 },
          mt: { xs: 2, md: 4, large: 6 },
          mb: { xs: 2, md: 3 }, }}
>
 
        <Typography variant='italic' gutterBottom >Vi jobbar aktivt med de normer vi själva präglas av, och mot att frigöra oss från alla föreställningar som finns om hur familjer kan se ut, vilken typ av kroppar som föder barn, ammar och blir förälder. </Typography>
         <Box
        data-aos="fade-right"
        component="img"
        src={layingdown}
        alt="Doula holding pregnant womans legs while laying down"
        sx={{
          maxWidth: '200px',
       
          mt: { xs: 2, md: 3 },
          mb: { xs: 2, md: 3 },
          width: '100%', // Responsive image width
          // Remove justifyContent and alignSelf from here
        }}
        />   
      </Box> 
             
       
 
     
          
          
     
       
       
    
        

      
   
              <Typography variant='h3' gutterBottom>Föda Utan Rädsla (FUR)</Typography>
            <Typography paragraph gutterBottom>Föda Utan Rädsla-metoden har redan använts av tusentals födande i flera länder och allt fler professionella vårdgivare och sjukhus låter sig utbildas i vår unika omvårdnadsmodell (SAFE). FUR-metoden fokuserar på att stärka din och ditt barns egen förmåga och kraft som redan finns inom er. Vi vet att både du och barnet redan har all kunskap ni behöver för att föda och födas. Våra metoder vilar på en stabil grund av fysiologisk kunskap och innehåller en bredd av verktyg som är utvecklade kring bevisade effekter.  {/*  <a
          href="https://fodautanradsla.se/om/metoden"
          target="_blank"
          rel="noopener noreferrer"
    
          >Föda Utan Rädsla</a> */} </Typography>
       
       <ResponsiveImage
            mobileSrc={`${process.env.PUBLIC_URL}/optimized-images/babyfeet-mobile.webp`}
            tabletSrc={`${process.env.PUBLIC_URL}/optimized-images/babyfeet-tablet.webp`}
            desktopSrc={`${process.env.PUBLIC_URL}/optimized-images/babyfeet-desktop.webp`}
        alt="Hands holding a newborn baby"
      
      />
      

              <Typography variant='h4' gutterBottom>Förutsägbarhet i det oförutsägbara</Typography>
            <Typography paragraph>Vi anlitar alltid i första hand våra egna doulor som backup, och erbjuder alltid att få träffa även den doula som är tilltänkt som backup, samt möjlighet att byta till en annan backup om så önskas. Vi vet att valet av doula är högst personligt och måste bygga på ömsesidigt förtroende.
            Vi vill att du/ni ska känna trygghet och förutsägbarhet på alla sätt där det går.</Typography>
          
            <Typography variant='h4' gutterBottom>Traumamedvetenhet</Typography>
            <Typography paragraph> Vi är medvetna om att det kan finnas en historia av trauma i bagaget hos den som föder, och att det kan påverka förlossningsupplevelsen. Inom DoulaSkapet arbetar vi traumamedvetenhet och möter dig/er utifrån det. </Typography>
          
            <Typography variant='h4' gutterBottom>Personligt och professionellt</Typography>
            <Typography paragraph> Precis som att du är unik så är din födsel det, oavsett om det är din första eller tredje så är varje person och varje barn unikt och har behov som är unika. Inom DoulaSkapet är vi noga med att inte tro oss veta, utan vill lära känna dig som födande och eventuell partner/stödperson/medförälder innan vi skräddarsyr vårt stöd. Vi vill kunna möta varje unik situation med respekt, omsorg och professionalitet. </Typography>
     
            <Typography variant='h4' gutterBottom>Tillgång till nätverk och kompetens</Typography>
            <Typography paragraph> Med vår erfarenhet och tillgång till ett omfattande nätverk av experter och resurser, är vi starkare tillsammans. "Ensam är inte stark" är ett mantra som vi lever efter. Vi som driver DoulaSkapet har lyxen att ingå i ett stort nätverk av andra doulor, barnmorskor, amningsrådgivare, psykologer, psykoterapeuter, kiropraktorer och massörer som vi kan rekommendera/rådgöra med vid behov. </Typography>
                 
   
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, mt: 4, justifyContent: 'center' }}>
        <Typography variant='italic' gutterBottom >Med DoulaSkapet är du och din familj i goda händer</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center' }}>
        <Box
        data-aos="fade-right"
        component="img"
        src={twowomen}
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