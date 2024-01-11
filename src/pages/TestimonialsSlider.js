import React from 'react';
import Slider from 'react-slick';
import { Typography, Paper } from '@mui/material';

const TestimonialsSlider = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', padding: '60px'}}> {/* Inline styling for debugging */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Paper key={index} elevation={3} style={{ padding: '20px', margin: '10px'}}>
            <Typography variant="body1" style={{ fontStyle: 'italic', margin: '30px' }}>
              {testimonial.quote}
            </Typography>
            <Typography variant="subtitle2" style={{ fontWeight: 'bold', textAlign: 'right', marginRight: '20px', marginBottom: '20px' }}>
              {testimonial.author}
            </Typography>
          </Paper>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
