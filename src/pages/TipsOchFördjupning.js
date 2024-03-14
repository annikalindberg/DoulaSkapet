
import React from 'react';
import { Typography, Grid, Card, CardActionArea, CardContent, Link } from '@mui/material';
import PageWrapper from '../components/PageWrapper';
import PageSpecificHero from '../components/PageSpecificHero';
import { Helmet } from 'react-helmet';
import { resources } from '../components/Resources-data';
import MyBreadcrumbs from '../components/BreadCrumbs';
import WebAssetIcon from '@mui/icons-material/WebAsset';  
import PodcastsIcon from '@mui/icons-material/Podcasts';

const TipsOchFördjupning = () => {
  const getCategoryTitle = (categoryKey) => {
    const titles = {
      blogPosts: 'Blogginlägg',
      podcasts: 'Podcasts',
      hbtqiMaterials: 'HBTQI Material',
      // Add more translations as needed
    };
    return titles[categoryKey] || categoryKey;
  };

  const renderResourceType = (resource) => {
    let Icon = WebAssetIcon; // default icon
    if (resource.type === 'Podcast') {
      Icon = PodcastsIcon;
    }
    return <Icon aria-hidden="true" />;
  };

  return (
    <PageWrapper>
      {/* Helmet and Breadcrumbs remain unchanged */}
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Tips och fördjupning</title>
        <link rel="canonical" href="https://www.doulaskapet.se/TipsOchFördjupning" />
        <meta name="description" content="Hitta användbara resurser som podcasts, blogginlägg och informationsmaterial. Bland annat riktat till dig som är hbtqia+ och blivande förälder." />
      </Helmet>
      <MyBreadcrumbs currentPage="Tips och Fördjupning" />
      <PageSpecificHero title="Tips och Fördjupning" subtitle="Vi i DoulaSkapet älskar att dela med oss av artiklar, blogginlägg och tips på poddar om födande, graviditet och att vara förälder. Här försöker vi ge våra bästa lyssnings- och lästips till dig som väntar barn." />
      <Typography variant="body1" sx={{ mb: 3 }}>
        Det är lätt att som blivande förälder bli överväldigad av all information som finns tillgänglig. I DoulaSKapets kunskapsbank vill vil tipsa om resurser som vi tycker är speciellt användbara för er som väntar barn. Till exempel blogginlägg som vi gillar, podcastavsnitt som berör vissa ämnen samt värdefulla resurser till dig som är HBTQIA+.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Denna sida är under uppbyggnad, och vi tar hemstk gärna emot tips på saker att dela här. Har du något tips? Välkommen att <Link href="/Kontakt">skriva till oss!</Link>
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {Object.keys(resources).map(category => (
          <React.Fragment key={category}> {/* Use React.Fragment to wrap each category */}
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {getCategoryTitle(category)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {resources[category].map(resource => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={resource.id}>
                    <Card
                    >

                      <CardActionArea component="a" href={resource.link} target="_blank" rel="noopener noreferrer">
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="h3">
                            {resource.title}
                          </Typography>
                          {renderResourceType(resource)}
                          <Typography variant="paragraph" color="text.secondary">
                            {resource.description}
                          </Typography>
                          <Typography variant="" color="text.secondary">Från:
                            {resource.source} </Typography>
                          <Typography variant="paragraph" color="text.secondary">
                            {resource.organization}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default TipsOchFördjupning;