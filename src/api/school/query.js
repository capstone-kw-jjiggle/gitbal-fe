import { useQuery } from '@tanstack/react-query';
import { getSchoolList } from '@/api/school';

export const useSchoolList = (page) => {
	return useQuery(['schoolList', page], () => getSchoolList(page), {
		keepPreviousData: true,
	});
};
