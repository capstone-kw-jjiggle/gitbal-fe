import { client } from '@/api/client';

const SCHOOL_URL = {
	GET_SCHOOL_LIST: '/schoolRank/schoolList?page=',
	SEARCH_SCHOOL_LIST: '/schoolRank/search',
};

export const getSchoolList = async (page) => {
	const response = await client.get(SCHOOL_URL.GET_SCHOOL_LIST + `${page}`);
	return response;
};

export const searchSchoolList = async (keyword) => {};
