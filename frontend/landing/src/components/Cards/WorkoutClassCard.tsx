import { Box, Paper, Typography, type Theme } from '@mui/material';
import type { WorkoutClass } from '../../types/Entities';
import { useNavigate } from 'react-router-dom';

const WorkoutClassCard = ({
  theme,
  workoutClass,
  href,
}: {
  theme: Theme;
  workoutClass: WorkoutClass;
  href?: string;
}) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ px: 2 }}>
      <Paper
        elevation={4}
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
          backgroundColor: 'background.default',
          color: 'text.primary',
          height: '100%',
          my: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: `0 8px 30px ${theme.palette.primary.main}`,
            transform: 'translateY(-6px)',
            cursor: href ? 'pointer' : 'default',
          },
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
          },
        }}
        onClick={() => (href ? navigate(href) : null)}
      >
        <Box
          component="img"
          src={workoutClass.imagen}
          alt={workoutClass.nombre}
          sx={{
            width: '100%',
            height: 220,
            objectFit: 'cover',
          }}
        />
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">{workoutClass.nombre}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {workoutClass.descripcion}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default WorkoutClassCard;
