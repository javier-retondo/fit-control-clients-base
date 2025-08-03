import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { theme } from '../../../theme';
import SliderParallaxCard from '../../../components/Cards/SliderParallaxCard';
import GymCard from '../../../components/Cards/GymCard';
import type { ClienteTestimonio } from '../../../types/Entities';

const sliderSettings = {
  dots: true,
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

const GimnasiosClientes = ({
  gimnasios,
}: {
  gimnasios: ClienteTestimonio[];
}) => {
  return (
    <section id="gimnasios">
      <Box
        sx={{
          py: 10,
          px: 2,
          width: '100vw',
          backgroundColor: 'background.default',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: theme.palette.primary.main }}
        >
          Gimnasios que confían en FitControl
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          Estas marcas ya están transformando su gestión con nuestra plataforma.
        </Typography>

        <Box
          sx={{
            width: '100%',
            height: '400px',
            mx: 'auto',
            backgroundColor: 'background.default',
          }}
        >
          <Slider {...sliderSettings}>
            {gimnasios.map((gimnasio, index) => (
              <SliderParallaxCard key={index} theme={theme}>
                <GymCard gym={gimnasio} />
              </SliderParallaxCard>
            ))}
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default GimnasiosClientes;
