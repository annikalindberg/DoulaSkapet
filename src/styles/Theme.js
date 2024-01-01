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
      solidPaper: '#efe1f8',
      solidYellow: '#f5f6c9'
    },
    text: {
      // For text, using a darker shade that ensures accessibility
      primary: '#4A2F43',
      secondary: '#6D6875',
      dark: '#4A4033',
      light: 'rgb(248, 248, 248)',
    },
/*    action: {
     active: '#DDB6C6',
     activeText: '#4A2F43',
      hover: 'rgba(221,182,198,0.08)',
      selected: 'rgba(221,182,198,0.16)',
      disabled: 'rgb(14, 12, 13)',
      disabledBackground: 'rgba(221,182,∏198,0.12)',
      activeText: '#4A2F43',
      hoverText: '#4A2F43',
      selectedText: '#4A2F43',
      disabledText: '#4A2F43',
    }, */
    custom: {
      // For glassmorphism effect, semi-transparent white with a hint of the primary color
      glassBackground: 'rgb(243 238 232 / 85%)',
      glassBackgroundDark: 'rgb(231 213 195 / 89%);',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {  // 'root' key targets the base style of the component
          color: '#341f33', // Link color
          textDecoration: 'underline', // Underline for links
          fontWeight: 'bold', // Bold for emphasis
          '&:hover': {
            color: '#113790', // Darker color on hover
            textDecoration: 'none', // Removing underline on hover
          },
          '&:focus': {
            outline: '3px solid #4A2F43', // Focus outline for accessibility

    },
        },
      },
    },
  },
    typography: {
    // Setting the default font family to Lato
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2rem',
      fontWeight: 400, // Adjust weight as needed
      '@media (min-width:600px)': { fontSize: '2.5rem' },
      '@media (min-width:900px)': { fontSize: '3rem' },
      '@media (min-width:1200px)': { fontSize: '3.5rem' },
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.5rem',
      fontWeight: 400, // Adjust weight as needed
      '@media (min-width:600px)': { fontSize: '1.75rem' },
      '@media (min-width:900px)': { fontSize: '2rem' },
      '@media (min-width:1200px)': { fontSize: '2.25rem' },
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1rem',
      fontWeight: 400, // Adjust weight as needed
      '@media (min-width:600px)': { fontSize: '1.5rem' },
      '@media (min-width:900px)': { fontSize: '1.75rem' },
      '@media (min-width:1200px)': { fontSize: '2rem' },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      '@media (max-width:600px)': { fontSize: '0.875rem' },
    },
    paragraph: {
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: 1.5,
      '@media (max-width:600px)': { fontSize: '0.975rem' },
      '@media (min-width:600px)': { fontSize: '1.1rem' },
      '@media (min-width:900px)': { fontSize: '1.2rem' },
      '@media (min-width:1200px)': { fontSize: '1.3rem' },

    },
    subtitle1: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
     
      letterSpacing: '0.00938em',
      '@media (max-width:600px)': { fontSize: '1rem' },
      '@media (min-width:600px)': { fontSize: '1.3rem' },
      '@media (min-width:900px)': { fontSize: '1.5rem' },
      '@media (min-width:1200px)': { fontSize: '1.7rem' },

    },
    italic: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
      fontStyle: 'italic',
           '@media (max-width:600px)': { fontSize: '1rem' },
      '@media (min-width:600px)': { fontSize: '1.3rem' },
      '@media (min-width:900px)': { fontSize: '1.5rem' },
      '@media (min-width:1200px)': { fontSize: '1.7rem' },

    },
    overline: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
    customHeader: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      marginTop: '16px',
      marginBottom: '8px',
    },
    customBody: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      marginTop: '8px',
      marginBottom: '8px',
    },
    customBodyItalic: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      fontStyle: 'italic',
    },
  },
});