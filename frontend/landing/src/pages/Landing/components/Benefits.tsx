import { Box, Typography, Grid } from '@mui/material';
import { theme } from '../../../theme';
import SliderParallaxCard from '../../../components/Cards/SliderParallaxCard';
import type { BeneficioVisual } from '../../../types/Entities';

const Benefits = ({ beneficios }: { beneficios: BeneficioVisual[] }) => {
  return (
    <section id="beneficios">
      <Box
        sx={{
          py: 10,
          px: 2,
          backgroundColor: 'background.default',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: 'primary.main' }}
        >
          Beneficios de usar FitControl
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          Todo lo que necesitás para gestionar tu gimnasio en una sola
          plataforma.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {beneficios.map((b, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ mb: 2 }} key={index}>
              <SliderParallaxCard
                theme={theme}
                sx={{
                  backgroundColor: 'background.default',
                  p: 4,
                  textAlign: 'center',
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <img
                    src={b.img}
                    alt={b.titulo}
                    width={100}
                    height={100}
                    style={{ borderRadius: '50%' }}
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {b.titulo}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {b.descripcion}
                </Typography>
              </SliderParallaxCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Benefits;
