import {
	getSchoolNames,
	getRegionNames,
	requestEmailAuthNumber,
	validateAuthNumber,
	userJoin,
	getUserInfo,
} from '@/api/auth';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useUserJoin = () => {
	return useMutation({
		mutationFn: (joinData) => userJoin(joinData),
	});
};

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

export const useGetUserInfo = ({ enabled = false }) => {
	return useQuery({
		queryKey: ['userInfo'],
		queryFn: getUserInfo,
		enabled: enabled,
	});
};
