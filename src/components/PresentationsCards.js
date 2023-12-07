import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PresentationsCards = ({ title, image, description, onReadMore }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {image && (
                <img
                    src={image.mobile}
                    alt={title}
                    style={{ width: '100%', height: 'auto' }} // Adjust styling as needed
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

export default PresentationsCards;
