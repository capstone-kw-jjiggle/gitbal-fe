import { client } from '@/api/client';

const MAIN_URL = {
	GET_USER_LIST: '/mainPage/users',
	GET_WINNER: '/mainPage/firstRank',
};

export const getUserList = async (page, keyword) => {
	const response = await client.get(MAIN_URL.GET_USER_LIST, {
		params: { page, ...(keyword ? { searchedname: keyword } : {}) },
	});
	return response;
};

export const getWinner = async () => {
	const response = await client.get(MAIN_URL.GET_WINNER);
	return response;
};
