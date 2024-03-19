import { createBrowserRouter } from "react-router-dom";

import { Home, Error, About } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
