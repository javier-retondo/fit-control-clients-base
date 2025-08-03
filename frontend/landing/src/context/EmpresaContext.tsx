import { createContext, useContext, useState } from 'react';
import { type FitControlLandingConfig, type Empresa } from '../types/Entities';

const EmpresaContext = createContext<{
  empresa: Empresa | null;
  setEmpresa: (empresa: Empresa | null) => void;
  fitControl: FitControlLandingConfig | null;
  setFitControl: (fitControl: FitControlLandingConfig | null) => void;
  isReady: boolean;
  setIsReady: (isReady: boolean) => void;
}>({
  empresa: null,
  setEmpresa: () => {},
  fitControl: null,
  setFitControl: () => {},
  isReady: false,
  setIsReady: () => {},
});

export const EmpresaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [fitControl, setFitControl] = useState<FitControlLandingConfig | null>(
    null,
  );
  const [isReady, setIsReady] = useState(false);

  return (
    <EmpresaContext.Provider
      value={{
        empresa,
        setEmpresa,
        isReady,
        setIsReady,
        fitControl,
        setFitControl,
      }}
    >
      {children}
    </EmpresaContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEmpresa = () => useContext(EmpresaContext);
