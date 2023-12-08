import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PresentationsCards = ({ title, image, description }) => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const toggleTextVisibility = () => {
        setIsTextVisible(!isTextVisible);
    };

    const truncateText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };

    return (
        <Card sx={{
            maxWidth: 400,
            mt: 10,
            ml: 10,
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
        }}>
            {image && (
                <img
                    src={image.mobile}
                    alt={title}
                    style={{ width: '100%', height: 'auto' }}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {isTextVisible ? description : truncateText(description, 100)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={toggleTextVisibility}>
                    {isTextVisible ? 'Read Less' : 'Read More'}
                </Button>
            </CardActions>
        </Card>
    );
};

export default PresentationsCards;
