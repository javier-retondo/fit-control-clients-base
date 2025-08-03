import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const HeroSlider = lazy(() => import('../../../components/Heros/HeroSlider'));
const ParallaxHeroContent = lazy(
  () => import('../../../components/Heros/ParallaxHeroContent '),
);

const Hero = ({
  titulo,
  subtitulo,
  imagenes,
  imagenDecorativa,
  cta,
  isFitcontrol,
  demo,
}: {
  titulo?: string;
  subtitulo?: string;
  imagenes?: string[];
  imagenDecorativa?: string;
  demo?: boolean;
  cta?: {
    label: string;
    href: string;
  };
  isFitcontrol?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        height: '100vh',
        width: '99vw',
        overflow: 'hidden',
      }}
    >
      <Suspense fallback={<Box sx={{ height: '100vh', background: '#000' }} />}>
        {imagenes && <HeroSlider heroImages={imagenes} />}
      </Suspense>
      <Suspense fallback={<Box />}>
        <ParallaxHeroContent
          titulo={titulo}
          subtitulo={subtitulo}
          imagenDecorativa={imagenDecorativa}
          cta={cta}
          isFitcontrol={isFitcontrol}
          demo={demo}
          navigate={navigate}
        />
      </Suspense>
    </Box>
  );
};

export default Hero;
