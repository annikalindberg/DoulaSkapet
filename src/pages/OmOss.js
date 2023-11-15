// In src/pages/OmOss.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const OmOss = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>About Us - Om Oss</Typography>
        <Typography paragraph>
          Here we can introduce Annika Lindberg and Karin Dernulf, the doulas...
        </Typography>
        {/* Add more detailed content, images, etc */}
      </Box>
    </Container>
  );
}

export default OmOss;
