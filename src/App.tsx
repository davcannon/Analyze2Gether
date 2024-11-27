import React from 'react';
import {ThemeProvider} from '@mui/material';
import Router from './Router';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
