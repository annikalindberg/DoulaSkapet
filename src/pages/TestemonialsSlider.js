import React from 'react';
import Slider from 'react-slick';
import { Typography, Paper } from '@mui/material';
import styled from 'styled-components';

   const TestimonialSlider = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
       
       // styles for the slider
       const StyledSlider = styled(Slider)`
       max-width: 80%; // Adjust the width as per your requirement
  margin: 0 auto; // Centers the slider
  .slick-slide {
    padding: 15px;
    box-sizing: border-box;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: #00796b; // Adjust the color to match your theme
  }

  .slick-dots li.slick-active button:before {
    color: #004d40; // Adjust the active color to match your theme
  }
`;

const TestimonialPaper = styled(Paper)`
  padding: 20px;
  margin: 10px;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); // Adds a subtle shadow effect
`;

const QuoteTypography = styled(Typography)`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 10px;
`;

const AuthorTypography = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
`;
       
    return (
    <StyledSlider {...settings}>
      {testimonials.map((testimonial, index) => (
        <TestimonialPaper key={index} elevation={3}>
          <QuoteTypography variant="body1">{testimonial.quote}</QuoteTypography>
          <AuthorTypography variant="subtitle2">{testimonial.author}</AuthorTypography>
        </TestimonialPaper>
      ))}
    </StyledSlider>
  );
};
    
export default TestimonialSlider;