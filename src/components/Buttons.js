import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';


export const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Main brand color
  color: theme.palette.primary.contrastText, // Contrast text color for readability
  padding: '10px 20px', // Comfortable padding
  borderRadius: '10px', // Soft rounded corners
  textTransform: 'none', // Normal text casing
  fontWeight: 'bold', // Bold font for emphasis
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth

  '&:hover': {
    backgroundColor: theme.palette.primary.dark, // Darker shade on hover
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Increased shadow on hover
  },

  '&:active': {
    backgroundColor: theme.palette.primary.light, // Lighter shade on click
  },
}));