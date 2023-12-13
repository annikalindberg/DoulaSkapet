import React from 'react';
import Carousel from 'react-slick'; // Assuming you're using react-slick
import PresentationsCards from './PresentationsCards';
import { Link } from 'react-router-dom';
import { Grid, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { doulorArray } from './DoulorArray';

const DoulaSlider = ({ doulor }) => {
  const settings = {
      
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // this is the number of slides that will show on the screen at the same time. 
    slidesToScroll: 2, // this is the number of slides that will scroll at the same time when you click the arrow.
    autoplay: true,
    autoplaySpeed: 4000,
     responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1 } // this is the number of slides that will show on the screen at the same time if the screen is 600px or smaller.
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 } // this is the number of slides that will show on the screen at the same time if the screen is 480px or smaller.
    }
  ]
  };

return (
    <Carousel {...settings}>
      {doulorArray.map((doula) => (
        <div key={doula.id}>
          <PresentationsCards
                  name={doula.name}
                  erbjuder={doula.erbjuder}
            image={doula.image}
            description={doula.description}
          />
          <Link to="/doulor" style={{ textDecoration: 'none' }}>
          
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default DoulaSlider;