import React from 'react';
import { Card, CardContent, Typography, Box, Grid, List, ListItem } from '@mui/material';
import { packages } from '../components/PackageData'; // Adjust the import path as necessary

const DoulaPaketBas = () => {
  const basPackage = packages.find(pkg => pkg.title === 'Doulapaket Bas - Trygg Förlossning');

  if (!basPackage) {
    return <div>Package not found</div>;
  }

  return (
    <Box sx={{ my: 4 }}>
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={10} md={8} lg={6}> {/* Adjusted grid sizes */}
      <Card sx={{ maxWidth: '100%', borderRadius: '16px', backgroundColor: 'transparent' }}> {/* Max width 100% */}
        <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                {basPackage.title}
              </Typography>
              <img src={basPackage.image.mobile} alt={basPackage.image.alt} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {basPackage.description}
              </Typography>

              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                {basPackage.rubrik2}
              </Typography>
              <List sx={{ mb: 2 }}>
                <ListItem>{basPackage.list2_1}</ListItem>
                <ListItem>{basPackage.list2_2}</ListItem>
                <ListItem>{basPackage.list2_3}</ListItem>
                <ListItem>{basPackage.list2_4}</ListItem>
                <ListItem>{basPackage.list2_5}</ListItem>
                <ListItem>{basPackage.list2_6}</ListItem>
              </List>

              <Typography variant="body1" sx={{ mb: 2 }}>
                {basPackage.price}
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                {basPackage.ctatext}
              </Typography>

              {/* Add any additional content or components here */}
              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoulaPaketBas;
