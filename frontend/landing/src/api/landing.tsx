import type { Empresa } from '../types/Entities';
import { empresaData } from './data/empresas';

export const getEmpresaLanding = async (): Promise<Empresa> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Fetching empresa data...', empresaData);
      resolve(empresaData);
    }, 300);
  });
};
