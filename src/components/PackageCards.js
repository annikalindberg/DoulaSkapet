import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardMedia, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const DoulaPackageCard = ({ title, image, description }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const theme = useTheme();

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };
  const truncateText = (text, limit = 300) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  // Ensure the image object has the necessary properties before trying to access them
  /* const hasImage = image && image.mobile && image.tablet && image.desktop; */

  return (
     <Card sx={{
            maxWidth: 345, // Set a maxWidth for the card
            m: 2, // Add margin
            borderRadius: '16px', // Rounded corners
            display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', // This prevents the child elements from overflowing the border radius
              backgroundColor: 'transparent',

    }}>
       {image && (
               <CardMedia
    component="img"
          image={image.mobile}
       
        

    alt={title}
    sx={{
        width: '100%', // This will ensure the image is as wide as the card
        height: 340, // You can keep a fixed height or make it responsive based on your design
        objectFit: 'cover', // This will cover the available area, cropping the image if necessary
        borderTopRadius: '40%', 

    }}
/>

            )}
<CardContent sx={{ bgcolor: theme.palette.custom.glassBackgroundDark}}> <Typography gutterBottom variant="h5" component="div">
      </Typography>
        <Typography variant = "h5" color="text.secondary"> {title} </Typography>
        <Typography variant="body2" color="text.secondary">
          {isTextVisible ? description : truncateText(description)}
        </Typography>
      <CardActions>
           <Button
    size="small"
            sx={{
      mt: 2,
      bgcolor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      width: '100%',
      textTransform: 'none',
      fontWeight: 'bold',
      '&:hover': {
        bgcolor: theme.palette.secondary.contrastText, color: theme.palette.secondary.main,
      },
    }}
    startIcon={isTextVisible ? <ExpandLessIcon /> : <ExpandMoreIcon  />}
    onClick={toggleTextVisibility}>
    {isTextVisible ? 'Se mindre...' : 'Se mer...'}
</Button>
      </CardActions>
      </CardContent>
    </Card>
  );
};

export default DoulaPackageCard;