import Divider from '@/components/Divider';
import MainContainer from '@/components/MainContainer';
import RankTitle from '@/components/RankTitle';
import MyProfile from '@/components/MyProfile';
import RegionRankList from '@/pages/RegionPage/components/RegionRankList';

import { MyRegionCard, RegionWinnerCard } from '@components/Cards';
import level4 from '@/assets/images/regionLevel/regionLevel4.svg'; //임시
import { useGetRegionList, useGetRegionWinner } from '@/api/region/query';

export default function RegionPage() {
	const { data: regionRankListData } = useGetRegionList();
	const regionRankList = regionRankListData ? regionRankListData.data.regionList : [];

	const { data: regionWinnerData } = useGetRegionWinner();
	const regionWinner = regionWinnerData?.data || {};

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
				{regionWinnerData && <RegionWinnerCard regionWinner={regionWinner} />}
			</MainContainer>
			<Divider />
			<MainContainer>{regionRankListData && <RegionRankList regionRankList={regionRankList} />}</MainContainer>
		</>
	);
}
