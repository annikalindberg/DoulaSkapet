import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Tooltip,
} from '@mui/material';
import lgbt from '../assets/lgbtq.svg';
import CustomFormspreeForm from '../components/FormspreeForm';
import PageSpecificHero from '../components/PageSpecificHero';
import PageWrapper from '../components/PageWrapper';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet } from 'react-helmet';
import { SocialShare } from '../components/SocialShare';
import MyBreadcrumbs from '../components/BreadCrumbs';
import ForumIcon from '@mui/icons-material/Forum';
import { red } from '@mui/material/colors';

const ForlossningsforberedandeKurs = () => {
  const title = 'Queermedveten förlossningsförberedande kurs för HBTQIA+';
  const subtitle =
    '“DoulaSkapets Annika och Quertilitys Fredrik håller en queermedveten förlossningsförberedande kurs för HBTQIA+ personer. Kursen är en trygg plats för dig som vill förbereda dig inför förlossningen och tiden som nybliven förälder.”';
  const image = '/Optimized-images/belliespregnant-tablet.webp';
  const ogImagePath =
    process.env.PUBLIC_URL + '/optimized-images/og/annikaprofil-og.jpg';

  // Define the URL for social sharing as a static string
  const url = 'https://www.doulaskapet.se/ForlossningsforberedandeKurs';

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Container
      sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%',
        px: { xs: 2, sm: 3, md: 4, lg: 10 },
        py: { xs: 2, sm: 3, md: 4, lg: 10 },
      }}
    >
      <Helmet>
        <title>Förlossningsförberedande kurs för HBTQIA+</title>
        <link
          rel='canonical'
          href='https://www.doulaskapet.se/ForlossningsforberedandeKurs'
        />
        <meta
          name='description'
          content='Förlossningsförberedande kurs för HBTQIA+. Tillsammans med Fredrik Stillrud ("den manliga doulan") som driver Queerbility erbjuder vi för första gången i Stockholm, Queermedveten förlossningsförberedande kurs, som är en förlossningsförberedande kurs för HBTQIA+ personer. Öppet för alla HBTQIA-personer, oavsett relationsstatus. Ta gärna med eventuell stödperson om du är självstående.  '
        ></meta>
        <meta
          property='og:image'
          content={ogImagePath}
        />
      </Helmet>
      <MyBreadcrumbs />
      <PageSpecificHero
        title={title}
        subtitle={subtitle}
        image={image}
      />
      <PageWrapper>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
          }}
          data-aos='fade-up'
        >
          <Typography
            variant='h1'
            gutterBottom
          >
            Queercentrerad Förlossningsförberedande kurs i Stockholm{' '}
          </Typography>
          <Grid
            container
            spacing={6}
            justifyContent='space-evenly'
            sx={{ mt: '16px', mb: '16px' }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sx={{ p: '8px' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '15px',
                  mt: '20px',
                }}
                data-aos='fade-up'
              >
                <Box
                  sx={{
                    display: 'flex',
                    lineHeight: '1.5',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    gap: '10px',
                    flexWrap: 'wrap',
                  }}
                >
                  <h2>Hur går det till?</h2>
                  <p>
                    Under två dagar (4 timmar x 2) kommer de queera doulorna
                    Annika och Fredrik peppa dig/er inför förlossningen med
                    teori och praktiska övningar.
                  </p>
                  <h2>Datum och tider</h2>
                  <p>
                    Kursen är under en helg den 8-9 Juni 2024 Tiderna både
                    lördag och söndag kommer att vara kl 10-14 med paus för
                    lunch och fika. Vi kommer att ha en paus för lunch, med
                    möjlighet att värma och äta matlåda i lokalen om en vill
                    det. Vi kommer att bjuda på enklare fika och frukt på plats.
                  </p>
                  <h2>Plats</h2>
                  <p>
                    Kursen kommer att hållas i Doulastudion, Galonvägen 2
                    (T-bana Abrahamsberg).
                  </p>
                  <h2>Pris</h2>{' '}
                  <p>
                    Vi kör enligt sliding scale. Se nedan för mer information.
                  </p>
                  <ol>
                    <li>Nivå 3: 2500kr </li>
                    <li>Nivå 2: 2000kr </li>
                    <li>Nivå 1: 1500kr </li>
                  </ol>
                  <p>Alla priser är inkl moms och gäller för två personer</p>
                  <p>
                    OBS! Friskvårdsbidrag gäller! (Och det går att använda båda
                    personers friskvårdsbidrag)
                  </p>
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1-content'
                        id='panel1-header'
                      >
                        Vad innebär sliding scale?
                      </AccordionSummary>
                      <AccordionDetails>
                        Det betyder att vi har olika prisnivåer och att du
                        väljer det priset som passar dig och din ekonomiska
                        situation. I formuläret anger du vilket nivå du lägger
                        dig.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1-content'
                        id='panel1-header'
                      >
                        Behöver jag bevisa min ekonomiska situation?
                      </AccordionSummary>
                      <AccordionDetails>
                        Nej. Vi litar på att du väljer nivå efter dina
                        ekonomiska förutsättningar, och du behöver inte motivera
                        varför.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1-content'
                        id='panel1-header'
                      >
                        Vilken nivå ska jag välja?
                      </AccordionSummary>
                      <AccordionDetails>
                        <h3>Nivå 3</h3>{' '}
                        <p>
                          är den faktiska kostnaden för kursen, alltså vad det
                          kostar att hyra lokal, betala arvode till kursledarna
                          osv. Denna nivå lägger du dig på om du har jobb, äger
                          en bostad, har besparingar och/eller har möjlighet att
                          låna pengar av anhörig släkting t.ex.{' '}
                        </p>{' '}
                        <h3>Nivå 2</h3>{' '}
                        <p>
                          Nivå 2 är för dig om du kämpar med skulder eller
                          sparande, men har en stadig inkomst och inte ständigt
                          oroar dig för grundläggande behov som mat och bostad.
                          Om du inte känner igen dig helt i beskrivningen för
                          det högsta eller lägsta priset, kanske det mellersta
                          priset passar. Om du kan få ekonomisk hjälp från
                          familj eller vänner, prova det först innan du väljer
                          detta pris.
                        </p>
                        <h3>Nivå 1</h3>{' '}
                        <p>
                          {' '}
                          Det lägsta priset är för de som kämpar ekonomiskt. Om
                          du har svårt att ha råd med grundläggande behov som
                          vård och bostad, eller lever från lön till lön, är
                          detta priset för dig.
                        </p>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel2-content'
                        id='panel2-header'
                      >
                        Varför har ni inte ett fast pris för alla?{' '}
                      </AccordionSummary>
                      <AccordionDetails>
                        vi vill att alla ska ha möjlighet att gå kursen, oavsett
                        ekonomiska förutsättningar.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel3-content'
                        id='panel3-header'
                      >
                        Vad gör jag om jag inte kan betala den lägsta nivån?
                      </AccordionSummary>
                      <AccordionDetails>
                        Om även det lägsta priset är för högt för att du ska ha
                        möjlighet att gå vår kurs, hör av dig till oss så ordnar
                        vi det med betalningsplan.
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Box>
                <Box
                  display='flex'
                  gap={2}
                  sx={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    margin: 'auto',
                    alignItems: 'center',
                    textAlign: 'center', // Changed from 'textAliogn: flexStart'
                  }}
                ></Box>

                <SocialShare
                  url={url}
                  title='Queercenterad förlossningsförberedande kurs för HBTQIA+'
                />
                <Box
                  data-aos='fade-left'
                  component='img'
                  src={lgbt}
                  alt='Pregnant woman and doula'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    margin: 'auto',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: '200px',
                    mt: { xs: 2, md: 4, ld: 6 }, // Add top margin on small screens
                    /*  width: '100%' // Responsive image width */
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{ textAlign: 'left', p: '8px' }}
            >
              <Typography
                gutterBottom
                paragraph
                data-aos='fade-up'
              >
                I sammarbete med Fredrik Stillrud ("den manliga doulan"), som
                driver Queertility, erbjuder vi för första gången i Stockholm,
                Queermedveten förlossningsförberedande kurs, som är en
                förlossningsförberedande kurs för HBTQIA+ personer. Kursen är en
                trygg plats för dig som vill förbereda dig inför förlossningen
                och tiden som nybliven förälder.
              </Typography>
              <h2>Till vem riktar sig kursen?</h2>
              <Typography
                paragraph
                gutterBottom
              >
                Kursen är för dig/er som väntar barn i sommar eller tidig höst,
                och är HBTQIA-person. Relationsstatus spelar ingen roll, men
                kursen är upplagd för att förbereda den som ska föda och en
                stödperson. Är du självstående, ta gärna med eventuell
                stödperson som kommer att närvara vid födseln.
              </Typography>
              <h2>Hur anmäler jag mig?</h2>
              <Typography
                paragraph
                gutterBottom
              >
                Anmäl dig genom att fylla i formuläret nedan. Vi kommer att
                skicka en bekräftelse på din anmälan och information om
                betalning.{' '}
              </Typography>

              <iframe
                src='https://docs.google.com/forms/d/e/1FAIpQLSee7gUnM6EZ90vc2lHy6JlX-AvA4UyZXLUCRTjrq2XvjlYq_Q/viewform?embedded=true'
                width='640'
                height='4650'
                frameborder='0'
                marginheight='0'
                marginwidth='0'
                title='Google Form'
              >
                Läser in …
              </iframe>
            </Grid>
          </Grid>
        </Box>
      </PageWrapper>
    </Container>
  );
};

export default ForlossningsforberedandeKurs;
