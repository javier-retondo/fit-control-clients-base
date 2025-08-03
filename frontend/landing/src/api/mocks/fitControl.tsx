import type { FitControlMock } from '../../types/Entities';

export const fitcontrolMock: FitControlMock = {
  fitcontrol: {
    planes: [
      {
        nombre: 'Esencial',
        precio: 'AR$ 18.000 / mes',
        descripcion: 'Para gimnasios que recién comienzan o con una sola sede',
        beneficios: [
          '1 sede',
          'Hasta 150 socios',
          'Clases y reservas online',
          'App para socios',
          'Soporte por email',
        ],
      },
      {
        nombre: 'Pro',
        precio: 'AR$ 29.000 / mes',
        descripcion: 'Para gimnasios en crecimiento con más de una sede',
        beneficios: [
          'Hasta 3 sedes',
          'Hasta 500 socios',
          'Gestión de pagos',
          'Reportes avanzados',
          'Soporte por WhatsApp',
        ],
        destacado: true,
      },
      {
        nombre: 'Max',
        precio: 'AR$ 42.000 / mes',
        descripcion: 'Para cadenas o gimnasios con operación completa',
        beneficios: [
          'Sedes ilimitadas',
          'Socios ilimitados',
          'Integraciones externas',
          'Módulo de staff completo',
          'Soporte prioritario',
        ],
      },
    ],
    cta: {
      titulo: 'Más de 1.200 socios ya entrenan mejor con FitControl',
      subtitulo:
        'Gestioná clases, pagos, rutinas y acceso con una sola herramienta.',
      imagen: '/img/flexo-tip.png',
      imagenHover: '/img/flexo-feliz.png',
      fondo: '/img/sede_4.webp',
      cta: { label: 'Empezar ahora', href: '/register' },
      mostrarBotonSecundario: true,
    },
    beneficios: [
      {
        titulo: 'Reservas Automatizadas',
        descripcion:
          'Tus socios reservan clases desde la app, sin intervención del staff. Todo fluye de forma automática.',
        img: '/img/flexo-check-bg.png',
      },
      {
        titulo: 'Control de Ingresos',
        descripcion:
          'Gestioná el acceso de tus socios con un sistema de control de ingresos eficiente. Olvídate de las colas y los problemas.',
        img: '/img/flexo-pc-bg.png',
      },
      {
        titulo: 'Planes Personalizados',
        descripcion:
          'Instructores asignan rutinas a cada socio y se visualizan desde cualquier dispositivo. Todo en un solo lugar.',
        img: '/img/flexo-ok-bg.png',
      },
    ],
    beneficios_cta: [
      'Configuración visual editable (logo, colores, textos)',
      'Diseño moderno y adaptable a tu marca',
      'Automatización de recordatorios y mensajes por WhatsApp/email',
      'Agenda digital para instructores y socios',
      'Sincronización con Google Calendar',
      'Panel de administración intuitivo',
      'Carga de clases y horarios recurrentes',
      'Análisis y reportes de asistencia y reservas',
      'Registro de ausencias y notificaciones automáticas',
      'Comunicación interna con instructores y socios',
      'Actualizaciones constantes sin costo adicional',
    ],
    clientes: [
      {
        nombre: 'Energym',
        zona: 'Palermo, CABA',
        tiempoUso: 'Usan FitControl desde 2023',
        imagen: '/img/sede_1.webp',
      },
      {
        nombre: 'PowerHouse',
        zona: 'Ramos Mejía, GBA Oeste',
        tiempoUso: 'Más de 18 meses usando FitControl',
        imagen: '/img/sede_2.webp',
      },
      {
        nombre: 'FitZone',
        zona: 'Córdoba Capital',
        tiempoUso: 'Confían en FitControl desde 2022',
        imagen: '/img/sede_3.webp',
      },
    ],
    hero: {
      titulo: 'Bienvenido a FitControl',
      subtitulo:
        'Controlá tu gimnasio con estilo. Automatizá reservas, pagos, rutinas y más.',
      imagenes: ['/img/hero_1.webp', '/img/hero_2.webp', '/img/hero_3.webp'],
      imagenDecorativa: '/img/flexo-pesa.png',
      cta: { label: 'Empezá ahora', href: '/register' },
    },
  },
};
