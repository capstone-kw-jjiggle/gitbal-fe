import { client } from '@/api/client';

const SCHOOL_URL = {
	GET_SCHOOL_LIST: '/schoolRank/schoolList?page=',
};

export const getSchoolList = async (page) => {
	const response = await client.get(SCHOOL_URL.GET_SCHOOL_LIST + `${page}`);
	return response;
};
