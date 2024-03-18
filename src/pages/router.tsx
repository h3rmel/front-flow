import { createBrowserRouter } from "react-router-dom";

import { Home, Error, About } from "@/pages/exports";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
