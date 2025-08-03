import { Box, Typography, Stack, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useEmpresa } from '../../context/EmpresaContext';
import { useNavigate } from 'react-router-dom';

const PublicFooter = () => {
  const { empresa } = useEmpresa();
  const navigate = useNavigate();
  const isFitControl = !empresa?.slug || empresa.slug === 'fitcontrol';

  const secciones = isFitControl
    ? [
        { href: '/', label: 'Inicio' },
        { href: '/login', label: 'Ingresar' },
        { href: '/register', label: 'Registrarse' },
      ]
    : [
        { href: `/gym/${empresa.slug}`, label: 'Inicio' },
        { href: `/gym/${empresa.slug}/login`, label: 'Ingresar' },
        { href: `/gym/${empresa.slug}/register`, label: 'Registrarse' },
      ];

  const redesFitControl = [
    { href: 'https://www.facebook.com/fitcontrolapp', icon: <FacebookIcon /> },
    {
      href: 'https://www.instagram.com/fitcontrolapp',
      icon: <InstagramIcon />,
    },
    { href: `https://wa.me/543512009913`, icon: <EmailIcon /> },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        py: 6,
        px: 2,
        mt: 0,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
        maxWidth="lg"
        sx={{ mx: 'auto' }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            '&:hover': { color: 'primary.main', cursor: 'pointer' },
          }}
        >
          {empresa?.nombre || 'FitControl'}
        </Typography>
        <Stack direction="row" spacing={3}>
          {secciones.map((s, i) => (
            <Link
              key={i}
              onClick={() => navigate(s.href)}
              underline="hover"
              color="inherit"
              sx={{
                fontWeight: 'bold',
                '&:hover': { color: 'primary.main', cursor: 'pointer' },
              }}
            >
              {s.label}
            </Link>
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          {empresa?.redes?.facebook && (
            <IconButton
              href={empresa.redes.facebook}
              target="_blank"
              sx={{
                color: 'primary.main',
                '&:hover': { color: 'secondary.main' },
              }}
            >
              <FacebookIcon />
            </IconButton>
          )}
          {empresa?.redes?.instagram && (
            <IconButton
              href={empresa.redes.instagram}
              target="_blank"
              sx={{
                color: 'primary.main',
                '&:hover': { color: 'secondary.main' },
              }}
            >
              <InstagramIcon />
            </IconButton>
          )}
          {empresa?.redes?.whatsapp && (
            <IconButton
              href={`https://wa.me/${empresa.redes.whatsapp}`}
              target="_blank"
              sx={{
                color: 'primary.main',
                '&:hover': { color: 'secondary.main' },
              }}
            >
              <EmailIcon />
            </IconButton>
          )}
          {isFitControl &&
            redesFitControl.map((red) => (
              <IconButton
                key={red.href}
                href={red.href}
                target="_blank"
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                {red.icon}
              </IconButton>
            ))}
        </Stack>
      </Stack>

      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 4, fontSize: '0.8rem', color: 'text.secondary' }}
      >
        © {new Date().getFullYear()} {empresa?.nombre || 'FitControl'}. Todos
        los derechos reservados.
      </Typography>
    </Box>
  );
};

export default PublicFooter;
