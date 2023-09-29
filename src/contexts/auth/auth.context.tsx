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

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

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
  const { isLoading, login, reg } = useLogReg();
  const [isAuth, setIsAuth] = useState(true);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const checkAuth = async () => {
    const token = authToken.get();
    if (token) {
      // fetch to check token
      // if fetch => true then setIsAuth(true)
    }
    await sleep(2000);
    setIsAuthChecked(true);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, isAuthChecked, login, reg, isLoadingAuth: isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useLogReg = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = (data: AuthData) => {
    setIsLoading(true);
    // fetch to login
    // authToken.set(fetchData)
    setIsLoading(false);
  };
  const reg = (data: AuthData) => {
    setIsLoading(true);
    // fetch to reg
    // authToken.set(fetchData)
    setIsLoading(false);
  };

  return { login, reg, isLoading };
};
