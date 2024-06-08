import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { routes } from '@/constants/routes';
import useAuthStore from '@/stores/authStore';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function TokenPage() {
	const { login } = useAuthStore();
	const query = useQuery();
	const navigate = useNavigate();

	useEffect(() => {
		const accessToken = query.get('accessToken');
		const isRegistered = query.get('isRegistered');

		if (accessToken) {
			localStorage.setItem('accessToken', accessToken);
			login();
			if (isRegistered) navigate('/', { replace: true });
			else navigate(routes.auth.schoolSetting);
		}
	}, []);

	return (
		<div>
			<p>토큰 가로채기</p>
		</div>
	);
}
