import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { EmpresaProvider, useEmpresa } from '../context/EmpresaContext';
import { useEmpresaTheme } from '../hooks/useEmpresaTheme';
import NavBar from '../components/Navbars/LandingNavbar';
import Footer from '../components/Footers/LandingFooter';
import { theme } from '../theme';
import EmpresaLoading from '../components/Loadings/EmpresaLoading';
import { getEmpresaLanding, getFitControlLanding } from '../api/landing';

const LandingLoader = () => {
  const { slug } = useParams();
  const {
    setEmpresa,
    setIsReady,
    empresa,
    isReady,
    setFitControl,
    fitControl,
  } = useEmpresa();

  const getLandingData = async () => {
    setIsReady(false);
    setEmpresa(null);
    setFitControl(null);
    if (!slug) {
      await getFitControlLanding()
        .then((res) => {
          if (res) {
            setFitControl(res);
          } else {
            setFitControl(null);
          }
        })
        .catch((error) => {
          console.error('Error fetching FitControl landing data:', error);
          setFitControl(null);
        })
        .finally(() => {
          setIsReady(true);
        });

      return;
    }
    await getEmpresaLanding(slug)
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
  }, [slug]);

  useEffect(() => {
    if (empresa) {
      document.title = `${empresa.nombre}`;
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
        favicon.href = '/img/logo.png';
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = '/img/logo.png';
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

  if (!slug) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    );
  }

  if (!empresa && !fitControl) {
    return <Navigate to="/gym-not-found" replace />;
  }

  return (
    <ThemeProvider theme={EmpresaTheme}>
      <CssBaseline />
      <NavBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

const LandingLayout = () => {
  return (
    <EmpresaProvider>
      <LandingLoader />
    </EmpresaProvider>
  );
};

export default LandingLayout;
