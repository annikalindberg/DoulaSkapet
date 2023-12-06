import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

// Styled components
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledImage = styled(LazyLoadImage)`
  border-radius: 20px; // A moderate radius
  max-width: 100%; // Ensure it's responsive
  margin: 20px auto; // Center the image with some margin
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

const ResponsiveImage = ({ mobile, tablet, desktop, alt, credit, style }) => {
  // Ensure the srcSet matches the natural size of your images
  const srcSet = `${mobile} 480w, ${tablet} 768w, ${desktop} 1024w`;
  // Adjust the sizes to match your responsive design breakpoints
  const sizes = "(max-width: 480px) 480px, (max-width: 768px) 768px, 1024px";

  return (
    <ImageContainer>
      <StyledImage 
        srcSet={srcSet}
        sizes={sizes}
        src={mobile} // Set mobile image as the default
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
  tablet: PropTypes.string.isRequired,
  desktop: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  credit: PropTypes.string,
  style: PropTypes.object,
};

export default ResponsiveImage;
