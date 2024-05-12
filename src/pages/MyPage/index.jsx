import Divider from '@/pages/MyPage/_components/Divider';
import MainContainer from '@components/MainContainer';
import MyProfile from '@components/MyProfile';
import Shortcut from '@/pages/MyPage/_components/Shortcut';
import RankInfo from '@/pages/MyPage/_components/RankInfo';
import { useState } from 'react';
import SettingInfo from '@/pages/MyPage/_components/SettingInfo';
import TitleInfo from '@/pages/MyPage//_components/TitleInfo';

const 버튼에따른컴포넌트 = {
	RANK: <RankInfo />,
	칭호: <TitleInfo />,
	설정: <SettingInfo />,
};

export default function MyPage() {
	const [현재선택된버튼, set현재선택된버튼] = useState('RANK');

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
