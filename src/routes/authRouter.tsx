import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../Layouts/AuthLayout';
import { LoginPage } from '../pages/LoginPage';
import { RegPage } from '../pages/RegPage';

const AUTH_ROUTER: RouteObject[] = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
        index: true,
      },
      {
        path: 'reg',
        element: <RegPage />,
      },
    ],
  },
];

export const authRouter = createBrowserRouter(AUTH_ROUTER);
