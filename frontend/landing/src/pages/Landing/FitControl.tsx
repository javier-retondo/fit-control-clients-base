import Hero from './components/Hero';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import GimnasiosClientes from './components/Gyms';
import PlanesPrecios from './components/Planes';
import { useEmpresa } from '../../context/EmpresaContext';
import { useEffect } from 'react';

const LandingFitControl = () => {
  const { fitControl, setEmpresa } = useEmpresa();

  useEffect(() => {
    setEmpresa(null);
  }, [setEmpresa]);

  return (
    <>
      <Hero
        titulo={fitControl?.hero?.titulo ?? 'FitControl'}
        subtitulo={fitControl?.hero?.subtitulo ?? 'Gestioná tu gimnasio'}
        imagenes={fitControl?.hero?.imagenes ?? []}
        cta={
          fitControl?.hero?.cta ?? {
            label: 'Solicitá una demo',
            href: '/contacto',
          }
        }
        isFitcontrol={true}
        imagenDecorativa={
          fitControl?.hero?.imagenDecorativa ??
          '/img/landing/hero-decorative.png'
        }
        demo={false}
      />
      <Benefits beneficios={fitControl?.beneficios ?? []} />
      <GimnasiosClientes gimnasios={fitControl?.clientes ?? []} />
      <PlanesPrecios modo="fitcontrol" planes={fitControl?.planes ?? []} />
      <CallToAction
        titulo={
          fitControl?.cta?.titulo ?? 'Gestioná tu gimnasio con FitControl'
        }
        subtitulo={fitControl?.cta?.subtitulo ?? 'Solicitá una demo gratuita'}
        imagen={fitControl?.cta?.imagen ?? '/img/landing/cta.png'}
        fondo={fitControl?.cta?.fondo ?? '/img/landing/cta-bg.png'}
        imagenHover={
          fitControl?.cta?.imagenHover ?? '/img/landing/cta-hover.png'
        }
        beneficios_cta={fitControl?.beneficios_cta ?? []}
        cta={
          fitControl?.cta?.cta ?? {
            label: 'Solicitá una demo',
            href: '/contacto',
          }
        }
      />
    </>
  );
};

export default LandingFitControl;
