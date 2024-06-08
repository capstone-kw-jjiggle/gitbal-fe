import { useQuery } from '@tanstack/react-query';
import { getSchoolList, getSchoolWinner, getUserSchoolInfo } from '@/api/school';

export const useGetSchoolList = (page, keyword) => {
	return useQuery({
		queryKey: ['schoolList', keyword, page],
		queryFn: () => getSchoolList(page, keyword),
		keepPreviousData: true,
	});
};

export const useGetSchoolWinner = () => {
	return useQuery({
		queryKey: ['schoolWinner'],
		queryFn: getSchoolWinner,
	});
};

export const useGetUserSchoolInfo = () => {
	return useQuery({
		queryKey: ['userSchool'],
		queryFn: getUserSchoolInfo,
	});
};
