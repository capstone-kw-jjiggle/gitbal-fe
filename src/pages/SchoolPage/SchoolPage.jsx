import { useForm } from 'react-hook-form';

import Divider from '@components/Divider';
import MainContainer from '@components/MainContainer';
import { MySchoolCard, SchoolWinnerCard } from '@components/Cards';
import RankTitle from '@components/RankTitle';
import MyProfile from '@components/MyProfile';

import Pagination from '@/pages/SchoolPage/components/Pagination';
import SchoolRankList from '@/pages/SchoolPage/components/SchoolRankList';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetSchoolList, useGetSchoolWinner } from '@/api/school/query';
import { routes } from '@/constants/routes';

export default function SchoolPage() {
	const navigate = useNavigate();

	const { register, getValues, handleSubmit } = useForm();

	// url을 통해서 page 정보 / 검색 keyword 정보를 받아옴
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const page = searchParams.get('page') || '1';
	const keyword = searchParams.get('keyword') || '';

	const { data: schoolWinnerData, isLoading } = useGetSchoolWinner();
	const schoolWinnerInfo = schoolWinnerData ? schoolWinnerData.data : {};

	const { data: schoolRankData } = useGetSchoolList(page, keyword);
	const schoolRankList = schoolRankData ? schoolRankData.data.schoolList : [];
	const totalPages = schoolRankData ? schoolRankData.data.totalPages : 0;

	const handle현재페이지변경 = (page) => {
		searchParams.set('page', page);
		navigate(`${routes.school}?${searchParams.toString()}`, { replace: true });
	};

	const on검색어입력 = () => {
		const keyword = getValues('keyword', '');
		searchParams.set('keyword', keyword);
		searchParams.set('page', '1');
		navigate(`${routes.school}?${searchParams.toString()}`, { replace: true });
	};

	return (
		<>
			<MainContainer className="h-[553px]">
				<div className="mt-8 flex w-full items-start justify-between text-black19">
					<div className="flex w-1/2 flex-col">
						<RankTitle title={'학교 랭킹'} daysLeft={'100'} />
						<MyProfile />
					</div>
					<MySchoolCard />
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
