import { Box, Button, TextField, MenuItem, Stack, Alert } from '@mui/material';
import { useState, useEffect } from 'react';
import { useGeneral } from '../../context/GeneralContext';

const planes = ['Esencial', 'Pro', 'Max'];

const GymRegiterForm = () => {
  const { planSeleccionado } = useGeneral();
  const [form, setForm] = useState({
    cuit: '',
    razonSocial: '',
    nombreFantasia: '',
    email: '',
    telefono: '',
    plan: '',
    sedes: '',
    socios: '',
    aceptaTerminos: false,
  });
  const [errores, setErrores] = useState<string | null>(null);
  const [exito, setExito] = useState<boolean>(false);

  useEffect(() => {
    if (planSeleccionado) {
      setForm((prev) => ({ ...prev, plan: planSeleccionado.nombre }));
    }
  }, [planSeleccionado]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrores(null);

    if (!form.cuit || !form.email || !form.plan || !form.aceptaTerminos) {
      setErrores('Por favor completá todos los campos obligatorios.');
      return;
    }

    try {
      // TODO: implementar llamado a backend
      console.log('Formulario enviado', form);
      setExito(true);
    } catch (error) {
      setErrores('Ocurrió un error. Intentalo más tarde.: ' + error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      {errores && <Alert severity="error">{errores}</Alert>}
      {exito && (
        <Alert severity="success">
          Registro exitoso. Revisá tu correo para confirmar.
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="CUIT"
            name="cuit"
            value={form.cuit}
            onChange={handleChange}
            required
          />

          <TextField
            label="Razón social"
            name="razonSocial"
            value={form.razonSocial}
            onChange={handleChange}
            disabled
          />

          <TextField
            label="Nombre de fantasía"
            name="nombreFantasia"
            value={form.nombreFantasia}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextField
            label="Teléfono"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
          />

          <TextField
            select
            label="Plan"
            name="plan"
            value={form.plan}
            onChange={handleChange}
            required
          >
            {planes.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Cantidad de sedes (opcional)"
            name="sedes"
            type="number"
            value={form.sedes}
            onChange={handleChange}
          />

          <TextField
            label="Cantidad de socios (opcional)"
            name="socios"
            type="number"
            value={form.socios}
            onChange={handleChange}
          />

          <label style={{ color: 'white', marginLeft: 8 }}>
            <input
              type="checkbox"
              name="aceptaTerminos"
              checked={form.aceptaTerminos}
              onChange={handleChange}
              required
            />{' '}
            Acepto los términos y condiciones
          </label>

          <Button type="submit" variant="contained" size="large">
            Registrarme
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default GymRegiterForm;
