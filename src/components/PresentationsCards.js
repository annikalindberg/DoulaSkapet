import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
  useTheme,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import PortraitIcon from '@mui/icons-material/Portrait';
import { red } from '@mui/material/colors';

const PresentationsCards = ({
  name,
  image,
  description,
  erbjuder,
  bor,
  pris,
  rubrik2,
  stycke2,
  stycke3,
  hasOwnProfile,
}) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const theme = useTheme();

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  const truncateText = (text, limit = 300) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  const renderServiceButton = (service, index) => {
    if (service === 'AnnikasProfilsida') {
      return (
        <Button
          key={index}
          variant='contained'
          color='primary'
          component={Link}
          to='/Doulor/Annika'
          startIcon={<PortraitIcon />}
          sx={{
            mt: 1,
            mb: 1,
            textTransform: 'none',
            bgcolor: red[900],
            color: theme.palette.text.light,
            '&:hover': {
              bgcolor: red[700],
              transform: 'scale(1.1)',
            },
          }}
        >
          Annikas Profilsida
        </Button>
      );
    } else if (!hasOwnProfile && index === 0) {
      return (
        <Button
          key={index}
          variant='outlined'
          color='primary'
          component={Link}
          to='/kontakt'
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
          {`Kontakta ${name}`}
        </Button>
      );
    }
    return null;
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        m: 2,
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      {image && (
        <CardMedia
          component='img'
          image={image.mobile}
          alt={name}
          sx={{
            width: '100%',
            objectFit: 'cover',
            borderTopRadius: '40%',
            maxHeight: 340,
          }}
        />
      )}
      <CardContent sx={{ bgcolor: theme.palette.custom.glassBackground }}>
        <Typography
          gutterBottom
          variant='h5'
          color={'text.secondary'}
        >
          {' '}
          {name}{' '}
        </Typography>
        <Typography
          sx={{ padding: 1 }}
          gutterBottom
          variant='body2'
          color='text.secondary'
        ></Typography>
        <Typography
          gutterBottom
          variant='body2'
          color={'text.secondary'}
        >
          {' '}
          Bor: {bor}{' '}
        </Typography>
        <Typography
          gutterBottom
          variant='subtitle'
          color={'text.secondary'}
        >
          {' '}
          {rubrik2}{' '}
        </Typography>
        <Typography
          gutterBottom
          variant='body2'
        >
          {' '}
          {stycke2}{' '}
        </Typography>
        <Typography
          gutterBottom
          variant='body2'
          color={'text.secondary'}
        >
          Pris: {pris}{' '}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {isTextVisible ? description : truncateText(description)}
        </Typography>
        <CardActions>
          <Button
            size='small'
            sx={{
              mt: 2,
              width: '100%',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
            startIcon={isTextVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={toggleTextVisibility}
            aria-expanded={isTextVisible}
          >
            {isTextVisible ? 'Se mindre...' : 'Se mer...'}
          </Button>
        </CardActions>{' '}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {erbjuder.map(renderServiceButton)}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PresentationsCards;
