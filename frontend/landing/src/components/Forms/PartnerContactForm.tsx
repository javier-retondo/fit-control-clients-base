import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import { useState } from 'react';

const PartnerContactForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: enviar datos a la API del gimnasio (empresa)
    console.log('Formulario enviado:', form);
    setEnviado(true);
  };

  if (enviado) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          ¡Gracias por contactarte!
        </Typography>
        <Typography variant="body1">
          Pronto un representante del gimnasio se comunicará con vos para
          ayudarte a comenzar.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 500,
          width: '100%',
          backdropFilter: 'blur(5px)',
          bgcolor: 'rgba(0,0,0,0.6)',
        }}
      >
        <Typography variant="h5" gutterBottom color="white">
          ¿Querés ser parte de nuestro gimnasio?
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: 'white' }}>
          Completá tus datos y nos pondremos en contacto con vos.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              name="nombre"
              label="Nombre"
              value={form.nombre}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              name="apellido"
              label="Apellido"
              value={form.apellido}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              name="telefono"
              label="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              name="mensaje"
              label="Mensaje (opcional)"
              value={form.mensaje}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <Button type="submit" variant="contained" color="primary">
              Enviar solicitud
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default PartnerContactForm;
