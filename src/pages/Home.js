
import React from 'react';
import { Box, Typography, Container, List, ListItem } from '@mui/material';
import styled from 'styled-components';
import ResponsiveImage from '../components/responsiveImages';
import babyfeetDt from '../assets/images/babyfeet-desktop.webp';
import babyfeetMb from '../assets/images/babyfeet-mobile.webp';
import  babyfeetTb  from '../assets/images/babyfeet-tablet.webp';
import  handsholdingbabyDt  from '../assets/images/handsholdingbaby-desktop.webp';
import handsholdingbabyMb  from '../assets/images/handsholdingbaby-mobile.webp';
import  handsholdingbabyTb  from '../assets/images/handsholdingbaby-tablet.webp';
import  twomomsMb from '../assets/images/twomoms-mobile.webp';
import  twomomsDt from '../assets/images/twomoms-desktop.webp';
import { Link } from 'react-router-dom';
import { CTAButton } from '../components/Buttons';
import { Email } from '@mui/icons-material';

const ContentSection = styled(Box)`
  margin-bottom: 2rem;
`;

const Home = () => {
  return (
    <Container>
      <ContentSection>
        <Typography variant="h1" gutterBottom>DoulaSkapet - Trygg Förlossning</Typography>
        
        <Typography paragraph> Grattis till graviditeten, och så fint att du hittat till oss.  </Typography> 
        <Typography paragraph>Våra Doulor finns i Stockholm, med omnejd och finns till för att du ska få det stöd som just du/just ni bevöver inför, under och efter förlossning. Oavsett om du är den som ska föda, är partner eller stödperson till någon som ska föda, precis har fött barn eller bara är nyfiken på vad en doula gör, så har du kommit helt rätt.
          
          Inom DoulaSkapet arbetar vi utifrån beprövade metoder, samt utifrån den unika person du/ni är och dina/era val. </Typography>
        <Typography paragraph >DoulaSkapet - vår filosofi
Att föda barn är en av de mest kraftfulla upplevelser en människa kan gå igenom, och oavsett hur födseln går till så påverkar det oss djupt på många plan: fysiologiskt, emotionellt, mentalt och själsligt.

Vi i DoulaSkapet tycker det är helt fantastiskt att få närvara och få delta vid en förlossning. Relationen mellan doulan och den födande bygger på ett ömsesidig förtroende, respekt, öppet sinne, fingertoppskänsla och erfarenhet. Varje födsel är unik och det gör att vi doulor anpassar vårt arbete efter vem vi jobbar med. Vi ser till att du/ni får ett tryggt doulastöd inför, under och efter födseln för att hela familjen ska få en så trygg och positiv start som möjligt.</Typography>
        <Typography paragraph>
          
          Hoppas att du hittar det du söker, annars är du varmt välkommen att  
  <CTAButton
  as="a"
  href={`mailto:doulaskapet@gmail.com`}
  aria-label="Maila en förfrågan via email"
>
  ta kontakt med oss!
          </CTAButton>
          </Typography>
     
        <ResponsiveImage mobile={babyfeetMb} tablet={babyfeetTb} desktop={babyfeetDt} alt="Baby feet" />
      </ContentSection>

      <ContentSection>

        <ResponsiveImage mobile={handsholdingbabyMb} tablet={handsholdingbabyTb} desktop={handsholdingbabyDt} alt="Hands holding baby" />
    


      </ContentSection>

      <ContentSection>
        <Typography variant="h2">Varför anlita en Doula</Typography>
        <Typography paragraph>
          Ge dig själv och din bebis de bästa förutsättningar för en trygg start 
        </Typography>
        <Typography paragraph>
          Att anlita en doula är kanske den bästa present du kan ge till dig själv under graviditeten. Förlossningen är en av livets mest krävande och intensiva upplevelse och med hjälp av en doula ger du dig själv en bättre förutsättning till en positiv förlossningsupplevelse. Det möjliggör också en trygg start för din bebis för livet utanför magen. Forskning* visar nämligen att föräldrar som har stöd av en doula ökar chansen till en positiv förlossningsupplevelse och därmed även en bättre start i livet som förälder.</Typography>        <Typography paragraph>
          Det finns en hel del forskning som visar på fördelarna med att anlita en doula. Flera studier har visat att föräldrar som har stöd av en doula ökar chansen till en positiv förlossningsupplevelse och därmed även en bättre start i livet som förälder. Mer specifikt har forskningen visat att doulan kan bidra till:
        </Typography>
                <Typography variant="h3">Stöd i forskningen</Typography>
        <List aria-label="Fördelar med att anlita en doula">
          <ListItem>Mindre behov av medicinsk smärtlindring</ListItem>
          <ListItem>Lägre risk för medicinska komplikationer</ListItem>
          <ListItem>Bättre förlossningsupplevelser</ListItem>
          <ListItem>Lägre risk för kejsarsnitt</ListItem>
          <ListItem>Lägre risk för förlossningsdepression</ListItem>
          <ListItem>Bättre förutsättningar till en välfungerande amningsstart</ListItem>
          <ListItem>Ökad känsla av välbefinnande</ListItem>
          <ListItem>Ökad känsla av tillfredsställelse</ListItem>
          <ListItem>Ökad känsla av att vara en bra partner</ListItem>
        </List>
        
        <Typography paragraph>
          Av studierna framgår också att föräldrar som haft stöd av doula är mer delaktiga i förlossningen och känner sig mer tillfreds med sin upplevelse.
        </Typography>
        <ResponsiveImage mobile={twomomsMb} desktop={twomomsDt} alt="Two moms" />
        <Typography variant='h3'>Ett välkommet stöd i förlossningsvården </Typography>
        <Typography paragraph> Vårt samarbete med sjukvården har visat sig vara mycket värdefullt. Barnmorskor och övrig vårdpersonal uppskattar ofta vår närvaro eftersom effekten av en ökad oxytocinmängd ger ett lugn och en positiv atomsfär i förlossningsrummet. Det gynnar alltså både dig som blivande förälder och ditt sjukvårdsteam.
        </Typography>
        <Typography variant='h3'>Partnerns roll</Typography>
        <Typography paragraph>
          Finns det en partner/stödperson med, är det en stor fördel att ha med sig en doula som kan stötta både dig och din partner/stödperson under förlossningen. Du som partner/stödperson är den som känner den som föder allra bäst, och doulans uppgift är därför att se till att DU har det stöd som DU behöver för att vara det. Med en doula har du som partner/stödperson en större möjlighet att vara mer delaktig i och vara mer närvarande för den som föder. Många upplever att med doulans närvaro tenderar partnerns/ stödpersonens engagemang att öka under förlossningen och upplever sig kunna vara mer närvarande. </Typography>
        <Typography variant='h2'>DoulaSkapet - trygghet på dina villkor</Typography>
        <Typography paragraph> Graviditet och födsel innebär ofta att vila i det okända, men vi fokuserar på de aspekter som faktiskt går att planera och förbereda för att skapa så mycket trygghet som möjligt. DoulaSkapets doulor är alla certifierade förlossningsdoulor som arbetar utifrån samma stabila grund och är utbildare inom Föda Utan Rädslas-metoder.</Typography>
        <Typography variant='h3'>Föda Utan Rädsla (FUR) </Typography>
        <Typography paragraph>Vårt mål är tydligt: du/ni ska ha de förutsättningar som krävs för att du/ni ska få den bästa tänkbara förlossningsupplevelsen, samt välkomna ett nytt litet liv till världen. 

          Vi är alla diplomerade doulor som jobbar utifrån Föda Utan Rädsla-metoden. Metoden har praktiska och effektiva verktyg för att minska stress och rädsla under förlossningen. Föda Utan Rädsla-metoden har redan använts av tusentals födande i flera länder och allt fler professionella vårdgivare och sjukhus låter sig utbildas i vår unika omvårdnadsmodell (SAFE). FUR-metoden fokuserar på att stärka din och ditt barns egen förmåga och kraft som redan finns inom er. Vi vet att både du och barnet redan har all kunskap ni behöver för att föda och födas. Våra metoder vilar på en stabil grund av fysiologisk kunskap och innehåller en bredd av verktyg som är utvecklade kring bevisade effekter. Läs mer om Föda Utan Rädsla-metoden här:  </Typography>
        <a
          href="https://fodautanradsla.se/om/metoden"
          target="_blank"
          rel="noopener noreferrer"
    
          >Föda Utan Rädsla</a>
        <Typography variant='h3'>Förutsägbarhet i det oförutsägbara </Typography>
        <Typography paragraph>Vi anlitar alltid i första hand våra egna doulor som backup, och erbjuder alltid att få träffa även den doula som är tilltänkt som backup, samt möjilghet att byta till en annan backup om så önskas. Vi vet att valet av doula är högst personligt och måste bygga på ömsesidigt förtroende.
            Vi vill att du/ni ska känna trygghet och förutsägbarhet på alla sätt där det går. </Typography>
        <Typography variant='h3'>Du är unik </Typography>  
          <Typography paragraph> Precis som att du är unik så är din födsel det, oavsett om det är din första eller tredje så är varje person och varje barn unikt och har behov som är unika. Inom DoulaSkapet är vi noga med att inte tro oss veta, utan vill lära känna dig som födande och eventuell partner/stödperson/medförälder innan vi skräddarsyr vårt stöd. Vi vill kunna möta varje unik situation med respekt, omsorg och professionalitet. Vi är också medvetna om att graviditet och födande kan innebära att du/ni som HBTQI+ möter dessa sammanhang utifrån en minoritetsstress som är svår att sätta sig in i utan att själv ha egen levd erfarenhet.</Typography> 
        <Typography paragraph> Våra doulor bär på egen erfarenhet av att föda utanför heteronormen, och har förståelse för de unika behov och erfarenheter det kan medföra som gravid och som partner till den som föder Som doulor vill vi skapa en så trygg upplevelse som möjligt i mötet med förlossningsvården.</Typography>.
        <Typography variant='h3'> Traumamedvetenhet </Typography>
        <Typography paragraph> Vi är medvetna om att det kan finnas en historia av trauma i bagaget hos den som föder, och att det kan påverka förlossningsupplevelsen. Inom DoulaSkapet arbetar vi traumamedvetenhet och möter dig/er utifrån det. </Typography>
        <Typography variant='h3'> Tillgång till nätverk och kompetens </Typography>
        <Typography paragraph> Med vår erfarenhet och tillgång till ett omfattande nätverk av experter och resurser, är vi starkare tillsammans. "Ensam är inte stark" är ett mantra som vi lever efter, och tillsammans kan vi erbjuda en omfattande och kvalitativ tjänst, har vi lyxen att ha ett stort nätverk av andra doulor, barnmorskor, amningsrådgivare, psykologer, psykoterapeuter, kiropraktorer och massörer som vi kan rekommendera/rådgöra med vid behov. </Typography>
        <Typography variant='h4'> Med DoulaSkapet är du och din familj i goda händer </Typography>


      </ContentSection>


    </Container>
  );
}

export default Home;