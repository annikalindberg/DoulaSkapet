import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#DDB6C6',
      contrastText: '#4A2F43', 
    },
    secondary: {
      main: '#d3c1b0a8;',
      contrastText: '#563C5C', 
    },
    background: {
      default: '#FFF7F8',
      paper: '#bdb1b16e',
      solidPaper: '#efe1f8',
      solidYellow: '#f5f6c9'
    },
    text: {
      primary: '#4A2F43',
      secondary: '#6D6875',
      dark: '#4A4033',
      light: 'rgb(248, 248, 248)',
    },

    custom: {
   
      glassBackground: 'rgb(243 238 232 / 85%)',
      glassBackgroundDark: 'rgb(231 213 195 / 89%);',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {  
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
      h4: {
        fontFamily: '"Playfair Display", serif',
        fontSize: '1rem',

        '@media (min-width:600px)': { fontSize: '1rem' },
        '@media (min-width:900px)': { fontSize: '1.25rem' },
        '@media (min-width:1200px)': { fontSize: '1.5rem' },
      },
      h5: {
        fontFamily: '"Playfair Display", serif',
        fontSize: '1rem',
        fontWeight: 400, // Adjust weight as needed
        '@media (min-width:600px)': { fontSize: '1rem' },
        '@media (min-width:900px)': { fontSize: '1.25rem' },
        '@media (min-width:1200px)': { fontSize: '1.5rem' },
      },
      h6: {
        fontFamily: '"Playfair Display", serif',
        fontSize: '1rem',
        fontWeight: 400, // Adjust weight as needed
        '@media (min-width:600px)': { fontSize: '1rem' },
        '@media (min-width:900px)': { fontSize: '1.25rem' },
        '@media (min-width:1200px)': { fontSize: '1.5rem' },
      },
 
      body1: {
                  fontFamily: '"Lato", sans-serif',

      fontSize: '0.8rem',
      fontWeight: 400,
      lineHeight: 1.8,
      '@media (max-width:600px)': { fontSize: '0.8rem' },
        '@media (min-width:900px)': { fontSize: '1rem' },
        '@media (min-width:1200px)': { fontSize: '1.2rem' },
  
    },
    body2: {
      fontFamily: '"Lato", sans-serif',

fontSize: '0.8rem',
lineHeight: 1.8,
fontWeight: 400,
'@media (max-width:600px)': { fontSize: '0.8rem' },
'@media (min-width:900px)': { fontSize: '0.9rem' },
'@media (min-width:1200px)': { fontSize: '1rem' },

},
      paragraph: {
            fontFamily: '"Lato", sans-serif',

      fontSize: '0.8rem',
      fontWeight: 400,
      lineHeight: 1.7,
 
        '@media (max-width:600px)': { fontSize: '0.8rem' },
        '@media (min-width:900px)': { fontSize: '1rem' },
        '@media (min-width:1200px)': { fontSize: '1.1rem' },


    },
    subtitle1: {
        fontFamily: '"Playfair Display", serif',
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (max-width:600px)': { fontSize: '2rem' },
      '@media (min-width:900px)': { fontSize: '2.4rem' },
      '@media (min-width:1200px)': { fontSize: '2.6rem' },

    },
    italic: {
        fontFamily: '"Playfair Display", serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
      fontStyle: 'italic',
           '@media (max-width:600px)': { fontSize: '1rem' },
      '@media (min-width:600px)': { fontSize: '1.3rem' },
      '@media (min-width:900px)': { fontSize: '1.5rem' },
      '@media (min-width:1200px)': { fontSize: '1.7rem' },

      },
      italicSmall: {  
        fontFamily: '"Lato", sans-serif',
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
        letterSpacing: '0.00714em',
        fontStyle: 'italic',
             '@media (max-width:600px)': { fontSize: '1rem' },
        '@media (min-width:900px)': { fontSize: '1.2rem' },
        '@media (min-width:1200px)': { fontSize: '1.3rem' },
  
        },
    overline: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
      marginTop: '50px', // this is not having any effect?
      '@media (max-width:600px)': { fontSize: '0.875rem' },
      '@media (min-width:900px)': { fontSize: '1rem' },
      '@media (min-width:1200px)': { fontSize: '1.25rem' },

  
    },
    customHeader: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      marginTop: '16px',
      marginBottom: '8px',
      '@media (max-width:600px)': { fontSize: '2rem' },
      '@media (min-width:900px)': { fontSize: '2.5rem' },
      '@media (min-width:1200px)': { fontSize: '3rem' },
    },


    
       
    
  },
});