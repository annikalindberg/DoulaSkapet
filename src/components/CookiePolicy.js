import React from 'react';
import { Typography,  Box } from '@mui/material';
import { PageWrapper } from './PageWrapper';

const CookiePolicy = () => (
    <PageWrapper
        sx={{
            paddingTop: 4, // why isent this doing anything? 
            mt: 4,
            mb: 2,
        }}
    >
    <Typography variant="h2" gutterBottom>
      Cookiepolicy för DoulaSkapet
    </Typography>
    
    <Typography variant="paragraph" gutterBottom>
      På DoulaSkapet, använder vi cookies för att:
    </Typography>

    <Box mb={2}>
      <Typography variant="h3" gutterBottom>Förbättra prestanda:</Typography>
      <Typography>
        Vi använder prestandacookies för att samla in information om hur våra besökare använder webbplatsen, vilka sidor som är mest populära, och för att identifiera navigationsproblem på webbplatsen.
      </Typography>
    </Box>

    <Box mb={2}>
      <Typography variant="h3" gutterBottom>Förbättra funktionalitet:</Typography>
      <Typography>
        Funktionalitetscookies hjälper oss att komma ihåg dina val och inställningar (som språk eller region) och erbjuder förbättrade, mer personliga funktioner.
      </Typography>
    </Box>

    <Box mb={2}>
      <Typography variant="h3" gutterBottom>Analysera och optimera:</Typography>
      <Typography>
        Analytiska cookies används för att samla information för analyssyften, såsom att räkna antalet besökare till vår webbplats och att se hur besökare rör sig på webbplatsen.
      </Typography>
    </Box>

    <Box mb={2}>
      <Typography variant="h3" gutterBottom>Marknadsföring och annonsering:</Typography>
      <Typography>
        Vi kan använda cookies för att visa relevanta annonser till våra besökare.
      </Typography>
    </Box>

    <Typography variant="h3" gutterBottom>Tredjepartscookies</Typography>
    <Typography>
      Vissa cookies som vi använder kan sättas av tredje part, som Google Analytics för webbanalys. Dessa företag kan också använda informationen för att visa relevanta annonser på andra webbplatser baserat på ditt besök.
    </Typography>

    <Typography variant="h3" gutterBottom>Hantera cookies</Typography>
    <Typography>
      Du kan hantera och kontrollera cookies genom dina webbläsarinställningar. De flesta webbläsare ger dig möjlighet att se vilka cookies som är lagrade och att radera dem individuellt eller blockera cookies från specifika eller alla webbplatser.
      <br />
      Observera att om du väljer att blockera cookies kan det påverka eller förhindra att webbplatsen fungerar som den ska.
    </Typography>

    <Typography variant="h3"
gutterBottom> Uppdateringar av vår cookiepolicy</Typography>
<Typography>
Vi kan uppdatera denna policy från tid till annan för att återspegla, till exempel, förändringar i de cookies vi använder eller av andra operativa, juridiska eller regulatoriska skäl. Vänligen besök denna sida regelbundet för att hålla dig informerad om vårt användande av cookies.
</Typography>
</PageWrapper>
);

export default CookiePolicy;