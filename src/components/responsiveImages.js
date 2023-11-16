import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const StyledImage = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
  /* Add more styles as needed */
`;

const ResponsiveImage = ({ mobile, tablet, desktop, alt }) => {
  const srcSet = `${mobile} 500w, ${tablet} 1000w, ${desktop} 2000w`;
  const sizes = "(max-width: 600px) 500px, (max-width: 900px) 1000px, 2000px";

  return (
    <StyledImage srcSet={srcSet}
                 sizes={sizes}
                 src={tablet} // Default to tablet image
                 alt={alt}
                 effect="blur" />
  );
};

export default ResponsiveImage;