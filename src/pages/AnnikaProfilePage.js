import React from 'react';
import { Box, Grid, Typography, Container, Button, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomNetlifyForm from '../components/CustomGoogleForm'
import lgbt from '../assets/lgbtq.svg'
import backgroundImage from '../assets/bg-bellies.svg'
import rebozo from '../assets/rebozo.svg'

const AnnikaProfilePage = () => {
   const theme = useTheme();
 
  return (
      <Container
      sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%',
        px: { xs: 2, sm: 3, md: 4, lg: 10 },
        py: { xs: 2, sm: 3, md: 4, lg: 10 },
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Do not repeat the image
      }}
    >
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }} data-aos="fade-up">
      <Grid container spacing={5} justifyContent="center" sx={{ mt: '16px', mb: '16px' }}>
        <Grid item xs={12} md={6} lg={4} sx={{ p: '8px' }}>
            <Box component="img" src="/optimized-images/Annika.webp" alt="Profile Image" sx={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'center', gap: '16px' }} data-aos="fade-up">
              <Typography variant="h3" gutterBottom >
                Annika Lindberg
              </Typography>
              <Typography variant="paragraph" gutterBottom >
                ERBJUDER
              </Typography>
              <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', textAlign: 'center', gap: '16px', flexWrap: 'wrap' } } >
            <Button
                     
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to={'/Baspaket'}
                    sx={{
                      mt: 1,
                      mb: 1,
                      textTransform: 'none',
                      justifyContent: 'flex-start',
               bgcolor: theme.palette.background.paper,
                      color: theme.palette.text.dark,
                      
                      '&:hover': {
                        bgcolor: theme.palette.secondary.contrastText,
                        color: theme.palette.secondary.main,
                      },
                    }}
                    >
                        Baspaket  
              </Button>
              <Button
                     
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to={'/Postpartumsupport'}
                    sx={{
                      mt: 1,
                      mb: 1,
                      textTransform: 'none',
                      justifyContent: 'flex-start',
               bgcolor: theme.palette.background.paper,
                      color: theme.palette.text.dark,
                      
                      '&:hover': {
                        bgcolor: theme.palette.secondary.contrastText,
                        color: theme.palette.secondary.main,
                      },
                    }}
                    >
                Postpartumsupport
              </Button>
              <Button
                     
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to={'/AkutDoula'}
                    sx={{
                      mt: 1,
                      mb: 1,
                      textTransform: 'none',
                      justifyContent: 'flex-start',
               bgcolor: theme.palette.background.paper,
                      color: theme.palette.text.dark,
                      
                      '&:hover': {
                        bgcolor: theme.palette.secondary.contrastText,
                        color: theme.palette.secondary.main,
                      },
                    }}
                    >
                AkutDoula
              </Button>
              </Box>
   <Box display="flex" gap={2} sx={{ textAliogn:'flexStart', flexDirection: 'column', justifyContent:'flexStart', alignItems:'flexStart'}}>

      <Typography varianant="subtitle2" sx={{fontWeight: '500'}} > Priser </Typography>
      <Typography variant="overline" >
       Baspaket: 10 000 SEK</Typography>
              <Typography variant="overline" >
              
                Postpartumsupport: 700 SEK i timmen  (för Doulaklienter) </Typography> <Typography variant='body2'>(För övriga 850 SEK)
                </Typography>
                
  </Box>


                      <Box
 
             data-aos="fade-left"
        component="img"
        src={rebozo}
        alt="Pregnant woman and doula"
        sx={{
          maxWidth: '200px',
          mt: { xs: 2, md: 0 }, // Add top margin on small screens
            width: '100%' // Responsive image width

        }}
     />
 
     </Box>
              
         


        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ textAlign: 'left', p: '8px' }}>
          <Typography variant="h1" gutterBottom >
          Annika Lindberg 
        </Typography>
          <Typography paragraph data-aos="fade-up">
  Som doula drivs jag av ett stort intresse för allt som har med graviditet, födande och 
  kroppen att göra, och ägnar mig själv åt yoga, meditation och breathwork som olika 
  tekniker för att "komma ner i kroppen". I födandets skeden vill vi vara i 
  <Typography component="span" variant='customBodyItalic'> kroppen </Typography>
  snarare än i hjärnan, vilket ofta är den största utmaningen utifrån det vi är vana vid. 
  </Typography>
         
        <Typography paragraph gutterBottom>Jag bor med min fru, vår dotter Ronja och våra hundar i ett radhus i Skogås, Stockholm. En stor del i mitt doulande är att skapa ett tryggt rum, "ett sacred space" för födandet. Min övertygelse är nämligen att alla kroppar som kan bära ett barn, också kan föda barn. Jag vet även att den födande kroppen ser ut på olika sätt, den kan bära på erfarenheter av olika slag, men oavsett hur den är utformad eller känns inifrån så KAN DEN FÖDA. Så 
  länge den har de yttre förutsättningar som krävs för födandet att ske. Och det är här jag 
              som doula kommer in i bilden.
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', gap: '16px', flexWrap: 'wrap', mt: '20px', mb: '10px' } } data-aos="fade-up" >
                          <Box
              component="img"
              src={lgbt}
              alt="LGBT Support"
              sx={{
                width: {
                  xs: '30px', // Width on extra-small screens
                  sm: '40px', // Width on small screens
                  md: '50px'  // Width on medium and larger screens
                },
                height: 'auto', // Height will adjust automatically
                mt: 2
              }}
/>
              <Typography variant='subtitle1'> Queermedevetet doulaskap </Typography>
              </Box>
            <Typography paragraph gutterBottom> Graviditet och födande kan innebära att du/ni som HBTQI+ möter dessa sammanhang utifrån en minoritetsstress som är svår att sätta sig in i utan att själv ha egen levd erfarenhet. Jag har erfarenhet att bära och föda barn utanför heternormen, samt genomgå ivf-behandling som lesbiskt par. Jag har även arbetat med HBTQI+ frågor i olika sammanhang under många år. Jag har en stor förståelse för de utmaningar som kan uppstå i mötet med vården och kan erbjuda stöd utifrån ett HBTQI+ medvetet perspektiv.
            </Typography>
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
