import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';import './App.css';
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
import PostpartumStöd from './pages/PostPartumStöd';
import AkutDoula from './pages/AkutDoula';  
import Baspaket from './pages/DoulaPaketBas';
import AnnikaProfilePage from './pages/AnnikaProfilePage';
import { gradientStyle } from './components/ReusableStyles';
import Box from '@mui/material/Box';
import CookieConsentDialog from './components/CookieConsent';
import CookiePolicy from './components/CookiePolicy';
import CustomizeCookieDialog from './components/CustomizeCookieDialog';
import TipsOchFördjupning from './pages/TipsOchFördjupning';


const RouteHandler = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

};

const App = () => {
  const [cookieDialogOpen, setCookieDialogOpen] = useState(
    !localStorage.getItem('cookiePreferences')

  )
  const [customizeDialogOpen, setCustomizeDialogOpen] = useState(false);

  const handleCloseCookieDialog = () => {
    setCookieDialogOpen(false);
  };
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    ReactGA.initialize('G-YCXHC9RKK7'); // Replace with your actual GA4 ID
  }, []);

  const handleOpenCustomizeDialog = () => {
    // Öppna dialogrutan eller navigera till sidan för anpassning av cookies
    setCustomizeDialogOpen(true);
    handleCloseCookieDialog(); // Stäng cookie-dialogrutan
  
  };

  return (
    <Router>
      <ThemeProvider theme={Theme} >
      <Box sx={gradientStyle}>
        
          <ResponsiveMenu />
          <CookieConsentDialog
            open={cookieDialogOpen}
            onClose={handleCloseCookieDialog}
            onReadPolicy={handleCloseCookieDialog}
            onCustomize={handleOpenCustomizeDialog}
          />
          <CustomizeCookieDialog
            open={customizeDialogOpen}
            onClose={() => setCustomizeDialogOpen(false)}
          />
          <RouteHandler />
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
            <Route path="/TipsOchFördjupning" element={<TipsOchFördjupning />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <StickyFooter />
       </Box> 
      </ThemeProvider>
    </Router>
  );
};



export default App;