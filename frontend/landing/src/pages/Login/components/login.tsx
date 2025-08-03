import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import type { loginCases } from '..';
import { useEffect, useState } from 'react';
import { useLogin } from '../../../context/LoginContext';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useGeneral } from '../../../context/GeneralContext';
import { useNavigate } from 'react-router-dom';
import { useEmpresa } from '../../../context/EmpresaContext';

type LoginProps = {
  form: {
    email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLoginCase: (caseType: loginCases) => void;
};

const LoginComp = ({ form, handleChange, setLoginCase }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { logout } = useLogin();
  const { setLoading } = useGeneral();
  const { empresa } = useEmpresa();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Iniciar Sesión
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
        />
        <TextField
          margin="normal"
          fullWidth
          label="Contraseña"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, py: 1 }}
        >
          Iniciar Sesión
        </Button>
      </form>

      <Box mt={3} textAlign="center">
        <Typography variant="body2">
          ¿No tenés cuenta?{' '}
          <Button
            variant="text"
            onClick={() =>
              empresa
                ? navigate(`/gym/${empresa.slug}/register`)
                : navigate('/register')
            }
            sx={{
              textTransform: 'none',
              color: 'primary.main',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Registrate
          </Button>
        </Typography>
      </Box>
      <Box mt={3} textAlign="center">
        <Typography variant="body2">
          <Button
            variant="text"
            onClick={() => setLoginCase('forgotPassword')}
            sx={{
              textTransform: 'none',
              color: 'primary.main',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Olvidé mi Contraseña
          </Button>
        </Typography>
      </Box>
    </>
  );
};

export default LoginComp;
