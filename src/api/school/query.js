import { useQuery } from '@tanstack/react-query';
import { getSchoolList } from '@/api/school';

export const useGetSchoolList = (page) => {
	return useQuery({ queryKey: ['schoolList', page], queryFn: () => getSchoolList(page), keepPreviousData: true });
};
