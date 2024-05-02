import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; // Importing the icon
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

// Map of paths to labels
const breadcrumbNameMap = {
  '/': 'Hem',
  '/Doulor': 'Doulor',
  '/Doulor/Annika': 'Annika',
  '/ForlossningsforberedandeKurs': 'Förlossningsförberedande Kurs',
  '/DoulaPaket': 'DoulaPaket',
  '/DoulaPaket/Baspaket': 'Baspaket',
  '/DoulaPaket/PostpartumStöd': 'PostpartumStöd',
  '/DoulaPaket/AkutDoula': 'AkutDoula',
  '/DoulaEffekten': 'DoulaEffekten',
  '/TipsOchFördjupning': 'TipsOchFördjupning',
  '/Kontakt': 'Kontakt',
};

export default function MyBreadcrumbs() {
  const theme = useTheme();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  console.log(location.pathname); // Log the current path
  console.log(pathnames); // Log the split pathnames

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize='small' />}
      aria-label='breadcrumb'
      sx={{
        marginTop: '20px', // Add more space on top
        marginBottom: '20px', // Add more space on bottom
        '& .MuiBreadcrumbs-ol': {
          color: theme.palette.text.primary, // Change color of the icons
        },
        '& .MuiSvgIcon-root': {
          color: theme.palette.text.secondary, // Change color of the icons
        },
      }}
    >
      {pathnames.length > 0 ? (
        <Link
          component={RouterLink}
          color='inherit'
          to='/'
        >
          {breadcrumbNameMap['/']}
        </Link>
      ) : (
        <span>{breadcrumbNameMap['/']}</span>
      )}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <span key={pathTo}>{breadcrumbNameMap[pathTo]}</span>
        ) : (
          <Link
            key={pathTo}
            component={RouterLink}
            color='inherit'
            to={pathTo}
            underline='hover'
          >
            {breadcrumbNameMap[pathTo]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
