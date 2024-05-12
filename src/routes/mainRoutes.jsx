import { Navigate } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import { routes } from '../constants/routes';
import MainPage from '../pages/MainPage';
import SchoolPage from '../pages/SchoolPage';
import MyPage from '../pages/MyPage';
import AboutPage from '../pages/AboutPage';
import PrivacyPage from '../pages/TermsPage/PrivacyPage';
import TosPage from '../pages/TermsPage/TosPage';
import RegionPage from '../pages/RegionPage/RegionPage';

export const mainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <Navigate replace to={routes.main} />,
		},
		{
			path: routes.about,
			element: <AboutPage />,
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
		{
			path: routes.privacy,
			element: <PrivacyPage />,
		},
		{
			path: routes.tos,
			element: <TosPage />,
		},
	],
};
