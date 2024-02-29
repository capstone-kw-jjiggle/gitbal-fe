import LoginLayout from "../layout/LoginLayout";
import { routes } from "../constants/routes";
import LoginPage from "../pages/auth/LoginPage";
import SchoolSettingPage from "../pages/auth/SchoolSettingPage";
import RegionSettingPage from "../pages/auth/RegionSettingPage";
import ProfileSettingPage from "../pages/auth/ProfileSettingPage";

export const loginRoutes = {
  path: "/",
  element: <LoginLayout />,
  children: [
    {
      path: routes.auth.login,
      element: <LoginPage />,
    },
    {
      path: routes.auth.schoolSetting,
      element: <SchoolSettingPage />,
    },
    {
      path: routes.auth.regionSetting,
      element: <RegionSettingPage />,
    },
    {
      path: routes.auth.profileSetting,
      element: <ProfileSettingPage />,
    },
  ],
};
