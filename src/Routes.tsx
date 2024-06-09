import { createBrowserRouter } from "react-router-dom";

import { HomePage, UsersPage, RootLayout, UserDetailPage } from "./pages";
import { usersLoader } from "./pages/UsersPage";
import { userLoader } from "./pages/UserDetailPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: "users/:userId",
        element: <UserDetailPage />,
        loader: userLoader,
        
         
        
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
