import React from 'react';
import { Card, CardContent, Typography, Box, Grid, List, ListItem , ListItemIcon } from '@mui/material';
import { packages } from '../components/PackageData'; // Adjust the import path as necessary
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

const PostpartumSupportPage = () => {
  const theme = useTheme();

  const postpartumPackage = packages.find(pkg => pkg.title === 'Postpartumstöd – tiden efter förlossningen');

  // If package is not found, render a placeholder or a not found message
  if (!postpartumPackage) {
    return <div>Package not found</div>;
  }

  return (
    <Box sx={{ my: 4 }}>
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={10} md={8} lg={6}> {/* Adjusted grid sizes */}
      <Card sx={{ maxWidth: '100%', borderRadius: '16px', backgroundColor: 'transparent' }}> {/* Max width 100% */}
        <CardContent  sx={{ bgcolor: theme.palette.background.default}}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                {postpartumPackage.title}
              </Typography>
              <img src={postpartumPackage.image.mobile} alt={postpartumPackage.image.alt} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {postpartumPackage.description}
              </Typography>

              <Typography variant="h3" sx={{ mb: 1 }}>
                {postpartumPackage.rubrik1}
              </Typography>
              <Typography sx={{ mb: 1 }}>{postpartumPackage.text1}</Typography>

              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                {postpartumPackage.rubrik2}
              </Typography>
              <List sx={{ mb: 2 }}>
                <ListItem>{postpartumPackage.list1}</ListItem>
                <ListItem>{postpartumPackage.list2}</ListItem>
                <ListItem>{postpartumPackage.list3}</ListItem>
                <ListItem>{postpartumPackage.list4}</ListItem>
                <ListItem>{postpartumPackage.list5}</ListItem>
                <ListItem>{postpartumPackage.list6}</ListItem>
                <ListItem>{postpartumPackage.list7}</ListItem>
                <ListItem>{postpartumPackage.list8}</ListItem>
              </List>

              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                {postpartumPackage.rubrik3}
              </Typography>
              <Typography sx={{ mb: 1 }}>{postpartumPackage.prisinformation}</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {postpartumPackage.price}
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                {postpartumPackage.ctatext}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                {postpartumPackage.disclaimer}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostpartumSupportPage;
