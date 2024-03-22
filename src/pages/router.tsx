import { createBrowserRouter } from 'react-router-dom';

import { HomePage, ErrorPage, AboutPage } from '@/pages';
import { PxRemPage, ColorsConverterPage } from '@/pages/tools';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'tools',
        children: [
          {
            path: 'px-rem',
            element: <PxRemPage />,
          },
          {
            path: 'colors-converter',
            element: <ColorsConverterPage />,
          },
        ],
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
