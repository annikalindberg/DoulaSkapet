// In src/pages/OmOss.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const DoulaPaket = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>DoulaPaket</Typography>
        <Typography paragraph>
Paket vi erbjuder        </Typography>
        {/* Add more detailed content, images, etc */}
      </Box>
    </Container>
  );
}

export default DoulaPaket;
