import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginComp from './components/login';
import ForgotPasswordComp from './components/forgotPass';
import ChangePassword from './components/changePassword';
import { useEmpresa } from '../../context/EmpresaContext';

export type loginCases = 'login' | 'forgotPassword' | 'changePassword';

export default function AuthPage() {
  const [loginCase, setLoginCase] = useState<loginCases>('login');

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { empresa } = useEmpresa();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const renderForm = () => {
    switch (loginCase) {
      case 'login':
        return (
          <LoginComp
            form={form}
            handleChange={handleChange}
            setLoginCase={setLoginCase}
          />
        );
      case 'forgotPassword':
        return (
          <ForgotPasswordComp
            form={form}
            handleChange={handleChange}
            setLoginCase={setLoginCase}
          />
        );
      case 'changePassword':
        return <ChangePassword setLoginCase={setLoginCase} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ minHeight: '93vh', backgroundColor: 'background.default' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          textAlign: 'center',
          color: 'white',
          px: 2,
          backgroundImage: `url(${
            empresa?.landing?.hero?.imagenes?.[0] || '/img/hero_1.webp'
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: 'theme.palette.background.paper',
            }}
          >
            {renderForm()}
            <Box mt={3} textAlign="center">
              <Typography variant="body2">
                <Button
                  variant="text"
                  onClick={() => navigate(-1)}
                  sx={{
                    textTransform: 'none',
                    color: 'primary.main',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  <ArrowBack sx={{ mr: 1 }} />
                  Volver
                </Button>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
