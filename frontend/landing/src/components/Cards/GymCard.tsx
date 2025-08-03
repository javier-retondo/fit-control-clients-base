import { Box, Typography } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const GymCard = ({
  gym,
}: {
  gym: {
    nombre: string;
    zona: string;
    tiempoUso: string;
    imagen: string;
  };
}) => {
  return (
    <>
      <Box
        component="img"
        src={gym.imagen}
        alt={gym.nombre}
        sx={{
          width: '100%',
          height: 220,
          objectFit: 'cover',
        }}
      />
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">{gym.nombre}</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <VerifiedUserIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {gym.zona}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {gym.tiempoUso}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default GymCard;
