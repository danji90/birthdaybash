import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import React, { useEffect } from 'react';
import BirthdayBash from './components/BirthdayBash';

const theme = createTheme({
  createPulse: (grow) => {
    return {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: `scale(${grow || 1.05})`,
      },
      '100%': {
        transform: 'scale(1)',
      },
    };
  },
  createBounce: (height) => {
    return {
      '0%': {
        transform: 'translate(0)',
      },
      '50%': {
        transform: `translate(0, ${height || 10}px)`,
      },
      '100%': {
        transform: 'translate(0)',
      },
    };
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        letterSpacing: 0,
        fontSize: '1rem',
        lineHeight: 'unset',
      },
    },
  },
});

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BirthdayBash />
      </div>
    </ThemeProvider>
  );
}

export default App;
