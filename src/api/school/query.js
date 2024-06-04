import { useQuery } from '@tanstack/react-query';
import { getSchoolList, getSchoolWinner } from '@/api/school';

export const useGetSchoolList = (page, keyword) => {
	return useQuery({
		queryKey: ['schoolList', keyword, page],
		queryFn: () => getSchoolList(page, keyword),
		keepPreviousData: true,
		onSuccess: (data) => {
			console.log(data);
			alert('성공');
		},
		onError: (e) => {
			console.error(e);
			alert('실패');
		},
	});
};

export const useGetSchoolWinner = () => {
	return useQuery({
		queryKey: ['schoolWinner'],
		queryFn: () => getSchoolWinner(),
		onSuccess: (data) => {
			console.log(data);
			alert('성공');
		},
		onError: (e) => {
			console.error(e);
			alert('실패');
		},
	});
};
