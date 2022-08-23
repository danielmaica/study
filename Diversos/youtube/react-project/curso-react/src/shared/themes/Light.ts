import { createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#80227B',
      dark: '#4D1652',
      light: '#FF9300',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00ACE4',
      dark: '#FF9300',
      light: '#00ACE4',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#00ACE4',
      default: '#80227B',
    }
  }
});