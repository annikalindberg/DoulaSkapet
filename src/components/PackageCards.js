import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ResponsiveImage from '../components/responsiveImages'; // Import your ResponsiveImage component

const DoulaPackageCard = ({ title, image, description, onReadMore }) => {
  // Ensure the image object has the necessary properties before trying to access them
  const hasImage = image && image.mobile && image.tablet && image.desktop;

  return (
    <Card sx={{ maxWidth: 345 }}> 
      {hasImage && (
        <ResponsiveImage
          mobile={image.mobile}
          tablet={image.tablet}
          desktop={image.desktop}
          alt={image.alt || 'Doula Package'} // Provide a default alt text if none is provided
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onReadMore}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default DoulaPackageCard;
