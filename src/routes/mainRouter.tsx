import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layouts/Layout';
import { Main } from '../pages/_Main';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
];

export const router = createBrowserRouter(ROUTES);
