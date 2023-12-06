import React from 'react';
import './App.css';
import ResponsiveMenu from './components/ResponsiveMenu';
import StickyFooter from './components/Footer';
import { Theme } from './styles/Theme';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import Doulor from './pages/Doulor';
import { NotFound } from './pages/NotFound';
import DoulaPaket from './pages/DoulaPaket';
import Fakta from './pages/Fakta';
import styled from 'styled-components';
import background from './assets/images/bg-img.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Background = styled.div`
background-image: url(${background});    
background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
`;

const App = () => {
  
  return (
    <Router>
      <ThemeProvider theme={Theme} >
        <Background>
          <ResponsiveMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Doulor" element={< Doulor />} />
            <Route path="/DoulaPaket" element={<DoulaPaket />} />
            <Route path="/Fakta" element={< Fakta/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <StickyFooter />
        </Background>
      </ThemeProvider>
    </Router>
  );
};



export default App;