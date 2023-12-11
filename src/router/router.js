import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { GamesListPage } from "../pages/GamesListPage";
import { GamePage } from "../pages/GamePage";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <GamesListPage />,
          },
          {
            path: "/games-list",
            element: <GamesListPage />,
          },
          {
            path: "/games/:code",
            element: <GamePage />,
          },
        ],
      },
    ],
  },
]);
