import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#00ACE4',
      dark: '#80227B',
      light: '#00ACE4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4D1652',
      dark: '#FF9300',
      light: '#00ACE4',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  }
});