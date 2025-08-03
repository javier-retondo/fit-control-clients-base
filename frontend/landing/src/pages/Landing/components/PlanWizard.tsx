import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
  TextField,
  Stack,
  Paper,
} from '@mui/material';
import { useState } from 'react';
import { theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';
import { useGeneral } from '../../../context/GeneralContext';
import type { Plan } from '../../../types/Entities';

const steps = ['Sedes', 'Socios', 'Clases', 'Resumen'];

const WizardPlanPersonalizado = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    sedes: 1,
    socios: 50,
    clases: 10,
  });

  const navigate = useNavigate();
  const { setPlanSeleccionado } = useGeneral();

  const handleIWantTo = (plan: Plan) => {
    setPlanSeleccionado(plan);
    navigate('/register', {
      state: { planSeleccionado: plan },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const calcularPrecio = () => {
    const { sedes, socios } = form;

    let precioBase = 0;

    if (sedes <= 1 && socios <= 150) {
      precioBase = 18000;
    } else if (sedes <= 3 && socios <= 500) {
      precioBase = 29000;
    } else {
      precioBase = 42000;
    }

    return `AR$ ${precioBase.toLocaleString()}`;
  };

  return (
    <Paper elevation={4} sx={{ p: 4, maxWidth: 700, mx: 'auto' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {activeStep === 0 && (
          <TextField
            label="¿Cuántas sedes tenés?"
            name="sedes"
            type="number"
            value={form.sedes}
            onChange={handleChange}
            fullWidth
          />
        )}
        {activeStep === 1 && (
          <TextField
            label="¿Cuántos socios activos estimás?"
            name="socios"
            type="number"
            value={form.socios}
            onChange={handleChange}
            fullWidth
          />
        )}
        {activeStep === 2 && (
          <TextField
            label="¿Cuántas clases semanales?"
            name="clases"
            type="number"
            value={form.clases}
            onChange={handleChange}
            fullWidth
          />
        )}
        {activeStep === 3 && (
          <Box textAlign="center">
            <Typography variant="h6" gutterBottom>
              ¡Tu plan ideal tiene un valor estimado de:
            </Typography>
            <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
              {calcularPrecio()}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Recordá que este valor es estimativo y puede variar según
              necesidades específicas.
            </Typography>
            <Button
              variant="contained"
              onClick={() =>
                handleIWantTo({
                  nombre: 'Plan Personalizado',
                  beneficios: [
                    'Asesoramiento personalizado',
                    'Soporte técnico 24/7',
                    'Actualizaciones constantes',
                  ],
                  precio: calcularPrecio(),
                  descripcion: 'Plan adaptado a tus necesidades específicas.',
                  destacado: true,
                })
              }
              sx={{
                fontWeight: 'bold',
                color: theme.palette.background.default,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                },
              }}
            >
              Contactar para contratar
            </Button>
          </Box>
        )}
        <Stack direction="row" justifyContent="space-between" mt={4}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            Atrás
          </Button>
          {activeStep < steps.length - 1 && (
            <Button onClick={handleNext} variant="contained">
              Siguiente
            </Button>
          )}
        </Stack>
      </Box>
    </Paper>
  );
};

export default WizardPlanPersonalizado;
