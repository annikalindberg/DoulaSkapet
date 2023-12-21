import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomNetlifyForm from '../components/CustomGoogleForm'

const AnnikaProfilePage = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', px: { xs: 2, sm: 3, md: 4, lg: 10 }, py: { xs: 2, sm: 3, md: 4, lg: 10 } }}
    >
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }} data-aos="fade-up">
      <Grid container spacing={2} justifyContent="center" sx={{ mt: '16px', mb: '16px' }}>
        <Grid item xs={12} md={6} lg={4} sx={{ p: '8px' }}>
          <Box component="img" src="/optimized-images/Annika.webp" alt="Profile Image" sx={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ textAlign: 'left', p: '8px' }}>
          <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, mt: '32px', mb: '20px' }}>
          Annika Lindberg 
        </Typography>
          <Typography paragraph>
  Som doula drivs jag av ett stort intresse för allt som har med graviditet, födande och 
  kroppen att göra, och ägnar mig själv åt yoga, meditation och breathwork som olika 
  tekniker för att "komma ner i kroppen". I födandets skeden vill vi vara i 
  <Typography component="span" variant='customBodyItalic'> kroppen </Typography>
  snarare än i hjärnan, vilket ofta är den största utmaningen utifrån det vi är vana vid. 
  </Typography>
         
        <Typography paragraph gutterBottom>Jag bor med min fru, vår dotter Ronja och våra hundar i ett radhus i Skogås, Stockholm. En stor del i mitt doulande är att skapa ett tryggt rum, "ett sacred space" för födandet. Min övertygelse är nämligen att alla kroppar som kan bära ett barn, också kan föda barn. Jag vet även att den födande kroppen ser ut på olika sätt, den kan bära på erfarenheter av olika slag, men oavsett hur den är utformad eller känns inifrån så KAN DEN FÖDA. Så 
  länge den har de yttre förutsättningar som krävs för födandet att ske. Och det är här jag 
            som doula kommer in i bilden.
            <Typography variant='subtitle1'> Queermedevetet doulaskap </Typography>
            <Typography paragraph gutterBottom> Graviditet och födande kan innebära att du/ni som HBTQI+ möter dessa sammanhang utifrån en minoritetsstress som är svår att sätta sig in i utan att själv ha egen levd erfarenhet. Jag har erfarenhet att bära och föda barn utanför heternormen, samt genomgå ivf-behandling som lesbiskt par. Jag har även arbetat med HBTQI+ frågor i olika sammanhang under många år. Jag har en stor förståelse för de utmaningar som kan uppstå i mötet med vården och kan erbjuda stöd utifrån ett HBTQI+ medvetet perspektiv.
            </Typography>
</Typography> <Typography> Jag har egen levd erfarenhet av IVF och att föda barn utanför heteronormen. 
        </Typography>

          {/* Add more content as needed */}
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
         <Typography gutterBottom variant='h2' >DoulaSkapet</Typography>
        <CustomNetlifyForm />
</Box>

      <Box sx={{ maxWidth: '70%', mx: 'auto', bgcolor: '#FFF7F8' }}>
       
        <Typography variant='subtitle2'>
     Hej  hej detta ska vara kursivt
        </Typography>
        {/* Add more content as needed */}
      </Box>
      {/* Rest of your component */}
      </Box>
      </Container>
  );
};

export default AnnikaProfilePage;
