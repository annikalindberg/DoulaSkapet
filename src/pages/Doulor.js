// In src/pages/OmOss.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Doulor = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>Om Oss</Typography>
        <Typography paragraph>
          Here we can introduce Annika Lindberg and Karin Dernulf, the doulas...
        </Typography>
        {/* Add more detailed content, images, etc */}
      </Box>
    </Container>
  );
}

export default Doulor;
