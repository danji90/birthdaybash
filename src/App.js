import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import BirthdayBash from './components/BirthdayBash';
import { useEffect } from 'react';

const theme = createTheme({
  createPulse: (grow) => {
    return {
      "0%": {
        transform: 'scale(1)',
      },
      "50%": {
        transform: `scale(${grow || 1.05})`,
      },
      "100%": {
        transform: 'scale(1)',
      }
    }
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
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        letterSpacing: 0,
        fontSize: '1rem',
        lineHeight: 'unset',
      }
    }
  }
});

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
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
