import React from 'react';
import DoulaPackageCard from '../components/PackageCards';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import TestimonialSlider from './TestemonialsSlider';
import { packages, testimonials } from '../components/PackageData';

const DoulaPaket = () => {
  return (
    <Box>
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
              md={6}
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
      <TestimonialSlider testimonials={testimonials} />
    </Box> 
  );
};

export default DoulaPaket;
