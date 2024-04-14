import Divider from '@/pages/MyPage/Divider';
import MainContainer from '@components/MainContainer';
import MyProfile from '@components/MyProfile';
import Shortcut from '@/pages/MyPage/Shortcut';
import RankInfo from './_components/RankInfo/RankInfo';

export default function MyPage() {
	return (
		<>
			<MainContainer>
				<div className="mb-14 mt-16 flex items-center justify-between">
					<MyProfile />
					<Shortcut />
				</div>
			</MainContainer>
			<Divider />
			<MainContainer>
				<RankInfo />
			</MainContainer>
		</>
	);
}
