import { Box, Typography, Stack, Modal } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const CallToAction = ({
  titulo,
  subtitulo,
  imagen,
  imagenHover,
  fondo,
  cta,
  beneficios_cta,
}: {
  titulo?: string;
  subtitulo?: string;
  imagen?: string;
  imagenHover?: string;
  fondo?: string;
  cta?: {
    label: string;
    href: string;
  };
  beneficios_cta?: string[];
}) => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleCtaClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (cta && cta.href) {
      navigate(cta.href);
    } else {
      console.warn('No se ha proporcionado un enlace para el CTA');
    }
  };

  return (
    <section id="cta">
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          px: 2,
          width: '99vw',
          textAlign: 'center',
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 0,
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Parallax speed={-5}>
            {imagen && (
              <Box
                component="img"
                src={hovered && imagenHover ? imagenHover : imagen}
                alt="Decoración"
                sx={{
                  width: 100,
                  mb: 3,
                  transition: 'all 0.3s ease-in-out',
                  transform: hovered ? 'scale(1.1) rotate(3deg)' : 'scale(1)',
                }}
              />
            )}

            <Typography variant="h4" gutterBottom color="white">
              {titulo}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mb: 4, color: 'text.secondary' }}
            >
              {subtitulo}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <PrimaryButton
                onClick={handleCtaClick}
                variant="contained"
                size="large"
                isActive={true}
              >
                {cta && cta.label}
              </PrimaryButton>

              {beneficios_cta && (
                <PrimaryButton
                  variant="outlined"
                  size="large"
                  onClick={() => setOpen(true)}
                >
                  Ver más beneficios
                </PrimaryButton>
              )}
            </Stack>
          </Parallax>
        </Box>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              p: 4,
              borderRadius: 2,
              width: '90%',
              maxWidth: 600,
              boxShadow: 24,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ mb: 2, textAlign: 'center', color: 'primary.main' }}
            >
              Beneficios de FitControl
            </Typography>
            <ul>
              {beneficios_cta &&
                beneficios_cta.map((item, i) => (
                  <li
                    style={{ listStyleType: 'none', cursor: 'default' }}
                    key={i}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        marginBottom: 1,
                        display: 'inline-block',
                        textAlign: 'left',
                        width: '100%',
                        lineHeight: 1.5,
                        fontSize: '0.9rem',
                        fontWeight: 400,
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                        },
                        '&:before': {
                          content: '"• "',
                          color: 'primary.main',
                          marginRight: 0.5,
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
            </ul>
            <PrimaryButton onClick={() => setOpen(false)} variant="contained">
              Cerrar
            </PrimaryButton>
          </Box>
        </Modal>
      </Box>
    </section>
  );
};

export default CallToAction;
