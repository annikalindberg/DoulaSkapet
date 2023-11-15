import React from 'react';
import './App.css';
import ResponsiveMenu from './components/ResponsiveMenu';
import StickyFooter from './components/Footer';
import { Theme } from './styles/Theme';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import OmOss from './pages/OmOss';
import { NotFound } from './pages/NotFound';
import DoulaPaket from './pages/DoulaPaket';
import Doula from './pages/Doula';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Inside your App component
const App = () =>
<Router>
  <ThemeProvider theme={Theme} >
  <ResponsiveMenu />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/OmOss" element={<OmOss />} />
    <Route path="/DoulaPaket" element={<DoulaPaket />} />
    <Route path="/Doula" element={<Doula />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
    <StickyFooter />
    </ThemeProvider>
  </Router>
  ;


export default App;