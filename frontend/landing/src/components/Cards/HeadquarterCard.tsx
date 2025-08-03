import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { Headquarter } from '../../types/Entities';

const HeadquarterCard = ({ headquarter }: { headquarter: Headquarter }) => {
  return (
    <>
      <Box
        component="img"
        src={headquarter.imagen}
        alt={headquarter.nombre}
        sx={{
          width: '100%',
          height: 220,
          objectFit: 'cover',
        }}
      />
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">{headquarter.nombre}</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {headquarter.direccion}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'start', mt: 1 }}>
          <AccessTimeIcon sx={{ mr: 1, mt: 0.5, color: 'primary.main' }} />
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              whiteSpace: 'pre-line',
            }}
          >
            {headquarter.horarios}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeadquarterCard;
