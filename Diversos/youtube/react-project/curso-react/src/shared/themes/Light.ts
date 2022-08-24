import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#80227B',
      dark: '#00ACE4',
      light: '#FF9300',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4D1652',
      dark: '#FF9300',
      light: '#00ACE4',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#f7f6f3',
    }
  }
});