import { useQueries } from '@tanstack/react-query';
import { getUserLanguage, getUserRace, getUserSchoolRank, getUserRegionRank, getUserScore } from '.';

export const useGetUserMyPageData = (userName) => {
	return useQueries({
		queries: [
			{
				queryKey: ['userScore', userName],
				queryFn: () => getUserScore(userName),
				keepPreviousData: true,
				enabled: !!userName,
			},
			{
				queryKey: ['userSchoolRank', userName],
				queryFn: () => getUserSchoolRank(userName),
				keepPreviousData: true,
				enabled: !!userName,
			},
			{
				queryKey: ['userRegionRank', userName],
				queryFn: () => getUserRegionRank(userName),
				keepPreviousData: true,
				enabled: !!userName,
			},
			{
				queryKey: ['userRace', userName],
				queryFn: () => getUserRace(userName),
				keepPreviousData: true,
				enabled: !!userName,
			},
			{
				queryKey: ['userLanguage', userName],
				queryFn: () => getUserLanguage(userName),
				keepPreviousData: true,
				enabled: !!userName,
			},
		],
	});
};
