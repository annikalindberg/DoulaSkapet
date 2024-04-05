import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardMedia, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const DoulaPackageCard = ({ title, image, description, linkPath }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const truncateText = (text, limit = 150) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  // Navigate to linkPath when the card is clicked
  const handleCardClick = () => {
    navigate(linkPath);
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        m: 2,
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        cursor: 'pointer', // Change cursor to indicate it's clickable
        tabIndex: 0, // Make it focusable
      }}
      onClick={handleCardClick}
      // Adding role and aria-label for accessibility
      role='button'
      aria-label={`Learn more about ${title}`}
    >
      {image && (
        <CardMedia
          component='img'
          image={image.mobile}
          alt={title}
          sx={{
            width: '100%',
            height: 340,
            objectFit: 'cover',
            borderTopRadius: '40%',
          }}
        />
      )}
      <CardContent sx={{ bgcolor: theme.palette.background.default }}>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        />
        <Typography
          variant='h4'
          sx={{ mb: 2, mt: 3, textAlign: 'center' }}
        >
          {title}
        </Typography>
        <Typography variant='body2'>{truncateText(description)}</Typography>
        <CardActions>
          <Button
            component={Link}
            to={linkPath}
            size='small'
            sx={{
              mt: 2,
              p: 2,
              bgcolor: theme.palette.background.solidYellow,
              color: theme.palette.secondary.contrastText,
              width: '100%',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: theme.palette.secondary.contrastText,
                color: theme.palette.secondary.main,
                transform: 'scale(1.05)',
              },
              '&:focus': {
                outline: '3px solid #4A2F43',
              },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Läs mer om {title}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default DoulaPackageCard;
