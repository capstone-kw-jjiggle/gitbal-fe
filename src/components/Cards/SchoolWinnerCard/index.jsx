import levelImage6 from '@/assets/images/userLevel/userLevel6.svg';

export const SchoolWinnerCard = ({ schoolWinnerInfo }) => {
	return (
		<>
			<div className="mt-8 flex w-full items-center justify-between rounded-2xl border border-gray-200 px-12 py-6 text-black19 shadow-lg">
				<p className="text-3xl font-extrabold">1위</p>
				<div className="flex w-1/2 ">
					<div className="mt-6 flex w-full flex-col">
						<div className="flex justify-between text-2xl">
							<p className="font-bold">{schoolWinnerInfo.schoolName}</p>
							<p>{schoolWinnerInfo.schoolScore.toLocaleString()}</p>
						</div>
						<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
						<div className="flex justify-end">
							<p>MVP</p>
							<p className="ml-4 text-primary">{schoolWinnerInfo.mvpName}</p>
						</div>
					</div>
				</div>
				<div>
					<p>학교 점수 상승</p>
					<p className="text-green-500">+{schoolWinnerInfo.schoolChangeScore}</p>
				</div>
				<div>
					<img src={levelImage6} className="ml-2 h-20 w-20" />
				</div>
			</div>
			<div className="mb-10 mt-4 flex w-full justify-end text-black19">
				<p>시즌4 보상 칭호 맛꿀마수호자 </p>
			</div>
		</>
	);
};
