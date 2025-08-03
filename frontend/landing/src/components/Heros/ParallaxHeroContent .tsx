import { Box, Typography } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import PrimaryButton from '../Buttons/PrimaryButton';

const ParallaxHeroContent = ({
  titulo,
  subtitulo,
  imagenDecorativa,
  cta,
  isFitcontrol,
  demo,
  navigate,
}: {
  titulo?: string;
  subtitulo?: string;
  imagenDecorativa?: string;
  cta?: {
    label: string;
    href: string;
  };
  isFitcontrol?: boolean;
  demo?: boolean;
  navigate: (path: string) => void;
}) => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      px: 2,
    }}
  >
    <Box sx={{ maxWidth: 800 }}>
      {imagenDecorativa && (
        <Parallax speed={-15}>
          <img
            src={imagenDecorativa}
            alt="Imagen decorativa"
            style={{
              width: '250px',
              marginBottom: '16px',
              opacity: 0.8,
            }}
          />
        </Parallax>
      )}

      <Parallax speed={-5}>
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          {titulo}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ mb: 4, color: 'text.secondary' }}
        >
          {subtitulo}
        </Typography>
        <PrimaryButton
          onClick={() => cta && navigate(cta.href)}
          isActive={true}
          size="large"
        >
          {cta?.label}
        </PrimaryButton>
      </Parallax>
      {(isFitcontrol || demo) && (
        <Parallax speed={-5}>
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: 'text.secondary',
              }}
            >
              {demo ? '¿Te gustó la demo?' : '¿Querés ver una demo?'}{' '}
              <Box
                component="a"
                onClick={() => {
                  if (demo) {
                    navigate('/');
                  } else {
                    navigate('/gym/demo-gymx');
                  }
                }}
                sx={{
                  color: 'primary.main',
                  textDecoration: 'underline',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'background.paper',
                    textDecoration: 'none',
                  },
                }}
              >
                {demo ? 'Volver a FitControl' : 'Ver demo'}
              </Box>
            </Typography>
          </Box>
        </Parallax>
      )}
    </Box>
  </Box>
);

export default ParallaxHeroContent;
