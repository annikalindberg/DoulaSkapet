import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PageWrapper = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: {
          xs: '100%',
          sm: '90%',
          md: '80%',
          lg: '70%',
          xl: '60%'
        },
        bgcolor: theme.palette.background.paper,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
