import React from 'react';
import { Card, CardContent, Typography, Box, Grid, List, ListItem, ListItemIcon } from '@mui/material';
import { packages } from '../components/PackageData'; // Adjust the import path as necessary
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from '@mui/material/styles';

const AkutDoulaPage = () => {
  const theme = useTheme();
  // Locate the specific Akut-Doula package
  const akutDoulaPackage = packages.find(pkg => pkg.title === 'Akut-Doula');

  // If package is not found, render a placeholder or a not found message
  if (!akutDoulaPackage) {
    return <div>Package not found</div>;
  }

  return (
    <Box sx={{ my: 4 }}>
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={10} md={8} lg={6}> {/* Adjusted grid sizes */}
      <Card sx={{ maxWidth: '100%', borderRadius: '16px', backgroundColor: 'transparent' }}> {/* Max width 100% */}
        <CardContent sx={{ bgcolor: theme.palette.background.default}}>
              <Typography variant="h2"  sx={{ mb: 2 }}>
                {akutDoulaPackage.title}
              </Typography>
              <img src={akutDoulaPackage.image.mobile} alt={akutDoulaPackage.image.alt} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {akutDoulaPackage.description}
              </Typography>

              <Typography variant="h3" sx={{ mb: 1, mt: 3 }}>
                {akutDoulaPackage.rubrik1}
              </Typography>
              <List sx={{ mb: 2 }}>
                {[akutDoulaPackage.list2_1, akutDoulaPackage.list2_2, akutDoulaPackage.list2_3, akutDoulaPackage.list2_4].map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px', marginTop: '5px', color: 'text.secondary' }}>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="body2">
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>

              <Typography sx={{ mb: 1 }}>{akutDoulaPackage.text1}</Typography>

              <Typography variant="h4" sx={{ mb: 1, mt: 3 }}>
                {akutDoulaPackage.rubrik2}
              </Typography>
              <Typography sx={{ mb: 1 }}>{akutDoulaPackage.text2}</Typography>

              <List sx={{ mb: 2 }}>
                <ListItem>{akutDoulaPackage.list2_1}</ListItem>
                <ListItem>{akutDoulaPackage.list2_2}</ListItem>
                <ListItem>{akutDoulaPackage.list2_3}</ListItem>
                <ListItem>{akutDoulaPackage.list2_4}</ListItem>
              </List>
              <Typography sx={{ mb: 1, mt: 2 }}variant='h5'>Pris Akut Doula</Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                {akutDoulaPackage.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AkutDoulaPage;
