import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700',
    },
    secondary: {
      main: '#1A1A1A',
    },
    background: {
      default: '#0D0D0D',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
    error: {
      main: '#FF4C4C',
    },
    success: {
      main: '#2EFF90',
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
