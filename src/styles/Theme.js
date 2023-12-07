import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#E88B22',
      dark: '#174441',
      light: '#F6EFE9',
    },
    secondary: {
      main: '#C55428',
      light: '#F6EFE9',
    },
    custom: {
      pink: '#FAB7A4',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem', // default
      '@media (min-width:600px)': { fontSize: '2.5rem' },
      '@media (min-width:900px)': { fontSize: '3rem' },
      '@media (min-width:1200px)': { fontSize: '3.5rem' },
    },
    h2: {
      fontSize: '1.5rem', // default
      '@media (min-width:600px)': { fontSize: '1.75rem' },
      '@media (min-width:900px)': { fontSize: '2rem' },
      '@media (min-width:1200px)': { fontSize: '2.25rem' },
    },
    // You can continue defining other variants like h3, h4, body1, body2, etc.
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    // Add more variants as needed
  },
});
