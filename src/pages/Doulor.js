import React from 'react';
import PresentationsCards from '../components/PresentationsCards';
import Grid from '@mui/material/Grid';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dunja from '../assets/images/Dunja.jpeg';
/* import Jenny from '../assets/images/Jenny.jpeg';
 */import Karin from '../assets/images/Karin.jpeg';

import TestimonialSlider from '../components/TestemonialsSlider';

const Doulor = () => {
  const handleReadMore = (title) => {
    alert(`Read more about ${title}`);
  };


  // Image paths for the packages
const doulaImages = {
  1: {
    mobile: Dunja,
    alt: 'Basic Doula Support',
  },
  2: {
mobile: Dunja,
    alt: 'Premium Doula Support',
  },
  3: {
    mobile: Karin,
    alt: 'Premium Doula Support',
  },
  4: {
    mobile: Karin,
    alt: 'Premium Doula Support',
  },
  };

  // Details for the packages
  const doulor = [
    {
      id: 1,
      title: 'Jenny',
      description: 'Jenny ...',
      price: 'Prisuppgifter kommer...',
      image: doulaImages[1],
    },
    {
      id: 2,
      title: 'Akut-Doula',
      description: 'Ibland blir det inte som en tänkt sig. Vi erbjuder tjänsten akut-doula om vi har möjlighet. Kontakta oss direkt via "akut-doula" formuläret, där vi ser till att svara så snart vi bara kan',
      price: 'Prisuppgifter kommer...',
      image: doulaImages[2], // Link the images directly here

    },
    {
      id: 3,
      title: 'Doula Postpartum Support',
      description: 'Description of Doula Support...',
      price: 'Prisuppgifter kommer snart...',
      image: doulaImages[3],
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
            <Grid container>
                {doulor.map((doula) => (
                    <Grid item xs={12} sm={12} md={6} key={doula.id}>
                        <PresentationsCards
                            title={doula.title}
                            image={doula.image} // Pass the image here
                            description={doula.description}
                        />
                    </Grid>
                ))}
            </Grid>
         <TestimonialSlider testimonials={testimonials} />
    </Box >
      
  );
};

export default Doulor;