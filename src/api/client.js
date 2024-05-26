import axios from 'axios';

const axiosConfig = {
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: { 'Content-Type': 'application/json' },
};

const client = axios.create(axiosConfig);

export { client };
