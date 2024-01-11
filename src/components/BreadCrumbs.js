import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; // Importing the icon
import { useTheme } from '@mui/material/styles';

export default function MyBreadcrumbs() {
    const theme = useTheme();

    return (
        <Breadcrumbs 
            separator={<NavigateNextIcon fontSize="small" />} 
            aria-label="breadcrumb"
            sx={{ 
                marginTop: '20px', // Add more space on top
                marginBottom: '20px', // Add more space on bottom
                '& .MuiBreadcrumbs-ol': {
                    color: theme.palette.text.primary // Change color of the icons
                },
                '& .MuiSvgIcon-root': {
                    color: theme.palette.text.secondary // Change color of the icons
                },
            }}
        >
            <Link component={RouterLink} color="inherit" to="/">
                Hem
            </Link>
            <Link component={RouterLink} color="inherit" underline="hover" to="/Doulor">
                Doulor
            </Link>
           
            <Link component={RouterLink} color="inherit" underline="hover" to="/DoulaPaket">
                DoulaPaket
            </Link>
            <Link component={RouterLink} color="inherit" underline="hover" to="/Doulaeffekten">
                Doulaeffekten
            </Link>
            <Link component={RouterLink} color="inherit" underline="hover" to="/Kontakt">
                Kontakt
            </Link>
        </Breadcrumbs>
    );
};
