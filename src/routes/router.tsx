import { createHashRouter } from "react-router-dom";
import NotFoundPage from "../views/404/NotFoundPage";
import PlayListPage from "../views/play_list";
import DefaultLayout from "../layout/DefaultLayout";
import HomePage from "../views/home";
import FormPlaylistPage from "../views/play_list/form";

export interface IRouter {
  path: string;
  name: string;
  authentMenuName: string;
  exact: boolean;
  component: React.FC;
}

export const routers = createHashRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/play-list",
        element: <PlayListPage />,
        index: true,
      },
      {
        path: "/play-list/:id",
        element: <PlayListPage />,
        index: true,
      },
      {
        path: "/play-list/manage",
        element: <FormPlaylistPage />,
        index: true,
      },
      {
        path: "/play-list/manage/:id",
        element: <FormPlaylistPage />,
        index: true,
      },
    ],
  },
]);
