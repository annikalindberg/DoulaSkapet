import React from 'react';
import DoulaPackageCard from '../components/PackageCards'; // Adjust the import path as necessary
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';


import TestimonialSlider from './TestemonialsSlider';

const DoulaPaket = () => {
  const handleReadMore = (title) => {
    alert(`Read more about ${title}`);
  };

  // Image paths for the packages
const packageImages = {
  1: {
    mobile: '/optimized-images/twomoms-mobile.webp',
    tablet: '/optimized-images/twomoms-tablet.webp',
    desktop: '/optimized-images/twomoms-desktop.webp',
    alt: 'Two moms with baby',
  },
  2: {
    mobile: '/optimized-images/partnerdoula-mb.webp',
    tablet: '/optimized-images/partnerdoula-tb.webp',
    desktop: '/optimized-images/partnerdoula-dt.webp',
    alt: 'Partner adn doula supporting pregnant woman',
 
  },
  3: {
    mobile: '/optimized-images/babyfeet-mobile.webp',
    tablet: '/optimized-images/babyfeet-tablet.webp',
    desktop: '/optimized-images/babyfeet-desktop.webp',
    alt: 'baby feet',
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

  const testimonials = [
        { quote: '"Jag är så innerligt tacksam för att Karin fanns vid min sida. Som självstående bestämde jag mig tidigt för att jag ville ha en doula. Kontakten med Karin under graviditeten och som partner under profylaxkursen, byggde upp en stark tillit. Att sedan ha Karin vid sin sida hemma då verkarbetet började ta form, som bollplank och i kontakten med BB var guld värt. "' },
        { quote: '"Den trygghet som jag upplevde både i hennes närvaro och sätt var ovärderlig. Hennes omsorg, lugn, beslutsfattande, klokskap och också fysiska enorma kunskap från sitt yrke som kiropraktor och massör gör henne otroligt lämpad till att vara just doula. "' },
        { quote: '"Hjälpen genom värkarbetet bara genom att trycka på vissa punkter till att ringa samtal, räkna tid mellan värkar och ordna det som behövdes ordnas. Orden, ledsagningen och omsorgen under förlossningen gav stabilitet, kontinuitet och trygghet. Jag kan inte tänka mig någon bättre person än Karin i rollen och jag är så tacksam för allt hon gjorde för mig både innan hemma och på sjukhuset då min dotter föddes. Hennes närvaro både före under och efter. Beslutet att ha med henne på resan är något som jag fortfarande tänker tillbaka på och gläds åt."' },
    {
      quote: '"Att ha Karin vid min sida under denna process var ovärdeligt. Ska du föda barn, med partner, som ensamstående eller som jag självstående så kan jag verkligen rekommendera att ha Karin vid din och er sida." ',
      author: ' - Susanna',
    }
];    


  return (
  <Box>
     <Grid    
        container
    /*     justifyContent={'center'}
        alignItems={'center'} */
     >
      {packages.map((pkg) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          key={pkg.id}
          sx={{
            mt: 8,
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
   >
          <DoulaPackageCard
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
           
            }}
            title={pkg.title}
            image={pkg.image}
            description={pkg.description}
            onReadMore={() => handleReadMore(pkg.title)}
          />
        </Grid>
      ))}
     </Grid>
         <TestimonialSlider testimonials={testimonials} />
    </Box>
  );
};

export default DoulaPaket;