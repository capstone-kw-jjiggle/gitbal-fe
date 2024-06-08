import Divider from '@/components/Divider';
import MainContainer from '@/components/MainContainer';
import RankTitle from '@/components/RankTitle';
import MyProfile from '@/components/MyProfile';
import RegionRankList from '@/pages/RegionPage/components/RegionRankList';

import { MyRegionCard, RegionWinnerCard } from '@components/Cards';
import level4 from '@/assets/images/regionLevel/regionLevel4.svg'; //임시
import { useGetRegionList, useGetRegionWinner } from '@/api/region/query';
import useAuthStore from '@/stores/authStore';
import { useGetUserInfo } from '@/api/auth/query';

export default function RegionPage() {
	const { isLoggedIn } = useAuthStore();

	const { data: regionRankListData } = useGetRegionList();
	const regionRankList = regionRankListData ? regionRankListData.data.regionList : [];

	const { data: regionWinnerData } = useGetRegionWinner();
	const regionWinner = regionWinnerData?.data || {};

	const { data: userInfoData } = useGetUserInfo();
	const userInfo = userInfoData?.data || {};

	return (
		<>
			<MainContainer>
				<div className="mt-8 flex w-full items-start justify-between text-black19">
					{isLoggedIn ? (
						<>
							<div className="flex w-1/2 flex-col">
								<RankTitle title={'지역 랭킹'} daysLeft={'100'} />
								{userInfoData && <MyProfile userInfo={userInfo} />}
							</div>
							<MyRegionCard imgSrc={level4} />
						</>
					) : (
						<div>로그인해주세요</div>
					)}
				</div>
				{regionWinnerData && <RegionWinnerCard regionWinner={regionWinner} />}
			</MainContainer>
			<Divider />
			<MainContainer>{regionRankListData && <RegionRankList regionRankList={regionRankList} />}</MainContainer>
		</>
	);
}
