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
import DoulansRoll from './pages/DoulansRoll';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Inside your App component
const App = () =>
<Router>
  <ThemeProvider theme={Theme} >
  <ResponsiveMenu />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Doulor" element={< Doulor/>} />
    <Route path="/DoulaPaket" element={<DoulaPaket />} />
    <Route path="/DoulansRoll" element={<DoulansRoll />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
    <StickyFooter />
    </ThemeProvider>
  </Router>
  ;


export default App;