import Divider from '@/components/Divider';
import MainContainer from '@/components/MainContainer';
import RankTitle from '@/components/RankTitle';
import MyProfile from '@/components/MyProfile';
import RegionRankList from '@/pages/RegionPage/components/RegionRankList';

import { MyRegionCard, RegionWinnerCard } from '@components/Cards';
import level4 from '@/assets/images/regionLevel/regionLevel4.svg'; //임시

export default function RegionPage() {
	return (
		<>
			<MainContainer>
				<div className="mt-8 flex w-full items-start justify-between text-black19">
					<div className="flex w-1/2 flex-col">
						<RankTitle title={'지역 랭킹'} daysLeft={'100'} />
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
