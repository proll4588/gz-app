import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from 'react';
import { AuthContextType } from '../auth/auth.context';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigateContext = createContext(null);
export const useNavigateContext = () => useContext(NavigateContext);

interface NavigateProvider extends PropsWithChildren {
  useAuth: () => AuthContextType;
}
export const NavigateProvider: FC<NavigateProvider> = ({
  children,
  useAuth,
}) => {
  const { isAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && location.pathname.indexOf('auth') === -1) {
      navigate('/auth/login');
    }

    if (isAuth && location.pathname.indexOf('auth') !== -1) {
      navigate('/');
    }
  }, [location, isAuth]);

  return (
    <NavigateContext.Provider value={null}>{children}</NavigateContext.Provider>
  );
};
