import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const PageWrapper = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        maxWidth: {
          xs: '100%',
          sm: '90%',
      
        },
        justifyContent: 'center',
        alignItems: 'center',
        '& h1, & h2, & h3, & h4, & h5, & h6': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(),
    },
  }}
>

      {children}
    </Box>
  );
};

export default PageWrapper;
