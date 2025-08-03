import { LoginProvider } from './LoginContext';
import { GeneralProvider } from './GeneralContext';

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => (
  <LoginProvider>
    <GeneralProvider>{children}</GeneralProvider>
  </LoginProvider>
);
