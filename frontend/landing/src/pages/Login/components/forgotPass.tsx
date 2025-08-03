import { Box, TextField, Typography } from '@mui/material';
import type { loginCases } from '..';
//import { useNavigate } from 'react-router-dom';
import { useGeneral } from '../../../context/GeneralContext';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

type ForgotPasswordProps = {
  form: {
    email: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLoginCase: (caseType: loginCases) => void;
};

const ForgotPasswordComp = ({
  form,
  handleChange,
  setLoginCase,
}: ForgotPasswordProps) => {
  //const navigate = useNavigate();
  const { setLoading } = useGeneral();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Recuperar Contraseña
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          label="Correo electrónico"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <PrimaryButton
          fullWidth
          type="submit"
          isActive={true}
          sx={{ mt: 2, py: 1 }}
        >
          Enviar Nueva Contraseña
        </PrimaryButton>
      </form>

      <Box mt={3} textAlign="center">
        <Typography variant="body2">
          <PrimaryButton variant="text" onClick={() => setLoginCase('login')}>
            Iniciar Sesión
          </PrimaryButton>
        </Typography>
      </Box>
    </>
  );
};

export default ForgotPasswordComp;
