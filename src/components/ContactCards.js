import React from 'react';
import {
  Card,
  Tooltip,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ForumIcon from '@mui/icons-material/Forum';
import { useTheme } from '@mui/material/styles';
import PortraitIcon from '@mui/icons-material/Portrait';
import { red } from '@mui/material/colors';

const ContactCards = ({
  name,
  image,
  bor,
  kontakt,
  showFormButton,
  hasProfilePage,
}) => {
  const theme = useTheme();

  const handleScrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card sx={{ maxWidth: 400, m: 2, borderRadius: '16px' }}>
      {image && (
        <CardMedia
          component='img'
          image={image.mobile}
          alt={`Image of ${name}`}
          sx={{ width: '100%', objectFit: 'cover', maxHeight: 340 }}
        />
      )}
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          {name}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          Bor: {bor}
        </Typography>
        {showFormButton && (
          <Tooltip title='Kontakta Annika'>
            <Button
              variant='contained'
              onClick={handleScrollToForm}
              aria-label='Gå till kontaktformuläret'
              startIcon={<ForumIcon />}
              sx={{
                mt: 1,
                mb: 1,
                textTransform: 'none',
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                  color: theme.palette.secondary.contrastText,
                },
              }}
            >
              Boka Annika
            </Button>
          </Tooltip>
        )}
        {hasProfilePage && (
          <Button
            component={RouterLink}
            to='/doulor/annika'
            variant='contained'
            startIcon={<PortraitIcon />}
            sx={{
              mt: 2,
              fontSize: '0.85rem',
              padding: '0.90rem',
              backgroundColor: red[900],
              color: theme.palette.text.light,
              '&:hover': {
                backgroundColor: red[800],
                transform: 'scale(1.05)',
              },
            }}
            aria-label={`Gå till ${name}s profilsida`}
          >
            Läs mer om Annika
          </Button>
        )}
        {kontakt && (
          <Typography
            variant='h6'
            color='text.secondary'
          >
            E-post:
            <br />
            <Button
              sx={{
                mt: 1,
                mb: 1,
                textTransform: 'none',
                color: theme.palette.text.primary,

                '&:hover': {
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.contrastText,
                },
              }}
              href={`mailto:${kontakt}`}
              aria-label={`Skicka ett e-postmeddelande till ${name}`}
              startIcon={<AlternateEmailIcon />}
            >
              {kontakt}
            </Button>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactCards;
