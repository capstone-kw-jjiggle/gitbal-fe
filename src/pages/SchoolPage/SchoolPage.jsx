import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Divider from '@components/Divider';
import MainContainer from '@components/MainContainer';
import { SchoolWinnerCard } from '@components/Cards';
import RankTitle from '@components/RankTitle';
import MyProfile from '@components/MyProfile';

import Pagination from '@/components/Pagination/Pagination';
import SchoolRankList from '@/pages/SchoolPage/components/SchoolRankList';
import { useGetSchoolList, useGetSchoolWinner, useGetUserSchoolInfo } from '@/api/school/query';
import useAuthStore from '@/stores/authStore';
import { useGetUserInfo } from '@/api/auth/query';
import { DomainInfoCard } from '@/components/Cards/DomainInfoCard';
import getLevelImage from '@/utils/getLevelImage';

export default function SchoolPage() {
	const { isLoggedIn } = useAuthStore();
	const [page, setPage] = useState(1);
	const [currentKeyword, setCurrentKeyword] = useState('');

	const { register, getValues, handleSubmit } = useForm();

	const { data: schoolWinnerData, isLoading } = useGetSchoolWinner();
	const schoolWinnerInfo = schoolWinnerData?.data || {};

	const { data: schoolRankData } = useGetSchoolList(page, currentKeyword);
	const schoolRankList = schoolRankData ? schoolRankData.data.schoolList : [];
	const totalPages = schoolRankData ? schoolRankData.data.totalPages : 0;
	console.log(schoolRankList);

	const { data: userInfoData } = useGetUserInfo({ enabled: isLoggedIn });
	const userInfo = userInfoData?.data || {};

	const { data: userSchoolInfoData } = useGetUserSchoolInfo({ enabled: isLoggedIn });
	const userSchoolInfo = userSchoolInfoData?.data || {};

	const { mySchoolGrade, mySchoolName, mySchoolRank, totalSchoolScore, mvpName, mvpTotalScore } =
		userSchoolInfoData?.data || {};
	const schoolLevelImage = getLevelImage(mySchoolGrade);

	const handle현재페이지변경 = (page) => {
		setPage(page);
	};

	const on검색어입력 = () => {
		const keyword = getValues('keyword', '');
		setCurrentKeyword(keyword);
	};

	return (
		<>
			<MainContainer className="h-[553px]">
				<div className="mt-8 flex w-full items-start justify-between text-black19">
					{isLoggedIn ? (
						<>
							<div className="flex w-1/2 flex-col">
								<RankTitle title={'학교 랭킹'} daysLeft={'100'} />
								{userInfoData && <MyProfile userInfo={userInfo} />}
							</div>
							{userSchoolInfoData && (
								<DomainInfoCard
									title={'학교'}
									domainData={userSchoolInfo}
									mvpName={mvpName}
									mvpTotalScore={mvpTotalScore}
									domainName={mySchoolName}
									domainRank={mySchoolRank}
									totalDomainScore={totalSchoolScore}
									levelImage={schoolLevelImage}
								/>
							)}
						</>
					) : (
						<div>로그인 해주세요</div>
					)}
				</div>
				{isLoading ? <div>로딩중</div> : <SchoolWinnerCard schoolWinnerInfo={schoolWinnerInfo} />}
			</MainContainer>
			<Divider />
			<MainContainer>
				<div className="mb-12 mt-8 flex w-full items-center justify-between ">
					{totalPages ? (
						<Pagination totalPages={totalPages} currentPage={+page} onSetCurrentPage={handle현재페이지변경} />
					) : (
						<span />
					)}
					<div className="w-1/3">
						<form onSubmit={handleSubmit(on검색어입력)}>
							<input
								className="h-12 w-full rounded-lg border-2 border-greyD9 px-4 py-2 text-sm"
								type="text"
								placeholder="github ID"
								{...register('keyword')}
							/>
						</form>
					</div>
				</div>
				{schoolRankList.length === 0 ? (
					<div>해당하는 결과가 없습니다</div>
				) : (
					<SchoolRankList schoolRankList={schoolRankList} />
				)}
			</MainContainer>
		</>
	);
}
