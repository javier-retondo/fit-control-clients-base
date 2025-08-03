import type { Empresa, FitControlLandingConfig } from '../types/Entities';
import { empresasMock } from './mocks/empresas';
import { fitcontrolMock } from './mocks/fitControl';

export const getFitControlLanding =
  async (): Promise<FitControlLandingConfig> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fitcontrolMock.fitcontrol);
      }, 300);
    });
  };

export const getEmpresaLanding = async (slug: string): Promise<Empresa> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(empresasMock[slug as keyof typeof empresasMock]);
    }, 300);
  });
};
