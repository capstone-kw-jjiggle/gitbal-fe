import { authClient, client } from '@/api/client';

const AUTH_URL = {
	JOIN: '/auth/join',
	GET_SCHOOL_LIST: '/info/schoolNames',
	GET_REGION_LIST: '/info/regionNames',
	POST_EMAIL_AUTH: '/univ/certificate',
	POST_EMAIL_VALIDATE: '/univ/validate',
};

export const userJoin = async (joinData) => {
	const response = await authClient.post(AUTH_URL.JOIN, joinData);
	return response;
};

export const getSchoolNames = async () => {
	const response = await client.get(AUTH_URL.GET_SCHOOL_LIST);
	return response;
};

export const getRegionNames = async () => {
	const response = await client.get(AUTH_URL.GET_REGION_LIST);
	return response;
};

export const requestEmailAuthNumber = async (univData) => {
	const response = await client.post(AUTH_URL.POST_EMAIL_AUTH, univData);
	return response;
};

export const validateAuthNumber = async (authNumber) => {
	const response = await client.post(AUTH_URL.POST_EMAIL_VALIDATE, authNumber);
	return response;
};
