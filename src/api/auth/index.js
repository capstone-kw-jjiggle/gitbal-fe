import { client } from '@/api/client';

const AUTH_URL = {
	JOIN: '/join',
	GET_SCHOOL_LIST: '/info/schoolNames',
	GET_REGION_LIST: '/info/regionNames',
	POST_EMAIL_AUTH: '/univ/certificate',
	POST_EMAIL_VALIDATE: '/univ/validate',
};

export const userJoin = async (joinData) => {
	try {
		await client.post(AUTH_URL.JOIN, joinData);
	} catch (e) {
		return Promise.reject(e);
	}
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
