export const routes = {
	main: '/main-page',
	about: '/about-page',
	school: '/school-page',
	region: '/region-page',
	myPage: '/my-page',
	privacy: '/privacy-page',
	tos: '/tos-page',
	auth: {
		login: '/auth/login',
		schoolSetting: '/auth/school',
		regionSetting: '/auth/region/:univName',
		loginCompletePage: '/auth/complete',
		tokenPage: '/auth/token',
	},
};
