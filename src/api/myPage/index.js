import { client } from '@/api/client';

const USER_URL = {
	GET_USER_SCORE: 'userRank/userscore',
	GET_USER_SCHOOL_RANK: 'userRank/school',
	GET_USER_REGION_RANK: 'userRank/region',
	GET_USER_RACE: 'userRank/race',
	GET_USER_LANGUAGE: 'userRank/lang',
};

export const getUserScore = async (userName) => {
	const response = await client.get(USER_URL.GET_USER_SCORE, { params: { username: userName } });
	return response;
};

export const getUserSchoolRank = async (userName) => {
	const response = await client.get(USER_URL.GET_USER_SCHOOL_RANK, { params: { username: userName } });
	return response;
};

export const getUserRegionRank = async (userName) => {
	const response = await client.get(USER_URL.GET_USER_REGION_RANK, { params: { username: userName } });
	return response;
};

export const getUserRace = async (userName) => {
	const response = await client.get(USER_URL.GET_USER_RACE, { params: { username: userName } });
	return response;
};

export const getUserLanguage = async (userName) => {
	const response = await client.get(USER_URL.GET_USER_LANGUAGE, { params: { username: userName } });
	return response;
};
