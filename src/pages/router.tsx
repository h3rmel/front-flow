import { createBrowserRouter } from 'react-router-dom';

import { HomePage, ErrorPage, AboutPage, PxRemPage } from '@/pages';

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
        ],
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
