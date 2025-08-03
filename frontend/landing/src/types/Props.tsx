import type { Plan, User } from './Entities';

export interface LoginContextProps {
  isLoggedIn: boolean;
  userInfo: User | null;
  userRole: 'administrador' | 'usuario' | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export interface GeneralContextProps {
  navbarText: string;
  setNavbarText: (text: string) => void;
  alert: (message: string, type: 'error' | 'success') => void;
  setLoading: (loading: boolean) => void;
  planSeleccionado: Plan | null;
  setPlanSeleccionado: (plan: Plan | null) => void;
}
