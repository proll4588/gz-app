import { FC, PropsWithChildren } from 'react';
import { AuthProvider, useAuth } from '../contexts/auth/auth.context';
import { NavigateProvider } from '../contexts/navigate/navigate.context';

interface ContextLayoutProps extends PropsWithChildren {}
export const ContextLayout: FC<ContextLayoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <NavigateProvider useAuth={useAuth}>{children}</NavigateProvider>
    </AuthProvider>
  );
};
