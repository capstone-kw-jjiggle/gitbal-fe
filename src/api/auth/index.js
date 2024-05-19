import { client } from '@/api/client';

const AUTH_URL = {
	JOIN: '/join',
};

export const userJoin = async (joinData) => {
	try {
		await client.post(AUTH_URL.JOIN, joinData);
	} catch (e) {
		return Promise.reject(e);
	}
};
