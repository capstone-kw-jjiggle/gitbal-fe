import { Navigate } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import { routes } from "../constants/routes";
import MainPage from "../pages/MainPage";
import SchoolPage from "../pages/SchoolPage";
import RegionPage from "../pages/RegionPage";
import MyPage from "../pages/MyPage";

export const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Navigate replace to={routes.main} />,
    },
    {
      path: routes.main,
      element: <MainPage />,
    },
    {
      path: routes.school,
      element: <SchoolPage />,
    },
    {
      path: routes.region,
      element: <RegionPage />,
    },
    {
      path: routes.myPage,
      element: <MyPage />,
    },
  ],
};
