import { useQuery } from '@tanstack/react-query';
import { getSchoolList, getSchoolWinner } from '@/api/school';

export const useGetSchoolList = (page, keyword) => {
	return useQuery({
		queryKey: ['schoolList', keyword, page],
		queryFn: () => getSchoolList(page, keyword),
		keepPreviousData: true,
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (e) => {
			console.error(e);
		},
	});
};

export const useGetSchoolWinner = () => {
	return useQuery({
		queryKey: ['schoolWinner'],
		queryFn: () => getSchoolWinner(),
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (e) => {
			console.error(e);
		},
	});
};
