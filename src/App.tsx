import { RouterProvider } from 'react-router-dom';
import { router } from './routes/mainRouter';
import { Backdrop, ThemeProvider } from '@mui/material';
import { authRouter } from './routes/authRouter';
import { AuthProvider, useAuth } from './contexts/auth/auth.context';
import './styles.css';
import { theme } from './theme/theme';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppRouting />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export const AppRouting = () => {
  const { isAuth, isAuthChecked } = useAuth();

  if (!isAuthChecked) return <Backdrop open />;
  if (!isAuth) return <RouterProvider router={authRouter} />;
  else return <RouterProvider router={router} />;
};
