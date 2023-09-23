import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layouts/Layout';
import { Main } from '../pages/_Main';
import { AUTH_ROUTES } from './auth.routes';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      ...AUTH_ROUTES,
    ],
  },
];

export const router = createBrowserRouter(ROUTES);
