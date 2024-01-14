import React from 'react';
import { Card, CardContent, Typography, Box, Grid, List, ListItem , ListItemIcon } from '@mui/material';
import { packages } from '../components/PackageData'; // Adjust the import path as necessary
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import { Helmet } from 'react-helmet';
import PagespecifikHero from '../components/PageSpecificHero';
import PageWrapper from '../components/PageWrapper';
import { doulorArray } from '../components/DoulorArray';
import ContactCards from '../components/ContactCards';
import MyBreadcrumbs from '../components/BreadCrumbs';

const PostpartumStöd = () => {
  const theme = useTheme();
  const title = 'Postpartumstöd';
  const subtitle = 'Tiden efter förlossningen';
  const image = '/Optimized-images/postpartum-bg.webp';
  const postpartumDoulas = doulorArray.filter(doula => doula.erbjuder.includes('Postpartum'));
  
  const postpartumPackage = packages.find(pkg => pkg.title === 'Postpartumstöd – tiden efter förlossningen');

  // If package is not found, render a placeholder or a not found message
  if (!postpartumPackage) {
    return <div>Package not found</div>;
  }

  return (
    <PageWrapper>

      <Helmet>
        <title>Postpartumstöd – tiden efter förlossningen</title>
        <meta name="description" content="Upptäck vårt omfattande Postpartumstöd hos DoulaSkapet. Vi erbjuder anpassad hjälp och vägledning för nya föräldrar i Stockholm under den viktiga tiden efter förlossningen, inklusive emotionellt stöd, praktiska tips och hjälp med att anpassa sig till föräldraskapet. Kontakta oss för att skapa en plan som passar dina unika behov." />
      </Helmet>
      <MyBreadcrumbs />
      <PagespecifikHero title={title} subtitle={subtitle} image={image} />
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
                {[postpartumPackage.list1, postpartumPackage.list2, postpartumPackage.list3, 
                  postpartumPackage.list4, postpartumPackage.list5, postpartumPackage.list6, 
                  postpartumPackage.list7, postpartumPackage.list8].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItem>
                ))}
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
      <Box sx={{ my: 4 }}>
<Typography variant="h4" sx={{ mb: 2 }}>Våra Postpartum Doulas</Typography>
<Grid container spacing={2} justifyContent="center">
{postpartumDoulas.map(doula => (
<Grid item key={doula.id} xs={12} sm={6} md={4}>
<ContactCards 
             name={doula.name} 
             image={doula.image} 
             bor={doula.bor} 
             kontakt={doula.kontakt} 
             showFormButton={doula.showFormButton} 
             hasProfilePage={doula.hasOwnProfile}
           />
</Grid>
))}
</Grid>
</Box>
    </PageWrapper>
  );
};

export default PostpartumStöd;
