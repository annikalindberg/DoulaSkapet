import React from 'react';
import {  Typography,  } from '@mui/material'; 
import PageWrapper from '../components/PageWrapper';
import PageSpecificHero from '../components/PageSpecificHero';
import { Helmet } from 'react-helmet';
/* import { resources } from '../components/Resources-data'; */
import MyBreadcrumbs from '../components/BreadCrumbs';

const TipsOchFördjupning = () => {
  // Function to translate category keys to user-friendly titles
 /*  const getCategoryTitle = (categoryKey) => {
    const titles = {
      blogPosts: 'Blogginlägg',
      podcasts: 'Podcasts',
      hbtqiMaterials: 'HBTQI Material',
      // Add more translations as needed
    };
    return titles[categoryKey] || categoryKey;
  }; */

  return (
    <PageWrapper>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Användbara Resurser - DoulaSkapet</title>
        <meta name="description" content="Hitta användbara resurser som podcasts, blogginlägg och HBTQI-material för blivande familjer." />
      </Helmet>
      <MyBreadcrumbs />
      <PageSpecificHero title="Användbara Resurser" subtitle="Här kommer vi inom kort att ha en massa bra tips, resurser och länkar för dig som är gravid" />
      <Typography variant="body1" sx={{ mb: 2 }}
      >Här kommer vi snart lägga in användbara resurser som vi tycker kan vara bra att känna till. Här länkar vi till blogginlägg som vi gillar, podcasts som vi tycker är bra, samt värdefulla resurser till dig som är HBTQI+.
       {/*  Det är lätt att som blivande förälder bli överväldigad av all information som finns tillgänglig. Vi har samlat några användbara resurser som vi tycker kan vara bra att känna till. Här länkar vi till blogginlägg som vi gillar, podcasts som vi tycker är bra, samt värdefulla resurser till dig som är HBTQI+. */}
      </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
     {/*    Vi fyller på med fler resurser allt eftersom, vill du tipsa oss om något? Hör av dig! */}Vill du tipsa oss om något som bör finnas med här? Hör av dig!
      </Typography>

      {/* <Grid container spacing={4} justifyContent="center">
        {Object.keys(resources).map(category => (
          <Grid item xs={12} key={category}>
            <Typography variant="h2">{getCategoryTitle(category)}</Typography>
            <Grid container spacing={2}>
              {resources[category].map(resource => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={resource.id}>
                  <Card>
                    <CardActionArea component="a" href={resource.link} target="_blank" rel="noopener noreferrer">
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {resource.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {resource.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid> */}
    </PageWrapper>
  );
};

export default TipsOchFördjupning;
