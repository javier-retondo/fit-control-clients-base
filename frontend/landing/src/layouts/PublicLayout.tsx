import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { EmpresaProvider, useEmpresa } from '../context/EmpresaContext';
import { useEmpresaTheme } from '../hooks/useEmpresaTheme';
import { useEffect } from 'react';
import PublicNavbar from '../components/Navbars/PublicNavbar';
import PublicFooter from '../components/Footers/PublicFooter';
import { getEmpresaLanding } from '../api/landing';
import EmpresaLoading from '../components/Loadings/EmpresaLoading';

const PublicLoader = () => {
  const { setEmpresa, setIsReady, empresa, isReady, setFitControl } =
    useEmpresa();

  const getLandingData = async () => {
    setIsReady(false);
    setEmpresa(null);
    setFitControl(null);
    await getEmpresaLanding()
      .then((res) => {
        if (res) {
          setEmpresa(res);
        } else {
          setEmpresa(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching empresa landing data:', error);
        setEmpresa(null);
      })
      .finally(() => {
        setIsReady(true);
      });
  };

  useEffect(() => {
    getLandingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  if (!isReady) {
    return (
      <ThemeProvider theme={EmpresaTheme}>
        <CssBaseline />
        <EmpresaLoading />
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
