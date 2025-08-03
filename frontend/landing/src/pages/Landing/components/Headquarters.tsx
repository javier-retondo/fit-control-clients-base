import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { useEmpresaTheme } from '../../../hooks/useEmpresaTheme';
import SliderParallaxCard from '../../../components/Cards/SliderParallaxCard';
import HeadquarterCard from '../../../components/Cards/HeadquarterCard';
import type { Headquarter } from '../../../types/Entities';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Headquarters = ({
  headquarters,
  titulo = 'Nuestras Sedes',
  subtitulo = 'Elegí la sede más cercana y conocé sus horarios de atención.',
}: {
  headquarters: Headquarter[];
  titulo?: string;
  subtitulo?: string;
}) => {
  const theme = useEmpresaTheme();
  return (
    <section id="sedes">
      <Box
        sx={{
          py: 10,
          px: 2,
          width: '99vw',
          backgroundColor: 'background.default',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          {titulo}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          {subtitulo}
        </Typography>

        <Box sx={{ width: '100%', mx: 'auto' }}>
          <Slider {...sliderSettings}>
            {headquarters.map((headquarter, index) => (
              <SliderParallaxCard key={index} theme={theme}>
                <HeadquarterCard headquarter={headquarter} />
              </SliderParallaxCard>
            ))}
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default Headquarters;
