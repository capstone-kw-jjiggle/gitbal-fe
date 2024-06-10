import { useQuery } from '@tanstack/react-query';
import { getRegionList, getRegionWinner, getUserRegionInfo } from '@/api/region';

export const useGetRegionList = () => {
	return useQuery({
		queryKey: ['regionList'],
		queryFn: getRegionList,
	});
};

export const useGetRegionWinner = () => {
	return useQuery({
		queryKey: ['regionWinner'],
		queryFn: getRegionWinner,
	});
};

export const useGetUserRegionInfo = ({ enabled = false }) => {
	return useQuery({
		queryKey: ['userRegion'],
		queryFn: getUserRegionInfo,
		enabled: enabled,
	});
};
