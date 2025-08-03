import { Outlet, useParams } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { EmpresaProvider, useEmpresa } from '../context/EmpresaContext';
import { useEmpresaTheme } from '../hooks/useEmpresaTheme';
import { useEffect } from 'react';
import { empresasMock } from '../api/mocks/empresas';
import PublicNavbar from '../components/Navbars/PublicNavbar';
import { theme } from '../theme';
import PublicFooter from '../components/Footers/PublicFooter';

const PublicLoader = () => {
  const { slug } = useParams();
  const { setEmpresa, setIsReady, empresa } = useEmpresa();

  useEffect(() => {
    setIsReady(false);
    const data = empresasMock[slug as keyof typeof empresasMock];
    if (data) {
      setEmpresa(data);
    } else {
      setEmpresa(null);
    }
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    if (empresa) {
      document.title = `${empresa.nombre} | FitControl`;
      const favicon = document.querySelector(
        "link[rel='icon']",
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href = empresa.logo;
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = empresa.logo;
        document.head.appendChild(newFavicon);
      }
    } else {
      document.title = 'FitControl';
      const favicon = document.querySelector(
        "link[rel='icon']",
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href = '/img/favicon.png';
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = '/img/favicon.png';
        document.head.appendChild(newFavicon);
      }
    }
  }, [empresa]);

  const EmpresaTheme = useEmpresaTheme();

  if (!slug) {
    return (
      <ThemeProvider theme={theme}>
        <Box>
          <PublicNavbar />
          <Outlet />
          <PublicFooter />
        </Box>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={EmpresaTheme}>
      <Box>
        <PublicNavbar />
        <Outlet />
        <PublicFooter />
      </Box>
    </ThemeProvider>
  );
};

const PublicLayout = () => {
  return (
    <EmpresaProvider>
      <PublicLoader />
    </EmpresaProvider>
  );
};

export default PublicLayout;
