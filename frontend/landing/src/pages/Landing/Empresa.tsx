import Hero from './components/Hero';
import Headquarters from './components/Headquarters';
import CallToAction from './components/CallToAction';
import PlanesPrecios from './components/Planes';
import { useEmpresa } from '../../context/EmpresaContext';
import Featured from './components/Featured';

const LandingEmpresa = () => {
  const { empresa } = useEmpresa();

  return (
    <>
      <Hero
        titulo={empresa?.landing.hero?.titulo}
        subtitulo={empresa?.landing.hero?.subtitulo}
        imagenes={empresa?.landing.hero?.imagenes}
        cta={empresa?.landing.hero?.cta}
        isFitcontrol={false}
        imagenDecorativa={empresa?.landing.hero?.imagenDecorativa}
        demo={empresa?.demo}
      />
      <Featured clases={empresa?.landing.clases ?? []} />
      <Headquarters headquarters={empresa?.landing.sedes ?? []} />
      <PlanesPrecios
        modo="empresa"
        maxVisible={2}
        planes={empresa?.landing.planes ?? []}
      />
      <CallToAction
        titulo={empresa?.landing.cta?.titulo}
        subtitulo={empresa?.landing.cta?.subtitulo}
        imagen={empresa?.landing.cta?.imagen}
        fondo={empresa?.landing.cta?.fondo}
        imagenHover={empresa?.landing.cta?.imagenHover}
        cta={empresa?.landing.cta?.cta}
      />
    </>
  );
};

export default LandingEmpresa;
