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

import { useGetUserInfo } from '@/api/auth/query';
import { useGetUserMyPageData } from '@/api/myPage/query';

import useAuthStore from '@/stores/authStore';
import { useFunnel } from '@/hooks/useFunnel';

const menus = ['RANK', '칭호', '설정'];

export default function MyPage() {
	const navigate = useNavigate();
	const { isLoggedIn } = useAuthStore();
	const { Funnel, Menu, setMenu, currentMenu } = useFunnel(menus[0]);

	useEffect(() => {
		if (isLoggedIn !== true) navigate(routes.auth.login);
	}, []);

	const { data: userInfoData } = useGetUserInfo({ enabled: isLoggedIn });
	const userInfo = userInfoData?.data || {};
	const userName = userInfo?.userName || '';
	const imageURL = userInfo?.imgUrl || '';

	const userMyPageData = useGetUserMyPageData(userName);

	const [userScoreQuery, userSchoolRankQuery, userRegionRankQuery, userRaceQuery, userLanguageQuery] = userMyPageData;

	const userScore = userScoreQuery.data ? userScoreQuery.data.data.userScore : 0;
	const userSchoolRankArray = userSchoolRankQuery.data ? userSchoolRankQuery.data.data.schoolRankDtoList : [];
	const userRegionRankArray = userRegionRankQuery.data ? userRegionRankQuery.data.data.regionRankDtoList : [];
	const userRace = userRaceQuery.data ? userRaceQuery.data.data : [];
	const userLanguage = userLanguageQuery.data ? userLanguageQuery.data.data : '';

	const userRankInfo = { userScore, userSchoolRankArray, userRegionRankArray, userRace, userLanguage };

	// const isLoading = userMyPageData.some((query) => query.isLoading);
	const isPending = userMyPageData.some((query) => query.isPending);
	const isError = userMyPageData.some((query) => query.isError);

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>에러가 발생했습니다</div>;
	}

	const handleButtonClick = (menu) => {
		setMenu(menu);
	};

	return (
		<>
			<MainContainer>
				<div className="mb-14 mt-16 flex items-center justify-between">
					{userInfoData && <MyProfile userInfo={userInfo} />}
					<Shortcut githubID={userName} />
				</div>
			</MainContainer>
			<Divider currentMenu={currentMenu} onClick={handleButtonClick} menus={menus} />
			<MainContainer>
				{
					<Funnel>
						<Menu name={'RANK'}>
							<RankInfo userRankInfo={userRankInfo} githubID={userName} imageURL={imageURL} />
						</Menu>
						<Menu name={'칭호'}>
							<TitleInfo />
						</Menu>
						<Menu name={'설정'}>
							<SettingInfo />
						</Menu>
					</Funnel>
				}
			</MainContainer>
		</>
	);
}
