import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useGetUserList, useGetWinner } from '@/api/main/query';

import { routes } from '@/constants/routes';

import Pagination from '@/components/Pagination/Pagination';
import MainContainer from '@components/MainContainer';

import MainButton from '@/pages/MainPage/components/MainButton';
import MainWinnerBox from '@/pages/MainPage/components/MainWinnerBox';
import UserRankList from '@/pages/MainPage/components/UserRankList';

import logo from '@/assets/images/userLevel/userLevel3.svg';

export default function MainPage() {
	const [page, setPage] = useState(1);
	const [currentKeyword, setCurrentKeyword] = useState('');
	const navigate = useNavigate();

	const { register, getValues, handleSubmit } = useForm();

	const { data: userWinnerData } = useGetWinner();
	const { firstRegionName, firstSchoolName } = userWinnerData?.data || {};

	const { data: userListData } = useGetUserList(page, currentKeyword);
	console.log(userListData);
	const userList = userListData ? userListData.data.userList : [];
	const totalPages = userListData ? userListData.data.totalPages : 0;

	const handle현재페이지변경 = (page) => {
		setPage(page);
	};

	const on검색어입력 = () => {
		const keyword = getValues('keyword', '');
		setCurrentKeyword(keyword);
		setPage(1);
	};

	return (
		<>
			<MainContainer>
				<div className="mt-16 flex w-full flex-col">
					<div className="mx-auto flex w-full flex-row justify-center">
						<div className="flex flex-col items-center justify-start">
							<div>
								<img src={logo} className="h-48 w-48" />
							</div>
							{userWinnerData && <MainWinnerBox schoolWinner={firstSchoolName} regionWinner={firstRegionName} />}
						</div>
						<div className="ml-24 flex flex-row">
							<div className="flex flex-col items-start justify-start">
								<div className="flex flex-col text-7xl font-extrabold">
									<h1 className=" text-primary">
										<span className="text-black19">깃</span>허브에서
									</h1>
									<h1 className="ml-1 mt-8 text-primary">
										<span className="text-black19">발</span>로 뛰자
									</h1>
								</div>
								<div className="ml-2 mt-14 flex flex-col">
									<div className="text-lg font-normal text-primary">
										<p>우리 학교, 우리 지역 깃허브 순위는 ?</p>
									</div>
									<div className="mt-3 flex items-center justify-start gap-2">
										<MainButton
											title="학교 순위"
											onClick={() => {
												navigate(routes.school);
											}}
										/>
										<MainButton
											title="지역 순위"
											onClick={() => {
												navigate(routes.region);
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16">
						<div className="flex flex-col items-center justify-start">
							<p className="text-lg text-primary">깃허브 통계를 통한 개발자 순위를 알아보세요</p>
						</div>
					</div>
					<div className="mt-4">
						<form onSubmit={handleSubmit(on검색어입력)} className="mx-auto flex flex-col items-center justify-start">
							<input
								className="h-16 w-7/12 rounded-xl border border-greyD9 p-4 text-lg shadow-md"
								type="text"
								placeholder="github ID"
								{...register('keyword')}
							/>
						</form>
					</div>
				</div>
				<div className="mt-20 flex flex-col items-center justify-start">
					{userListData && (
						<>
							<UserRankList userList={userList} />
							<Pagination totalPages={totalPages} currentPage={page} onSetCurrentPage={handle현재페이지변경} />
						</>
					)}
				</div>
			</MainContainer>
		</>
	);
}
