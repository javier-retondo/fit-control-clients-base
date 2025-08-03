import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import WorkoutClassCard from '../../../components/Cards/WorkoutClassCard';
import type { WorkoutClass } from '../../../types/Entities';
import { useEmpresaTheme } from '../../../hooks/useEmpresaTheme';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Featured = ({
  clases,
  titulo = 'Clases Destacadas',
  subtitulo = 'Una propuesta para cada tipo de entrenamiento.',
}: {
  clases: WorkoutClass[];
  titulo?: string;
  subtitulo?: string;
}) => {
  const empresaTheme = useEmpresaTheme();
  if (!clases || clases.length === 0) return null;
  return (
    <section id="clases">
      <Box sx={{ py: 10, px: 2, backgroundColor: 'background.paper' }}>
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

        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          <Slider {...sliderSettings}>
            {clases.map((clase, i) => (
              <WorkoutClassCard
                key={i}
                theme={empresaTheme}
                workoutClass={clase}
              />
            ))}
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default Featured;
