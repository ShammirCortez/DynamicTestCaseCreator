import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

//import DataTypeDropdown from '../archive/initialAppVers/index4.jsx';
import TestCreator  from './index.jsx';
import theme from './external/bruno/theme';

import './style.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <TestCreator />
  </ThemeProvider>
);