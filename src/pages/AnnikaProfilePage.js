// HeroSection.js
import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import HighFiveSVG from '../assets/highfive.svg';
import { CTAButton } from '../components/Buttons';
import InfoIcon from '@mui/icons-material/Info';
import CustomNetlifyForm from '../components/CustomGoogleForm';


const AnnikaProfilePage = () => {
  const theme = useTheme();



 return (
 
<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 2 // Adds space between elements
      }}
      data-aos="fade-up"
   >
     <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
  <Grid item xs={12} md={6}>

<Box
    component="img"
 src="/optimized-images/Annika.webp"     alt="Profile Image"
    sx={{
        width: '100%', // Responsive image width
        height: 'auto',
        borderRadius: '15px', // Soft edges
        margin: '20px', // Adds margin around the image
    }}
    />
  </Grid>
       <Grid item xs={12} md={6}>
         <Typography variant='h2' gutterBottom>
           Annika
         </Typography>
         <Typography paragraph >
            Som doula drivs jag av ett stort intresse för allt som har med graviditet, födande och kroppen att göra, och ägnar mig själv åt yoga, meditation och breathwork som olika tekniker för att "komma ner i kroppen". I födandets skeden vill vi vara i kroppen snarare än i i hjärnan, vilket ofta är den största utmaningen utifrån det vi är vana vid. Jag har egen levd erfarenhet av IVF och att föda barn utanför heteronormen. Jag bor med min fru, vår dotter Ronja och våra hundar i ett radhus i Skogås, Stockholm. En stor del i mitt doulande är att skapa ett tryggt rum, "ett sacred space" för födandet. Min övertygelse är nämligen att alla kroppar som kan bära ett barn, också kan föda barn. Jag vet även att den födande kroppen ser ut på olika sätt, den kan bära på erfarenheter av olika slag, men oavsett hur hur den är utformad eller känns inifrån så KAN DEN FÖDA. Så länge den har de yttre förutsättningar som krävs för födandet att ske. Och det är här jag som doula kommer in i bilden.
           
    </Typography>
    <Typography>
      {/* Your long presentation text goes here */}
    </Typography>
  </Grid>
</Grid>

    
     
     <Box
       xs={{maxWidth: '70%'}}
       sx={{
       maxWidth: '90%',
       pl: 4,
       pr: 4,
       bgcolor: theme.palette.background.paper

       }}> 
       
        <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, mt: 8, mb: 5 }}>
Annika Doula        </Typography>
        <Typography gutterBottom paragraph >
          Graviditet och födande kan innebära att du/ni som HBTQI+ möter dessa sammanhang utifrån en minoritetsstress som är svår att sätta sig in i utan att själv ha egen levd erfarenhet. Jag har erfarenhet att bära och föda barn utanför heternormen, samt genomgå ivf-behandling som lesbiskt par. Jag har även arbetat med HBTQI+ frågor i olika sammanhang under många år. Jag har en stor förståelse för de utmaningar som kan uppstå i mötet med vården och kan erbjuda stöd utifrån ett HBTQI+ medvetet perspektiv.
        </Typography> 
       <Box>
         
         <Typography gutterBottom paragraph >DoulaSkapet består av doulorna: Dunja, Karin, Jenny och Annika. Vi är verksamma och boende i Stockholm med omnejd och vårt gemensamma uppdrag är att vi ska erbjuda dig och din familj just det stöd som du - ni behöver, för att göra resan genom graviditeten och förlossningen till en så trygg och fantastisk upplevelse som möjligt. Vårt stöd är anpassat till att kunna skräddarsys helt efter behov och önskemål. Och vi älskar det vi gör. 
         
         </Typography>

          <Typography
           gutterBottom
           variant='h3' data-aos="fade-left">Möt våra fantastiska Doulor</Typography>
        
       </Box>
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
         <Typography gutterBottom variant='h2' >DoulaSkapet</Typography>
        <CustomNetlifyForm />
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
     </Box>
 
  );
};
export default AnnikaProfilePage;
