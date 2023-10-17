import { RouterProvider } from 'react-router-dom';
import { router } from './routes/mainRouter';
import { Backdrop } from '@mui/material';
import { authRouter } from './routes/authRouter';
import { AuthProvider, useAuth } from './contexts/auth/auth.context';
import { useEffect } from 'react';

export const App = () => {
  return (
    <AuthProvider>
      <AppRouting />
    </AuthProvider>
  );
};

export const AppRouting = () => {
  const { isAuth, isAuthChecked } = useAuth();

  useEffect(() => {
    console.log('isAuth >> ', isAuth);
  }, [isAuth]);

  if (!isAuthChecked) return <Backdrop open />;
  if (!isAuth) return <RouterProvider router={authRouter} />;
  else return <RouterProvider router={router} />;
};
