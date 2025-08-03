import { Box, CircularProgress, Typography } from '@mui/material';

const EmpresaLoading = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: 'background.default',
      }}
    >
      <CircularProgress size={60} thickness={5} color="primary" />
      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Cargando tu experiencia personalizada...
      </Typography>
    </Box>
  );
};

export default EmpresaLoading;
