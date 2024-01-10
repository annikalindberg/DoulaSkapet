import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardMedia, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // New icon import

import { Link } from 'react-router-dom';  

const DoulaPackageCard = ({ title, image, description, linkPath }) => {
  const theme = useTheme();

  
  const truncateText = (text, limit = 150) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };


  return (
     <Card sx={{
            maxWidth: 300, 
            m: 2, 
            borderRadius: '16px',
            display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', 
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
<CardContent sx={{ bgcolor: theme.palette.background.default}}> <Typography gutterBottom variant="h5" component="div">
      </Typography>
        <Typography variant="h4" sx={{
          mb: 2, mt: 3, textAlign: 'center'
        }}> {title} </Typography>
        <Typography variant="body2" >
               {truncateText(description)}
        </Typography>
      <CardActions>
       <Button
          component={Link} // Use Button as a Link
          to={linkPath} // Link destination
          size="small"
          sx={{
            mt: 2,
            bgcolor: theme.palette.background.solidYellow,
            color: theme.palette.secondary.contrastText,
            width: '100%',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: theme.palette.secondary.contrastText,
              color: theme.palette.secondary.main,
            },
          }}
          endIcon={<ArrowForwardIcon />} // New icon for the button
        >
          Läs mer
        </Button>
      </CardActions>
      </CardContent>
    </Card>
  );
};

export default DoulaPackageCard;