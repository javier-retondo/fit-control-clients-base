import { Box, Typography, Grid, Collapse } from '@mui/material';
import { useState } from 'react';
import { useEmpresaTheme } from '../../../hooks/useEmpresaTheme';
import WizardPlanPersonalizado from './PlanWizard';
import { useGeneral } from '../../../context/GeneralContext';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import PlanCard from '../../../components/Cards/PlanCard';
import type { Plan } from '../../../types/Entities';

const PlanesPrecios = ({
  planes,
  modo,
  maxVisible,
}: {
  planes: Plan[];
  modo: 'fitcontrol' | 'empresa';
  maxVisible?: number;
}) => {
  const visibles = maxVisible ? planes.slice(0, maxVisible) : planes;
  const theme = useEmpresaTheme();
  const [mostrarWizard, setMostrarWizard] = useState(false);

  const { setPlanSeleccionado } = useGeneral();
  const navigate = useNavigate();

  const handlePlanSeleccionado = (plan: Plan) => {
    setPlanSeleccionado(plan);
    setPlanSeleccionado(plan);
    navigate('register', {
      state: { planSeleccionado: plan },
    });
  };

  return (
    <section id="precios">
      <Box
        sx={{
          py: 10,
          px: 2,
          backgroundColor: theme.palette.background.paper,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.default,
            p: 2,
            borderRadius: 2,
          }}
        >
          {modo === 'fitcontrol'
            ? 'Planes y Precios'
            : 'Elegí tu plan de entrenamiento'}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ mb: 6, color: theme.palette.text.secondary }}
        >
          {modo === 'fitcontrol'
            ? 'Elegí el plan que mejor se adapte a tu gimnasio. Sin instalación ni complicaciones.'
            : 'Seleccioná el plan que mejor se ajuste a tu objetivo'}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {visibles.map((plan, i) => (
            <PlanCard
              key={i}
              plan={plan}
              modo={modo}
              handlePlanSeleccionado={handlePlanSeleccionado}
              theme={theme}
            />
          ))}
        </Grid>

        {maxVisible && planes.length > maxVisible && (
          <Box sx={{ mt: 4 }}>
            <PrimaryButton variant="text" href="#contacto">
              Más planes y precios
            </PrimaryButton>
          </Box>
        )}
        {modo === 'fitcontrol' && (
          <Box sx={{ mt: 6 }}>
            <PrimaryButton
              variant="outlined"
              onClick={() => setMostrarWizard(!mostrarWizard)}
            >
              Quiero un plan personalizado
            </PrimaryButton>

            <Collapse in={mostrarWizard} timeout="auto" unmountOnExit>
              <Box sx={{ mt: 4 }}>
                <WizardPlanPersonalizado />
              </Box>
            </Collapse>
          </Box>
        )}
      </Box>
    </section>
  );
};

export default PlanesPrecios;
