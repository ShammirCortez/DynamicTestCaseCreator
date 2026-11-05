import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

//import DataTypeDropdown from '../archive/initialAppVers/index4.jsx';
import DataTypeDropdown from './index.jsx';
import theme from './theme';

import './style.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <DataTypeDropdown />
  </ThemeProvider>
);