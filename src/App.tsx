import { RouterProvider } from 'react-router-dom';
import { router } from './routes/mainRouter';
import { Backdrop } from '@mui/material';
import { authRouter } from './routes/authRouter';
import { AuthProvider, useAuth } from './contexts/auth/auth.context';

export const App = () => {
  return (
    <AuthProvider>
      <AppRouting />
    </AuthProvider>
  );
};

export const AppRouting = () => {
  const { isAuth, isAuthChecked } = useAuth();

  if (!isAuthChecked) return <Backdrop open />;
  if (!isAuth) return <RouterProvider router={authRouter} />;
  else return <RouterProvider router={router} />;
};
