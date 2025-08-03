import type { EmpresaMap } from '../../types/Entities';

export const empresasMock: EmpresaMap = {
  'demo-gymx': {
    id: 1,
    slug: 'demo-gymx',
    nombre: 'GymX Demo',
    logo: '/img/logoX.png',
    demo: true,
    colores: {
      primary: '#FF5722',
      secondary: '#FFC107',
    },
    redes: {
      instagram: 'https://instagram.com/gymxdemo',
      facebook: 'https://facebook.com/gymxdemo',
      whatsapp: 'https://wa.me/5493512345678',
    },
    landing: {
      hero: {
        titulo: 'Bienvenido a GymX Demo',
        subtitulo:
          'Entrená con los mejores instructores y reservá tus clases online',
        imagenes: ['/img/sede_5.webp', '/img/sede_4.webp', '/img/sede_2.webp'],
        imagenDecorativa: '/img/boy-pesa.png',
        cta: {
          label: 'Acceso Socios',
          href: 'login',
        },
      },
      clases: [
        {
          nombre: 'Funcional',
          descripcion: 'Entrenamiento de alta intensidad',
          imagen: '/img/funcional.webp',
        },
        {
          nombre: 'Yoga',
          descripcion: 'Equilibrio cuerpo y mente',
          imagen: '/img/yoga.webp',
        },
        {
          nombre: 'CrossFit',
          descripcion: 'Entrenamiento funcional y variado',
          imagen: '/img/crossfit.webp',
        },
        {
          nombre: 'Zumba',
          descripcion: 'Bailá y entrená al mismo tiempo',
          imagen: '/img/zumba.webp',
        },
      ],
      sedes: [
        {
          nombre: 'Sede Central',
          direccion: 'Av. Principal 1234, CABA',
          horarios: 'Lunes a Viernes de 7:00 a 22:00\nSábados de 9:00 a 18:00',
          imagen: '/img/sede_1.webp',
        },
        {
          nombre: 'Sede Norte',
          direccion: 'Ruta Panamericana km 45, Pilar',
          horarios: 'Lunes a Viernes de 8:00 a 21:00\nSábados de 9:00 a 14:00',
          imagen: '/img/sede_2.webp',
        },
        {
          nombre: 'Sede Oeste',
          direccion: 'Av. Rivadavia 9800, Ramos Mejía',
          horarios:
            'Lunes a Viernes de 6:30 a 22:30\nDomingos de 10:00 a 16:00',
          imagen: '/img/sede_3.webp',
        },
      ],
      cta: {
        titulo: '¿Ya sos socio?',
        subtitulo: 'Ingresá al sistema y reservá tus próximas clases',
        imagen: '/img/boy-tip.png',
        imagenHover: '/img/boy-feliz.png',
        fondo: '/img/sede_4.webp',
        cta: {
          label: 'Registrate ahora',
          href: '/gym/demo-gymx/register',
        },
      },
      planes: [
        {
          nombre: 'Plan Mensual',
          precio: 'AR$ 8.000',
          descripcion: 'Acceso completo por 30 días.',
          beneficios: ['Clases ilimitadas', 'Acceso a todas las sedes'],
          destacado: false,
        },
        {
          nombre: 'Plan Anual',
          precio: 'AR$ 80.000',
          descripcion: '12 meses al precio de 10.',
          beneficios: ['Incluye consulta nutricional', '2 meses de regalo'],
          destacado: true,
        },
        {
          nombre: 'Plan Premium',
          precio: 'AR$ 110.000',
          descripcion: 'Incluye rutinas personalizadas y coaching mensual.',
          beneficios: ['Coach dedicado', 'Seguimiento por app'],
          destacado: false,
        },
      ],
    },
  },
};
