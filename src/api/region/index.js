import { authClient, client } from '@/api/client';

const REGION_URL = {
	GET_REGION_LIST: 'regionRank/regionList',
	GET_REGION_WINNER: 'regionRank/firstregion',
	GET_USER_REGION: 'regionRank/myRegion',
};

export const getRegionList = async () => {
	const response = await client.get(REGION_URL.GET_REGION_LIST);
	return response;
};

export const getRegionWinner = async () => {
	const response = await client.get(REGION_URL.GET_REGION_WINNER);
	return response;
};

export const getUserRegionInfo = async () => {
	const response = await authClient.get(REGION_URL.GET_USER_REGION);
	return response;
};
