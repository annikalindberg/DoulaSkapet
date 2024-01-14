import React from 'react';
import './App.css';
import ResponsiveMenu from './components/ResponsiveMenu';
import StickyFooter from './components/Footer';
import { Theme } from './styles/Theme';
import { ThemeProvider } from '@mui/material/styles';
import Hem from './pages/Hem';
import { NotFound } from './pages/NotFound';
import Kontakt from './pages/Kontakt';
import DoulaPaket from './pages/DoulaPaket';
import DoulaEffekten from './pages/DoulaEffekten';
import DoulorPage from './pages/DoulorPage';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PostpartumStöd from './pages/PostPartumStöd';
import AkutDoula from './pages/AkutDoula';  
import Baspaket from './pages/DoulaPaketBas';
import AnnikaProfilePage from './pages/AnnikaProfilePage';
import { gradientStyle } from './components/ReusableStyles';
import Box from '@mui/material/Box';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

/*   const theme = useTheme(); */

  
  return (
    <Router>
      <ThemeProvider theme={Theme} >
      <Box sx={gradientStyle}>
        
          <ResponsiveMenu />
          <Routes>
            <Route path="/" element={<Hem />} />
<Route path="/Doulor" element={<DoulorPage />} />
<Route path="/Doulor/Annika" element={<AnnikaProfilePage />} />
            <Route path="/DoulaPaket" element={<DoulaPaket />} />
            <Route path="/DoulaPaket/Baspaket" element={<Baspaket />} />
            <Route path="/DoulaPaket/PostpartumStöd" element={<PostpartumStöd />} />
            <Route path="/DoulaPaket/AkutDoula" element={<AkutDoula />} />
            <Route path="/DoulaEffekten" element={< DoulaEffekten />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <StickyFooter />
       </Box> 
      </ThemeProvider>
    </Router>
  );
};



export default App;