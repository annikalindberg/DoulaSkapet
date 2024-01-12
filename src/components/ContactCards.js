import React from 'react';
import { Card, Link, CardContent, Typography, CardMedia, Button } from '@mui/material';

const ContactCards = ({ name, image, bor, kontakt, showFormButton }) => {
    const handleScrollToForm = () => {
        const formElement = document.getElementById("contact-form");
        formElement?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Card sx={{ maxWidth: 400, m: 2, borderRadius: '16px' }}>
            {image && (
                <CardMedia
                    component="img"
                    image={image.mobile}
                    alt={`Image of ${name}`}
                    sx={{ width: '100%', objectFit: 'cover', maxHeight: 340 }}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Bor: {bor}
                </Typography>
                {kontakt && (
                    <Typography variant="body2" color="text.secondary">
                        Kontakt: 
                        <Link href={`mailto:${kontakt}`} aria-label={`Skicka ett e-postmeddelande till ${name}`}>
                            {kontakt}
                        </Link>
                    </Typography>
                )}
      {showFormButton && (
                    <Button 
                        variant='contained' 
                        onClick={handleScrollToForm}
                        aria-label="Gå till kontaktformuläret"
                
                    >
                        Fyll i kontaktformuläret
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default ContactCards;
