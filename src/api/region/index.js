import { client } from '@/api/client';

const REGION_URL = {
	GET_REGION_LIST: 'regionRank/regionList',
	GET_REGION_WINNER: 'regionRank/firstregion',
};

export const getRegionList = async () => {
	const response = await client.get(REGION_URL.GET_REGION_LIST);
	return response;
};

export const getRegionWinner = async () => {
	const response = await client.get(REGION_URL.GET_REGION_WINNER);
	return response;
};
