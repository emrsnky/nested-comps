import { createBrowserRouter } from "react-router-dom";

import { HomePage, UsersPage, RootLayout, UserDetailPage } from "./pages";
import { usersLoader } from "./pages/UsersPage";
import { userLoader } from "./pages/UserDetailPage";
import AlbumInfo, { fetchAlbumInfo } from "./pages/userInfo/AlbumInfo";
import PostDetails, { postLoader } from "./pages/userInfo/PostDetails";
import FavoritesPage from "./pages/FavoritesPage";

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
      {
        path: "users/:userId/albums/:albumId",
        element: <AlbumInfo />,
        loader: fetchAlbumInfo,
      },
      {
        path: "users/:userId/posts/:postId",
        element: <PostDetails />,
        loader: postLoader,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
