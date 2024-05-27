import { client } from '@/api/client';

const AUTH_URL = {
	JOIN: '/join',
	GET_SCHOOL_LIST: '/info/schoolNames',
	GET_REGION_LIST: '/info/regionNames',
};

export const userJoin = async (joinData) => {
	try {
		await client.post(AUTH_URL.JOIN, joinData);
	} catch (e) {
		return Promise.reject(e);
	}
};

export const getSchoolList = async () => {
	try {
		const response = await client.get(AUTH_URL.GET_SCHOOL_LIST);
		return response;
	} catch (e) {
		return Promise.reject(e);
	}
};

export const getRegionList = async () => {
	try {
		const response = await client.get(AUTH_URL.GET_REGION_LIST);
		return response;
	} catch (e) {
		return Promise.reject(e);
	}
};
