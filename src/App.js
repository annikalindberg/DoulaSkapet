
import './App.css';
import ResponsiveMenu from './components/ResponsiveMenu';
import StickyFooter from './components/Footer';
import { Theme } from './styles/Theme';
import { ThemeProvider } from '@mui/material/styles';
/* import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; 
/* import OmOss from './components/OmOss'; */
/* import {NotFound }from './pages/NotFound'; */


// Define your router
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
   {
    path: "/about",
    element: <OmOss />,
  }, 
  {
    path: "/dashboard",
    element: <Paket/>,
  }, 
  {
    path: "*",
    element: <NotFound />,
  },
]); */

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
{/*       <RouterProvider router={router}>
 */}        <ResponsiveMenu />
        {/* Include other components that should be displayed on every page here */}
        <StickyFooter />
{/*       </RouterProvider>
 */}    </ThemeProvider>
  );
}

export default App;