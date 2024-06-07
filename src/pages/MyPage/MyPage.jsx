import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainContainer from '@components/MainContainer';
import MyProfile from '@components/MyProfile';

import Divider from '@/pages/MyPage/components/LineDivider';
import Shortcut from '@/pages/MyPage/components/Shortcut';
import SettingInfo from '@/pages/MyPage/components/SettingInfo/SettingInfo';
import TitleInfo from '@/pages/MyPage/components/TitleInfo/TitleInfo';
import RankInfo from '@/pages/MyPage/components/RankInfo/RankInfo';

import { routes } from '@/constants/routes';

import useAuthStore from '@/stores/authStore';

const 버튼에따른컴포넌트 = {
	RANK: <RankInfo />,
	칭호: <TitleInfo />,
	설정: <SettingInfo />,
};

export default function MyPage() {
	const [현재선택된버튼, set현재선택된버튼] = useState('RANK');
	const navigate = useNavigate();
	const { isLoggedIn } = useAuthStore();

	useEffect(() => {
		if (!isLoggedIn) navigate(routes.auth.login);
	}, []);

	const handle버튼클릭 = (버튼이름) => {
		set현재선택된버튼(버튼이름);
	};

	return (
		<>
			<MainContainer>
				<div className="mb-14 mt-16 flex items-center justify-between">
					<MyProfile />
					<Shortcut />
				</div>
			</MainContainer>
			<Divider 현재선택된버튼={현재선택된버튼} onClick={handle버튼클릭} />
			<MainContainer>{버튼에따른컴포넌트[현재선택된버튼]}</MainContainer>
		</>
	);
}
