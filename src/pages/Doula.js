// In src/pages/OmOss.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Doula = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>About Us - Om Oss</Typography>
        <Typography paragraph>
Doulaeffekten       </Typography>
        {/* Add more detailed content, images, etc */}
      </Box>
    </Container>
  );
}

export default Doula;