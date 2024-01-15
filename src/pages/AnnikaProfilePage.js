import React from 'react';
import { Box, Grid, Typography, Container, Button, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import lgbt from '../assets/lgbtq.svg'
import rebozo from '../assets/rebozo.svg'
import CustomFormspreeForm from '../components/FormspreeForm';
import PageSpecificHero from '../components/PageSpecificHero';
import PageWrapper from '../components/PageWrapper';
import { Link as RouterLink } from 'react-router-dom'; // Import from react-router-dom
import AkutDoulaForm from '../components/AkutDoulaForm';
import { Helmet } from 'react-helmet';
import { SocialShare } from '../components/SocialShare';
import MyBreadcrumbs from '../components/BreadCrumbs';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const AnnikaProfilePage = () => {
  const theme = useTheme();
  const title = 'Annika Lindberg';
  const subtitle = "“Birth is not only about making babies. Birth is about making mothers - strong, competent, capable mothers who trust themselves and know their inner strength.” ― Barbara Katz Rothman";
  const image = '/Optimized-images/belliespregnant-tablet.webp';

  // Define the URL for social sharing as a static string
  const url = 'https://www.doulaskapet.se/doulor/annika';


 const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
 
  return (
    <Container
      sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%',
        px: { xs: 2, sm: 3, md: 4, lg: 10 },
        py: { xs: 2, sm: 3, md: 4, lg: 10 },
        border: '1px solid green',

      }}
    >
      <Helmet>
        <title>Annika Lindberg - Proffessionell och erfaren doula med HBTQ-kompetens</title>
      <meta name="description" content="Annika är doula som bor i Skogås, Huddinge kommun i Stockholm. Hon är utbildad inom Föda Utan Rädsla-metoden och har lång erfarenhet av förlossning och postpartumstöd, amningsrådgivning och att föda barn och bilda familj utanför heteronormen. Annika jobbar queermedvetet och har ett hbtq-medvetet och transinkluderande perspektiv på kroppen som hon tar med sig i sitt doulande. Erfarenhet av att stötta självstående föräldrar och par, regnbågsfamiljer."></meta>
      </Helmet>
      <MyBreadcrumbs />
      <PageSpecificHero
        title={title}
        subtitle={subtitle} 
        image={image}
      />
      <PageWrapper>

    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }} data-aos="fade-up">
      <Grid container spacing={5} justifyContent="center" sx={{ mt: '16px', mb: '16px' }}>
        <Grid item xs={12} md={6} lg={4} sx={{ p: '8px' }}>
            <Box component="img" src="/optimized-images/Annika.webp" alt="Profile Image" sx={{ /* width: '100%', */ height: 'auto', borderRadius: '15px', mb: '16px' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }} data-aos="fade-up">
              <Typography variant="h3" gutterBottom >
                Annika Lindberg
              </Typography>
              <Typography variant="paragraph" gutterBottom >
                ERBJUDER
              </Typography>
              <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', textAlign: 'center', gap: '16px', flexWrap: 'wrap' } } >
            <Button
                     component={RouterLink}
                        variant="outlined"
                        color="primary"
                        to='/DoulaPaket/Baspaket'
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
                     component={RouterLink}
                        variant="outlined"
                        color="primary"
                      
                        to='/DoulaPaket/PostpartumStöd'
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
                Postpartumstöd
                  </Button>
                  <Button
                     component={RouterLink}
                        variant="outlined"
                        color="primary"
                      
                        to='/DoulaPaket/AkutDoula'
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
                Akutdoula
              </Button>
    {/*          <Button 
                variant="contained" 
                onClick={() => scrollToSection('contact-form-section')} 
                aria-label="Gå till kontaktformuläret"
            >
                Fyll i kontaktformuläret
            </Button>

            <Button 
                variant="contained" 
                onClick={() => scrollToSection('akut-doula-form-section')} 
                aria-label="Gå till akutdoula-formuläret"
            >
                Fyll i akutdoula-formuläret
            </Button> */}

              </Box>
  <Box display="flex" gap={2} sx={{ 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    textAlign: 'left' // Changed from 'textAliogn: flexStart'
}}> 
      <Typography variant="h4" sx={{fontWeight: '500'}} > Priser </Typography>
      <Typography variant="body2" >
       Baspaket: 10 000 SEK</Typography>
              <Typography variant="body2" >
              
                Postpartumstöd: 700 SEK i timmen för Doulaklienter </Typography> <Typography variant='body2'>(För icke doulaklienter 850 SEK i timmen)
                </Typography>
                
            {/*     </Box>
                       <Box sx={{ display: 'flex', flexDirection:  'column', alignItems: 'flexStart', gap: 2, mt: 3 }}> */}<Typography>
                   <Typography variant="h4" sx={{ fontWeight: '500', textAlign: 'left' }}>
   Kontakta mig
  </Typography>
                    
       </Typography>
                  <Tooltip title="annika.edit.lindberg@gmail.com">
          <Button
            variant='outlined'
            href={`mailto:annika.edit.lindberg@gmail.com`}
            aria-label="Maila en förfrågan via email"
            startIcon={<AlternateEmailIcon />}
          >
            {/* You can keep the text or remove it, depending on your design */}
          </Button>
        </Tooltip>
                  <Typography variant='body2' sx={{ mt: 2 }}>...eller genom  att fylla i något av formulären nedan: </Typography>
                     <Button 
                variant="contained" 
                onClick={() => scrollToSection('contact-form')} 
                aria-label="Gå till kontaktformuläret"
            >
                Kontaktformulär
            </Button>
<Typography variant='paragraph' sx={{ mt: 2 }}>Söker du en akutdoula? Vänligen fyll i Akutdoula-formuläret nedan </Typography>
            <Button 
                variant="contained" 
                onClick={() => scrollToSection('akut-doula-form-section')} 
                aria-label="Gå till akutdoula-formuläret"
            >
               Akutdoula förfrågan
                  </Button>
        <SocialShare url={url} title="Annika Lindberg - Professionell och erfaren doula med HBTQ-kompetens" />
                
       
      
       
        </Box>


                      <Box
 
             data-aos="fade-left"
        component="img"
        src={rebozo}
        alt="Pregnant woman and doula"
        sx={{
          maxWidth: '200px',
          mt: { xs: 2, md: 4, ld: 6 }, // Add top margin on small screens
           /*  width: '100%' // Responsive image width */

        }}
     />
 
     </Box>
              
         


        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ textAlign: 'left', p: '8px' }}>
          <Typography variant="h1" gutterBottom >
          Annika Lindberg 
        </Typography>
          <Typography paragraph data-aos="fade-up">
  Som doula drivs jag av ett stort intresse för födandets fysiologi, och den fantastiska kroppens potential. 

  </Typography>
         
              <Typography paragraph gutterBottom>Jag har en bakgrund inom elitidrott och coach inom en fullkontaktsport, vilket gett mig effektiva verktyg och metoder att förbereda kroppen och det mentala inför krävande utmaningar. Här är mental förberedelse en lika självklar del som den fysiska vilket jag tagit med mig in i mitt Doulaskap och i hur jag coachar den födande inför och under födseln. Jag har genom åren samlat på mig en mängd effektiva metoder för att hitta de nycklar som fungerar, och jag brinner för att ständigt hitta de nya sätt som passar för varje individ. Som person är jag är intuitiv och inkännande, och jobbar mycket med att stärka den födande och coacha på ett lyhört sätt. Finns det en partner och/eller stödperson, så jobbar jag med att stärka er som ett team.    
              </Typography>
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
            <Typography paragraph gutterBottom> 
                Förutom doula (och fd idrottare) är jag även genusvetare och jag har jobbat med utbildning och inkludering samt normkritik i över 20 års tid, vilket har gett mig en djup inblick hur normer och förväntningar påverkar kroppar på olika sätt i olika sammanhang. </Typography>
                <Typography >
Graviditet och födande kan innebära att du/ni som HBTQI+ möter dessa sammanhang utifrån en minoritetsstress som är svår att sätta sig in i utan att själv ha egen levd erfarenhet. Jag har erfarenhet att bära och föda barn utanför heternormen, samt genomgå ivf-behandling som lesbiskt par. Jag har även arbetat med HBTQI+ frågor i olika sammanhang under många år. Jag har en stor förståelse för de utmaningar som kan uppstå i mötet med vården och kan erbjuda stöd utifrån ett HBTQI+ medvetet perspektiv.
            </Typography>

        </Grid>
      </Grid>
      <Box id="contact-form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
            <Typography gutterBottom variant='h2' >Kontakta mig!</Typography>
            <Typography gutterBottom variant='body1' >Vill du boka ett kostnadsfritt lära-känna-samtal med mig, varmt välkommen att skriva till mig här så kontaktar jag dig snarast och bokar. Ser fram emot att höras!</Typography>
                        
        <CustomFormspreeForm />
</Box>

     <Box id="akut-doula-form-section" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 9 }}>
                      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: '#d30f0f' }}>
                        Akutdoula-formulär
                    </Typography>
                     <Typography variant="body1" sx={{ color: '#d30f0f', mb: 2 }}>
    Detta formulär gäller ENDAST ärenden om Akutdoula-tjänster, för andra ärenden använd övriga kontaktvägar.
          </Typography>
       <AkutDoulaForm />
      </Box>
      {/* Rest of your component */}
        </Box>
        </PageWrapper>
    </Container>
    
  );
};

export default AnnikaProfilePage;
