import { createTheme } from '@mui/material/styles';
// use in component by importing: import { Theme } from '../styles/Theme'; and then using it like this: <ThemeProvider theme={Theme}>...</ThemeProvider> 
export const Theme = createTheme({
  palette: {
    primary: {
      // A warm, dusky pink that serves as the main brand color
      main: '#DDB6C6',
      contrastText: '#4A2F43', // A deep purple that contrasts well with the main color
    },
    secondary: {
      // A complementary color that's calm and not too loud
      main: '#d3c1b0a8;',
      contrastText: '#563C5C', // New deeper purple/burgundy for better contrast
    },
    background: {
      // The light pastel pink background of the entire page
      default: '#FFF7F8',
      paper: '#f9efff57',
      solidPaper: '#efe1f8'
    },
    text: {
      // For text, using a darker shade that ensures accessibility
      primary: '#4A2F43',
      secondary: '#6D6875',
      dark: '#4A4033'
    },
   action: {
      active: '#DDB6C6',
      hover: 'rgba(221,182,198,0.08)',
      selected: 'rgba(221,182,198,0.16)',
      disabled: 'rgba(221,182,198,0.3)',
      disabledBackground: 'rgba(221,182,198,0.12)',
      activeText: '#4A2F43',
      hoverText: '#4A2F43',
      selectedText: '#4A2F43',
      disabledText: '#4A2F43',
    },
    custom: {
      // For glassmorphism effect, semi-transparent white with a hint of the primary color
      glassBackground: 'rgb(243 238 232 / 85%)',
      glassBackgroundDark: 'rgb(231 213 195 / 89%);',
    },
  },
  components: {
    // Override MUI components styles globally here if needed
    
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
    h3: {
      fontSize: '1.2rem', // default
      '@media (min-width:600px)': { fontSize: '1.5rem' },
      '@media (min-width:900px)': { fontSize: '1.75rem' },
      '@media (min-width:1200px)': { fontSize: '2rem' },
    },
    // You can continue defining other variants like h3, h4, body1, body2, etc.
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    paragraph: {
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.975rem',
      },
    },
    },
  },
});
