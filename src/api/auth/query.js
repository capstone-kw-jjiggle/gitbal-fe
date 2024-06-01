import { getSchoolNames, getRegionNames, requestEmailAuthNumber, validateAuthNumber } from '@/api/auth/index';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetSchoolNames = () => {
	return useQuery({ queryKey: ['schoolNames'], queryFn: getSchoolNames });
};

export const useGetRegionNames = () => {
	return useQuery({ queryKey: ['regionNames'], queryFn: getRegionNames });
};

export const useRequestAuthNumber = () => {
	return useMutation({
		mutationFn: (univData) => requestEmailAuthNumber(univData),
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

export const useValidateAuthNumber = () => {
	return useMutation({
		mutationFn: (authNumber) => validateAuthNumber(authNumber),
	});
};
