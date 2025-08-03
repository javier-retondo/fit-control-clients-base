import { Box, Typography } from '@mui/material';

const GymNotFound = () => {
  return (
    <Box>
      <Box
        sx={{
          p: 10,
          textAlign: 'center',
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(/img/hero_2.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          top: 100,
          left: 0,
          width: '100vw',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          Gimnasio no encontrado
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          El gimnasio que estás buscando no existe o no está disponible.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Por favor, verifica el enlace o vuelve a la página principal.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Si crees que esto es un error, contacta con el soporte técnico.
        </Typography>
      </Box>
    </Box>
  );
};

export default GymNotFound;
