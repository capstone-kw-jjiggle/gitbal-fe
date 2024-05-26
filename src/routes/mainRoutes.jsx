import { Navigate } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import { routes } from '../constants/routes';

import AboutPage from '@/pages/AboutPage/AboutPage';
import PrivacyPage from '@/pages/TermsPage/PrivacyPage/PrivacyPage';
import TosPage from '@/pages/TermsPage/TosPage/TosPage';
import RegionPage from '@/pages/RegionPage/RegionPage';
import SchoolPage from '@/pages/SchoolPage/SchoolPage';
import MainPage from '@/pages/MainPage/MainPage';
import MyPage from '@/pages/MyPage/MyPage';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';

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
		{
			path: routes.loadingPage,
			element: <LoadingPage />,
		},
	],
};
