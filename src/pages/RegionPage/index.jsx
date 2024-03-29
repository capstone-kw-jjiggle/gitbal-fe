import Divider from '../../components/Divider';
import MainContainer from '../../components/MainContainer';
import RankTitle from '@components/RankTitle';
import MyProfile from '../../components/MyProfile';
import RegionRankList from './RegionRankList';
import { MyRegionCard, RegionWinnerCard } from '@components/Cards';

import level4 from './../../assets/images/regionLevel/regionLevel4.svg'; //임시

export default function RegionPage() {
	return (
		<>
			<MainContainer>
				<div className="mt-8 flex w-full items-start justify-between text-black19">
					<div className="flex w-1/2 flex-col">
						<RankTitle />
						<MyProfile />
					</div>
					<MyRegionCard imgSrc={level4} />
				</div>
				<RegionWinnerCard />
			</MainContainer>
			<Divider />
			<MainContainer>
				<RegionRankList />
			</MainContainer>
		</>
	);
}
