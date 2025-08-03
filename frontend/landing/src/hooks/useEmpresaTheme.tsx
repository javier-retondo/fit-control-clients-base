import { createTheme, type Theme } from '@mui/material/styles';

import { useMemo } from 'react';
import { useEmpresa } from '../context/EmpresaContext';

export const useEmpresaTheme = (): Theme => {
  const { empresa } = useEmpresa();

  const theme = useMemo(() => {
    const primary = empresa?.colores?.primary || '#FFD700';
    const secondary = empresa?.colores?.secondary || '#1A1A1A';

    return createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: primary,
        },
        secondary: {
          main: secondary,
        },
        background: {
          default: '#0D0D0D',
          paper: '#1A1A1A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
      },
    });
  }, [empresa]);

  return theme;
};
