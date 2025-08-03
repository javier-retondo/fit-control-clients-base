import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context';
import { ProtectedRoute } from './routes/ProtectedRoute';
import AdminDashboard from './pages/Admin/Dashboard';
import UserDashboard from './pages/User/Dashboard';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
import LandingFitControl from './pages/Landing/FitControl';
import LandingEmpresa from './pages/Landing/Empresa';
import LandingLayout from './layouts/LandingLayout';
import GymRegister from './pages/Register/FitControl';
import SocioContact from './pages/Register/Empresa';
import AuthPage from './pages/Login';
import ScrollToTop from './components/Others/ScrollToTop';
import PublicLayout from './layouts/PublicLayout';
import GymNotFound from './pages/NotFound/GymNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<LandingFitControl />} />
            <Route path="*" element={<LandingFitControl />} />
          </Route>

          <Route path="/gym/:slug" element={<LandingLayout />}>
            <Route index element={<LandingEmpresa />} />
            <Route path="*" element={<LandingEmpresa />} />
          </Route>

          <Route path="/" element={<PublicLayout />}>
            <Route path="register" element={<GymRegister />} />
            <Route path="login" element={<AuthPage />} />
            <Route path="gym-not-found" element={<GymNotFound />} />
          </Route>

          <Route path="/gym/:slug" element={<PublicLayout />}>
            <Route path="register" element={<SocioContact />} />
            <Route path="login" element={<AuthPage />} />
          </Route>

          <Route path="/user" element={<UserLayout />}>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute requiredRole="usuario">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute requiredRole="administrador">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
