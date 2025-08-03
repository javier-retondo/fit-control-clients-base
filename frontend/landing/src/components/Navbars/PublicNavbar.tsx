import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEmpresa } from '../../context/EmpresaContext';
import { useNavigate, useParams } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

const PublicNavbar = () => {
  const [open, setOpen] = useState(false);

  const { slug } = useParams();
  const { empresa } = useEmpresa();
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        borderBottom: '1px solid #333',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => (empresa ? navigate(`/gym/${slug}`) : navigate(`/`))}
        >
          <img
            src={empresa?.logo || '/img/logo.png'}
            alt="Logo"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <Typography variant="h6">
            {empresa?.nombre || 'FitControl'}
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Box sx={{ width: 250 }} role="presentation">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setOpen(false);
                        if (empresa) {
                          navigate(`/gym/${slug}`);
                        } else {
                          navigate(`/`);
                        }
                      }}
                    >
                      <ListItemText primary={'Inicio'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      href="login"
                      onClick={() => {
                        setOpen(false);
                        navigate('login');
                      }}
                    >
                      <ListItemText primary="Ingresar" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      href="login"
                      onClick={() => {
                        setOpen(false);
                        navigate('register');
                      }}
                    >
                      <ListItemText primary="Registrarse" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box>
              <PrimaryButton
                onClick={() =>
                  empresa ? navigate(`/gym/${slug}`) : navigate(`/`)
                }
                isActive={false}
              >
                Inicio
              </PrimaryButton>
              <PrimaryButton onClick={() => navigate('login')} isActive={false}>
                Ingresar
              </PrimaryButton>
              <PrimaryButton
                onClick={() => navigate('register')}
                isActive={false}
              >
                Registrarse
              </PrimaryButton>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default PublicNavbar;
