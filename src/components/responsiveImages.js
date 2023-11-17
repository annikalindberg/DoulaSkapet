import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

const ResponsiveImage = ({ mobile, tablet, desktop, alt, credit, style }) => {
  const srcSet = `${mobile} 500w, ${tablet} 1000w, ${desktop} 2000w`;
  const sizes = "(max-width: 600px) 500px, (max-width: 900px) 1000px, 2000px";
  
// Styled components
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;
const StyledImage = styled(LazyLoadImage)`
  border-radius: 20px;  // A moderate radius
  max-width: 100%;     // Ensure it's responsive
  margin: 20px auto;   // Center the image with some margin
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); // Optional: Add a subtle shadow
`;

const CreditText = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  padding: 2px 5px;
  margin: 0;
`;

  return (
    <ImageContainer>
    <StyledImage srcSet={srcSet}
                 sizes={sizes}
                 src={tablet} // Default to tablet image
                 alt={alt}
        effect="blur" 
        style={style}
      />
                 {credit && <CreditText>Photo: {credit}</CreditText>}
    </ImageContainer>
  );
};

// PropTypes
ResponsiveImage.propTypes = {
  mobile: PropTypes.string.isRequired,
  tablet: PropTypes.string,
desktop: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  credit: PropTypes.string,
  style: PropTypes.object,
};

export default ResponsiveImage;