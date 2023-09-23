import { RouteObject } from 'react-router-dom';
import { AuthLayout } from '../Layouts/AuthLayout';
import { LoginPage } from '../pages/LoginPage';
import { RegPage } from '../pages/RegPage';

export const AUTH_ROUTES: RouteObject[] = [
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'reg',
        element: <RegPage />,
      },
    ],
  },
];
