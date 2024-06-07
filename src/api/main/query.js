import { useQuery } from '@tanstack/react-query';
import { getUserList, getWinner } from '@/api/main/index';

export const useGetUserList = (page, keyword) => {
	return useQuery({
		queryKey: ['userList', page, keyword],
		queryFn: () => getUserList(page, keyword),
		keepPreviousData: true,
	});
};

export const useGetWinner = () => {
	return useQuery({
		queryKey: ['winner'],
		queryFn: () => getWinner(),
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (e) => {
			console.error(e);
		},
	});
};
