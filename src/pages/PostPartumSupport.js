import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { CallToAction } from '@mui/icons-material';
import { CTAButton } from '../components/Buttons';


const PostpartumSupportPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Postpartum Stöd 
      </Typography>
      <Typography variant="h3" gutterBottom>
        Stöd Under Den Fjärde Trimestern
      </Typography>
      <Typography paragraph>
              Välkommen till en ny fas i ditt liv som nybliven förälder. Efter förlossningen börjar en spännande men ofta krävande tid där allt fokus ligger på den lilla nykomlingen.<br />
               Vi i DoulaSkapet förstår att denna period kan vara överväldigande, och vi är här för att ge dig det stöd du behöver under första tiden efter förlossninge
      </Typography>
      {/* Placeholder for Image */}
      <Paper elevation={3} sx={{ p: 2, my: 2 }}>
        <img src="placeholder.jpg" alt="Placeholder" />
      </Paper>
      <Typography variant="h4" gutterBottom>
        Hur Går Det Till?
      </Typography>
      <Typography paragraph>
        DoulaSkapets postpartumstöd omfattar en rad tjänster för att underlätta din övergång till föräldraskapet...
      </Typography>
      {/* More content sections based on the PDF */}
      <Typography variant="h4" gutterBottom>
        Vad Kan En Behöva I Form Av Stöd?
      </Typography>
      <Grid container spacing={2}>
        {/* Placeholder for each point of support */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <img src='/optimized-images/kvinna-barn.webp'alt="Placeholder" />
            <Typography paragraph>möjlighet att prata igenom förlossningen och nuvarande livssituation.</Typography>
                  </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                      <img src="placeholder.jpg" alt="Placeholder" />
                      <Typography paragraph> Vägledning i hur du kan skapa en närande och lugn miljö efter förlossningen.
</Typography>
                  </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                      <img src="placeholder.jpg" alt="Placeholder" />
                      <Typography paragraph>Amningsstöd eller stöd i lyhörd flaskmatning
</Typography>
                  </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                      <img src="placeholder.jpg" alt="Placeholder" />
                      <Typography paragraph>Bebispassning en stund så att du som förälder kan ta igen sömn eller få lite egentid 
</Typography>
                  </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                      <img src="placeholder.jpg" alt="Placeholder" />
                      <Typography paragraph>Praktiska tips så som bebisomvårdnad, bärsjal och babypottning</Typography>
                  </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                      <img src="placeholder.jpg" alt="Placeholder" />
                      <Typography paragraph>Praktiska göromål som inköp, städning, matlagning mm.</Typography>
                  </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                      <img src="placeholder.jpg" alt="Placeholder" />
                      <Typography paragraph>hjälp med att hitta en bra sömnrytm.</Typography>
                  </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>

                  <Paper elevation={3} sx={{ p: 2 }}>
                      <img src="placeholder.jpg" alt="Placeholder" />


                      <Typography paragraph>Praktiska Verktyg: Tillgång till mallar och checklistor för att organisera och planera din postpartumtid.</Typography>
                  </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                      <img src="placeholder.jpg" alt="Placeholder" />
                      <Typography paragraph>hjälp med att hitta en bra sömnrytm.</Typography>
                  </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                      <img src="placeholder.jpg" alt="Placeholder" />
                      <Typography paragraph>hjälp med att hitta en bra sömnrytm.</Typography>
                  </Paper>
                </Grid>
        {/* Repeat for other points of support */}
          </Grid>
          <Typography variant="h4" gutterBottom>Hur ?</Typography>
          <Typography paragraph>
              Oavsett om era behov är att få kontinuerligt emotionellt stöd på plats och/eller via telefon eller om behovet är av mer tillfällig art, är det era behov som styr utformningen av stödet.</Typography> 
          <Typography paragraph> Det bästa är om vi har möjlighet att göra en plan redan innan förlossningen, för att säkerställa att jag är tillgänlig. </Typography>

         
          <Typography paragraph> Men tveka inte att kontakta mig även om det är kort varsel, det mesta går att lösa. </Typography> 
          <CTAButton
              to="/kontakt"
              startIcon={<CallToAction />}>
              Kontakta mig
              </CTAButton>
    
          
      {/* Other sections like Cost, Contact, Follow on social media */}
      <Typography variant="h4" gutterBottom>
        Kostnad
      </Typography>
      <Typography paragraph>
        Är du Doulaklient till mig erbjuder jag postpartumstödet till ett lägre pris...
      </Typography>
      {/* Contact information */}
      <Typography paragraph>
        Vid frågor eller bokning skicka ett mejl till annika.edit.lindberg@gmail.com
      </Typography>
      {/* Social Media links */}
      <Typography variant="h5">
        Follow DoulaSkapet
      </Typography>
      {/* Links to social media */}
    </Box>
  );
};

export default PostpartumSupportPage;
