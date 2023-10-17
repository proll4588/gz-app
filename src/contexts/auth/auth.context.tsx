import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { authToken } from '../../libs/token';
import { AuthData } from '../../types/AuthData.interface';
import { LoginInformation } from '../../types/LoginInformation.type';
import { authLogin, authSignUp } from '../../api/auth/fetch';
import { useNavigate } from 'react-router-dom';

export interface AuthContextType {
  isAuth: boolean;
  isAuthChecked: boolean;
  login: (data: LoginInformation) => void;
  reg: (data: LoginInformation) => void;
  isLoadingAuth: boolean;
}
const AUTH_CONTEXT_INIT: AuthContextType = {
  isAuth: false,
  isAuthChecked: false,
  login: () => {},
  reg: () => {},
  isLoadingAuth: false,
};
const AuthContext = createContext<AuthContextType>(AUTH_CONTEXT_INIT);
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const checkAuth = async () => {
    const token = await authToken.get();
    if (token) setIsAuth(true);
    setIsAuthChecked(true);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const { isLoading, login, reg } = useLogReg(checkAuth);
  return (
    <AuthContext.Provider
      value={{ isAuth, isAuthChecked, login, reg, isLoadingAuth: isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useLogReg = (callBack?: () => void) => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (authData: AuthData) => {
    setIsLoading(true);
    const { data: fetchData, status } = await authLogin({
      email: authData.login,
      password: authData.password,
    });
    if (status === 200) {
      authToken.set(fetchData.tokens);
      callBack && callBack();
    }
    setIsLoading(false);
  };

  const reg = async (authData: AuthData) => {
    setIsLoading(true);
    const { data: fetchData, status } = await authSignUp({
      email: authData.login,
      password: authData.password,
    });
    if (status === 200) {
      authToken.set(fetchData.tokens);
      callBack && callBack();
    }
    setIsLoading(false);
  };

  return { login, reg, isLoading };
};
