import { Button, type SxProps } from '@mui/material';

const PrimaryButton = ({
  children,
  onClick,
  disabled = false,
  isActive = false,
  size = 'medium',
  variant = 'contained',
  fullWidth = false,
  href,
  sx = {},
  type = 'button',
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isActive?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  fullWidth?: boolean;
  href?: string;
  sx?: SxProps;
  type?: 'button' | 'submit' | 'reset';
}) => {
  const buttonStyles: SxProps = !isActive
    ? {
        backgroundColor: 'transparent',
        color: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'text.primary',
          borderColor: 'primary.main',
          textDecoration: 'none',
          fontWeight: 'bold',
          transform: 'scale(1.05)',
        },
      }
    : {
        fontWeight: 'bold',
        backgroundColor: 'primary.main',
        color: 'background.default',
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'text.primary',
          borderColor: 'primary.main',
          textDecoration: 'none',
          fontWeight: 'bold',
          transform: 'scale(1.05)',
        },
      };
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      sx={{ ...buttonStyles, ...sx }}
      size={size}
      color={isActive ? 'secondary' : 'primary'}
      href={href}
      type={type}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
