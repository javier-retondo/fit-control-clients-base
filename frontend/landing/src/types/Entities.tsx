export type User = {
  id: number;
  nombre: string;
  email: string;
  rol: 'administrador' | 'usuario';
  pass_provisional: boolean;
  createdAt: Date;
};

export type Plan = {
  nombre: string;
  precio: string;
  descripcion: string;
  beneficios: string[];
  destacado?: boolean;
};

export type WorkoutClass = {
  nombre: string;
  descripcion: string;
  imagen: string;
};

export type Headquarter = {
  nombre: string;
  direccion: string;
  horarios: string;
  imagen: string;
};

export type CTAButton = {
  label: string;
  href: string;
};

export type CTAVisual = {
  titulo: string;
  subtitulo: string;
  imagen: string;
  imagenHover?: string;
  fondo?: string;
  cta: CTAButton;
  mostrarBotonSecundario?: boolean;
};

export type BeneficioVisual = {
  titulo: string;
  descripcion: string;
  img: string;
};

export type ClienteTestimonio = {
  nombre: string;
  zona: string;
  tiempoUso: string;
  imagen: string;
};

export type RedSocial = 'instagram' | 'facebook' | 'whatsapp';

export type EmpresaRedes = Partial<Record<RedSocial, string>>;

export type EmpresaColorConfig = {
  primary: string;
  secondary?: string;
};

export type Clase = {
  nombre: string;
  descripcion: string;
  imagen: string;
};

export type Sede = {
  nombre: string;
  direccion: string;
  horarios: string;
  imagen: string;
};

type LandingBase = {
  planes: Plan[];
  cta: CTAVisual;
  hero: Omit<CTAVisual, 'imagen'> & {
    imagenes: string[];
    imagenDecorativa?: string;
  };
};

export type FitControlLandingConfig = LandingBase & {
  beneficios: BeneficioVisual[];
  beneficios_cta: string[];
  clientes: ClienteTestimonio[];
};

export type EmpresaLanding = LandingBase & {
  clases: Clase[];
  sedes: Sede[];
};

export type Empresa = {
  id: number;
  slug: string;
  nombre: string;
  logo: string;
  demo?: boolean;
  colores: EmpresaColorConfig;
  redes?: EmpresaRedes;
  landing: EmpresaLanding;
};

export type EmpresaMap = {
  [slug: string]: Empresa;
};

export type FitControlMock = {
  fitcontrol: FitControlLandingConfig;
};
