import React from 'react';
import DoulaPackageCard from '../components/PackageCards';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import TestimonialsSlider from './TestimonialsSlider';
import { packages, testimonials } from '../components/PackageData';
import PageSpecificHero from '../components/PageSpecificHero';
import { Helmet } from 'react-helmet';

const DoulaPaket = () => {

  const title = 'DoulaPaket';
  const subtitle = 'Läs mer om vilka tjänster vi erbjuder.';
      const image = "/optimized-images/belliespregnant-tablet.webp";

  
  return (
    <Box>
      <Helmet>
      <title>DoulaPaket - våra tjänster</title>
        <meta name="description" content="Utforska våra skräddarsydda doulapaket i Stockholm, designade för att ge stöd och komfort genom hela graviditets- och förlossningsprocessen. Lär dig mer om hur våra doulas kan anpassa sitt stöd för att möta dina specifika behov och önskemål. Vi erbjuder postpartumstöd, föda tryggt med doula och akutdoula-paket" />
      </Helmet>

      <PageSpecificHero
        title={title}
        subtitle={subtitle}
        image={image}
      />
      <Typography gutterBottom variant='h3' data-aos="fade-right"
        sx={{ textAlign: 'center' }}
      >Våra tjänster</Typography>
      <Typography paragraph data-aos="fade-right"
        sx={{ textAlign: 'center' }}
      >
        Vi erbjuder olika typer av tjänster för att passa just dina behov. Läs mer om våra tjänster nedan.
      </Typography>

      
      <Grid container>
        {packages.map((pkg) => {
          let linkPath;
          if (pkg.title === 'Akut-Doula') {
            linkPath = '/DoulaPaket/AkutDoula';
          } else if (pkg.title === 'Postpartumstöd – tiden efter förlossningen') {
            linkPath = '/DoulaPaket/PostpartumSupport';
          } else if (pkg.title === 'Doulapaket Bas - Trygg Förlossning') {
            linkPath = '/DoulaPaket/Baspaket';
          }

          return (
            <Grid
              item
              xs={12} 
              sm={12} 
              md={4} // 2 cards per row on medium screens and up to show 3 cards per row on larger screens change this to md={4}
              key={pkg.id}
              sx={{
                mt: 8,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <DoulaPackageCard
                title={pkg.title}
                image={pkg.image}
                description={pkg.description}
                linkPath={linkPath}
              />
            </Grid>
          );
        })}
      </Grid>
      <Typography gutterBottom variant='h3' data-aos="fade-right"
        sx={{ textAlign: 'center' }}
      > Ord från klienter</Typography>
      <TestimonialsSlider testimonials={testimonials} />
    </Box> 
  );
};

export default DoulaPaket;
