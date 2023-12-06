import React from 'react';
import DoulaPackageCard from '../components/PackageCards'; // Adjust the import path as necessary
import Grid from '@mui/material/Grid';
import partnerDoulaMobile from '../assets/images/partnerdoula-mb.webp';
import partnerDoulaTablet from '../assets/images/partnerdoula-tb.webp';
import partnerDoulaDesktop from '../assets/images/partnerdoula-dt.webp';
import twoMomsMobile from '../assets/images/twomoms-mobile.webp';
import twoMomsTablet from '../assets/images/twomoms-tablet .webp';
import twoMomsDesktop from '../assets/images/twomoms-desktop.webp';
import { makeStyles } from '@mui/styles'; // install this library using `npm install @mui/styles`

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },

}));

const DoulaPaket = () => {
  const classes = useStyles();
  const handleReadMore = (title) => {
    alert(`Read more about ${title}`);
  };

  // Image paths for the packages
const packageImages = {
  1: {
    mobile: partnerDoulaMobile,
    tablet: partnerDoulaTablet,
    desktop: partnerDoulaDesktop,
    alt: 'Basic Doula Support',
  },
  2: {
    mobile: twoMomsMobile,
    tablet: twoMomsTablet,
    desktop: twoMomsDesktop,
    alt: 'Premium Doula Support',
  },
  3: {
    mobile: twoMomsMobile,
    tablet: twoMomsTablet,
    desktop: twoMomsDesktop,
    alt: 'Premium Doula Support',
  },
  };

  // Details for the packages
  const packages = [
    {
      id: 1,
      title: 'Doulapaket Bas - Trygg Förlossning',
      description: 'Description of Basic Doula Support...',
      price: 'Prisuppgifter kommer...',
      image: packageImages[1],
    },
    {
      id: 2,
      title: 'Akut-Doula',
      description: 'Ibland blir det inte som en tänkt sig. Vi erbjuder tjänsten akut-doula om vi har möjlighet. Kontakta oss direkt via "akut-doula" formuläret, där vi ser till att svara så snart vi bara kan',
      price: 'Prisuppgifter kommer...',
      image: packageImages[2], // Link the images directly here

    },
    {
      id: 3,
      title: 'Doula Postpartum Support',
      description: 'Description of Doula Support...',
      price: 'Prisuppgifter kommer snart...',
      image: packageImages[3],
    }
  ];

   return (
     <Grid
       container
       margin={2}
       flex="wrap"
       spacing={2}>
      {packages.map((pkg) => (
        <Grid item xs={12} sm={6} md={4} key={pkg.id} className={classes.gridItem}>
          <DoulaPackageCard
            className={classes.card}
            title={pkg.title}
            image={pkg.image}
            description={pkg.description}
            onReadMore={() => handleReadMore(pkg.title)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DoulaPaket;