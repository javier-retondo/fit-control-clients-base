import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useEmpresa } from '../../context/EmpresaContext';
import FormularioContactoSocio from '../../components/Forms/PartnerContactForm';

const SocioContact = () => {
  const { empresa } = useEmpresa();
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <ParallaxBanner
        layers={
          empresa?.landing.hero?.imagenes?.map((image, index) => ({
            image: image,
            speed: -20 + index * 5,
          })) || [
            { image: '/img/hero_1.png', speed: -20 },
            { image: '/img/overlay_dark.webp', speed: -10 },
          ]
        }
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
                Entrená con nosotros
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="h5" align="center" gutterBottom>
                ¿Querés ser parte de nuestro gimnasio?
              </Typography>
              <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                Completá tus datos y nos pondremos en contacto con vos.
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
        <FormularioContactoSocio />
      </Container>
    </Box>
  );
};

export default SocioContact;
