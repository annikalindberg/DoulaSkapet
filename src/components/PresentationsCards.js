import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardMedia, useTheme, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { doulorArray } from '../components/DoulorArray';
import { Link } from 'react-router-dom';

const PresentationsCards = ({ name, image, description, erbjuder }) => {

    const [isTextVisible, setIsTextVisible] = useState(false);
    const theme = useTheme();

    const toggleTextVisibility = () => {
        setIsTextVisible(!isTextVisible);
    };
// this is the function that truncates the text with only 100 characters. to encrease the number of characters, change the number 100 to the number you want. 
   const truncateText = (text, limit = 300) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
   };
  const serviceUrls = {
        'Föda Utan Rädsla': '/DoulaPaket/Baspaket',
        'Postpartumsupport': '/DoulaPaket/Postpartumsupport',
        'AkutDoula': '/DoulaPaket/AkutDoula',
    };

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
    alt={name}
    sx={{
        width: '100%', // This will ensure the image is as wide as the card
        height: 340, // You can keep a fixed height or make it responsive based on your design
        objectFit: 'cover', // This will cover the available area, cropping the image if necessary
        borderTopRadius: '40%', // This will make the image round

    }}
      />
      

            )}
    <CardContent sx={{ bgcolor: theme.palette.custom.glassBackground }}>
      <Typography gutterBottom variant="h5" component="div" color={"text.secondary"}> {name}
      </Typography>
        <Typography sx={{padding: 1}}gutterBottom variant="body2" color="text.secondary">Erbjuder: 
     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {erbjuder.map((service, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to={serviceUrls[service]}
                    sx={{
                      mt: 1,
                      mb: 1,
                      textTransform: 'none',
                      justifyContent: 'flex-start',
               bgcolor: theme.palette.background.paper,
                      color: theme.palette.text.dark,
                      
                      '&:hover': {
                        bgcolor: theme.palette.secondary.contrastText,
                        color: theme.palette.secondary.main,
                      },
                    }}
                    >
                        {service}
                    </Button>
                ))}
            </Box>
      </Typography>
      
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

export default PresentationsCards;