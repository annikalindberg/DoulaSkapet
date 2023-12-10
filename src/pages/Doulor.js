import React from 'react';
import PresentationsCards from '../components/PresentationsCards';
import { Grid, Container, Typography } from '@mui/material';


const Doulor = () => {
 

  // Image paths for the packages
const doulaImages = {
  1: {
    mobile: '/optimized-images/Annika.webp', // HERE IT WORKS WITH any image
    alt: 'Annika Lindberg',
  },

  2: {
    mobile: '/optimized-images/Karin.webp', // not working
    alt : 'Karin Dernulf',
  },
  3: {
    mobile: '/optimized-images/Dunja.webp', //not working 
    alt: 'Dunja Grisell',
    },
  
  4: {
    mobile: '/optimized-images/Jenny.webp', 
    alt: 'Jenny',
    },
  };


  // Details for the packages
  const doulor = [
    {
      id: 1,
      name: 'Annika Lindberg',
      description: ' Som doula drivs jag av ett stort intresse för allt som har med graviditet, födande och kroppen att göra, och ägnar mig själv åt yoga, meditation och breathwork som olika tekniker för att "komma ner i kroppen". I födandets skeden vill vi vara i kroppen snarare än i i hjärnan, vilket ofta är den största utmaningen utifrån det vi är vana vid. Jag har egen levd erfarenhet av IVF och att föda barn utanför heteronormen. Jag bor med min fru, vår dotter Ronja och våra hundar i ett radhus i Skogås, Stockholm. En stor del i mitt doulande är att skapa ett tryggt rum, "ett sacred space" för födandet. Min övertygelse är nämligen att alla kroppar som kan bära ett barn, också kan föda barn. Jag vet även att den födande kroppen ser ut på olika sätt, den kan bära på erfarenheter av olika slag, men oavsett hur hur den är utformad eller känns inifrån så KAN DEN FÖDA. Så länge den har de yttre förutsättningar som krävs för födandet att ske. Och det är här jag som doula kommer in i bilden.',
      image: doulaImages[1],  
    },
    {
      id: 2,
   name: 'Karin Dernulf',
      description: 'Vid en förlossning kan man behöva hjälp att lita på sin kropp & att den klarar den fysiska prestationen. Kroppen har oanade krafter och förmågor och det ska vi ta tillvara på. Jag hjälper dig att ha tillit till din kropp och att lyssna på den under förlossningen.Till vardags jobbar jag som leg. kiropraktor och har en god förmåga att vara lyhörd för vad varje person behöver för att känna sig trygg. Att nu få doula födande är ett stort förtroende och jag ser fram emot att få vägleda fler i detta magiska ögonblick i livet.',
      price: 'Prisuppgifter kommer...',
      image: doulaImages[2], // Link the images directly here

    },
    {
      id: 3,
      name: 'Dunja Grisell',
      description: 'Jag har egen erfarenhet av att föda på sjukhus, på sjukhus med egen barnmorska, planerad hemförlossning samt kejsarfödsel. Jag är även utbildad peer supporter, vilket innebär att jag har erfarenhet och kunskap om hur man stöttar människor i svåra livsomständigheter, vid kris och i återhämntning. Jag jobbar traumamedvetet, vilket innebär att jag gärna har extra samtal kring eventuella trauman som kan finnas kring sjukvård eller den egna kroppen. Mitt fokus är trygghet och relationsskapande. Hur skapar vi trygghet i en otrygg värld? Jag vill stärka dig i att känna dig trygg i din egen kropp. Det är inte ett maraton du ska springa, det är ditt livs största utmaning vad gäller din tillit till dig själv och din kropp.',
      price: 'Prisuppgifter kommer...',
      image: doulaImages[3],
    },
    {
      id: 4,
      name: 'Jenny ',
      description: 'Till vardags pluggar jag till sjuksköterska, är mamma till en liten Astrid, fru till min man och bor i radhus i Gustavsberg. Egen förlossningserfarenhet är genom ur-akut kejsarfödsel i 30:e graviditetsveckan och därefter boendes på Neonatal-avdelning i 10 veckor. Att föda för tidigt kan vara både planerat och oplanerat och oavsett varför och hur så vet jag att i en sådan situation behövs extra mycket stöd! Jag är superintresserad av allt som har med graviditet och förlossning att göra och att nu ha påbörjat mitt doula-arbete känns SÅ spännande! Att föda barn är något magiskt. Det är tungt, vackert, läskigt, spännande, overkligt, obehagligt, underbart, smärtsamt och allt däremellan – självklart behövs stöd i det som sker, både fysiskt och mentalt till födande och en ev. partner. Du/ni har all rätt till en positiv förlossningsupplevelse, ditt barn har rätt till en anknytande första tid i livet utanför magen och detta vill jag som doula stötta er till att få! Mina ledord är lyhördhet, samspel och trygghet.',
      price: 'Prisuppgifter kommer snart...',
      image: doulaImages[4],
    }
  ];


 
   return (
    <Container >
      <Typography variant='h2' sx={{pt: 5}}gutterBottom>
        DoulaSkapet - Vår Filosofi
      </Typography>
       <Typography paragraph> Vårt mål är tydligt: du/ni ska ha de förutsättningar som krävs för att du/ni ska få den bästa tänkbara förlossningsupplevelsen, samt välkomna ett nytt litet liv till världen. </Typography>
       <Typography variant='h3' sx={{pt: 5, pb:2}}>Doulor</Typography>
       <Typography body1 sx={{pb:3}}>

         Vi är alla diplomerade doulor som jobbar utifrån Föda Utan Rädsla-metoden. Metoden har praktiska och effektiva verktyg för att minska stress och rädsla under förlossningen. Graviditet och födsel innebär ofta att vila i det okända, men vi fokuserar på de aspekter som faktiskt går att planera och förbereda för att skapa så mycket trygghet som möjligt. DoulaSkapets doulor är alla certifierade förlossningsdoulor som arbetar utifrån samma stabila grund och är utbildare inom Föda Utan Rädslas-metoder.</Typography>
       <Grid container spacing={4} justifyContent="center">
        {doulor.map((doula) => (
          <Grid item
            sx={{ mt: 3 }}
            xs={12}
            sm={6}
            md={6}
            key={doula.id}>
            <PresentationsCards
     
              name={doula.name}
              image={doula.image}
              description={doula.description}
              
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Doulor;