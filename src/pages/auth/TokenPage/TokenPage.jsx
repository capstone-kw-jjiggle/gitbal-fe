import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../../constants/routes';
import { useEffect } from 'react';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function TokenPage() {
	const query = useQuery();
	const navigate = useNavigate();

	useEffect(() => {
		const accessToken = query.get('accessToken');
		const isRegistered = query.get('isRegistered');

		if (accessToken) {
			localStorage.setItem('accessToken', accessToken);

			if (isRegistered) navigate('/', { replace: true });

			navigate(routes.auth.schoolSetting);
		}
	}, [query, navigate]);

	return (
		<div>
			<p>토큰 가로채기</p>
		</div>
	);
}
