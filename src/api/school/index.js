import { client } from '@/api/client';

const SCHOOL_URL = {
	GET_SCHOOL_LIST: '/schoolRank/schoolList',
	GET_SCHOOL_WINNER: '/schoolRank/firstSchool',
};

export const getSchoolList = async (page, keyword) => {
	const response = await client.get(SCHOOL_URL.GET_SCHOOL_LIST, {
		params: { page, ...(keyword ? { searchedSchoolName: keyword } : {}) },
	});
	return response;
};

export const getSchoolWinner = async () => {
	const response = await client.get(SCHOOL_URL.GET_SCHOOL_WINNER);
	return response;
};
