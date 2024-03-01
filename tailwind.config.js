/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1368E8', //메인블루컬러
				secondary: '#FF8A00', //포인트주황
				black19: '#191919',
				greyBD: '#bdbdbd',
				grey69: '#696969',
				greyD9: '#d9d9d9',
			},
			// fontSize: {
			//   '15px': '15px',
			// },
		},
	},
	plugins: [],
};
