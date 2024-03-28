import Divider from '../../components/Divider';
import MainContainer from '../../components/MainContainer';
import RankTitle from '@components/RankTitle';
import MyProfile from '../../components/MyProfile';
import RegionRankList from './RegionRankList';

export default function RegionPage() {
	return (
		<>
			<MainContainer>
				<div className="mt-8 flex w-full items-start justify-between text-black19">
					<div className="flex w-1/2 flex-col">
						<RankTitle />
						<MyProfile />
					</div>
				</div>
			</MainContainer>
			<Divider />
			<MainContainer>
				<RegionRankList />
			</MainContainer>
		</>
	);
}
