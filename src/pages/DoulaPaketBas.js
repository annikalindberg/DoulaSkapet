import React from 'react';
import { Card, CardContent, Typography, Box, Grid, List, ListItem, ListItemIcon } from '@mui/material';
import { packages, testimonials } from '../components/PackageData'; // Adjust the import path as necessary
import CircleIcon from '@mui/icons-material/Circle';
import TestimonialSlider  from './TestimonialsSlider';
import { useTheme } from '@mui/material/styles';
import PageWrapper from '../components/PageWrapper';
import PagespecifikHero from '../components/PageSpecificHero';

const DoulaPaketBas = () => {
    const theme = useTheme();
  const title = 'Föda med Doula';
  const subtitle = 'Stöd under graviditet och förlossning';
  const image = '/Optimized-images/handsheart-bg.webp';

  const basPackage = packages.find(pkg => pkg.title === 'Doulapaket Bas - Trygg Förlossning');

  if (!basPackage) {
    return <div>Package not found</div>;
  }

  return (
    <PageWrapper>
    <PagespecifikHero title={title} subtitle={subtitle} image={image} />
    <Box sx={{ my: 4 }}>
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={10} md={8} lg={6}> {/* Adjusted grid sizes */}
      <Card sx={{ maxWidth: '100%', borderRadius: '16px', backgroundColor: 'transparent' }}> {/* Max width 100% */}
        <CardContent sx={{ bgcolor: theme.palette.background.default}}>
              <Typography variant="h2"  sx={{ mb: 2 }}>
                {basPackage.title}
              </Typography>
              <img src={basPackage.image.mobile} alt={basPackage.image.alt} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {basPackage.description}
              </Typography>

              <Typography variant="h3" sx={{ mb: 1 }}>
                {basPackage.rubrik2}
              </Typography>
                   <List sx={{ mb: 2 }}>
                {[basPackage.list2_1, basPackage.list2_2, basPackage.list2_3, basPackage.list2_4, basPackage.list2_5, basPackage.list2_6].map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: 'flex-start' }}> {/* Align items to flex-start */}
                    <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px', marginTop: '5px', color: 'text.secondary' }}> {/* Add marginTop */}
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="body2">
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>

              <Typography variant="h4" sx={{ mb: 1 }}>
                Pris </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {basPackage.price}
              </Typography>

              <Typography variant="body2" sx={{ mb: 2 }}>
                {basPackage.ctatext}
              </Typography>

              {/* Add any additional content or components here */}
              
            </CardContent>
            
          </Card>
        </Grid>
        </Grid>
        <Typography gutterBottom variant='h4' sx={{
              mt: 8, mb: 5,
          textAlign: 'center',
          fontSize: '20px', // doesent have eny effect
    
            }}>
          
        Ord från Doulaskapets klienter</Typography>
            <TestimonialSlider testimonials={testimonials} />

      </Box>
    </PageWrapper>
  );
};

export default DoulaPaketBas;
