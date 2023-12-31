import React from 'react';
import './App.css';
import ResponsiveMenu from './components/ResponsiveMenu';
import StickyFooter from './components/Footer';
import { Theme } from './styles/Theme';
import { ThemeProvider } from '@mui/material/styles';
import Hem from './pages/Hem';
import DoulaSkapet from './pages/DoulaSkapet';
import { NotFound } from './pages/NotFound';
import DoulaPaket from './pages/DoulaPaket';
import VarförDoula from './pages/VarförDoula';
/* import styled from 'styled-components';
 *//* import background from './assets/bg-bellies.svg';
 */ import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PostpartumSupport from './pages/PostPartumSupport';
import AkutDoula from './pages/AkutDoula';  
import Baspaket from './pages/DoulaPaketBas';
import AnnikaProfilePage from './pages/AnnikaProfilePage';

/* const Background = styled.div`
background-image: url(${background});    
background-size: cover;
  background-position: center;

  min-height: 100vh;
  width: 100%;
  
`; */

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  
  return (
    <Router>
      <ThemeProvider theme={Theme} >
{/*        <Background> 
 */}         <ResponsiveMenu />
          <Routes>
            <Route path="/" element={<Hem />} />
            <Route path="/DoulaSkapet" element={< DoulaSkapet />} />
<Route path="/Doulor/Annika" element={<AnnikaProfilePage />} />
            <Route path="/DoulaPaket" element={<DoulaPaket />} />
            <Route path="/DoulaPaket/Baspaket" element={<Baspaket />} />
            <Route path="/DoulaPaket/Postpartumsupport" element={<PostpartumSupport />} />
            <Route path="/DoulaPaket/AkutDoula" element={<AkutDoula />} />
            <Route path="/VarförDoula" element={< VarförDoula/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <StickyFooter />
{/*        </Background>
 */}       </ThemeProvider>
    </Router>
  );
};



export default App;