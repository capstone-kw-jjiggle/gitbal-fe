import LoginLayout from '../layout/LoginLayout';
import { routes } from '../constants/routes';
import LoginPage from '../pages/auth/LoginPage/LoginPage';
import SchoolSettingPage from '../pages/auth/SchoolSettingPage/SchoolSettingPage';
import RegionSettingPage from '../pages/auth/RegionSettingPage/RegionSettingPage';
import LoginCompletePage from '../pages/auth/LoginCompletePage/LoginCompletePage';

export const loginRoutes = {
	path: '/',
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
			path: routes.auth.loginCompletePage,
			element: <LoginCompletePage />,
		},
	],
};
