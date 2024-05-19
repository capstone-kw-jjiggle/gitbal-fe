import { client } from '@/api/client';

const USER_URL = {
	USER_INFO: '/userInfo/',
};

export const getUserInfo = async (userName) => {
	try {
		const response = await client.get(USER_URL.USER_INFO + `${userName}`);
		return response;
	} catch (e) {
		return Promise.reject(e);
	}
};
