import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { ParallaxBanner } from 'react-scroll-parallax';
import RegistroForm from '../../components/Forms/GymRegiterForm';

const GymRegister = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <ParallaxBanner
        layers={[
          { image: '/img/hero_1.png', speed: -20 },
          { image: '/img/overlay_dark.webp', speed: -10 },
        ]}
        style={{ height: '40vh' }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            px: 2,
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid size={12}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  color: 'primary.main',
                }}
              >
                Registrá tu gimnasio
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="h5" align="center" gutterBottom>
                Completá el formulario para registrar tu gimnasio y empezar a
                disfrutar de nuestros servicios.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, mb: 4, display: 'block', mx: 'auto' }}
                onClick={() => window.history.back()}
              >
                Volver
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ParallaxBanner>
      <Container sx={{ pb: 10 }}>
        <RegistroForm />
      </Container>
    </Box>
  );
};

export default GymRegister;
