import React from 'react';
import Slider from 'react-slick'; // Assuming you're using react-slick
import PresentationsCards from './PresentationsCards';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { doulorArray } from './DoulorArray';


const DoulaSlider = () => {
/* const [autoPlay, setAutoPlay] = useState(true); */

const CustomArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  font-size: 24px; // Adjust the size as needed
  color: black; // Choose your color
  width: 30px; // Adjust width
  height: 30px; // Adjust height
  background-color: lightgray; // Background color for visibility: ;
  border-radius: 50%; // Makes it circular
  transform: translateY(-50%); // Vertically center
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3); // Optional: Add shadow for depth

`;

const NextArrow = (props) => (
  <CustomArrow {...props} className="slick-next" />
);

const PrevArrow = (props) => (
  <CustomArrow {...props} className="slick-prev" />
);
  const settings = { 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    pauseOnHover: true,
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

/* const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
    
  }; */

  
  return (
    <div>
{/*       <Button onClick={toggleAutoPlay}>
        {autoPlay ? 'Pause' : 'Play'}
      </Button> */}

    <Slider {...settings}>
      {doulorArray.map((doula) => (
        <div key={doula.id}>
          <PresentationsCards
                  name={doula.name}
                  erbjuder={doula.erbjuder}
            image={doula.image}
            description={doula.description}
            bor={doula.bor}
            pris={doula.pris}
          />
          <Link to="/doulor" style={{ textDecoration: 'none' }}>
          
          </Link>
        </div>
      ))}
      </Slider>
    </div>
      );
      
};
      

export default DoulaSlider;