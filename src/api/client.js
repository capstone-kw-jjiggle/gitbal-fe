import axios from 'axios';

const getAuthHeader = () => {
	const token = localStorage.getItem('accessToken');
	return token;
};

const axiosConfig = {
	baseURL: import.meta.env.VITE_API_URL,
	headers: { 'Content-Type': 'application/json' },
};

const authAxiosConfig = {
	baseURL: import.meta.env.VITE_API_URL,
	headers: { 'Content-Type': 'application/json' },
};

const client = axios.create(axiosConfig);
const authClient = axios.create(authAxiosConfig);

authClient.interceptors.request.use(
	async (config) => {
		const token = getAuthHeader();
		if (token) {
			config.headers.Authorization = token;
		} else {
			console.error('토큰이 없습니다. 로그인이 필요합니다.');
			window.location.replace('/');
		}
		return config;
	},
	(error) => {
		console.error(error);
	},
);

export { client, authClient };
