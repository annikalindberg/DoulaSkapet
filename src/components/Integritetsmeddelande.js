import React from 'react';
import { Typography, Box } from '@mui/material';

const PrivacyNotice = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Integritetsmeddelande för Kontaktformulär
      </Typography>
      <Typography paragraph>
        <strong>Din integritet är viktig för oss på DoulaSkapet.</strong> Detta meddelande förklarar hur vi hanterar informationen du tillhandahåller via vårt kontaktformulär:
      </Typography>
      <Typography paragraph>
        <strong>Syfte med Datainsamling:</strong> Den personliga information du tillhandahåller (inklusive ditt namn och e-postadress) används enbart i syfte att svara på dina förfrågningar och för att kommunicera med dig om våra tjänster.
      </Typography>
      <Typography paragraph>
        <strong>Lagring och Tillgång till Data:</strong> Din information samlas in via ett Google-formulär och lagras säkert. Tillgång till dessa data är begränsad till auktoriserad personal på DoulaSkapet som behöver informationen för att kunna svara på dina förfrågningar.
      </Typography>
      <Typography paragraph>
        <strong>Delning av Data:</strong> Vi delar, säljer eller distribuerar inte din personliga information till tredje part, utom som krävs enligt lag.
      </Typography>
      <Typography paragraph>
        <strong>Dina Rättigheter:</strong> Du har rätt att få tillgång till den information du har tillhandahållit, begära rättelser eller be om att dina uppgifter raderas från våra register.
      </Typography>
      <Typography paragraph>
        <strong>Kontakta Oss:</strong> Om du har några frågor om hur vi hanterar dina data, eller om du önskar få tillgång till eller radera din information, vänligen kontakta oss på [din e-postadress].
      </Typography>
      <Typography paragraph>
        Genom att skicka in din information via detta formulär, erkänner och godkänner du vår hantering av dina data som beskrivs i detta meddelande.
      </Typography>
    </Box>
  );
};

export default PrivacyNotice;
