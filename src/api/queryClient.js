import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // 창이 다시 포커스 될 때, 재요청을 시도할 것인지
			retry: true, // 요청 실패 시, 재요청을 시도할 것인지
			refetchInterval: 1200, // 재요청 간격
		},
	},
});
