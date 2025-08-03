import { Grid, Paper, Stack, Typography, type Theme } from '@mui/material';
import PrimaryButton from '../Buttons/PrimaryButton';
import type { Plan } from '../../types/Entities';

const PlanCard = ({
  plan,
  modo,
  handlePlanSeleccionado,
  theme,
}: {
  plan: Plan;
  modo: 'fitcontrol' | 'empresa';
  handlePlanSeleccionado: (plan: Plan) => void;
  theme: Theme;
}) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Paper
        elevation={plan.destacado ? 8 : 3}
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor: plan.destacado
            ? theme.palette.action.hover
            : theme.palette.background.paper,
          border: plan.destacado
            ? `2px solid ${theme.palette.primary.main}`
            : `1px solid ${theme.palette.divider}`,
          height: '100%',
          '&:hover': {
            boxShadow: plan.destacado
              ? `0 8px 30px ${theme.palette.primary.main}`
              : `0 4px 20px ${theme.palette.primary.main}`,
            transform: 'translateY(-4px)',
          },
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          {plan.nombre}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.primary.main,
          }}
        >
          {plan.precio}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, mb: 2, color: theme.palette.text.secondary }}
        >
          {plan.descripcion}
        </Typography>

        <Stack spacing={1} sx={{ mb: 3 }}>
          {plan.beneficios.map((b: string, idx: number) => (
            <Typography
              variant="body2"
              key={idx}
              sx={{ color: theme.palette.text.primary }}
            >
              • {b}
            </Typography>
          ))}
        </Stack>

        <PrimaryButton
          variant={plan.destacado ? 'contained' : 'outlined'}
          onClick={() => handlePlanSeleccionado(plan)}
          isActive={plan.destacado}
          fullWidth
        >
          {modo === 'fitcontrol' ? 'Elegir plan' : 'Saber más'}
        </PrimaryButton>
      </Paper>
    </Grid>
  );
};

export default PlanCard;
