const navItems = {
	items: {
		id: 'nav',
		title: 'nav',
		type: 'group',
		children: [
			{
				id: 'about',
				title: 'About',
				type: 'item',
				url: '/about-page',
			},
			{
				id: 'schoolRank',
				title: 'School Rank',
				type: 'item',
				url: '/school-page',
			},
			{
				id: 'regionalRank',
				title: 'Regional Rank',
				type: 'item',
				url: '/region-page',
			},
		],
	},
};

export default navItems;
