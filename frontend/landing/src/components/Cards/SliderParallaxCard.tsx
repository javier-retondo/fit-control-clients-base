import { Box, Paper, type SxProps, type Theme } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';

const SliderParallaxCard = ({
  theme,
  sx = {},
  children,
}: {
  theme: Theme;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}) => {
  return (
    <Box sx={{ px: 2 }}>
      <Parallax speed={-5}>
        <Paper
          elevation={5}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            backgroundColor: 'background.paper',
            my: '25px',
            color: 'text.primary',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: `0 8px 30px ${theme.palette.primary.main}`,
              transform: 'translateY(-6px)',
            },
            ...sx,
          }}
        >
          {children}
        </Paper>
      </Parallax>
    </Box>
  );
};

export default SliderParallaxCard;
